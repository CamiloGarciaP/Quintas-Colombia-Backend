import jwt from 'jsonwebtoken';

const generateToken = ( payload ) => {
    return jwt.sign(
        payload,            //Payload
        'rxtcfvgbhjn',      //Semilla
        { expiresIn: '1h' }//Configuracion 
    );
}

const validateToken = (token) => {
    try {
        const payload = jwt.verify(
            token,                  //Token que se desea verificar.
            'rxtcfvgbhjn');         //Semilla o clave secreta: Cadena de texto que sirve para firmar el token.
            return payload
    } catch (error) {
        console.error(error);
        return null;
    }
}


export{
    generateToken,
    validateToken
}