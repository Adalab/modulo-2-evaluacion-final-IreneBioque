

function setInLocalStorage() {
  // the object is converted into a string
  const stringFavorites = JSON.stringify(favorites);
  // Save the array and the string locally
  localStorage.setItem('favorites', stringFavorites);
}


function getLocalStorage() {
  // Take the local array
  const localStorageShows = localStorage.getItem('favorites');
  // if null (nothing saved) call the api
  if (localStorageShows !== null) {
    const arrayFavorites = JSON.parse(localStorageShows);
    favorites = arrayFavorites;
    // Call function painfavorites so that favorites are painted when the page is reloaded.
    paintfavorites();
  }

}

//  Call LocalStorage here because we want it to be saved when the page reloads.
getLocalStorage();
