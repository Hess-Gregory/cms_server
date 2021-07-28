import express from 'express';
import middleware from './middleware';
import routes from './routes';

const app = express()



// Charger les route ('controller" -ish)
app.use(middleware)
app.use('/api', routes)

 //Exportation de l'instance app pour test unitaire via supertest
 module.exports = app
