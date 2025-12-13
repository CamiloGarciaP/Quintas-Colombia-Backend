import { Schema, model } from "mongoose";

const bookingSchema = new Schema({
    property:{
        type: Schema.Types.ObjectId,
        ref:'real-state',
        required: true,
        // index: true
    },
    guest:{
        type:Schema.Types.ObjectId,
        ref:'users',
        required: true,
        // index: true
    },
    // owner: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'User',
    //     required: true,
    //     index: true,
    // },
    checkIn:{
        type: Date,
        required: true
    },
    checkOut:{
        type: Date,
        required: true
    },
    guestCount:{
        type: Number,
        required: true,
        min: 1,
    },
    status:{
        type: String,
        enum:[ 'Pendiente', 'Confirmada', 'Cancelada' ],
        default: 'Pendiente',
        // index: true
    },
    totalPrice:{
        type:Number,
        required: true,
        min:0
    },
    paymentStatus:{
        type:String,
        enum:[ 'No Pago', 'Pago', 'Devolución' ],
        default: 'No Pago'
    },
    notes:{
        type:String,
        trim:true
    }

}, {
    versionKey: false,
    timestamps: true
});


const bookingModel = model(
    'booking',
    bookingSchema
);

export default bookingModel;