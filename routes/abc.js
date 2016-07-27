var express=require('express');
var router = express();

router.get('/', function (req, res) {
   res.send('Hello World');
})
router.delete('/del', function (req, res) {
  res.send('DELETE request to homepage');
});
module.exports=router;
