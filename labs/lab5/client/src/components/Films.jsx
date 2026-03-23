import { ListGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';
function FilmList(props) {
  const { films } = props;

  return (
    <ListGroup>
      {films.map(film => (
        <FilmRow film={film} key={film.id} />
      ))}
    </ListGroup>
  );
}
export default FilmList