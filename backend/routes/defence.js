const express = require("express");
const router = express.Router();

const qiryatAttaDomes = require("../data/copperDomesDetails/qiryatAtta")
const qiryatGatDomes = require("../data/copperDomesDetails/qiryatGat")
const qiryatOnnoDomes = require("../data/copperDomesDetails/qiryatOnno")
const qiryatEkronDomes = require("../data/copperDomesDetails/qiryatEkron")

const getDelayTime = require("../delayTime")

router.get("/atta" ,async (req,res) => {
      setTimeout(() => {
        res.send(qiryatAttaDomes);
      }, getDelayTime())
});

router.get("/gat" ,async (req,res) => {
      setTimeout(() => {
        res.send(qiryatGatDomes);
      }, getDelayTime())
});

router.get("/onno" ,async (req,res) => {
      setTimeout(() => {
        res.send(qiryatOnnoDomes);
      }, getDelayTime())
});

router.get("/ekron" ,async (req,res) => {
      setTimeout(() => {
        res.send(qiryatEkronDomes);
      }, getDelayTime())
});

router.post("/activate" ,async (req,res) => {
    res.send()
});

module.exports = router