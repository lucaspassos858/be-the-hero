const express = require('express');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);  
/**
 * Rota / Recurso
 */

/**
 * Requisições HTTP:
 * 
 * GET > Buscar/Listar informações do back-end
 * POST > Cria a informação no back-end
 * PUT > Alterar informação no back-end
 * DELETE > Deletar informação no back-end
 */


 /**
  * Tipos de parâmetros:
  * 
  * Query Params: Parâmetros nomeados enviados na rota após "?" (filtros , paginação)
  * Route Params: Parâmetros utilizados para identificar recursos
  * Request Body: Corpo da requisião, utilizado para criar ou alterar recursos
  */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */

app.listen(3333);