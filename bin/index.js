import ServerHttp from '../server/index.js';
import Application from  './application.js';

class Program extends Application {

    constructor(){
        super();
        let server = new ServerHttp();
        server.createServer();
    }
}

// Inicialização do Program
let app = new Program();
