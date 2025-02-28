import express from "express";
import * as db from "./db"; 

const app = express();
const PORT = 4000;

// middleware for parsing JSON
app.use(express.json());

// CORS
app.use((req, res, next) => {
  const allowedOrigins = ["http://localhost:5173"];
  const origin = req.headers.origin;
  if (origin && allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// routes
app.get("/", (req, res) => {
  res.json({ info: "Demo app for sqlite3" });
});

// CRUD routes
app.get("/users", db.getAllUsers); // get all users
app.get("/user/:id", db.getUserById); // get user by ID
app.post("/user", db.createUser); // create a new user
app.put("/user/:id", db.updateUserById); // update a user by ID
app.delete("/user/:id", db.deleteUserById); // delete a user by ID, I deleted 1 and 2 and they may not work but 3 and 4 probably do

// start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
