const express = require("express");
const router = express.Router();

const aiService = require("../services/aiService");

router.get("/status", async (req, res) => {
  const status = await aiService.getStatus();
  res.json(status);
});

router.post("/task", async (req, res) => {
  const { task, data } = req.body;

  const result = await aiService.executeTask(task, data);

  res.json(result);
});

module.exports = router;
