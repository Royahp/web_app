"use strict"
import dayjs from 'dayjs'

function Film (id,title,favorite=false,date,rating,userId=1){
    this.id = id ;
    this.title = title ;
    this.fav = favorite ;
    this.date = date ? dayjs(date) : null;   // ✅ این خط مهمه
    this.rate = rating ;
    this.userId = userId

}
const f1 = new Film (1, "Pulp Fiction" , true, "2025-03-17",5,1)
const f2 = new Film (2, "21 Grams" , true , "2025-03-10", 4, 1)
const f3 = new Film (3, "Star Wars" , false, null,null, 1)
Film.Date ? Film.Date.format("MMMM D, YYYY") : null

function Library(){
this.filmLibrary = [];

this.print = () => { //برای اینکه فرمت تاریخ موقع پرینت درست باشد 
  this.filmLibrary.forEach(film => {
    const d = film.date ? film.date.format(" YYYY,MMMM ,D") : null;
    const r = film.rate ?? null;

    console.log(`Id: ${film.id}, Title: ${film.title}, Favorite: ${film.fav}, Watch date: ${d}, Rating: ${r}, User id: ${film.userId}`);
  });
}

this.addFilm = (film) =>{
 this.filmLibrary.push(film)
}
this.sortByDate = () => {
  this.filmLibrary.sort((a, b) => {
    if (a.date === null) return 1;   // a بیاد آخر
    if (b.date === null) return -1;  // b بیاد آخر
    return a.date.diff(b.date);      // صعودی
  });
};
this.sortByRafting = () => {
     this.filmLibrary.sort((a, b) => b.rate - a.rate);
}
this.deleteFilm = (id) => {
    this.filmLibrary = this.filmLibrary.filter(f => f.id != id)
}
this.updateRating = (id ,newRate) => {
    this.filmLibrary = this.filmLibrary.map  (f => (f.id === id ? (f.rate = newRate, f) : f))
}

}
const lib = new Library()
lib.addFilm(f1);
lib.addFilm(f2);
lib.addFilm(f3);
console.log(lib)
lib.sortByDate();
console.log(lib)
lib.sortByRafting();
console.log(lib)
lib.deleteFilm(2);
console.log(lib)
lib.updateRating (3,4)
lib.print();
