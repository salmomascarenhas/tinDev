const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

mongoose.connect('mongodb+srv://dbUser:dbUser@cluster0-shnsk.mongodb.net/tindev?retryWrites=true&w=majority',
    { useNewUrlParser: true });

const server = express();


server.use(cors());
server.use(express.json());
server.use(routes);

//GET: Busca algo na API.
// POST: Criar algum registro ou entidade na API.
// PUT: Editar algo na API.
// DELETE: Para deletar algo na API.


server.listen(3333);