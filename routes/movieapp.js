var express=require('express');
var router = express();
var request=require('requestify');
var obj=[];
//router.post('/movie', function (req, res) {
// Route path: /users/
// Request URL: http://localhost:3000/users/34/books/8989
router.post('/', function(req,res){
  var data=[]
var name = req.body.name;
  request.get('http://www.omdbapi.com/?t='+name+'&y=&plot=short&r=json').then(function(response) {	// Get the response body
    res.send(response.body);
    res.send(data)
  });

});
router.post('/add',function(req,res){
 var id=req.body.id;
 var name=req.body.name;
 console.log(req.body);
obj.push(req.body);
 res.end("Sucessfully added");

});
// router.delete('/delete/:id',function(req,res){
// var id1=req.params.id;
// obj.splice(obj.indexOf(id1),1);
// res.end("Deleted !!");
//
// });
router.delete('/delete', function(req,res){
  var data=[]
var name = req.body.name;
  request.get('http://www.omdbapi.com/?t='+name+'&y=&plot=short&r=json').then(function(response) {	// Get the response body
  //  res.send(response.body);
  data.splice(data.indexOf(name),1);
    res.send("Deleted");

  });
});
module.exports=router;
