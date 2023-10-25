

const formularioLogin = (req,res)=> {
    res.render('auth/login',{
        pagina:'Iniciar Sesión'
        
    })
}

const formularioRegistro = (req,res)=> {
    res.render('auth/registro',{
        pagina:'Crear Cuenta'
    })
}

const formularioRecuperarPasswsord = (req,res)=> {
    res.render('auth/recuperarPassword',{
        pagina:'Recuperar Password'
    })
}


export {
    formularioLogin,
    formularioRegistro,
    formularioRecuperarPasswsord
}