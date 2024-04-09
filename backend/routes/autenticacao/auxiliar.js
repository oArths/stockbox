// URL base da categoria: http://localhost:3000/categoria/
/*
Modelo de inserção de dados para teste no postman: 

{
    "name": "microfone"
}
*/

const express = require('express');

const router = express.Router();

const createDBConnection = require('../../db')
const db = createDBConnection() 



router.post('/', (req, res) => {
    const{usuarioId} = req.query

    if(!nome){
        return res.status(400).json({message: 'Todos os campos são obrigatórios!'})
    }

    const categoriaPattern = /^[A-Z][a-zà-ú ]*$/; // regex para que apenas a primeira letra da sentença seja maiuscula

    if (!nome.match(categoriaPattern)) {
        return res.status(400).json({ message: 'O nome da categoria deve ter apenas a primeira letra da sentença maiuscula' })
    }
    

    const validationCategoria = "SELECT COUNT(*) AS count FROM categoria WHERE nome = ?";
    db.query(validationCategoria, [nome], (err, result) => {
        if (err) {
             return res.status(500).json({ error: err.message });
         }
        const categoriaExists = result[0].count > 0;
            if (categoriaExists) {
                return res.status(400).json({ message: 'Esta categoria já está cadastrada' });
            }


        const sql = "INSERT INTO categoria (`nome`) VALUES (?)";
        const values = [nome];
    
        db.query(sql, values, (err, data) => {
        // db.query(inserirCategoria, values, (err, data) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            else{
                res.status(201).json({message: 'Dados inseridos no sistema com sucesso'}) 
            }
            // res.status(201).json(data);
        });
    });
});

router.get('/', (req, res) => {
    const sql = "SELECT categoriaId, nome FROM categoria";
    const values = [req.body.categoriaId, req.body.nome];
    
        db.query(sql, values, (err, data) => {
        // db.query(dadosCategoria, values, (err, data) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            else{
                res.status(201).json(data);
            }
            // res.status(201).json(data);
        });
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
        const sql = "SELECT categoriaId, nome FROM categoria WHERE categoriaId = ?";
        const values = [id];
     
        db.query(sql, values, (err, data) => {
        // db.query(idCategoria, values, (err, data) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            if (data.length === 0) {
                return res.status(404).json({ message: 'Categoria não encontrada' });
            }
            res.status(200).json(data[0]);
        });
});

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const{ nome } = req.body

    if(!nome){
        return res.status(400).json({message: 'Todos os campos são obrigatórios!'})
    }
    const categoriaPattern = /^[A-Z][a-zà-ú ]*$/; // regex para que apenas a primeira letra da sentença seja maiuscula

    if (!nome.match(categoriaPattern)) {
        return res.status(400).json({ message: 'O nome da categoria deve ter apenas a primeira letra da sentença maiuscula' })
    }
    
    
    const sql = "UPDATE categoria SET nome = ? WHERE categoriaId = ?";
    const values = [nome, id];
     
        db.query(sql, values, (err, data) => {
        // db.query(atualizarCategoria, values, (err, data) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            if (data.length === 0) {
                return res.status(404).json({ message: 'Categoria não encontrada' });
            }
            res.status(200).json({message: 'Dados atualizados do sistema com sucesso'});
        });
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
        const sql = "DELETE FROM categoria WHERE categoriaId = ?";
        const values = [id];
         
        db.query(sql, values, (err, data) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            if (data.length === 0) {
                return res.status(404).json({ message: 'Categoria não encontrada' });
            }
            res.status(200).json({message: 'Dados deletados do sistema com sucesso'});
            });
        });
 
module.exports = router;