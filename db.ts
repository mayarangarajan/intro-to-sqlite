import sqlite3 from "sqlite3";
import { Request, Response } from "express";


//sqlite3
const sqlite = sqlite3.verbose();
const db = new sqlite.Database("./foo.db", (error) => {
  if (error) return console.error(error.message);
  console.log("Connected to SQLite database.");
});

// get all users
export const getAllUsers = (req: Request, res: Response) => {
  const query = `SELECT * FROM user`;
  db.all(query, [], (error, rows) => {
    if (error) {
      console.error(error.message);
      res.status(500).json({ error: error.message });
      return;
    }
    res.json(rows);
  });
};

// get user by ID
export const getUserById = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const query = `SELECT * FROM user WHERE id = ?`;
  db.get(query, [id], (error, row) => {
    if (error) {
      console.error(error.message);
      res.status(500).json({ error: error.message });
      return;
    }
    if (row) {
      res.json(row);
    } else {
      res.status(404).send("User not found");
    }
  });
};

// create a new user
export const createUser = (req: Request, res: Response) => {
  const { name } = req.body;
  const query = `INSERT INTO user (name) VALUES (?)`;
  db.run(query, [name], function (error) {
    if (error) {
      console.error(error.message);
      res.status(500).json({ error: error.message });
      return;
    }
    res.status(201).json({ id: this.lastID, name });
  });
};

// update a user's name by ID
export const updateUserById = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;
  const query = `UPDATE user SET name = ? WHERE id = ?`;
  db.run(query, [name, id], function (error) {
    if (error) {
      console.error(error.message);
      res.status(500).json({ error: error.message });
      return;
    }
    if (this.changes === 0) {
      res.status(404).send("User not found");
    } else {
      res.status(200).json({ id, name });
    }
  });
};

// delete a user by ID
export const deleteUserById = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const query = `DELETE FROM user WHERE id = ?`;
  db.run(query, [id], function (error) {
    if (error) {
      console.error(error.message);
      res.status(500).json({ error: error.message });
      return;
    }
    if (this.changes === 0) {
      res.status(404).send("User not found");
    } else {
      res.status(200).send(`User with ID ${id} deleted`);
    }
  });
};
