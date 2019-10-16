require('./config/config');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); // para conectar la base de datos


app.use(require('./routes/usuario'));

app.use(bodyParser.urlencoded({extended:true})); // son moddlewares y siempre se ejecuta cuando pasa el flujo
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/cafe', (err, res)=>{
 
if(err) throw err;

console.log('base de datos ONLINE');

});
 

app.listen(process.env.PORT, ()=>{
    console.log('escuchando en el puerto', process.env.PORT);
});