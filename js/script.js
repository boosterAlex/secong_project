/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
  movies: [
    'Логан',
    'Лига справедливости',
    'Ла-ла лэнд',
    'Одержимость',
    'Скотт Пилигрим против...',
  ],
};

// const reclam = document.querySelector('.promo__adv');
const poster = document.querySelector('.promo__bg');
const genre = poster.querySelector('.promo__genre');
const movieList = document.querySelector('.promo__interactive-list');
const reclamImg = document.querySelectorAll('.promo__adv img');
// let ulNew = document.createElement('ul');

reclamImg.forEach((el) => {
  el.remove();
});

genre.innerText = 'ДРАМА';

// poster.style.background = 'url(img/bg.jpg) center/cover no-repeat';
poster.style.backgroundImage = 'url(img/bg.jpg)';

movieList.innerHTML = '';

movieDB.movies.sort();

console.log(movieDB.movies);

movieDB.movies.forEach((el, i) => {
  console.log(`<li class="promo__interactive-item">${i + 1}  ${el}
    <div class="delete"></div>
    </li>`);
  movieList.innerHTML += `<li class="promo__interactive-item">${i + 1}. ${el}
  <div class="delete"></div>
  </li>`;
});

// movieDB.movies.forEach((el) => {
//   movieList.innerHTML = `<li class="promo__interactive-item">${el}
//     <div class="delete"></div>
// </li>
// `;
// });
