const fs = require('fs');
const csv = require('csv-parser');
const db = require('./db');
const path = require('path')

// Function to insert data into the database
function insertData(csvFilename, status) {
  fs.createReadStream(csvFilename)
    .pipe(csv())
    .on('data', (row) => {
      db.run('INSERT OR IGNORE INTO card_status (card_id, phone_number, status) VALUES (?, ?, ?)',
        [row['Card ID'], row['Phone Number'], status]);
    })
    .on('end', () => {
      console.log(`Data from ${csvFilename} has been ingested.`);
    });
}

// Populate the database with data from CSV files
insertData('data/Sample_Card_Status_Info_-_Pickup.csv', 'Pickup');
insertData('data/Sample_Card_Status_Info_-_Delivery_exceptions.csv', 'Delivery Exception');
insertData('data/Sample_Card_Status_Info_-_Delivered.csv', 'Delivered');
insertData('data/Sample_Card_Status_Info_-_Returned.csv', 'Returned');