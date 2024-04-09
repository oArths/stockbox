const express = require('express');

const router = express.Router();

const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')

const dotenv = require('dotenv')
dotenv.config()
const secret = process.env.JWT_KEY
router.use(cookieParser());

const gestorOnly = (req, res, next) => {
    const { usuarioId, fk_cargoId } = req.body

    if(!usuarioId) res.status(404).json({msg: "Usuario não existe"});
    if(fk_cargoId =! 2) res.status(404).json({msg: "Usuario inválido"});
    next()

}
const auxiliarOnly = (req, res, next) => {
    const { usuarioId, fk_cargoId } = req.body
    
    if(!usuarioId) res.status(404).json({msg: "Usuario não existe"});
    if(fk_cargoId =! 1) res.status(404).json({msg: "Usuario inválido"});
    next()

}
const solicitanteOnly = (req, res, next) => {
    const { usuarioId, fk_cargoId } = req.body

    if(!usuarioId) res.status(404).json({msg: "Usuario não existe"});
    if(fk_cargoId =! 3) res.status(404).json({msg: "Usuario inválido"});
    next()

}

module.exports = solicitanteOnly
// module.exports = gestorOnly, auxiliarOnly, solicitanteOnly