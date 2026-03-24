import { useEffect, useState } from "react";
import Header from "./components/Header";
import Filter from "./components/Filter";
import "bootstrap/dist/css/bootstrap.min.css";
import FilmList from "./components/FilmList";

function App() {
  const [filmData, setFilmData] = useState([]);
  useEffect(() => {
    setFilmData([
      { id: 1, title: "Test Film 1", favorite: 1, watchdate: "2025", rate: 4 },
      { id: 2, title: "Test Film 2", favorite: 0, watchdate: "2026", rate: 5 },
    ]);
  }, []);

  const filterFilms = (type) => {
    if (type == "all") {
      setFilmData([
        {
          id: 1,
          title: "Test Film 1",
          favorite: 1,
          watchdate: "2025",
          rate: 4,
        },
        {
          id: 2,
          title: "Test Film 2",
          favorite: 0,
          watchdate: "2026",
          rate: 5,
        },
      ]);
    }
    if (type == "favorite") {
      setFilmData((prev) => {
        prev.filter((f) => f.favorite === 1);
      });
    }
  };

  return (
    <>
      <Header />
      <Filter onFilter={filterFilms} />
      <FilmList films={filmData} />
    </>
  );
}

export default App;
