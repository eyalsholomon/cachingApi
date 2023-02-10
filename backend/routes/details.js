const express = require("express");
const router = express.Router();

const qiryatAttaData = require("../data/attackDetails/qiryatAtta")
const qiryatGatData = require("../data/attackDetails/qiryatGat")
const qiryatOnnoData = require("../data/attackDetails/qiryatOnno")
const qiryatEkronData = require("../data/attackDetails/qiryatEkron")

const getDelayTime = require("../delayTime")

router.get("/atta" ,async (req,res) => {
      setTimeout(() => {
        res.send(qiryatAttaData);
      }, getDelayTime())
});

router.get("/gat" ,async (req,res) => {
      setTimeout(() => {
        res.send(qiryatGatData);
      }, getDelayTime())
});

router.get("/onno" ,async (req,res) => {
      setTimeout(() => {
        res.send(qiryatOnnoData);
      }, getDelayTime())
});

router.get("/ekron" ,async (req,res) => {
      setTimeout(() => {
        res.send(qiryatEkronData);
      }, getDelayTime())
});

module.exports = router