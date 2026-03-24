import { Button, ListGroup } from "react-bootstrap";
import PropTypes from "prop-types";
function FilmList(props) {
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
    </>
  );
}
export default FilmList;
