'use strict';

const input = document.querySelector('.js_search');
const button = document.querySelector('.js_button');
const list = document.querySelector('.js_list');
// const form = document.querySelector('.js_form');
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
  /*const showName = shows.map(nameShow => nameShow.name);
  const showImage = shows.map(imageShow => imageShow.image);
  const idli = serie.show.id;
  console.log(showName);*/
  for (const serie of shows) {
    //  debugger;
    const showName = serie.title;
    const showImageNull = serie.image;
    const nullImage = 'https://via.placeholder.com/210x295/ffffff/666666/?text=TV';
    const idli = serie.id;
    if (showImageNull === null) {
      const html = `<li class="js_li" id="${idli}"><h3>${showName}</h3><img src="${nullImage}" alt="covershow"></li>`;
      list.innerHTML += html;
    } else {
      const showImage = serie.image.medium;
      const html = `<li class="js_li" id="${idli}"><h3>${showName}</h3><img src="${showImage}" alt="covershow"></li>`;
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
 
  console.log(favorites)
 
}
  
function paintfavorites() {
  
}

function listenShows() {
  const listShows = document.querySelectorAll('.js_li');
  console.log(listShows);
  for (let li of listShows) {
    li.addEventListener('click', handleShow);
  }
}

function handleType(ev) {
  ev.preventDefault();
  url();
}

button.addEventListener('click', handleType);



