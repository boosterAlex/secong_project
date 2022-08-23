'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const movieDB = {
    movies: [
      'Логан',
      'Лига справедливости',
      'Ла-ла лэнд',
      'Одержимость',
      'Скотт Пилигрим против ...',
    ],
  };

  // =========== Get Elements ==================//

  const poster = document.querySelector('.promo__bg');
  const genre = poster.querySelector('.promo__genre');
  const movieList = document.querySelector('.promo__interactive-list');
  const reclamImg = document.querySelectorAll('.promo__adv img');
  const addForm = document.querySelector('form.add');
  const addInput = addForm.querySelector('.adding__input');
  const addCheck = addForm.querySelector('[type = "checkbox"]');

  // ================ Functions ====================//

  const deleteReclam = (arr) => {
    arr.forEach((el) => {
      el.remove();
    });
  };
  const makeChanges = () => {
    genre.innerText = 'ДРАМА';

    poster.style.backgroundImage = 'url(img/bg.jpg)';
  };

  const sortBase = (arr) => {
    arr.sort();
  };

  // ============ Create DB ==============//

  function createMovieList(films, parent) {
    parent.innerHTML = '';
    sortBase(films);
    films.forEach((el, i) => {
      parent.innerHTML += `<li class="promo__interactive-item">${i + 1}. ${el}
    <div class="delete"></div>
    </li>`;
    });

    document.querySelectorAll('.delete').forEach((btn, i) => {
      btn.addEventListener('click', () => {
        btn.parentElement.remove();
        movieDB.movies.splice(i, 1);
        createMovieList(films, parent);
      });
    });
  }
  // ========== Function call ============//

  makeChanges();
  deleteReclam(reclamImg);
  createMovieList(movieDB.movies, movieList);

  // ============ Form Work ================//

  addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let newFilm = addInput.value;
    const favorite = addCheck.checked;
    if (newFilm.length >= 21) {
      newFilm = `${newFilm.slice(0, 22)} ...`;
    }

    if (newFilm) {
      if (favorite) {
        console.log('"Добавляем любимый фильм"');
      }
      movieDB.movies.push(newFilm);
      sortBase(movieDB.movies);
      createMovieList(movieDB.movies, movieList);
      e.target.reset();
    }
  });
});
