const express = require('express');
const mongoose =  require('mongoose');
const routes = require('./routes')

const app = express();

mongoose.connect('mongodb+srv://gustavo:pARgd1dmJ89Y5qlA@cluster0-scpfh.mongodb.net/test?retryWrites=true&w=majority',
 {useNewUrlParser: true,
  useUnifiedTopology: true }
 );

 app.use(express.json());
 app.use(routes);

app.listen(3001, console.log("Rodando na porta 3001"));