//Importando la dependencia 'express' usando CommonJS
import express from 'express';
const router = express.Router();

//Definición de las rutas (EndPoints)
// router.get(  "/", (req, res) => {
//     res.json({msg: 'Obtiene todos los usuarios'});
// }  );
// router.put(  "/", (req, res) => {
//     res.json({msg: 'Actualiza todas las propiedades del usuario'});
// }  );
// router.patch(  "/", (req, res) => {
//     res.json({msg: 'Actualiza parcialmente 1 o todas las propiedades del usuario'});
// }  );
// router.delete(  "/", (req, res) => {
//     res.json({msg: 'Elimina un usuario'});
// }  );

router.post(  "/", (req, res) => {
    const data = req.body;          //Extraer el cuerpo de la petición.
    res.json({
        msg: 'crea un usuario',
        // data: data              //ECMAScript versión antigua
        data                       //ECMAScript versión nueva. Si la propiedad y el valor usa el mismo nombre el lo lee! 
    });
}  );



//Exportando el router usando el CommonJS
export default router;