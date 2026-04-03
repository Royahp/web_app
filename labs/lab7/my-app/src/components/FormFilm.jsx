import { useState } from "react";
import { Button } from "react-bootstrap";

function FormFilm(props) {
  const [film, setFilm] = useState({
    title: "",
    favorite: false,
    watchdate: "",
    rate: 0,
  });

  return (
    <>
      {/* TITLE */}
      <input
        placeholder="Title"
        value={film.title}
        onChange={(e) => setFilm({ ...film, title: e.target.value })}
      />

      {/* FAVORITE */}
      <input
        type="checkbox"
        checked={film.favorite}
        onChange={(e) => setFilm({ ...film, favorite: e.target.checked })}
      />

      {/* DATE */}
      <input
        type="date"
        value={film.watchdate}
        onChange={(e) => setFilm({ ...film, watchdate: e.target.value })}
      />

      {/* RATE */}
      <input
        type="number"
        min={0}
        max={5}
        value={film.rate}
        onChange={(e) => setFilm({ ...film, rate: Number(e.target.value) })}
      />

      {/* BUTTON */}
      <Button
        onClick={() => {
          props.addFilm(film);

          setFilm({
            title: "",
            favorite: false,
            watchdate: "",
            rate: 0,
          });

          props.setShowForm(false);
        }}
      >
        add to films
      </Button>
    </>
  );
}

export default FormFilm;
