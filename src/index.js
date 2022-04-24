const createDiscussion = require("./createDiscussion");
const getDiscussionCategories = require("./getDiscussionCategories");
const getDiscussions = require("./getDiscussions");
const { getRecentPublicActivity, getTextFromRecentPublicActivity } = require("./getRecentPublicActivity");




module.exports = {
  getDiscussionCategories,
  getDiscussions,
  createDiscussion,
  getRecentPublicActivity,
  getTextFromRecentPublicActivity
};
