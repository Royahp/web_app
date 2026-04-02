import { useState } from "react";
import { Button, Table } from "react-bootstrap";

function FormFilm(props) {
  const [film, setFilm] = useState({
    title: "",
    favorite: false,
    watchdate: "",
    rate: 0,
  });
  return (
    <>
      <Table>
        <thead>
          <tr>
            <td>title</td>
            <td>favorite</td>
            <td>date</td>
            <td>rate</td>
          </tr>
        </thead>
        <tbody>
          {props.myfilm.map((f) => (
            <tr key={f.id}>
              <td>{f.title}</td>
              <td>{f.favorite}</td>
              <td>{f.watchdate}</td>
              <td>{f.rate}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <input
        placeholder="Title"
        value={film.title}
        onChange={(e) => setFilm({ ...film, title: e.target.value })}
      ></input>
      <input
        placeholder="Favorite"
        value={film.favorite}
        onChange={(e) => setFilm({ ...film, favorite: e.target.favorite })}
      ></input>
      <input
        placeholder="watchDate"
        value={film.watchdate}
        onChange={(e) => setFilm({ ...film, watchdate: e.target.watchDate })}
      ></input>
      <input
        placeholder="Rating"
        value={film.rate}
        onChange={(e) => setFilm({ ...film, rate: e.target.rate })}
      ></input>
      <Button
        onClick={() => {
          props.addFilm(film);
          props.setShowForm(false);
        }}
      >
        add to films
      </Button>
    </>
  );
}
export default FormFilm;
