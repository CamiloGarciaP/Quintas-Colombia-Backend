import express from 'express';
import { createReview, deleteReviewById, getAllReview, getReviewById, updateReviewById } from '../controllers/review.controller.js';
const router = express.Router();

router.post( "/", createReview );
router.get( "/", getAllReview );
router.get( "/:idReview", getReviewById );
router.delete( "/:idReview", deleteReviewById );
router.patch( "/:idReview", updateReviewById);

export default router;