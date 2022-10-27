import express from 'express';
import body from 'body-parser';
import ControllerHome from './controllers/home.js';
import MiddlewareAutentication from '../middleware/autentication.js';
import router from './routes/router.js';

const app = express();
const port = process.env.port || 3000;

export default class ServerHttp {

    constructor(){
        console.log('server rodando ...');
        this.autentic = new MiddlewareAutentication();
        this.home = new ControllerHome();
    }

    middleware(){
        app.use(body.json());
        app.use(this.autentic.Autentication);
    }

    routers(){
        app.use('/api/v1', router);
    }

    papeline(){
        this.middleware();
        this.routers();     
    }

    createServer(){ 
        this.papeline();
        app.listen(port, () => console.log(`rodando: http://localhost:${port}/api/v1`));
    }

}