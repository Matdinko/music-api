import { Router } from "express";
import { addPlaylist, deletePlaylist, getAllPlaylist, getSinglePlaylist, updatePlaylist } from "../controllers/music.js";

// Create playlist Router
const playlistRouter = Router();

// Define routes
playlistRouter.post('/playlist', addPlaylist);
playlistRouter.get('/playlist', getAllPlaylist);
playlistRouter.get('/playlist/:id', getSinglePlaylist);
playlistRouter.patch('/playlist/:id', updatePlaylist);
playlistRouter.delete('/playlist/:id', deletePlaylist);


// Export routes
export default playlistRouter;

