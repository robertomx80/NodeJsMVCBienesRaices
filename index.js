//const express = require ('express')
import express from 'express'
import usuarioRoutes from './routes/usuarioRoute.js';

//Crear la app
const app = express()

app.use('/',usuarioRoutes);

//Definir puerto e iniciar el servidor
const port = 3000

app.listen(port, ()=>{
    console.log('El servidor está escuchando en el puerto 3000')
});




