import sqlite3 from 'sqlite3';
import Film from './Films.mjs';
import dayjs from 'dayjs'

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
function getWatchedToday (){
    return new Promise ((resolve,reject) => {
        const sql = "SELECT * FROM films WHERE watchDate = ?"
         const today = dayjs().format('YYYY-MM-DD');
        db.all(sql,[today],(err,rows) =>{
            if(err){
                reject (err)
                return
            }
        const watchToday = rows.map (row => new Film(
            row.id ,
            row.title ,
            row.favorite ,
            row.watchdate ,
            row.rating ,
            row.user
        ))
        resolve(watchToday)
        }
        )
    })
}
function getEarlierDate (){
    return new Promise ((resolve,reject) => {
        const sql = "SELECT * FROM films WHERE watchdate < ?"
        const targetDate = dayjs("2024-03-17	").format('YYYY-MM-DD');
        db.all (sql,[targetDate],(err,rows) =>{
            if(err){
                reject (err)
                return
            }
        const ealiedate = rows.map (row => new Film(
            row.id ,
            row.title ,
            Boolean(row.favorite),
            row.watchdate ,
            row.rating ,
            row.user
        ) )
        resolve (ealiedate)
        })
    })
}
function getGreaterRank (){
    return new Promise ((resolve, reject) => {
     const sql = "SELECT * FROM films WHERE rating >= ?"
     const targetRating = 4
     db.all(sql,[targetRating],(err,rows)=> {
        if(err){
            reject(err)
            return
        }
        const greaterRank = rows.map (row => new Film(
            row.id,
            row.title ,
            Boolean(row.favorite) ,
            row.watchdate ,
            row.rating,
            row.user
           
        ))
        resolve(greaterRank)
     })
    })
}

function getNotWatched(){
  return new Promise((resolve,reject)=>{

    const sql = "SELECT * FROM films WHERE watchdate IS NULL"

    db.all(sql,[],(err,rows)=>{

      if(err){
        reject(err)
        return
      }

      const notwatched = rows.map(row => new Film(
        row.id,
        row.title,
        Boolean(row.favorite),
        row.watchdate,
        row.rating,
        row.user
      ))

      resolve(notwatched)

    })
  })
}
function getFilmbyId(id){
    return new Promise ((resolve,reject)=>{
        const sql ='SELECT * FROM films WHERE id=?'
        db.get(sql,[id],(err,row)=>{
            if (err){
                reject (err)
                return
            }
            const specificId = new Film(
                row.id,
                row.title,
                Boolean(row.favorite),
                row.watchdate,
                row.rating,
                row.user
            
            )
            resolve (specificId)
        })
    })
}
function closeDB() {
  db.close();
}


export { getAllFilms, getFavoriteFilms,getWatchedToday ,getEarlierDate,getGreaterRank,getNotWatched,getFilmbyId,closeDB };