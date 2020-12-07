const express = require('express');
// const mongoose = require('mongoose');

class Transporter{
    Transporter()
    {

    }
    static login(req,res,err){
        res.sendFile("/home/jai/Desktop/semester 5/ooad/project/pages/transporterLogin.html");
    }
}
module.exports = {Transporter}  