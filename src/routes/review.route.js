import express from 'express';
import { createReview, deleteReviewById, getAllReview, getReviewById, updateReviewById } from '../controllers/review.controller.js';
import { authenticationUser } from '../middlewares/authentication.middleware.js';
import { authorizationUser } from '../middlewares/authorization.middlewares.js';
const router = express.Router();

router.post( "/",[authenticationUser, authorizationUser], createReview );
router.get( "/",[authenticationUser, authorizationUser], getAllReview );
router.get( "/:idReview",[authenticationUser, authorizationUser], getReviewById );
router.delete( "/:idReview",[authenticationUser, authorizationUser], deleteReviewById );
router.patch( "/:idReview",[authenticationUser, authorizationUser], updateReviewById);

export default router;