import { Schema, model } from "mongoose";

const realStateSchema = new Schema({
    nameProperty: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        type: String,
        trim: true
    },
    city:{
        type: String,
        trim: true
    },
    ability:[{
        habs: Number,
        baths: Number,
    }],   
},{
    versionKey: false,
    timestamps: true
});



const realStateModel = model(
    'Real-State',
    realStateSchema
);

export default realStateModel;