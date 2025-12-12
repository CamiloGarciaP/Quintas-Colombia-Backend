import reviewModel from "../models/review.model.js";
import{ dbDelteReviewById, dbGetALlReview, dbGetReviewById, dbRegisterReview, dbUpdateReviewById } from "../services/review.services.js";

const createReview = async (req, res) => {
    try {
        const inputData = req.body;
        const reviewRegistered = await dbRegisterReview (inputData);

        res.json({
            reviewRegistered
        });
    } catch (error) {
        res.json({
            msg: 'Error: No se pudo crear el review'
        });
    }
}

const getAllReview = async (req, res) => {
    try {
        const review = await dbGetALlReview();
        res.json({
            review
        });
    } catch (error) {
        res.json({msg: 'Error: No se pudo obtener el listado de Reviews.'});
    }
}

const getReviewById = async (req, res) => {
    try {
        const idReview = req.params.idReview;
        const reviewFound = await dbGetReviewById(idReview);

        res.json({
            reviewFound
        });
    } catch (error) {
        res.json({
            msg: 'Error: No pudo obtener review por ID'
        })
    }
}
const deleteReviewById = async (req, res) => {
    
    try {
        const idReview = req.params.idReview;
        const reviewDeleted = await dbDelteReviewById(idReview);
        res.json({
            reviewDeleted
        })
    } 
    catch (error) {
        res.json({
            msg: 'Error: No se pudo eliminar el review por ID'
        });
    }
}
const updateReviewById = async (req, res) => {
    try {
        const {thread} = req.body;
        const idReview = req.params.idReview;

        const reviewUpdate = await dbUpdateReviewById(idReview, {thread});
        res.json({
            reviewUpdate
        });
    } catch (error) {
        res.json({
            msg: 'Error: No pudo actualizar el review por ID'
        });
    }
}

export{
    createReview,
    getAllReview,
    getReviewById,
    deleteReviewById,
    updateReviewById
}