const exp = require('express');
require('dotenv').config()
const app = exp()
const enrutador = require('./routes/router')

app.use(exp.urlencoded({extendend: false}));
app.use(exp.json());

app.use('/v1', enrutador)

app.listen(process.env.PORT, ()=>{
    console.log(`Servidor en el puerto ${process.env.PORT}`)
})

