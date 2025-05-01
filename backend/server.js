import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoute.js";
import userRoutes from "./routes/userRoute.js";
import { sql } from "./config/db.js"; //import the database connection
dotenv.config();
import { aj } from "./lib/arcjet.js"; //import the rate limiting middleware
 import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use(cors());
const PORT = process.env.Port || 3000;

app.use(helmet()); //set security for application

app.use(morgan("dev")); // log the requests

app.use(async (req, resizeBy, next) => {
  try {
    const decision = await aj.protect(req, {
      requested: 1,
    });
    if (decision.isDenied()) {
      if (decision.reason.isRateLimit()) {
        res.status(429).json({ error: "Too Many Requests" });
      } else if (decision.reason.isBot()) {
        res.status(403).json({ error: "Bot access denied" });
      } else {
        res.status(403).json({ error: "Forbidden" });
      }
      return;
    }

    // check for spoofed bots
    if (
      decision.results.some(
        (result) => result.reason.isBot() && result.reason.isSpoofed()
      )
    ) {
      res.status(403).json({ error: "Spoofed bot detected" });
      return;
    }

    next();
  } catch (error) {
    console.log("Arcjet error", error);
    next(error);
  }
});

app.use("/api/products", productRoutes); //for each routes
app.use("/api/user", userRoutes); //for each routes

// UpdateProduct();

// async function UpdateProduct(){
//   try {
//     await sql`Update Product
//     SET Name=${Name}, Price=${Description},Price=${Price}
//     WHEERE id={$id}
//     returning *`

//     console.log("updated the product")

//   } catch (error) {
//     console.log("Product not updated",error.message)
//     res.status(400).json({success:false,message:"something went wrong"})

//   }
// }

// async function initDB() {
//   // we inif
//   try {
//     await sql`
//         CREATE TABLE IF NOT EXISTS products(
//         id SERIAL PRIMARY KEY,
//         name VARCHAR(100) NOT NULL,
//         image VARCHAR(100) NOT NULL,
//         Price DECIMAL(10,2) NOT NULL,
//         created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
//     )`;

//     await updateDBSchema(); // Update the schema if needed
//   } catch (error) {
//     console.log("error occur", error);
//   }
// }

async function initdb() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS Product (
        id Serial PRIMARY KEY,
        Name VARCHAR(100) NOT NULL,
        Image VARCHAR(100) NOT NULL,
        Price DECIMAL(10,2) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )`;

    // await updateDBSchema();
  } catch (error) {
    console.log("Something is wrong:", error.message);
    // Don't use res.status() here
    // Just log the error
  }
}

async function updateDBSchema() {
  try {
    await sql`
      ALTER TABLE Product
      ALTER COLUMN Image TYPE VARCHAR(255);

    `;
    console.log("Description column updated successfully.");
  } catch (error) {
    console.error("Error updating the schema:", error.message);
  }
}

async function userdb() {
  try {
    await sql` 
    CREATE TABLE IF NOT EXISTS users(
      id SERIAL PRIMARY KEY,
      fullname VARCHAR(40) NOT NULL,
      username VARCHAR(50) UNIQUE,
      email VARCHAR(100) UNIQUE NOT NULL,
      password VARCHAR(100) NOT NULL,
      gender VARCHAR(10) NOT NULL,
      role VARCHAR(10) NOT NULL
    )`;
    await userUpdate();
    console.log("user table created successfully");
  } catch (error) {
    console.log("something is wrong while creating table", error.message);
  }
}
async function userUpdate() {
  try {
    await sql`
  UPDATE users SET role='admin'  where id=1`;
    console.log("database updated successfully");
  } catch (error) {
    console.log("something went wrong", error.message);
  }
}

//to inclued the userdb content as well , we have to create a seperate function called startserver
async function startServer() {
  // initdb().then(() => {
  //   app.listen(PORT, () => {
  //     console.log("Server is running on " + PORT);
  //   });

  try {
    // await initdb();
    // await userdb();
    app.listen(PORT, () => {
      console.log("Server is running on " + PORT);
    });
  } catch (error) {
    console.log("internal server error", error.message);
  }
}
startServer();
