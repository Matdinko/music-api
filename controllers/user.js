import { userModel } from "../models/user.js";
import { addUserValidator } from "../validators/user.js";

export const addUser = async (req, res, next) => {
    try {
        const { error, value } = addUserValidator.validate(req.body, { abortEarly:false });
        if (error) {
            return res.status(422).json(error);
        }
        const result = await userModel.create(value);
        res.status(201).json(result);
    } catch (error) {
        next(error);
    }
}

export const updateUser = async (req, res, next) => {
    try {
        const result = await userModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(201).json(result);
    } catch (error) {
        next(error);
    }
}

export const deleteUser = async (req, res, next) => {
    try {
        const result = await userModel.findByIdAndDelete(req.params.id);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}