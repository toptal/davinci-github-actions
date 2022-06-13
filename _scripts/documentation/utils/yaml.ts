import yaml from 'js-yaml'

import { YMLConfiguration } from '../types'

export const getYMLConfiguration = (content: string): YMLConfiguration => {
  return yaml.load(content) as YMLConfiguration
}

export const parseActionDescription = (information: string) => {
  const [description, env] = information.split('****').map(item => item.trim())
  const envInputs = env ? getYMLConfiguration(env) : null

  return {
    description,
    envInputs: envInputs ? envInputs.envInputs : null
  }
}

export const parseInputDescription = (information: string) => {
  const [description, type] = information.split('||').map(item => item.trim())

  return {
    description,
    type
  }
}
