const { Router } = require("express");
const router = Router();
const phones = require("../db.json");

router.get("/", (req, res) => {
  res.json(phones);
});

module.exports = router;
