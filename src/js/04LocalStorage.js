
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

console.log(getLocalStorage);