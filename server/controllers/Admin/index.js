const { Controller } = require('..')

exports.ControllerAdmin = class ControllerAdmin extends Controller {

    constructor(method){   
        super(method)
    }

    index(req, res){
        this.OK(res, 'index');
    }

}

