import { Schema, model } from 'mongoose';

const reviewSchema = new Schema({
    booking:{
        type: Schema.Types.ObjectId,
        ref: 'Booking',
        required: true,
        // index: true
    },
    property:{
        type: Schema.Types.ObjectId,
        ref: 'Property',
        required: true,
        // index: true,
    },
    rating:{
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    //Hilo estilo foro dentro de la review
    thread:[{
        // MongoDB generará un ID automaticamente para cada comentario
        _id: {
            type:Schema.Types.ObjectId,
            auto:true
        },
        // Se registra el ID del usuario autenticado (cliente o dueño).
        sender: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
    }],
}, {
    versionKey: false,      //Elimina el versionamiento de la estructura
    timestamps: true        //Habilita los campos createAt, updatedAt
});

const reviewModel = model (
    'review',
    reviewSchema
);

export default reviewModel;