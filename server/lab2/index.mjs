import { getAllFilms,getFavoriteFilms ,closeDB } from './FilmLibrary.mjs';

async function main() {
  try {
    const films = await getAllFilms();   // صبر می‌کند تا Promise تمام شود
    console.log(films);                  // فیلم‌ها را چاپ می‌کند
    console.log("\nFavorite films:");
    const favFilms = await getFavoriteFilms();
    console.log(favFilms);

  } catch (err) {
    console.error(err);                  // اگر خطا شد
  } finally {
    closeDB();                           // بستن دیتابیس
  }
  
}

main();