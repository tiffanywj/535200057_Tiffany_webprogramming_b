var express = require ('express')

var app = express()

app.get('/',function(req,res){res.send('Helloworld!')})

app.post('/',function(req,res){res.send('Ini POST Request!')})

app.put('/user',function(req,res){res.send('PUT Request dijalankan!')})

app.delete('/user',function(req,res){res.send('DELETE Request pada suatu user!')})

app.use(express.static('public'));

app.listen(3000)