import bookingModel from "../models/booking.model.js";


const dbCreateBooking = async (newBooking) => {
    return await bookingModel.create(newBooking);
}
const dbGetAllBooking = async () => {
    return await bookingModel.find().populate(['property','guest']);
}
const dbGetBookingById = async (_id) =>{
    return await bookingModel.findOne({_id})
}
const dbDeleteBookingById = async (_id) =>{
    return await bookingModel.findOneAndDelete({_id});
}
const dbUpdateBookingByID = async ( _id, updateData ) => {
    return await bookingModel.findByIdAndUpdate(
        id,
        updateData,
        {new: true}
    );
}

export{
    dbCreateBooking,
    dbGetAllBooking,
    dbGetBookingById,
    dbDeleteBookingById,
    dbUpdateBookingByID
}