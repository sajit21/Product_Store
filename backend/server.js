import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoute.js";
import { sql } from "./config/db.js"; //import the database connection
dotenv.config();
import { aj } from "./lib/arcjet.js"; //import the rate limiting middleware

const app = express();
app.use(express.json());
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

async function initDB() {
  // we inif
  try {
    await sql`
        CREATE TABLE IF NOT EXISTS products(
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        image VARCHAR(100) NOT NULL,
        Price DECIMAL(10,2) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`;

    await updateDBSchema(); // Update the schema if needed
  } catch (error) {
    console.log("error occur", error);
  }
}
async function updateDBSchema() {
  try {
    await sql`
        ALTER TABLE products
        ALTER COLUMN image TYPE VARCHAR(255);
      `;
    console.log("Image column updated successfully.");
  } catch (error) {
    console.error("Error updating the image column:", error);
  }
}

initDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running on " + PORT);
  });
});
