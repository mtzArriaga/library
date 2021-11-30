import { Request, Response} from 'express';
import pool from '../database';
class CategoriasController{
    public async list (req: Request, res: Response) {
        const categorias = await pool.query('SELECT * FROM categoria');
       res.json(categorias);
    }

    public async getOne(req: Request, res: Response): Promise<any>{
        const { id } = req.params;
        const categorias = await pool.query('SELECT * FROM categoria WHERE idcategorias = ?', [id]);
        if(categorias.length > 0){
            return res.json(categorias[0]); 
        }
        res.status(404).json({text: "The game doesn't exist"});
    }

    public async create (req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO categoria set ?', [req.body]);
        res.json({message: 'Categoria guardada'});
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM categoria WHERE idcategorias = ?', [id]);
        res.json({message: 'La categoria fue eliminada'});
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE categoria set ? WHERE idcategorias = ?', [req.body, id]);
        res.json({message: 'La categoria fue actualizada'});
    }

}

const categoriasController = new CategoriasController();
export default categoriasController;