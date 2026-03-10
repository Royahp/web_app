import express from 'express';
import { getAllFilms, getFavoriteFilms,getWatchedToday ,getGreaterRank,getNotWatched, getFilmbyId,createFilm,updateFilm} from './FilmLibrary.mjs';


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
app.get('/api/films/:id',(req,res)=>{
    const id = req.params.id
    getFilmbyId (id)
            .then((speId)=> res.json(speId))
            .catch(err =>res.status(500).json(err))
})
app.post('/api/films/insert',(req,res)=>{

  const film = req.body

  createFilm(film)
    .then(id => res.status(201).json({id:id}))
    .catch(err => res.status(500).json(err))

})
app.put('/api/films/update/:id',(req,res)=>{
    const id=req.params.id
    const film =req.body
    updateFilm(id,film)
        .then(id => res.status(200).json({message:"updated"}))
        .catch(err => res.status(500).json(err))
})

app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`);
});