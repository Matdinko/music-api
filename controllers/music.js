import { playlistModel } from "../models/music.js";
import { addPlaylistValidator } from "../validators/music.js";

export const addPlaylist = async (req, res, next) => {
    try {
        // Validate playlist infomation
    const { error, value} = addPlaylistValidator.validate(req.body, { abortEarly:false });
    if (error) {
        return res.status(422).json(error);
    }
        // Save playlist information
        const result = await playlistModel.create(value);
        // Return response
        res.status(201).json(result);
    } catch (error) {
        next(error);
    }
}

export const getAllPlaylist = async (req, res, next) => {
    try {
        const result = await playlistModel.find();
        res.status(201).json(result);
        
    } catch (error) {
        next(error);
    }
}

export const getSinglePlaylist = async (req, res, next) => {
    try {
        const result = await playlistModel.findById(req.params.id);
        res.status(201).json(result);
        
    } catch (error) {
        next(error);
    }
}

export const updatePlaylist = async (req, res, next) => {
    try {
        const result = await playlistModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(201).json(result);
    } catch (error) {
        next(error);
    }
}

export const deletePlaylist = async (req, res, next) => {
    try {
        const result = await playlistModel.findByIdAndDelete(req.params.id);
        res.status(201).json(result);
    } catch (error) {
        next(error);
    }
}