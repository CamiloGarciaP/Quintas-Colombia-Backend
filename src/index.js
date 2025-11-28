const express = require( 'express' );         //Esto es una importación
const dbConnection = require( './config/mongo.config.js' );

const app = express();                        // Invocando core Express
const PORT = 3000;                            // Definiendo el puerto de escucha
dbConnection();                               // Ejecuta la conexión a la base de datos

app.get ("/health", (req, res) => {
    res.json({
        path: '/health',
        msg: 'Welcome Bitches'
    });
});
//Middlewares Express

app.use( '/api/v1/users', require( './routes/users.route.js') );
app.use( '/api/v1/products', require( './routes/products.route.js') );

// Lanzando el servidor web usando Express
app.listen( PORT, () => {
    console.log(`Server runnig on http://localhost:${ PORT }`)
} );