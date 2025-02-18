import express from 'express';
import Conection from './database/db.js';
import dotenv from 'dotenv';
import Router from './routes/route.js';
import cors from "cors";
import bodyParser from "body-parser";

dotenv.config();
const app = express();
app.options('*', cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/', Router);


const PORT = 5000;

app.listen(PORT, () => console.log(`server is running on PORT ${PORT}`));
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
Conection(USERNAME, PASSWORD);