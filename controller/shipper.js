const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/logistics',{ useUnifiedTopology: true , useNewUrlParser: true });
const db = mongoose.connection;

class Shipper{
    Shipper()
    {

    }
    static login(req,res,err){
        res.sendFile("/home/jai/Desktop/semester 5/ooad/project/pages/shipperLogin.html");
    }
    static loginAuth(req,res,next){
        console.log(req.body)
        console.log(db.collections)
    }
    static register(req,res,next){
        res.sendFile("/home/jai/Desktop/semester 5/ooad/project/pages/shipperRegister.html")
    }
}
module.exports = {Shipper} ;