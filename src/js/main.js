'use strict';

const input = document.querySelector('.js_search');
const button = document.querySelector('.js_button');
const favourite = document.querySelector('.js_favourite');
const form = document.querySelector('.js_form');
let data = [];

fetch(`//api.tvmaze.com/search/shows?q=:${input.value}`)
  .then( response => response.json() )
  .then( dataApi => {
    data = dataApi;

    // render();
  } );

function render() {
  console.log(data);
  const dataFilter = data
      .filter(data => data.name.toLocaleLowerCase().includes(input.value))
    .map(serieData => serieData.name)
  favourite.innerHTML = '';
  for (const data of dataFilter) {
    const html = `<li>${data}</li>`;

    favourite.innerHTML += html;
  }
}

function handleType() {
  render();
}

input.addEventListener('keyup', handleType);
form.addEventListener('submit', (event) => event.preventDefault() );
// function handleSearch(){
//   console.log(inputSearch);
// }



// button.addEventListener('click', handleSearch);



