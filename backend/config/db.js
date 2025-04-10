import {neon} from '@neondatabase/serverless';
import dotenv from "dotenv";

dotenv.config();

//write the database fornmat
const {PGHOST, PGDATABASE, PGUSER, PGPASSWORD }= process.env;


//create a sql connection using our env variables
export const sql = neon ( 
    `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmode=require`)


