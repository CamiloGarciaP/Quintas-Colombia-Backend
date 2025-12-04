import realStateModel from "../models/realState.model.js"

const dbCreateRealState = async ( newRealState ) => {
    return await realStateModel.create(newRealState);
}

const dbGetAllRealStates = async () => {
    return await realStateModel.find();
}

const dbGetRealStatesById = async (_id) => {
    return await realStateModel.findOne({_id})
}

const dbDeleteRealStatesById = async (_id) => {
    return await realStateModel.findOneAndDelete({_id});
}

const dbUpdateRealStateById = async ( _id, updateData ) => {
    return await realStateModel.findByIdAndUpdate(
        id,
        updateData,
        {new: true}
    );
}

export{
    dbCreateRealState,
    dbGetAllRealStates,
    dbGetRealStatesById,
    dbDeleteRealStatesById,
    dbUpdateRealStateById
}