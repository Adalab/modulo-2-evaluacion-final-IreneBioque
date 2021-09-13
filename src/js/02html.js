

function paintHtml() {
  console.log(shows);
  list.innerHTML = '';
  let favClass = '';

  for (const serie of shows) {
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
      const html = `<li class="js_li ${favClass} lishow" id="${idli}"><img src="${nullImage}" alt="covershow" class="lishow__image"><h3 class="lishow__title">${showName}</h3></li>`;
      list.innerHTML += html;
    } else {
      const showImage = serie.image.medium;
      const html = `<li class="js_li ${favClass} lishow" id="${idli}"><img src="${showImage}" alt="covershow" class="lishow__image"><h3 class="lishow__title">${showName}</h3></li>`;
      list.innerHTML += html;
    }
  }
  paintfavorites();
  listenShows();
}
function handleShow(ev) {
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
  paintHtml();
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