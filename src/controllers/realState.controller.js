import realStateModel from "../models/realState.model.js";
import { dbCreateRealState, dbDeleteRealStatesById, dbGetAllRealStates, dbGetRealStatesById } from "../services/realState.services.js";

const createRealState = async (req, res) => {
    try {
        const inputData = req.body;
        const user_id = req.payload.id;     //Extraer el id del usuario desde el paylod ( viene del middleware de autenticacion )

        inputData.owner = user_id           //Asignar el id del usuario autenticada como propietario de la propiedad.
    
        const dataRegistered = await dbCreateRealState (inputData);
    
        res.json({
            msg:"Crea porpiedad.",
            dataRegistered
        });
    } 
    catch (error) {
        console.error(error);
        res.json({
            msg: 'Error: No se pudo crear propiedad'
        });
    }
}

const getAllRealStates = async (req,res) => {
    try {
        const realStates = await dbGetAllRealStates();
    res.json({
        realStates
    });
    } 
    catch (error) {
        console.error(error);
        res.json({msg: 'Error: No se pudo obtener el listado de propiedades.'});
    }
}

const getRealStatesById = async (req, res) => {
    try {
        const idRealState = req.params.idRealState;
        const realStateFound = await dbGetRealStatesById(idRealState);

        res.json({
                realStateFound
            });
    } 
    catch (error) {
        console.error(error);
        res.json({
            msg: 'Error: No pudo obtener propiedad por ID'
        })
    }
}

const deleteRealStatesById = async (req, res) => {
    
    try {
        const idRealState = req.params.idRealState;
        const realStateDelete = await dbDeleteRealStatesById(idRealState);
        res.json({
            realStateDelete
        })
    } 
    catch (error) {
        console.error(error);
        res.json({
            msg: 'Error: No se pudo eliminar la propiedad por ID'
        });
    }
}

const updateRealStateById = async (req, res) => {
    try {
        const inputData = req.body;
        const idRealState = req.params.idRealState;

        const realStateUpdate = await realStateModel.findByIdAndUpdate(
            idRealState,
            inputData,
            {new: true}
        );

        res.json({
                realStateUpdate
            });
        } 
    catch (error) {
        console.error(error);
        res.json({
            msg: 'Error: No pudo actualizar la propiedad por ID'
        });
    }
}

export {
    createRealState,
    getAllRealStates,
    getRealStatesById,
    deleteRealStatesById,
    updateRealStateById
}