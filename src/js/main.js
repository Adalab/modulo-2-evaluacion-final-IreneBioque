

function handleClose(ev){
  const selectedShow = parseInt(ev.currentTarget.dataset.id);
  const favoritesFound = favorites.findIndex((fav) => {
    return fav.id === selectedShow;
  });
  if (favoritesFound !== -1) {
    favorites.splice(favoritesFound, 1);
  }

  paintHtml();
  // LocalStorage is called to save what has been deleted.
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

  // Paint HTML and favourites and save the empty array in LocalStorage
  setInLocalStorage();
  paintHtml();
}
buttonReset.addEventListener('click', handleReset);


