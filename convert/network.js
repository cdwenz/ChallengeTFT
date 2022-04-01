const router = require("express").Router();
const pair = require("./controller");
const dateString = require("../dateString/dateString");

router.get("/", (req, res) => {
  res.json("Welcome to the API for currency conversion");
});

router.get("/lastest", async (req, res) => {
  let data = await dateString();
  data = await data.data;
  res.json(data);
});

router.get("/pair", async (req, res) => {
  const { value, primary, secondary } = req.body;
  const result = await pair(value, primary, secondary);
  res.json(result);
});

module.exports = router;
