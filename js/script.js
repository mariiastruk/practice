"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Скільки фільмів ви вже переглянули?", "");

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Скільки фільмів ви вже переглянули?", "");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt("Останній перглянутий фільм?", "").trim(),
            b = prompt("На скільки балів оцінете фільм?", "");
        
        if (a != null && b != null && a != "" && b != "" && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log("done");
        } else {
            console.log("error");
            i--;
        }
    }
}

// rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
    console.log("Переглянуто дуже мало фільмів");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Стандартний глядач");
    } else if (personalMovieDB.count >= 30) {
        console.log("Ви кіноман");
    } else {
        console.log("Помилка");
    }
}

// detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        // const genre = prompt(`Ваш улюблений жанр під номером ${i}`);
        // personalMovieDB.genres[i - 1] = genre;
        personalMovieDB.genres[i - 1] = prompt(`Ваш улюблений жанр під номером ${i}`);
    }
}

writeYourGenres();