

export async function getFilms() {
  const response = await fetch("/api/films");
  const films = await response.json();
  return films;
}