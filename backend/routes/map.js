const express = require("express");
const router = express.Router();

const mapTargets = require("../data/map/mapTargets")

const getDelayTime = require("../delayTime")

router.get("/targets" ,async (req,res) => {
      setTimeout(() => {
        res.send(mapTargets);
      }, getDelayTime())
});

module.exports = router