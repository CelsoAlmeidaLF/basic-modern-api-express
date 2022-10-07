const express = require('express')
const app = express()
const router = require('./router')
const body = require('body-parser')
const port = process.env.port || 3000

exports.ServerHttp = class ServerHttp {

    middleware(){
        app.use(body.json());
        this.router();
    }

    router(){
        app.use('/api', router);
        app.get('/', (req, res) => res.redirect("/api"));
    }

    createServer(){
        this.middleware();
        console.log('server rodando ...');
        app.listen(port, () => console.log(`rodando: http://localhost:${port}/api`));
    }
}
