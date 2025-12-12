//Mongooes ODM,ORM
import mongoose from 'mongoose';

const MONGO_URI = 'mongodb+srv://Camilo_Garcia:cebTrwKCQhCzkkJh@cluster0.p4axki7.mongodb.net/db-quintas-colombia';

const dbConnection = async () => {
    try {
        await mongoose.connect( MONGO_URI, {});

        console.log('Base de datos conectada exitosamente')
    } 
    catch ( error ) {
        // console.error(error);
        console.error('Error al iniciar la base de datos :( ')
    }
}
export default dbConnection; 