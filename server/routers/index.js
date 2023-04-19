const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const questionRouter = require("./Question");
const answerRouter = require("./Answer");
const commentRouter = require('./Comments')
const userinfoRouter = require('./Userinfo')
router.get("/", (req, res) => {
  res.send("Welcome to Social Community");
});

router.use("/question", questionRouter);
router.use("/answer", answerRouter);
router.use('/comment', commentRouter)
// router.use('/userinfo', userinfoRouter);

module.exports = router;