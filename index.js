const express = require( 'express' );         //Esto es una importación

const app = express();                        // Invocando core Express
const PORT = 3000;                            // Definiendo el puerto de escucha

app.get(  "/", (req, res) => {
    res.send("<h1>Home</h1>")
}  )
app.get("/health", (req, res) => {
    res.send("<h1>Health</h1>")
})

// Lanzando el servidor web usando Express
app.listen( PORT, () => {
    console.log(`Server runnig on http://localhost:${ PORT }`)
} );