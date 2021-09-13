

function paintHtml() {
  console.log(shows);
  list.innerHTML = '';
  let favClass = '';

  for (const show of shows) {
    // Call the function isFavorite which returns true or false, if true it adds the selected class, if not it does not add a class.
    const isFav = isFavorite(show);
    if (isFav) {
      favClass = 'selected';
    } else {
      favClass = '';
    }
    const showName = show.title;
    const showImageNull = show.image;
    const nullImage = 'https://via.placeholder.com/210x295/ffffff/666666/?text=TV';
    const idli = show.id;
    if (showImageNull === null) {
      const html = `<li class="js_li ${favClass} lishow" id="${idli}"><img src="${nullImage}" alt="covershow" class="lishow__image"><h3 class="lishow__title">${showName}</h3></li>`;
      list.innerHTML += html;
    } else {
      const showImage = show.image.medium;
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
  // if I get back that favoritesFound is -1 (is not there), add it
  if (favoritesFound === -1) {
    favorites.push(showClicked);
  } else {
    // if it returns anything other than -1 (is there), deletes it.
    favorites.splice(favoritesFound, 1);
  }
  paintHtml();
  setInLocalStorage();
}
function listenShows() {
  const listShows = document.querySelectorAll('.js_li');
  for (let li of listShows) {
    li.addEventListener('click', handleShow);
  }
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