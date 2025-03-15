import express from "express";
import playlistRouter from "./routes/music.js";
import 'dotenv/config'
import mongoose from "mongoose";
import userRouter from "./routes/user.js";


const connectionString = process.env.MONGO_URI

mongoose.connect(connectionString).then ( () => {
    console.log('database connected');
}).catch( (err) => {
    console.log(err)
})


// Create an express app
const app = express();

//Use global middleware
app.use(express.json());

// Use routes
app.use(userRouter);
app.use(playlistRouter);


// Listen for incoming request
const port = 3131
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});