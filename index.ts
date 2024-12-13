import express from "express";
import * as db from "./db"; 

const app = express();
const PORT = 4000;

// Middleware for parsing JSON
app.use(express.json());

// Handle CORS
app.use((req, res, next) => {
  const allowedOrigins = ["http://localhost:8080"];
  const origin = req.headers.origin;
  if (origin && allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// Routes
app.get("/", (req, res) => {
  res.json({ info: "Demo app for sqlite3" });
});

// CRUD routes
app.get("/users", db.getAllUsers); // Get all users
app.get("/user/:id", db.getUserById); // Get user by ID
app.post("/user", db.createUser); // Create a new user
app.put("/user/:id", db.updateUserById); // Update a user by ID
app.delete("/user/:id", db.deleteUserById); // Delete a user by ID, I deleted 1 and 2 and they may not work but 3 and 4 probably do

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
