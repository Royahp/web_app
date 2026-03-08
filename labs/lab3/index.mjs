import express from 'express';
import { getAllFilms, getFavoriteFilms,getWatchedToday ,getGreaterRank,getNotWatched} from './FilmLibrary.mjs';

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
app.get('/api/watchedtoday',(req,res)=> {
  getWatchedToday()
        .then ((watchToday)=>res.json(watchToday))
        .catch(err =>res.status(500).json(err))

})

app.get('/api/bestfilms',(req,res)=>{
    getGreaterRank()
        .then((bestFilms)=> res.json(bestFilms))
        .catch(err =>res.status(500).json(err))

})
app.get('/api/notwatched',(req,res)=>{
    getNotWatched()
            .then ((notwatchedmovies)=> res.json(notwatchedmovies))
            .catch(err => res.status(500).json(err))
})

app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`);
});