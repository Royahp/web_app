import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import FilmList from "./components/filmList";
import { getFilms } from "../src/API";
import { Button } from "react-bootstrap";

function App() {
  //const navigate = useNavigate();
  const [films, setFilms] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:3001/api/films")
  //     .then((res) => res.json())
  //     .then((data) => setFilms(data))
  //     .catch((err) => console.log(err));
  // }, []);
  // const getfilmsClick = () => {
  //   getFilms();
  // };
  const getfilmsClick = async () => {
    const data = await getFilms();
    setFilms(data);
  };

  return (
    <>
      <Button onClick={getfilmsClick()}>get films</Button>
      <FilmList films={films}></FilmList>
    </>
  );
}

export default App;
