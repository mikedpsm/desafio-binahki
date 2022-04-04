const express = require("express");
const timer = require("../controllers/timerController");

const router = express();

router.get("/timer", timer.getTimers);
router.post("/timer", timer.postTimer);

module.exports = router;
