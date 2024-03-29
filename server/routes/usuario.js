const express = require('express');
const app = express();

app.get('/usuario', (req, res)=>{
    res.json('get');
});

app.post('/usuario', (req, res)=>{
    
    let body = req.body;

    if(body.nombre === undefined){ 

        res.status(400).json({
            ok: false,
            message: 'el nombre es necesario'
        })

    }else{
        
         // el body aparece una vez los middlewares se ejecuten y procesen el payload que viene en el cuerpo
        res.json({
            persona:body,
        });
    }


});

app.put('/usuario/:id', (req, res)=>{ 

    let id = req.params.id;

    res.json({
        id,
    });
});

app.delete('/usuario', (req, res)=>{
    res.json('delete');
});

module.exports = app;