import express from "express";
import { PORT, mongoDbURL } from "./config.js";
import mongoose from "mongoose";
import cors from 'cors';
import cookieParser from "cookie-parser";

const app = express();
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials:true
}));

app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {
    console.log(req)
    return res.status(234).send("Hello WOrld");
});

//Connection to db and port
mongoose
.connect(mongoDbURL).then(() => {
    console.log('App is connected to db');
    app.listen(PORT, () => {
        console.log(`App is Listening at ${PORT}`);
    });
})
.catch((error) => {
    console.log(error);
});