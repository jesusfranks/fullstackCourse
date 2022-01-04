var express = require("express");
var router = express.Router();
const { Posts } = require("../models");

// GET ALL IN A JSON
router.get("/", async (req, res, next) => {
  try {
    const posts = await Posts.findAll();
    res.json(posts);
  } catch (error) {
    console.log("error", error);
  }
});

//CREATE A NEW POST
router.post("/", async (req, res) => {
  const post = req.body;
  try {
    const bdResponse = await Posts.create(post);
    res.json(bdResponse);
  } catch (error) {
    console.log("error", error);
  }
});

module.exports = router;
