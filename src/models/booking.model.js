import { Schema, model } from "mongoose";

const bookingSchema = new Schema({
    realStateId:{},
    clienteId:{},
    startDate:{},
    endDate:{},
    guests:{},
    nightPrice:{}
}, {
    versionKey: false,
    timetamps: true
});


const bookingModel = model(
    'booking',
    bookingSchema
);

export default bookingModel;