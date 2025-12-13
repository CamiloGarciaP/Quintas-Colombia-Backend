import express from 'express';
import { createBooking, deleteBookingById, getAllBooking, getBookingById, updateBookingById } from '../controllers/booking.controller.js';
import { authenticationUser } from '../middlewares/authentication.middleware.js';
import { authorizationUser } from '../middlewares/authorization.middlewares.js';

const router = express.Router();

router.post ( "/" ,[authenticationUser, authorizationUser], createBooking);
router.get ( "/",[authenticationUser, authorizationUser], getAllBooking);
router.get ( "/:idBooking",[authenticationUser, authorizationUser], getBookingById);
router.delete ( "/:idBooking",[authenticationUser, authorizationUser], deleteBookingById);
router.patch ( "/:idBooking",[authenticationUser, authorizationUser], updateBookingById)

export default router;