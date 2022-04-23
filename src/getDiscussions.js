const { graphql } = require("@octokit/graphql");

const getDiscussions = async (options = {}) => {
  const { accessToken, owner, repo, limit } = options;
  const data = await graphql({
    query: `
    query ($owner: String!, $repo: String!, $limit: Int!) {
      repository(owner: $owner, name: $repo) {
        discussions(first: $limit) {
          # type: DiscussionConnection
          nodes {
            # type: Discussion
            id
            author { url }
            body
          }
        }
      }
    }
  `,
    owner,
    repo,
    limit,
    headers: {
      authorization: `token ${accessToken}`,
    },
  });
  return data;
};

module.exports = getDiscussions;
