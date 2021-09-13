
function handleClose(ev){
  const selectedShow = parseInt(ev.currentTarget.id);
  const favoritesFound = favorites.findIndex((fav) => {
    return fav.id === selectedShow;
  });
  if (favoritesFound !== -1) {
    favorites.splice(favoritesFound, 1);
  }

  paintHtml();
  // Se llama a localStorage para que vaya guardando que se ha borrado
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

  // Pinto HTML y favoritos y guardo en LocalStorage el array vacio
  setInLocalStorage();
  paintHtml();
}
buttonReset.addEventListener('click', handleReset);


