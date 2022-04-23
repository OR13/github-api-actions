const { getDiscussions } = require(".");

describe.skip("getDiscussions", () => {
  it("should get discussions", async () => {
    const response = await getDiscussions({
      accessToken: process.env.PERSONAL_ACCESS_TOKEN,
      repo: "aquila",
      owner: "OR13",
      limit: 10,
    });
    expect(response.repository).toBeDefined();
  });
});
