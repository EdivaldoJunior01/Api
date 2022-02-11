require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes.js');
const connectToDatabase = require('./database.js')

connectToDatabase();
const cors = require("cors");   

const app = express();
//const port = 3333;

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, ()=>{
    console.log('Backend started at http://localhost:3333');
});
/* app.listen(3333, ()=>{
    console.log("Backend started at http://localhost:3333");
    console.log('Backend started at http://localhost:${port}');
}); */
//GET : BUSCAR INFORMAÇÃO
//POST: CRIAR UMA INFORMAÇÃO
//PUT : EDITAR UMA INFORMAÇÃO POR COMPLETO
//PATCH: MODIFICA APENAS UMA PARTE DA INFORMAÇÃO
//DELETE: DELETAR UMA INFORMÇÃO