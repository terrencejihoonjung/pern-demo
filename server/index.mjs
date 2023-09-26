import express from "express";
import cors from "cors";
import pool from "./db.mjs";
const app = express();

// Middleware
app.use(cors()); // enables different domains to interact (client and server)
app.use(express.json()); // parses incoming request as JSON object

// Routes

// Create a Todo

// Get all Todos

// Get a Todo

// Update a Todo

// Delete a Todo

// Server Listener
const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
