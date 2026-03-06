import sqlite3 from 'sqlite3';
import Film from './Films.mjs';

const db = new sqlite3.Database('./lab2/films.db', (err) => {
  if (err) {
    console.error('Cannot open DB:', err.message);
  }
});


function getAllFilms(){
    return new Promise ((resolve,reject) => {
        const sql = "SELECT * FROM Films"

        db.all(sql,[],(err,rows) => {
            if (err){
                reject (err)
                return;

            }
            const films = rows.map(row => new Film (
                row.id ,
                row.title ,
                Boolean(row.favorite),
                row.watchDate,
                row.rating,
                row.user
            ))
            resolve (films)
        })

    })
}

function getFavoriteFilms (){
    return new Promise ((resolve , reject)=>{
        const sql = "SELECT * FROM films WHERE FAVORITE = ?"
        db.all(sql,[1],(err,rows) => {
            if(err){
                reject(err);
                return
            }
            const FavFilms = rows.map (row => new Film (
                row.id ,
                row.title ,
                 Boolean(row.favorite),
                row.watchDate ,
                row.rating ,
                row.user
            ))
            resolve (FavFilms)

        })

    })
}


function closeDB() {
  db.close();
}




export { getAllFilms, getFavoriteFilms,closeDB };