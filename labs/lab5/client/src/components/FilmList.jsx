import { Button, ListGroup } from "react-bootstrap";
import PropTypes from "prop-types";
import { useState } from "react";

function FilmList(props) {
  const [title, setTitle] = useState("");
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Favorite</th>
            <th>WatchDate</th>
            <th>Rate</th>
          </tr>
        </thead>
        <tbody>
          {props.films.map((film) => (
            <tr key={film.id}>
              <td>{film.title}</td>
              <td>{film.favorite ? "yes" : "no"}</td>
              <td>{film.watchdate}</td>
              <td>{film.rate}</td>
              <td>
                <Button onClick={() => props.onDelete(film.id)}>
                  <i className="bi bi-trash" />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="film title"
        />
        <Button onClick={() => props.onAdd(title)}>
          <i className="bi bi-file-plus"></i>
        </Button>
      </div>
    </>
  );
}
export default FilmList;
