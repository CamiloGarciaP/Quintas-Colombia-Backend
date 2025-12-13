import bcrypt from 'bcrypt';

const encryptPassword = ( password ) => {
    //Paso 1: Generar el salt 
    const salt = bcrypt.genSaltSync( 9 );               //Cadena de texto aleatorio 
    //Paso 2: Encriptar la contraseña 
    const hashPaswoord = bcrypt.hashSync(
        password,           //contraseñña original
        salt                //Salt
    );;
    //Paso 3: Retornar la contraseña encriptada.
    return hashPaswoord
}

export {
    encryptPassword
};