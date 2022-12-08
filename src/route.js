const express = require('express');
const router = express.Router();
const coinController=require("./coinController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.get("/coins",coinController.getCoins)
module.exports = router;   