import { useEffect, useState } from "react";
import Header from "./components/Header";
import Filter from "./components/Filter";
import "bootstrap/dist/css/bootstrap.min.css";
import FilmList from "./components/FilmList";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  const [allFilms, setAllFilms] = useState([]);
  const [visibleFilms, setVisibleFilms] = useState([]);

  useEffect(() => {
    const data = [
      { id: 1, title: "Test Film 1", favorite: 1, watchdate: "2025", rate: 4 },
      { id: 2, title: "Test Film 2", favorite: 0, watchdate: "2026", rate: 5 },
    ];

    setAllFilms(data);
    setVisibleFilms(data);
  }, []);
  const filterFilms = (type) => {
    if (type == "all") {
      setVisibleFilms(allFilms);
    }
    if (type == "favorite") {
      setVisibleFilms(allFilms.filter((f) => f.favorite === 1));
    }
    if (type == "rate") {
      setVisibleFilms(allFilms.filter((f) => f.rate === 5));
    }
  };
  const deleteFilm = (id) => {
    setVisibleFilms((prev) => prev.filter((f) => f.id !== id));
  };
  const addFilm = () => {
    setVisibleFilms;
  };

  return (
    <>
      <Header />
      <Filter onFilter={filterFilms} />
      <FilmList films={visibleFilms} onDelete={deleteFilm} />
    </>
  );
}

export default App;
