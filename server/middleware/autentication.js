import CAS from '../modules/atentication.js'

export default class MiddlewareAutentication {

    Autentication(req, res, next){

        let authheader = req.headers.authorization;
        let _cas = new CAS(authheader);
        
        // consulta base.
        let casBase64 = _cas.authCAS();

        // convert base64 em array
        let auth = _cas.convertBase64(_cas.base64);  

        // valida autenticação.
        if(_cas.Equals(casBase64)){
            next()
        }
        else{
            res.status(400).json({ERROR: "Error de login"})
        }
     }
}