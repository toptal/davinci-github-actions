const core = require('@actions/core')

try {
  const jsonString = core.getInput('json')
  core.debug(`json: ${jsonString}`)
  const jsonObj = JSON.parse(jsonString)

  for (const key in jsonObj) {
    if (jsonObj.hasOwnProperty(key)) {
      core.setOutput(key, jsonObj[key])
    }
  }
} catch (error) {
  core.setFailed(error.message)
}
