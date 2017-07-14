const express = require('express');
const app = express();

app.listen(3000)
console.log('Server Started By Rhxelj!')

app.get('/rogelio',function(req,res){
    res.send('Hello Rogelio!!!!')
})

app.get('/hola',function(req,res){
    res.send('Otra ruta distinta')
})
app.get('*',function(req,res){
    res.send('Lo sietno RUTA no encontrada!')
})
app.post('/pst',function(req,res){
    res.send('Otra ruta distinta pero con POST')
})
