import express from 'express'
import body from 'body-parser'
import {router} from './routers/router.js'

const app = express()
const port = process.env.port || 3000

export default class ServerHttp {

    middleware(){
        app.use(body.json());
    }

    routers(){
        app.use('/api/v1', router);
        app.get('/', (req, res) => res.redirect("/api"));
    }

    createServer(){
        this.middleware();
        this.routers();

        console.log('server rodando ...');
        app.listen(port, () => console.log(`rodando: http://localhost:${port}/api/v1`));
    }
}
