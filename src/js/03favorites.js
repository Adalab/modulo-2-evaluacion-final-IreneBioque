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
   
    console.log(favorites);
    paintHtml();
    paintfavorites();
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
  
  
  function paintfavorites() {
    favoritesList.innerHTML = '';
  
    for (let favorite of favorites) {
      const title = favorite.title;
      const showImageNull = favorite.image;
      const id = favorite.id;
      const nullImage = 'https://via.placeholder.com/210x295/ffffff/666666/?text=TV';
      if (showImageNull === null) {
        const html = `<li class="js_listfavorite" id="${id}"><h3>${title}</h3><img src="${nullImage}" alt="covershow"></li>`;
        favoritesList.innerHTML += html;
      } else {
        const image = favorite.image.medium;
        const html = `<li class="js_listfavorite" id="${id}"><h3>${title}</h3><img src="${image}" alt="covershow"></li>`;
        favoritesList.innerHTML += html;
      }
    }
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