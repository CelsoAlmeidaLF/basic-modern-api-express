
import Controller from './index.js'

export default class ControllerAdmin extends Controller {
    
    index(req, res){
        res.json({
            mensagem:"Admin"
        });
    }
    
}