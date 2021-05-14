import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import usersRoutes from './routes/users.js';

const app = express();
const PORT = 3000;
const env = dotenv.config();

const CONSOLE_LOG = process.env.APP_ENV;

if(CONSOLE_LOG === 'production'){
    console.log = function () {};
}

app.use(bodyParser.json());

app.use('/users', usersRoutes);

app.get('/',(req, res)=>{
    res.send("App is running.. Homepage");
});

app.listen(PORT, ()=> console.log(`Server is running on port : ${PORT}`));