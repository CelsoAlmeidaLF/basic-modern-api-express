
exports.Controller = class Controller {

    constructor(){   
    }

    OK(res, msg){
        return res.json(msg);
    }
}   