'use strict';

const input = document.querySelector('.js_search');
const button = document.querySelector('.js_button');
const favourite = document.querySelector('.js_favourite');
// const form = document.querySelector('.js_form');
let data = [];


function getAPI() {
  let inputValue = input.value;
  let api = '//api.tvmaze.com/search/shows?q=' + inputValue;
  return api;
}

function url() {
  let api = getAPI();
  fetch(api)
    .then( response => response.json() )
    .then( dataApi => {
      data = dataApi;
    });
  
}

function paintHtml() {
  console.log(data);
  favourite.innerHTML = '';
  for (const serie of data) {
    const showName = serie.show.name;
    const showImageNull = serie.show.image;
    const nullImage = "https://via.placeholder.com/210x295/ffffff/666666/?text=TV";
    if (showImageNull === null) {
      const html = `<li><h3>${showName}</h3><img src="${nullImage}" alt=""></li>`;
      favourite.innerHTML += html;
    } else {
      const showImage = serie.show.image.medium;
      const html = `<li><h3>${showName}</h3><img src="${showImage}" alt=""></li>`;
      favourite.innerHTML += html;
    } 
  }

}

function handleType(ev) {
  ev.preventDefault();
  paintHtml();
  url();
}

button.addEventListener('click', handleType);



