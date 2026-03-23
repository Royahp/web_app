import { response } from "express";

async function getFilms(){
    const films = await fetch('http://localhost:3001/api/films').then ((response)=>response.json())
    return films
}