import express from "express";
import { formularioLogin } from "../controllers/usuarioController.js";
import { formularioRegistro } from "../controllers/usuarioController.js";

const router=express.Router();



//Routing
router.get('/login',formularioLogin)
router.get('/registro',formularioRegistro)


export default router