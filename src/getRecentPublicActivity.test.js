const { getRecentPublicActivity } = require(".");

jest.setTimeout(10 * 1000);

describe.skip("getRecentPublicActivity", () => {
  it("should get recent public activity", async () => {
    const response = await getRecentPublicActivity({
      accessToken: process.env.PERSONAL_ACCESS_TOKEN,
      search: "is:merged is:pr is:public archived:false author:OR13 -user:OR13",
      limit: 10,
    });
    expect(response.search).toBeDefined();
  });
});
