//this script trying to encode file to base64 and decoded it again

var fs = require('fs');

var loadBuffer = function(fn){
  fs.readFile('big.jpg',function(err,data){
    if(err) return fn(err,null)
    var encode = data.toString('base64')
    return fn(null,encode)
  })
}

//big file is not a problem
loadBuffer(function(err,data){
  var decode = new Buffer(data,'base64');
  fs.writeFile('out.jpg',decode,function(err){
    if(err) throw err;
  })
})
