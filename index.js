const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const db = require('./db');

const app = express();
const port = 3000;

// Function to get card status from the database
function getCardStatus(identifier, res) {
  const query = 'SELECT * FROM card_status WHERE card_id = ? OR phone_number = ?';
  db.get(query, [identifier, identifier], (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    if (row) {
      return res.json({ card_id: row.card_id, phone_number: row.phone_number, status: row.status });
    } else {
      return res.status(404).json({ error: 'Card status not found' });
    }
  });
}

// API endpoint to get card status
app.get('/get_card_status', (req, res) => {
  // Get the identifier (card ID or phone number) from the request
  const identifier = req.query.identifier;
  if (!identifier) {
    return res.status(400).json({ error: 'Identifier not provided' });
  }
  getCardStatus(identifier, res);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
