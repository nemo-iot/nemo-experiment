var fs = require('fs');

var loadBuffer = function(fn){
  fs.readFile('coral.jpg',function(err,data){
    if(err) return fn(err,null)
    var encode = data.toString('base64')
    return fn(null,encode)
  })
}

loadBuffer(function(err,data){
  var decode = new Buffer(data,'base64');
  fs.writeFile('out.jpg',decode,function(err){
    if(err) throw err;
  })
})
