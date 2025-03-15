import Joi from "joi";

export const addPlaylistValidator = Joi.object({
    title: Joi.string().required(),
    artiste: Joi.string().required(),
    genre: Joi.string(),
    yearReleased: Joi.number(),
    producer: Joi.string(),
});
