const express = require('express');
const router = express.Router()
const {Transporter}=require ('../controller/transporter')
router.get("/transporter/login",Transporter.login)
module.exports = router;