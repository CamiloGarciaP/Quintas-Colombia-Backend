import nodemailer from 'nodemailer';

//Configuracion del transporter
const transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
        user: process.env.EMAIL_USER, //Correo electronico del remitente
        pass: process.env.EMAIL_PASS //Contraseña del remitente
    }
});

export const sendApprovalEmail = async (user) => {
    try {
        const info = await transporter.sendMail({
            from: `"${process.env.EMAIL_USER}"`,
            to: user.email,
            subject: 'Solicitud de Aprobación',
            text: `Hola ${user.name}, tu solicitud ha sido aprobada.`
        });
        console.log('Correo enviado exitosamente', info.messageId);
        return true;
    } catch (error) {
        console.error('Error al enviar el correo:', error);
        return false;
    }
}

