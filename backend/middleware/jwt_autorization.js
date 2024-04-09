const express = require('express');

const router = express.Router();

const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')

const dotenv = require('dotenv')
dotenv.config()
const secret = process.env.JWT_KEY
router.use(cookieParser());


const verifyjwt = (req, res, next) => {
    // const token = req.headers["Authorization"]
    const token = req.cookies.token;
    if(!token){
        return res.json('Você não está autenticado')

    } else{
        jwt.verify(token, secret, (err, decoded) =>{
            if(err){
                res.json("Token invalido")

            }else{
                req.usuarioId = decoded.usuarioId
                next()
            }
        })
    }
}

module.exports = verifyjwt