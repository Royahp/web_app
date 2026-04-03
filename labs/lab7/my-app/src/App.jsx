import { useState, useEffect } from "react";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import FormFilm from "./components/FormFilm";
import { Container, Row, Col, Button } from "react-bootstrap";

function App() {
  const [allFilms, setAllFilms] = useState([]);
  const [visibleFilms, setVisibleFilms] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const data = [
      { id: 1, title: "Test Film 1", favorite: 1, watchdate: "2025", rate: 4 },
      { id: 2, title: "Test Film 2", favorite: 0, watchdate: "2026", rate: 5 },
    ];
    setAllFilms(data);
    setVisibleFilms(data);
  }, []);

  const filterFilms = (filterName) => {
    if (filterName === "all") {
      setVisibleFilms(allFilms);
    } else if (filterName === "fav") {
      setVisibleFilms(allFilms.filter((f) => f.favorite === 1));
    } else if (filterName === "rate") {
      setVisibleFilms(allFilms.filter((f) => f.rate === 5));
    }
  };

  const addFilm = (filmFromInput) => {
    const filmWithId = {
      ...filmFromInput,
      id: allFilms.length + 1,
    };

    setAllFilms((prev) => [...prev, filmWithId]);
    setVisibleFilms((prev) => [...prev, filmWithId]);
  };

  return (
    <Container fluid>
      <Header />

      <Row>
        {/* Sidebar */}
        <Col md={3}>
          <SideBar myFilter={filterFilms} />
        </Col>

        {/* Main */}
        <Col md={9}>
          {/* دکمه + */}
          {!showForm && <Button onClick={() => setShowForm(true)}>+</Button>}

          {/* فرم */}
          {showForm && <FormFilm addFilm={addFilm} setShowForm={setShowForm} />}

          {/* نمایش لیست */}
          {visibleFilms.map((f) => (
            <div key={f.id}>
              {f.title} | {f.watchdate} | {f.rate}
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
