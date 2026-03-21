import Film from "./Film.mjs"
import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('./films.db');

function getAllFilms(){
    return new Promise((resolve,reject)=> {
        const sql ="SELECT * FROM films"
        db.all(sql,[],(err,rows)=> {
            if(err){
                reject (err)
                return
            }
        const films =rows.map ( row => new Film(
            row.id ,
            row.title ,
            row.favorite ,
            row.watchDate ,
            row.rating ,
            row.userId
        ))
        resolve (films)
        })
    })
}


export {getAllFilms}