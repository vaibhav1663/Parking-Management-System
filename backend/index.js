import mongoose from 'mongoose';
import express from 'express';
import  dotenv from 'dotenv';
import cors from 'cors';
import { getSensData } from './controller.js';
import dataRouter from './route.js';
import iotData from './schema.js';



dotenv.config();

const app = express();
const PORT = 3001;
app.use(cors());
app.use('/', dataRouter);
// const db = 'iotProj';

const dummy = [
    {
        id: 1,
        status: 1,
        
    },
    {
        id: 2,
        status: 0,
    },
    {
        id: 3,
        status: 1,
        
    },
    {
        id: 4,
        status: 1,
        
    },
    {
        id: 5,
        status: 0,

    },
    {
        id: 6,
        status: 0,

    },
]

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() =>{
    app.listen(PORT, () => console.log(`SERVER STARTED ON ${PORT}`));
    // iotData.insertMany(dummy);

}).catch((err) => console.log(err.message))
