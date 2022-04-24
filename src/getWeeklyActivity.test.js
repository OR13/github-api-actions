const { getWeeklyActivity } = require(".");

jest.setTimeout(10 * 1000);

describe.skip("getWeeklyActivity", () => {
  it("should get discussions", async () => {
    const response = await getWeeklyActivity({
      accessToken: process.env.PERSONAL_ACCESS_TOKEN,
      search: "is:merged is:pr is:public archived:false author:OR13 -user:OR13",
      limit: 10,
      text: true
    });
    console.log(response)
    // expect(response.repository).toBeDefined();
  });
});
