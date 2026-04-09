import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import FilmList from "./components/filmList";

function App() {
  //const navigate = useNavigate();
  const [films, setFilms] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/api/films")
      .then((res) => res.json())
      .then((data) => setFilms(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <FilmList films={films}></FilmList>
    </>
  );
}

export default App;
