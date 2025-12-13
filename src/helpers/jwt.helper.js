import jwt from 'jsonwebtoken';

const generateToken = ( payload ) => {
    return jwt.sign(
        payload,            //Payload
        'rxtcfvgbhjn',      //Semilla
        { expiresIn: '1h' }//Configuracion 
    );
}


export{
    generateToken
}