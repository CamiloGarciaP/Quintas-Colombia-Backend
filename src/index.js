import express from 'express';     //Esto es una importación

import dbConnection from './config/mongo.config.js';
import usersRoute from './routes/users.route.js';
import realStateRoute from './routes/realState.route.js';
import bookingRoute from './routes/booking.route.js';
import reviewRoute from './routes/review.route.js';
import authRoute from './routes/auth.route.js'

const app = express();                        // Invocando core Express
const PORT = process.env.PORT || 3001;                  // Definiendo el puerto de escucha
dbConnection();                               // Ejecuta la conexión a la base de datos

app.get ("/health", (req, res) => {
    res.json({
        path: '/health',
        msg: 'Welcome to Quintas Colombia'
    });
});

//Middlewares Express
app.use( express.json ());      //Middlewares para parsear JSON.
app.use( '/api/v1/auth', authRoute );
app.use( '/api/v1/users', usersRoute );
app.use( '/api/v1/real-state', realStateRoute );
app.use( '/api/v1/booking', bookingRoute );
app.use( '/api/v1/review', reviewRoute )


// Lanzando el servidor web usando Express
app.listen( PORT, () => {
    console.log(`Server runnig on http://localhost:${ PORT }`)
} );