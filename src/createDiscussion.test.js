const { createDiscussion } = require(".");

describe.skip("createDiscussion", () => {
  it("should create a discussion", async () => {
    const response = await createDiscussion({
      accessToken: process.env.PERSONAL_ACCESS_TOKEN,
      owner: "OR13",
      repo: "aquila",
      category: "Announcements",
      title: "hello 2",
      body: "hello from the command liiiiiiiiiine!!!!",
    });
    expect(response.createDiscussion).toBeDefined();
  });
});
