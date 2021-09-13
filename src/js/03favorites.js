

function paintfavorites() {
  favoritesList.innerHTML = '';

  for (let favorite of favorites) {
    const title = favorite.title;
    const showImageNull = favorite.image;
    const id = favorite.id;
    const nullImage = 'https://via.placeholder.com/210x295/ffffff/666666/?text=TV';
    if (showImageNull === null) {
      const html = `<li class="js_listfavorite lifavorite" id="${id}"><img src="${nullImage}" alt="covershow" class="lifavorite__image"><h3 class="lifavorite__title">${title}</h3><i class="fas fa-times-circle js_deleted lifavorite__deleted" id="${id}"></li>`;
      favoritesList.innerHTML += html;
    } else {
      const image = favorite.image.medium;
      const html = `<li class="js_listfavorite lifavorite" id="${id}"><img src="${image}" alt="covershow" class="lifavorite__image"><h3 class="lifavorite__title">${title}</h3 class="lifavorite__title"><i class="fas fa-times-circle js_deleted lifavorite__deleted" id="${id}"></i></li>`;
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

button.addEventListener('click', handleType);