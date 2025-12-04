import express from 'express';     //Esto es una importación

import dbConnection from './config/mongo.config.js';
import usersRoute from './routes/users.route.js';
import realStateRoute from './routes/realState.route.js';

const app = express();                        // Invocando core Express
const PORT = 3000;                            // Definiendo el puerto de escucha
dbConnection();                               // Ejecuta la conexión a la base de datos

app.get ("/health", (req, res) => {
    res.json({
        path: '/health',
        msg: 'Welcome to Quintas Colombia'
    });
});

//Middlewares Express
app.use( express.json ());      //Middlewares para parsear JSON.
app.use( '/api/v1/users', usersRoute );
app.use( '/api/v1/real-state', realStateRoute );


// Lanzando el servidor web usando Express
app.listen( PORT, () => {
    console.log(`Server runnig on http://localhost:${ PORT }`)
} );