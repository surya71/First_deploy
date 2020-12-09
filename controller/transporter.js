const express = require('express');
// const mongoose = require('mongoose');
const path = require('path');
class Transporter{
    Transporter()
    {

    }
    static login(req,res,err){
        res.sendFile(path.join(process.cwd(),"pages/transporterLogin.html"));
    }
}
module.exports = {Transporter}  