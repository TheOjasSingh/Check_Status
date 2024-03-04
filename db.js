const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('card_status.db');

// Create table
db.run(`CREATE TABLE IF NOT EXISTS card_status (
    card_id TEXT PRIMARY KEY,
    phone_number TEXT,
    status TEXT
)`);

module.exports = db;