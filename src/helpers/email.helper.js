import nodemailer from 'nodemailer';

//Configuracion del transporter
const transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS 
    }
});

export const sendApprovalEmail = async (email, fullName) => {
    try {
        const info = await transporter.sendMail({
            from: `"Quintas Colombia" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: 'Solicitud de Aprobación',
            text: `Hola ${fullName}, tu solicitud ha sido aprobada. Ya tienes el rol de Propietario en Quintas Colombia.`
        });
        console.log('Correo enviado exitosamente', info.messageId);
        return true;
    } catch (error) {
        console.error('Error al enviar el correo:', error);
        return false;
    }
}

