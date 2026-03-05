import multer from "multer";
import path from "path"

//Configuración de almacenamiento de archivos (Disco Duro)
const storage = multer.diskStorage({
    //1. Carpeta donde se guardan los archivos
    destination: function (req, file, cb){
        cb(null, 'uploads/'); //Carpeta donde se guardan los archivos
    },
    //2. Nombre del archivo que se va a guardar
    filename: function (req,file, cb) {
        const uniqueSuffix = Date.now() + '-' + match.round(Math.random() * 1e9);
        const ext = path.extname(file.originalname);
        cb(null, 'propiedad-' + uniqueSuffix + ext);
    }
});

//Exportamos la configuración del multer
export const uploadImage = multer ({ storage: storage });