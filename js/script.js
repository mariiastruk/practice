"use strict";

const numberOfFilms = +prompt("Скільки фільмів ви вже переглянули?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("Останній перглянутий фільм?", ""),
    b = prompt("На скільки балів оцінете фільм?", ""),
    c = prompt("Останній перглянутий фільм?", ""),
    d = prompt("На скільки балів оцінете фільм?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
