import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';

dotenv.config();

const app= express();
app.use(express.json())
app.use(cors());
const PORT=process.env.Port || 3000; 

app.use(helmet()); //set security for application

app.use(morgan("dev")); // log the requests

app.listen(PORT, () =>{
    console.log('Server is running on '+ PORT);
})
