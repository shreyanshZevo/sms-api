const express = require("express")
const {smsMailer}= require('../controller/smsmailer')
const router = express.Router()

router.post('/sms', smsMailer)

module.exports = router