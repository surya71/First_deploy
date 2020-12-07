const express = require('express');
const router = express.Router()
const {Shipper}=require ('../controller/shipper')
router.get("/shipper/login",Shipper.login);
router.get("/shipper/register",Shipper.register);
router.get("/shipper/home",(req,res,next)=>{
    res.sendFile("/home/jai/Desktop/semester 5/ooad/project/pages/indexcustomer.php");
});
router.post("/shipper/login",Shipper.loginAuth);

module.exports = router;