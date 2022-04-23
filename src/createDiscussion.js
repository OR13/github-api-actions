const { graphql } = require("@octokit/graphql");

const getDiscussionCategories = require("./getDiscussionCategories");

const createDiscussion = async (options = {}) => {
  const { accessToken, owner, repo, category, body, title } = options;
  const discussionCategorgies = await getDiscussionCategories({
    accessToken,
    owner,
    repo,
  });
  const repositoryId = discussionCategorgies.repository.id;
  const categoryId =
    discussionCategorgies.repository.discussionCategories.nodes.find((n) => {
      return n.name === category;
    }).id;
  const data = await graphql({
    query: `
    mutation ($repositoryId: ID!, $categoryId: ID!, $body: String!, $title: String!) {
      createDiscussion(input: {repositoryId: $repositoryId, categoryId: $categoryId, body: $body, title: $title}) {
        discussion {
          title
          url
        }
      }
    }
  `,
    repositoryId,
    categoryId,
    body,
    title,
    headers: {
      authorization: `token ${accessToken}`,
    },
  });
  return data;
};

module.exports = createDiscussion;
