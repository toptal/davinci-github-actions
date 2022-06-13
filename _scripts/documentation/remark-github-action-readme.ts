import { Plugin } from 'unified'
import { headingRange, Node } from 'mdast-util-heading-range'
import { Heading } from 'mdast'
import {
  heading,
  inlineCode,
  paragraph,
  table,
  tableCell,
  tableRow,
  text
} from 'mdast-builder'
import { fromMarkdown } from 'mdast-util-from-markdown'

import { YMLConfiguration } from './types'
import { parseActionDescription, parseInputDescription } from './utils/yaml'

const buildTable = (headers: string[], rows: any[][]) => {
  return table(
    [null],
    [
      tableRow(headers.map(header => tableCell(text(header)))),
      ...rows.map(row =>
        tableRow(
          row.map(column =>
            tableCell(
              typeof column === 'object' ? column : fromMarkdown(column)
            )
          )
        )
      )
    ]
  )
}

type InjectionOptions = {
  subtitle?: string
  emptyMessage?: string
}

const injectTableToSection = (
  tree: Node,
  sectionName: string,
  tableHeaders: string[],
  rows: (string | Node)[][],
  options: InjectionOptions = {}
) => {
  headingRange(tree, sectionName, (start, nodes, end) => [
    start,
    !rows.length
      ? paragraph(text('Not specified'))
      : paragraph([
          paragraph(text(options.subtitle || '')),
          buildTable(tableHeaders, rows)
        ]),
    end
  ])
}

/**
 * Plugin to generate a README documentation for GH Action
 */
const remarkGithubActionReadme: Plugin<
  YMLConfiguration[],
  Node
> = yamlContent => {
  return (tree: Node) => {
    const { description, envInputs } = parseActionDescription(
      yamlContent.description
    )
    const isTitle = (value: string, node: Heading) => {
      return node.type === 'heading' && node.depth === 2
    }

    // inject title and description under the Title section
    headingRange(tree, isTitle, (start, nodes, end) => {
      const filteredNodes = nodes.slice(
        nodes.findIndex(({ type }) => type === 'heading'),
        nodes.length
      )
      return [
        heading(2, [text(yamlContent.name)]),
        paragraph(fromMarkdown(description)),
        ...filteredNodes,
        end
      ]
    })

    // inject `Inputs` table
    const inputs = Object.keys(yamlContent.inputs || {}).map<(string | Node)[]>(
      inputKey => {
        const input = yamlContent.inputs[inputKey]
        const { description, type } = parseInputDescription(input.description)
        return [
          inlineCode(inputKey) as Node,
          type || 'string',
          input.required ? '✅' : '',
          input.default || '',
          description
        ]
      }
    )
    injectTableToSection(
      tree,
      'Inputs',
      ['name', 'type', 'required', 'default', 'description'],
      inputs,
      {
        subtitle: 'The list of arguments, that are used in GH Action:\n\n'
      }
    )

    // inject `Outputs` table
    const outputs = Object.keys(yamlContent.outputs || {}).map<
      (string | Node)[]
    >(outputsKey => {
      const output = yamlContent.outputs[outputsKey]
      const { description, type } = parseInputDescription(output.description)
      return [inlineCode(outputsKey) as Node, type || 'string', description]
    })
    injectTableToSection(
      tree,
      'Outputs',
      ['name', 'type', 'description'],
      outputs,
      {
        subtitle: 'The list of variables, that are returned by GH Action:\n\n'
      }
    )

    // inject `ENV Variables` table
    const env = Object.keys(envInputs || {}).map(envKey => [
      inlineCode(envKey) as Node,
      envInputs![envKey]
    ])
    injectTableToSection(tree, 'ENV Variables', ['name', 'description'], env, {
      subtitle:
        'All ENV Variables, defined in a GH Workflow are also passed to a GH Action. It means, the might be reused as is.\n' +
        'This is a list of ENV Variables that are used in GH Action:\n\n'
    })
  }
}

export default remarkGithubActionReadme
