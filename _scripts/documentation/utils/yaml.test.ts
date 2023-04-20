import yaml from 'js-yaml'

import {
  getYMLConfiguration,
  parseActionDescription,
  parseInputDescription,
} from './yaml'
import type { YMLConfiguration } from '../types'

jest.mock('js-yaml', () => ({
  load: jest.fn(),
}))

const mockedLoad = yaml.load as jest.Mock<YMLConfiguration>

describe('yaml util', () => {
  describe('getYMLConfiguration', () => {
    it('calls yaml.load', () => {
      const content = '__CONTENT__'
      getYMLConfiguration(content)

      expect(mockedLoad).toHaveBeenCalledTimes(1)
      expect(mockedLoad).toHaveBeenCalledWith(content)
    })

    it('returs parsed content', () => {
      const content: YMLConfiguration = {
        name: '__NAME__',
        description: '__DESC__',
        inputs: {},
        outputs: {},
      }
      mockedLoad.mockReturnValueOnce(content)

      const result = getYMLConfiguration('123')

      expect(result).toEqual(content)
    })
  })

  describe('parseActionDescription', () => {
    let content: YMLConfiguration

    beforeEach(() => {
      content = {
        envInputs: {
          ENV_VARIABLE1: 'description1',
          ENV_VARIABLE2: 'description2',
        },
        name: '__NAME__',
        description: '__DESC__',
        inputs: {},
        outputs: {},
      }
      mockedLoad.mockReturnValueOnce(content)
    })

    describe('when description contains envInputs', () => {
      it('returns information about description and envInputs', () => {
        const information = `
          some description
          ****
          envInputs:
            ENV_VARIABLE1: description1
            ENV_VARIABLE2: description2
            ENV_VARIABLE3: description3
        `

        const result = parseActionDescription(information)

        expect(result.description).toBe('some description')
        expect(result.envInputs).toEqual(content.envInputs)
      })
    })

    describe('when description does not contain envInputs', () => {
      it('returns information only about description', () => {
        const information = 'some description'

        const result = parseActionDescription(information)

        expect(result.description).toBe('some description')
        expect(result.envInputs).toBeNull()
      })
    })
  })

  describe('parseInputDescription', () => {
    describe('when description contains type', () => {
      it('returns information about description and type', () => {
        const information = 'some description || boolean'

        const result = parseInputDescription(information)

        expect(result.description).toBe('some description')
        expect(result.type).toBe('boolean')
      })
    })

    describe('when description does not contain type', () => {
      it('returns information only about description', () => {
        const information = 'some description'

        const result = parseInputDescription(information)

        expect(result.description).toBe('some description')
        expect(result.type).toBeUndefined()
      })
    })
  })
})
