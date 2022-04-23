const { getDiscussionCategories } = require(".");

describe.skip("getDiscussionCategories", () => {
  it("should get discussion categories for a repo", async () => {
    const response = await getDiscussionCategories({
      accessToken: process.env.PERSONAL_ACCESS_TOKEN,
      repo: "aquila",
      owner: "OR13",
    });
    expect(response.repository).toBeDefined();
  });
});
