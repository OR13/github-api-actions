const { graphql } = require("@octokit/graphql");

const getDiscussionCategories = async (options = {}) => {
  const { accessToken, owner, repo } = options;
  const data = await graphql({
    query: `
    query ($owner: String!, $repo: String!) {
      repository(owner: $owner, name: $repo) {
        
        id

        discussionCategories(first: 10) {
          # type: DiscussionCategoryConnection
          nodes {
            # type: DiscussionCategory
            id
            name
          }
        }
      }
    }
  `,
    owner,
    repo,
    headers: {
      authorization: `token ${accessToken}`,
    },
  });
  return data;
};

module.exports = getDiscussionCategories;
