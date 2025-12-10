import reviewModel from "../models/review.model.js";

const dbRegisterReview = async ( newReview ) => {
    return await reviewModel.create (newReview);
}
const dbGetALlReview = async () => {
    return await reviewModel.find();
}
const dbGetReviewById = async ()=> {
    return await reviewModel.findOne({_id});
}
const dbDelteReviewById = async ( _id ) => {
    return await reviewModel.findOneAndDelete({ _id });
}
const dbUpdateReviewById = async ( _id, updateData ) => {
    return await reviewModel.findByIdAndUpdate(
        _id,
        updateData,
        {new:true}
    );
}

export{
    dbRegisterReview,
    dbGetALlReview,
    dbGetReviewById,
    dbDelteReviewById,
    dbUpdateReviewById
}