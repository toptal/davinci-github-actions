const core = require('@actions/core')
const execa = require('execa').execa

const getWorkspaces = async () => {
  const { exitCode, stdout } = await execa(
    'yarn',
    [
      'workspaces',
      '--no-default-rc',
      'info'
    ],
    {
      reject: false,
    }
  )

  if (exitCode !== 0) {
    return
  }

  const res = stdout.split('\n').slice(1, -1)

  return JSON.parse(res.join('\n'))
}

const run = async () => {
  try {
    const parallelMatrixInput = core.getInput('parallel-matrix')
    const parallelGroupsInput = parseInt(core.getInput('parallel-groups'))

    const workspaces = await getWorkspaces()
    const isMonorepo = !!workspaces

    console.log(`Your repository is ${isMonorepo ? 'monorepo' : 'SPA'}`)

    core.setOutput('is-monorepo', isMonorepo)

    let groups = workspaces ? Object.entries(workspaces) : [['default', { location: '.' }]]

    // custom matrix
    if (parallelMatrixInput) {
      const parallelMatrix = JSON.parse(parallelMatrixInput)

      if (!Array.isArray(parallelMatrix)) {
        throw new Error('"parallel-matrix" input must be an array')
      }

      groups = parallelMatrix.map(({ pkg, location, parallelGroups }) => [
        pkg,
        { location, parallelGroups }
      ])
    }

    console.log('Creating parallel matrix...')

    const matrix = groups.reduce((acc, [pkg, { location, parallelGroups }]) => {
      const groupsTotal = parallelGroups || parallelGroupsInput

      Array(groupsTotal).fill().forEach((_, index) => acc.push({
        pkg,
        location,
        index,
        total: groupsTotal,
      }))

      return acc
    }, [])

    core.setOutput('matrix', matrix)

    console.log('Done.')

  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
