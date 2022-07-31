"use strict";

const numberOfFilms = +prompt("Скільки фільмів ви вже переглянули?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt("Останній перглянутий фільм?", ""),
        b = prompt("На скільки балів оцінете фільм?", "");
    
    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log("done");
    } else {
        console.log("error");
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log("Переглянуто дуже мало фільмів");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Стандартний глядач");
} else if (personalMovieDB.count >= 30) {
    console.log("Ви кіноман");
} else {
    console.log("Помилка");
}

console.log(personalMovieDB);
