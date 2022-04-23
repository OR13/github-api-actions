const core = require("@actions/core");

const lib = require("./src");

const getOpts = () => {
  return {
    accessToken: core.getInput("access-token"),
    owner: core.getInput("owner"),
    repo: core.getInput("repo"),
    category: core.getInput("category"),
    title: core.getInput("title"),
    body: core.getInput("body"),
  };
};

async function run() {
  try {
    const opts = getOpts();
    if (opts.accessToken && opts.title && opts.body) {
      const response = await lib.createDiscussion(opts);
      core.setOutput("json", JSON.stringify(response));
      core.setOutput("text", response.createDiscussion.discussion.url);
    }
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
