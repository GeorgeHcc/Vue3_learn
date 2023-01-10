var express = require('express');
var app = express();
var port=8090;
app.get('/', function(req, res){
  res.send('hello world');
});

app.listen(port,()=>{
  console.log(`your app is runing in http://127.0.0.1:${port}`)
})

