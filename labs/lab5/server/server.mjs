import express from 'express';
import sqlite3 from 'sqlite3';
import { getAllFilms ,getFavorite,getBestRate} from './FilmLibrary.mjs';

const app = express();
const PORT = 3001;

app.use(express.json());
app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`);
});


app.get ('/api/films',(req,res) =>{
    getAllFilms()
       .then((films)=>res.json(films))
       .catch(err => res.status(500).json(err))
})

app.get('/api/fav' ,(req,res) =>{
    getFavorite()
        .then((favilms)=>res.json(favilms))
        .catch(err=>res.status(500).json(err))
})
app.get('/api/best' ,(req,res) =>{
    getBestRate()
       .then((bestRated)=>res.json(bestRated))
       .catch(err =>res.status(500).json(err))
})
