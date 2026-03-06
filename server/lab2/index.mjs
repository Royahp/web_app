import { getAllFilms,getFavoriteFilms ,closeDB, getWatchedToday, getEarlierDate, getGreaterRank } from './FilmLibrary.mjs';

async function main() {
  try {
    const films = await getAllFilms();   // صبر می‌کند تا Promise تمام شود
    //console.log(films);                  // فیلم‌ها را چاپ می‌کند
    //console.log("\nFavorite films:");
    const favFilms = await getFavoriteFilms();
    //console.log(favFilms);
    //console.log("watched today:")
    const watch =await getWatchedToday();
    /*if (watch.length ==0)
      {console.log("nothing watched today")}
    else 
    {console.log(watch)}*/
   const erlier = await getEarlierDate();
   //console.log(erlier)
   const greaterRank = await getGreaterRank ();
   console.log(greaterRank)

    

  } catch (err) {
    console.error(err);                  // اگر خطا شد
  } finally {
    closeDB();                           // بستن دیتابیس
  }
  
}

main();