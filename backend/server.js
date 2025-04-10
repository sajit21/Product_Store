import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import productRoutes from './routes/productRoute.js';
import {sql} from './config/db.js'; //import the database connection
dotenv.config();

const app= express();
app.use(express.json())
app.use(cors());
const PORT=process.env.Port || 3000; 

app.use(helmet()); //set security for application

app.use(morgan("dev")); // log the requests
app.use('/api/products',productRoutes) //for each routes

async function initDB(){ // we inif
    try{
        await sql `
        CREATE TABLE IF NOT EXISTS products(
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        image VARCHAR(100) NOT NULL,
        Price DECIMAL(10,2) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`;
    }
    catch(error)
    {
        console.log('error occur', error)
    }
}
initDB().then(()=>{


   app.listen(PORT, () =>{
    console.log('Server is running on '+ PORT);
   })})

