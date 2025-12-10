import { Schema, model } from 'mongoose';

const reviewSchema = new Schema({
    property:{
        type: Schema.Types.ObjectId,
        ref: 'Property',
        required: true,
        // index: true,
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        // index: true
    },
    rating:{
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    // TODO: Definir un entidad separada para comentarios tipo foro.
    // comment:{
    //     type: String,
    //     trim: true,
    //     maxlength: 1500,
    // },
    // ownerReply: {
    //     message:{
    //         type: String,
    //         trim: true,
    //     },
    //     repliedAt: Date
    // },
    booking:{
        type: Schema.Types.ObjectId
    }
}, {
    versionKey: false,      //Elimina el versionamiento de la estructura
    timestamps: true        //Habilita los campos createAt, updatedAt
});

const reviewModel = model (
    'review',
    reviewSchema
);

export default reviewModel;