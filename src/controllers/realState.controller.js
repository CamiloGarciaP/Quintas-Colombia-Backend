import realStateModel from "../models/realState.model.js";
import { dbCreateRealState, dbDeleteRealStatesById, dbGetAllRealStates, dbGetRealStatesById } from "../services/realState.services.js";
import fs from 'fs';
import path from 'path';

const createRealState = async (req, res) => {
    try {
        const inputData = req.body;
        const user_id = req.payload.id;     //Extraer el id del usuario desde el paylod ( viene del middleware de autenticacion )

        inputData.owner = user_id;          //Asignar el id del usuario autenticado como propietario de la propiedad.
        
        if(req.files && req.files.length > 0) {
            inputData.photos = req.files.map(file => {
                return {
                    url: `http://localhost:3000/uploads/${file.filename}`,
                    description: 'Foto de la propiedad'
                };
            });
        }
        
        const dataRegistered = await dbCreateRealState (inputData);
    
        res.json({
            msg:"Propiedad creada exitosamente.",
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

        const existingRealState = await realStateModel.findById(idRealState);

        if(!existingRealState){
            return res.status(404).json({
                msg: "Error: No se encontro la propiedad"
            });
        }

        if(existingRealState.photos && existingRealState.photos.length > 0){
            existingRealState.photos.forEach(photo => {
                const filename = photo.url.split('/').pop();
                const filePath = path.join(process.cwd(), 'uploads', filename);

                if(fs.existsSync(filePath)){
                    fs.unlinkSync(filePath);
                }
            });
        }

        const realStateDelete = await dbDeleteRealStatesById(idRealState);
        
        res.json({
            msg: "Propiedad y fotos eliminada exitosamente.",
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
        const existingRealState = await realStateModel.findById(idRealState);

        if(!existingRealState) {
            return res.status(404).json({
                msg: 'Error: No se encontro la propiedad'
            });
        }

        if(req.files && req.files.length > 0) {

            if(existingRealState.photos && existingRealState.photos.length > 0) {
                existingRealState.photos.forEach(photos => {
                    const filename = photos.url.split('/').pop();
                    const filePath = path.join(process.cwd(), 'uploads', filename)

                    if(fs.existsSync(filePath)) {
                        fs.unlinkSync(filePath)
                    }
                });
            }

            inputData.photos = req.files.map(file => {
                return {
                    url: `http://localhost:3000/uploads/${file.filename}`,
                    description: 'Foto de la propiedad (Actualizada)'
                };
            });
        }

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