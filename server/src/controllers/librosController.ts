import { Request, Response} from 'express';

import pool from '../database';

class LibrosController{
    public async list (req: Request, res: Response) {
        const libros = await pool.query('SELECT * FROM libros');
       res.json(libros);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const libros = await pool.query('SELECT * FROM libros WHERE clave = ?', [id]);
        if(libros.length > 0){
            return res.json(libros[0]); 
        }
        res.status(404).json({text: "The game doesn't exist"});

    }

    public async create (req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO libros set ?', [req.body]);
        res.json({message: 'Libro guardado'});
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM libros WHERE clave = ?', [id]);
        res.json({message: 'El libro fue eliminada'});
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE libros set ? WHERE clave = ?', [req.body, id]);
        res.json({message: 'El libro fue actualizada'});
    }
}

const librosController = new LibrosController();
export default librosController;