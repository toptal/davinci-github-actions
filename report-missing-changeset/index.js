const github = require('@actions/github')

const {
  GITHUB_TOKEN,
  CHANGED_PACKAGES,
  RELEASE_PACKAGES,
  MISSING_PACKAGES,
} = process.env

const main = async (
  octokit,
  { releasePackages, changedPackages, missingPackages }
) => {
  const {
    pull_request: { number: issue_number },
    repository: {
      owner: { login: owner },
      name: repo,
    },
  } = github.context.payload

  console.log('Release packages:', releasePackages)
  console.log('Changed packages:', changedPackages)
  console.log('Missing packages:', missingPackages)

  // If there are no changesets or changed packages, we don't need to report anything
  if (releasePackages.length === 0 || changedPackages.length === 0) {
    return
  }

  const commentPrefix =
    ":warning: Following packages are missing changesets. Please check if they don't require one."

  const comments = await octokit.rest.issues.listComments({
    owner,
    repo,
    issue_number,
  })

  // Find existing comment
  const comment = comments.data.find(({ body }) =>
    body.startsWith(commentPrefix)
  )

  // If there are no missing packages, we can delete the comment
  if (missingPackages.length === 0) {
    if (comment) {
      await octokit.rest.issues.deleteComment({
        owner,
        repo,
        comment_id: comment.id,
      })
    }

    return
  }

  const body = `${commentPrefix}\n\n\`\`\`\n${missingPackages.join(
    '\n'
  )}\n\`\`\``

  if (comment) {
    await octokit.rest.issues.updateComment({
      owner,
      repo,
      comment_id: comment.id,
      body,
    })
  } else {
    await octokit.rest.issues.createComment({
      owner,
      repo,
      issue_number,
      body,
    })
  }
}

main(new github.getOctokit(GITHUB_TOKEN), {
  releasePackages: JSON.parse(RELEASE_PACKAGES),
  changedPackages: JSON.parse(CHANGED_PACKAGES),
  missingPackages: JSON.parse(MISSING_PACKAGES),
}).catch(err => console.error(err.message))
