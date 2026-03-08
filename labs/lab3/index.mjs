import express from 'express';
import { getAllFilms, getFavoriteFilms } from './FilmLibrary.mjs';

const app = express();
const PORT = 3001;

app.use(express.json());

app.get('/api/films',(req,res)=>{
    getAllFilms()
        .then((films)=> res.json(films))
        .catch(err => res.status(500).json(err))
})

app.get('/api/favorite' ,(req,res)=> {
  getFavoriteFilms()
        .then ((favFilms)=>res.json(favFilms))
        .catch (err =>res.status(500).json(err))
})

app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`);
});