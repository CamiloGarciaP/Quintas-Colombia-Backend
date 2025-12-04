import express from 'express';
import { createBooking, deleteBookingById, getAllBooking, getBookingById, updateBookingById } from '../controllers/booking.controller.js';

const router = express.Router();

router.post ( "/" , createBooking);
router.get ( "/", getAllBooking);
router.get ( "/:idBooking", getBookingById);
router.delete ( "/:idBooking", deleteBookingById);
router.patch ( "/:idBooking", updateBookingById)

export default router;