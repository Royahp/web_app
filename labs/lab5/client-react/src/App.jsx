import { useEffect, useState } from 'react';

function App() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/films')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setFilms(data);
      });
  }, []);

  return (
    <div>
      <h1>Film Library</h1>

      {films.map(film => (
        <div key={film.id}>
          <h3>{film.title}</h3>
          <p>Rating: {film.rating ?? 'N/A'}</p>
        </div>
      ))}
    </div>
  );
}

export default App;