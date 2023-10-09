//const express = require ('express')
import express from 'express'
import usuarioRoutes from './routes/usuarioRoute.js';

//Crear la app
const app = express()


//Habilitar pug
app.set('view engine','pug')
app.set('views','./views')


app.use('/auth',usuarioRoutes);

//Definir puerto e iniciar el servidor
const port = 3000




app.listen(port, ()=>{
    console.log('El servidor está escuchando en el puerto 3000')
});




