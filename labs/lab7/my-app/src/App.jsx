import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

function App() {
  useEffect(() => {
    const data = [
      { id: 1, title: "Test Film 1", favorite: 1, watchdate: "2025", rate: 4 },
      { id: 2, title: "Test Film 2", favorite: 0, watchdate: "2026", rate: 5 },
    ];
    setAllFilms(data);
    setVisibleFilms(data);
  }, []);

  const [allFilms, setAllFilms] = useState([]);
  const [visibleFilms, setVisibleFilms] = useState([]);

  const filterFilms = (filterName) => {
    if (filterName == "all") {
      setVisibleFilms(allFilms);
    }
  };
  return (
    <>
      <Header></Header>
      <SideBar myFilter={filterFilms}></SideBar>
    </>
  );
}

export default App;
