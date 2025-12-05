import { Schema, model } from "mongoose";

const realStateSchema = new Schema({
    owner:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        // index:true
    },
    nameProperty:{
        type: String,
        required: true,
        trim: true
    },
    description:{
        type: String,
        required: true,
        trim: true
    },
    propertyType:{
        type: String,
        enum: ['Finca', 'Casa', 'Apartamento', 'Cabaña', 'Otra'],
        default: 'Finca'
    },
    maxGuests:{
        type: Number,
        required: true,
        min: 0
    },

    bedrooms:{
        type: Number,
        required: true,
        min: 0
    },
    beds:{
        type: Number,
        required: true,
        min: 0
    },
    bathrooms:{
        type: Number,
        required: true,
        min: 0
    },
    location:{      
        state: String,
        city: String,
        address: String,
        reference: String,
        coordinates:{
            lat:Number,     //Consultar al profe la posición de esta llave.
            lng:Number
        }
    },
    pricing: {
        pricePerNight:{
            type:Number,
            required: true,
            min:0
        },
        currency:{
            type:String,
            default:'COP',
        },
        cleaningFee:{
            type:Number,
            default:0
        },
        minimunNights:{
            type:Number,
            default:1
        }
    },
    amenities: {
        type: String,
        enum: [
        'piscina',
        'BBQ',
        'WiFi',
        'parqueadero privado',
        'cocina',
        'Pet Friendly',
        'zona de ropas',
        'equipo de sonido',
        'aire acondicionado',
        'TV',
        'otras',
        ]
    },
    houseRules: {
        type:String,
        trim: true
    },
    photos:{
        url: String,
        description:String
    },
    isPublished:{
        type: Boolean,
        default: false,
        // index:true
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