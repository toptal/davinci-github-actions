import fs from 'fs'
import { remark } from 'remark'
import { gfmTableToMarkdown } from 'mdast-util-gfm-table'

import type { YMLConfiguration } from './types'
import remarkGithubActionReadme from './remark-github-action-readme'
import {
  getActionContent,
  getReadmeSourceContent,
  updateReadmeFile,
} from './utils/files'
import { getYMLConfiguration } from './utils/yaml'

const getProcessedReadmeContent = async (
  sourceReadmeContent: string,
  yamlConfig: YMLConfiguration
) => {
  const processedContent = await remark()
    .data('toMarkdownExtensions', [gfmTableToMarkdown()])
    .use(remarkGithubActionReadme, yamlConfig)
    .process(sourceReadmeContent)

  return String(processedContent)
}

const generateReadmeFiles = async () => {
  const rootDir = process.cwd()
  const actionsFolders = fs.readdirSync(rootDir)

  for (const folder of actionsFolders) {
    const actionContent = getActionContent(rootDir, folder)
    if (actionContent) {
      const updatedReadmeContent = await getProcessedReadmeContent(
        getReadmeSourceContent(rootDir, folder),
        getYMLConfiguration(actionContent)
      )
      updateReadmeFile(rootDir, folder, updatedReadmeContent)
    }
  }
}

generateReadmeFiles()
