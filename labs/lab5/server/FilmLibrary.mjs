async function getFilms() {
    const response = await fetch('http://localhost:3000/films');
    const films = await response.json();
    return films;
}