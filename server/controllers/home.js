import { format } from 'date-fns';
import {v4} from 'uuid';

export default class ControllerHome {
    index(req, res, next){

            let date = `${format(new Date(), 'yyyy-MM-dd HH:mm:ss')}`;

            let api = {
                id:v4(),
                dtConsulta:date, 
                mensagem:"index", 
                status:200
            };

        res.json(api);
    }
}