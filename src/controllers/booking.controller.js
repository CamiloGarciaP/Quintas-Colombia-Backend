import bookingModel from "../models/booking.model.js";
import booking from "../models/booking.model.js";
import{ dbCreateBooking, dbDeleteBookingById, dbGetAllBooking, dbGetBookingById } from "../services/booking.services.js";

const createBooking = async (req, res) =>{
    try {
        const inputData = req.body;

        const dataRegistered = await  dbCreateBooking(inputData);
        res.json ({
            msg:"Crea reserva.",
            dataRegistered
        });
    } 
    catch (error) {
        console.error(error);
        res.json({
            msg: 'Error: No se pudo crear reserva.'
        });
    }
}

const getAllBooking = async (req, res) =>{
    const booking = await dbGetAllBooking();
    res.json({
        booking
    });
}

const getBookingById = async (req, res) =>{
    try {
        const idBooking = req.params.idBooking;
        const bookingFound = await dbGetBookingById(idBooking);

        res.json({
            bookingFound
    });
    } 
    catch (error) {
        console.error(error);
        res.json({
            msg: 'Error: No pudo obtener reserva por ID'
        })
    }
    
}

const deleteBookingById = async (req, res) =>{
    try {
        const idBooking = req.params.idBooking;
        const bookingDelete = await dbDeleteBookingById(idBooking);
        res.json({
            bookingDelete
        });
    } catch (error) {
        console.error(error);
        res.json({
            msg: 'Error: No se pudo eliminar la booking por ID'
        });
    }
}

const updateBookingById = async (req, res) =>{
    try {
        const inputData = req.body;
        const idBooking = req.params.idBooking;

        const bookingUpdate = await bookingModel.findByIdAndUpdate(
            idBooking,
            inputData,
            {new: true}
        );
        res.json({
            bookingUpdate
        });
    } 
    catch (error) {
        console.error(error);
        res.json({
            msg: 'Error: No pudo actualizar la reserva por ID'
        });
    }
}

export {
    createBooking,
    getAllBooking,
    getBookingById,
    deleteBookingById,
    updateBookingById
}