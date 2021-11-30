import { Router } from 'express';
import librosController from '../controllers/librosController';
class LibrosRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config():void {
        this.router.get('/', librosController.list);
        this.router.get('/:id', librosController.getOne);
        this.router.post('/', librosController.create);
        this.router.put('/:id', librosController.update)
        this.router.delete('/:id', librosController.delete)
    }
}

const librosRoutes = new LibrosRoutes();
export default librosRoutes.router;