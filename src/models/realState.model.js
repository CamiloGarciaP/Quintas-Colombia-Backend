import { Schema, model } from "mongoose";

const realStateSchema = new Schema({
    nameProperty: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    city:{
        type: String,
        required: true,
        trim: true
    },
    ability: {
        habs: { 
            type: Number, 
            default: 0 
        },
        baths: { 
            type: Number, 
            default: 0 
        },
    },
    pricePerNight:{
        type: Number,
        required: true,
        min: 0
    },
    isActive:{
        type: Boolean,
        default:true
    }

},{
    versionKey: false,
    timestamps: true
});



const realStateModel = model(
    'real-state',
    realStateSchema
);

export default realStateModel;