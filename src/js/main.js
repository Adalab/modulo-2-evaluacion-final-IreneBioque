'use strict';

const input = document.querySelector('.js_search');
const button = document.querySelector('.js_button');
const list = document.querySelector('.js_list');
const favoritesList = document.querySelector('.js_favorites');
// const form = document.querySelector('.js_form');
const buttonReset = document.querySelector('.js_reset');
let shows = [];
let favorites = [];

function getApi() {
  let inputValue = input.value;
  let api = `//api.tvmaze.com/search/shows?q=${inputValue}`;
  return api;
}

function url() {
  let api = getApi();
  fetch(api)
    .then( response => response.json() )
    .then( dataApi => {
      //shows = dataApi;
      shows = dataApi.map(data => {

        return {
          id: data.show.id,
          title: data.show.name,
          image: data.show.image
        };
      });
      paintHtml();
    });

}
function paintHtml() {
  console.log(shows);
  list.innerHTML = '';
  let favClass = '';

  for (const serie of shows) {
    // debugger;
    const isFav = isFavorite(serie);
    if (isFav) {
      favClass = 'selected';
    } else {
      favClass = '';
    }
    const showName = serie.title;
    const showImageNull = serie.image;
    const nullImage = 'https://via.placeholder.com/210x295/ffffff/666666/?text=TV';
    const idli = serie.id;
    if (showImageNull === null) {
      const html = `<li class="js_li ${favClass}" id="${idli}"><h3>${showName}</h3><img src="${nullImage}" alt="covershow"></li>`;
      list.innerHTML += html;
    } else {
      const showImage = serie.image.medium;
      const html = `<li class="js_li ${favClass}" id="${idli}"><h3>${showName}</h3><img src="${showImage}" alt="covershow"></li>`;
      list.innerHTML += html;
    }
  }
  paintfavorites();
  listenShows();
}
function handleShow(ev) {
  //debugger;
  const selectedShow = parseInt(ev.currentTarget.id);
  const showClicked = shows.find((show) => {
    return show.id === selectedShow;
  });
  const favoritesFound = favorites.findIndex((fav) => {
    return fav.id === selectedShow;
  });
  if (favoritesFound === -1) {
    favorites.push(showClicked);
  } else {
    favorites.splice(favoritesFound, 1);
  }

  console.log(favorites);
  paintHtml();
  paintfavorites();
  setInLocalStorage();
}

function isFavorite(show) {
  const favoriteFound = favorites.find((fav) => {
    return fav.id === show.id;
  });
  if (favoriteFound === undefined) {
    return false;
  } else {
    return true;
  }
}


function paintfavorites() {
  favoritesList.innerHTML = '';

  for (let favorite of favorites) {
    const title = favorite.title;
    const showImageNull = favorite.image;
    const id = favorite.id;
    const nullImage = 'https://via.placeholder.com/210x295/ffffff/666666/?text=TV';
    if (showImageNull === null) {
      const html = `<li class="js_listfavorite" id="${id}"><img src="${nullImage}" alt="covershow" class="imagefavorite"><h3>${title}</h3><i class="fas fa-times-circle js_deleted deleted" id="${id}"></li>`;
      favoritesList.innerHTML += html;
    } else {
      const image = favorite.image.medium;
      const html = `<li class="js_listfavorite" id="${id}"><img src="${image}" alt="covershow" class="imagefavorite"><h3>${title}</h3><i class="fas fa-times-circle js_deleted deleted" id="${id}"></i></li>`;
      favoritesList.innerHTML += html;
    }
  }
  listenCloses();
}

function listenShows() {
  const listShows = document.querySelectorAll('.js_li');
  for (let li of listShows) {
    li.addEventListener('click', handleShow);
  }
}

function handleType(ev) {
  ev.preventDefault();
  url();
}



function handleClose(ev){
  //debugger;
  const selectedShow = parseInt(ev.currentTarget.id);
  const favoritesFound = favorites.findIndex((fav) => {
    return fav.id === selectedShow;
  });
  if (favoritesFound !== -1) {
    favorites.splice(favoritesFound, 1);
  }
  paintfavorites();
  setInLocalStorage();
}

function listenCloses(){
  const listCloses = document.querySelectorAll('.js_deleted');
  for (let close of listCloses) {
    close.addEventListener('click',handleClose);
  }
}

function handleReset(){
  const favoritesFound = favorites.findIndex((fav) => {
    return fav.id;
  });
  if (favoritesFound !== -1) {
    favorites.splice(0);
  }
  console.log(favorites);
  setInLocalStorage();
  paintfavorites();
}


buttonReset.addEventListener('click', handleReset);
button.addEventListener('click', handleType);
function setInLocalStorage() {
  // se convierte el objeto en un string
  const stringFavorites = JSON.stringify(favorites);
  // guardo el array y el string en local
  localStorage.setItem('favorites', stringFavorites);
}


function getLocalStorage() {
  // cojo el array de local
  const localStorageShows = localStorage.getItem('favorites');
  // si es nulo (no hay nada guardado) llamo a la api
  if (localStorageShows !== null) {
    const arrayFavorites = JSON.parse(localStorageShows);
    favorites = arrayFavorites;
    paintfavorites();
  }

}
getLocalStorage();
