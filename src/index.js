const express = require ('express');
const cors = require('cors');
//chama o framework express
const routes = require('./routes');
//exporta rotas
//../ volta uma pasta ./ referencia a msm pasta que index esta
const app = express();
app.use(cors());

app.use(express.json());
app.use(routes);
//deve ser semrpe abaixo do json
//instancia a aplicação
//define uma várivel constante chamada app para carregar framwork express
//rotas
//get busca informação do backend
//post cria uma ifnromação no backend
// put altera uma informação no backned
//delete deletar uma informaçãp no backend




app.listen(3333);
//a aplicação está ouvindo a porta 3333
// váriavel app carrega framework express está ouvindo a porta 3333