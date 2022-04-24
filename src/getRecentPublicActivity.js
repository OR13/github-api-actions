const { graphql } = require("@octokit/graphql");

const getTextFromRecentPublicActivity = (data) =>{
  let finalText = '';
  data.search.edges.sort((a, b)=>{
      return a.node.mergedAt > b.node.mergedAt ? -1 : 1
  }).forEach((e)=>{
    finalText += `
    "${e.node.title}" was merged on "${e.node.mergedAt}" into "${e.node.repository.nameWithOwner}",
    ${e.node.changedFiles} files where changed, ${e.node.additions} additions where made, ${e.node.deletions} deletions where made.
    `
  })
  return finalText;
}

const getRecentPublicActivity = async (options = {}) => {
  const { accessToken, search, limit, text } = options;
  const data = await graphql({
    query: `
    query topRepos($search: String!, $limit: Int!) {
        search(query: $search, type: ISSUE, first: $limit) {
          issueCount
          edges {
            node {
              ... on PullRequest {
                number
                title
                repository {
                  nameWithOwner
                }
                createdAt
                mergedAt
                url
                changedFiles
                additions
                deletions
              }
            }
          }
        }
    }
  `,
    search,
    limit,
    headers: {
      authorization: `token ${accessToken}`,
    },
  });

  return data

 
};

module.exports = { getRecentPublicActivity, getTextFromRecentPublicActivity };
