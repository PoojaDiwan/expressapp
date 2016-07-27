var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var fdata = {};
var User = require('../mongo1');
mongoose.connect('mongodb://localhost/mydatabase')
var db = mongoose.connection;
router.get('/',function (req, res) {
  db.on("error",console.error.bind(console,"Connection Error:"));
  db.open('open',function(){
    User.find({age:89},function(err,data){
      fdata = data;
    });
    res.send(fdata);
  });
});
module.exports=router;
