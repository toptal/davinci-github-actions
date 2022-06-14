const fs = require('fs')

const infoFilePath = process.env.INFO_PATH
const changedFilesPath = process.env.CHANGED_FILES_PATH

/**
 * This script uses two sources of information:
 *  1) infoFile
 *     The workspace declaration, output of the yarn 1 `yarn workspaces info`.
 *     It includes information about all the packages, their location and dependencies.
 *
 *  2) changedFiles
 *     The list of the modified files.
 */

const info = JSON.parse(fs.readFileSync(infoFilePath).toString())
const changedFiles = JSON.parse(fs.readFileSync(changedFilesPath).toString())

const dependents = {}

/**
 * Map each modified file to their package
 */
const changedPackages = changedFiles
  .map(file => {
    for (let packageName in info) {
      if (file.startsWith(info[packageName].location)) {
        return packageName
      }
    }

    return false
  })
  .filter(Boolean)

const highlights = [...new Set(changedPackages)]

/**
 * Reverse the dependency tree from the info file for easy access to the dependent packages.
 */
for (let packageName in info) {
  const package = info[packageName]

  for (let dependency of package.workspaceDependencies) {
    dependents[dependency] = dependents[dependency] || []
    dependents[dependency].push(packageName)
  }
}

/**
 * Compile a list of packages directly or indirectly depending on the modified packages
 */
function getDependents(packageName, ancestors = []) {
  const list = dependents[packageName] || []

  // Detect a cycle and bail
  if (ancestors.includes(packageName)) {
    return []
  }

  return [
    ...list,
    ...list.map(dependentName => getDependents(dependentName, [...ancestors, packageName])).flat()
  ]
}

const includeList = [
  ...new Set([
    ...highlights,
    ...highlights.map(packageName => getDependents(packageName)).flat()
  ])
]

/**
 * Build a graph of packages for the report.
 * Filter out all the packages that are not affected by the modified file.
 */
const packages = Object.keys(info)
const root = { name: 'root', values: [], nodes: {} }
const links = []

const getId = package => packages.indexOf(package)

const getGroup = package => {
  const location = info[package].location

  if (location.startsWith('namespaces/')) {
    const fragments = location.split('/')
    return [`${fragments[1]} (namespace)`, fragments[2]]
  }

  if (location.startsWith('libs/')) {
    return ['libs (root)']
  }

  if (location.startsWith('hosts/')) {
    return ['hosts']
  }

  return []
}

const isIncluded = packageName => includeList.includes(packageName)

const assignNode = (node, paths, content) => {
  if (!paths || paths.length === 0) {
    node.values.push(content)
    return
  }

  const [step, ...rest] = paths
  node.nodes[step] = node.nodes[step] || { values: [], nodes: {}, name: step }

  assignNode(node.nodes[step], rest, content)
}

for (let package of packages) {
  if (isIncluded(package)) {
    const paths = getGroup(package)
    const color = highlights.includes(package) ? ':::highlighted' : ''
    assignNode(root, paths, `    ${getId(package)}["${package}"]${color}`)
  }

  for (let dependency of info[package].workspaceDependencies) {
    if (!isIncluded(dependency)) {
      continue
    }

    links.push(`    ${getId(package)} --> ${getId(dependency)}`)
  }
}

/**
 * Render the markdown report including inlined mermaid diagram
 */

const printNode = node => {
  let res = ''

  if (node.name !== 'root') {
    res += `    subgraph "${node.name}"\n`
  }

  res += node.values.join('\n') + '\n'
  for (const childNode in node.nodes) {
    res += printNode(node.nodes[childNode])
  }

  if (node.name !== 'root') {
    res += `    end\n`
  }

  return res
}

let output = ''

output += 'graph LR\n'
output += '    classDef highlighted fill:#f9f,stroke:#333,stroke-width:4px;\n'

output += printNode(root)

output += links.join('\n') + '\n'

console.log('```mermaid')
console.log(output)
console.log('```')
