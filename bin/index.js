
// Server Layer
const { ServerHttp } = require('../server')

// Init Program
class Program {

    constructor(){
        console.log("config ...");
        this.server = new ServerHttp();
        this.server.createServer();
    }

}

// Inicialização do Program
let app = new Program();