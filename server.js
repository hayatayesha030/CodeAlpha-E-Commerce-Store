const express = require("express");
const sqlite3 = require("sqlite3").verbose();

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("."));

// SQLite database
const db = new sqlite3.Database("./ecommerce.db", (err) => {
    if (err) {
        console.log("Database error:", err.message);
    } else {
        console.log("SQLite database connected!");
    }
});

// Create tables
db.serialize(() => {

    db.run(`
        CREATE TABLE IF NOT EXISTS products (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            price INTEGER NOT NULL
        )
    `);

    db.run(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL
        )
    `);

    db.run(`
        CREATE TABLE IF NOT EXISTS orders (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_email TEXT,
            product_name TEXT,
            price INTEGER
        )
    `);

    console.log("Database tables ready!");
});

// Home page
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});