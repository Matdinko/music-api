import { Schema, model } from "mongoose";
import normalize from 'normalize-mongoose';


const playlistSchema = new Schema ({
    title: { type: String, required:true },
    artiste: {type: String, required:true },
    genre: { type: String},
    yearReleased: { type: Number },
    producer: { type: String},
}, {
    timestamps: true
});

playlistSchema.plugin(normalize);

export const playlistModel = model ('Playlist', playlistSchema);