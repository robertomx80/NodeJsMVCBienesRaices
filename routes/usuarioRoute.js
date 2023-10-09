import express from "express";


const router=express.Router();



//Routing
router.get('/',function(req,res) {
    res.send('Hola mundo desde express')
}
)


router.post('/',function(req,res) {
    res.json({"msg":"Respuesta de tipo post"})
}
)


export default router