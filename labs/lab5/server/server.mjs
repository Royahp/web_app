import express from 'express';
import sqlite3 from 'sqlite3';

const app = express();
const db = new sqlite3.Database('./films.db');

app.get('/films', (req, res) => {
    db.all('SELECT * FROM films', [], (err, rows) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.json(rows);
        }
    });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
}); 
