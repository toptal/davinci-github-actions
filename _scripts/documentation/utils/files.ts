import path from 'path'
import fs from 'fs'

import { ACTION_FILENAME, README_FILENAME } from '../constants'

export const getActionContent = (rootDir: string, folder: string) => {
  const actionFilePath = path.join(rootDir, folder, ACTION_FILENAME)
  if (fs.existsSync(actionFilePath)) {
    return fs.readFileSync(actionFilePath, 'utf8')
  }

  return null
}

export const getActionReadmeFilePath = (rootDir: string, folder: string) => {
  return path.join(rootDir, folder, README_FILENAME)
}

export const getReadmeTemplateFilePath = (rootDir: string) => {
  return path.join(rootDir, '_scripts/documentation/', README_FILENAME)
}

export const getReadmeSourceContent = (rootDir: string, folder: string) => {
  const existingReadmeFilePath = getActionReadmeFilePath(rootDir, folder)
  const sourceReadmeFilePath = fs.existsSync(existingReadmeFilePath)
    ? existingReadmeFilePath
    : getReadmeTemplateFilePath(rootDir)

  return fs.readFileSync(sourceReadmeFilePath, 'utf8')
}

export const updateReadmeFile = (
  rootDir: string,
  folder: string,
  content: string
) => {
  fs.writeFileSync(getActionReadmeFilePath(rootDir, folder), content, {
    encoding: 'utf8'
  })
}
