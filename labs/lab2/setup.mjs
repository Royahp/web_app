

import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('./lab2/films.db', (err) => {
  if (err) {
    console.error('Cannot open DB:', err.message);
    return;
  }

  console.log('DB opened');
db.exec(`
  CREATE TABLE IF NOT EXISTS films(
    id INTEGER PRIMARY KEY,
    title TEXT NOT NULL,
    favorite INTEGER NOT NULL DEFAULT 0,
    watchdate TEXT,
    rating INTEGER,
    user INTEGER NOT NULL DEFAULT 1
  );

  INSERT INTO films(id, title, favorite, watchdate, rating, user)
  VALUES
    (1, 'Pulp Fiction', 1, '2024-03-10', 5, 1),
    (2, '21 Grams', 1, '2024-03-17', 4, 1),
    (3, 'Star Wars', 0, NULL, NULL, 1),
    (4, 'Matrix', 0, NULL, NULL, 1),
    (5, 'Shrek', 0, '2024-03-21', 3, 1);
`);

});
