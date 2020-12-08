const express = require('express');
const session = require('express-session');
const app = express();
const bodyparser = require('body-parser');
const router = require('./router');
const path = require('path');
var count =0;
app.use(express.static('./images'));
app.use(session({
    secret:'why_so_serious',
    resave:true,
    saveUninitialized:true
}))
app.use(bodyparser.json());
app.get('/',(req,res)=>{
    console.log("Hello OOAD");
    count = req.session.name;
    req.session.name = count+1;
    console.log(req.session.name);
    res.sendFile(path.join(__dirname, "pages/home.html"));
})
app.get('/aboutUs',(req,res)=>{
    console.log("about us");
    console.log(req.session.name);
    res.sendFile(path.join(__dirname, "pages/aboutUs.html"));
});
app.get('/contactUs',(req,res)=>{
    console.log("contact us");
    console.log(req.session.name);
    res.sendFile(path.join(__dirname, "pages/contactUs.html"));
})
app.use('/',router);
app.listen(process.env.PORT||8000);