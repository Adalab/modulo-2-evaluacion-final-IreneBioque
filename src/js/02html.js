function paintHtml() {
    console.log(shows);
    list.innerHTML = '';
    let favClass = '';
    
    for (const serie of shows) {
      // debugger;
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
        const html = `<li class="js_li ${favClass}" id="${idli}"><h3>${showName}</h3><img src="${nullImage}" alt="covershow"></li>`;
        list.innerHTML += html;
      } else {
        const showImage = serie.image.medium;
        const html = `<li class="js_li ${favClass}" id="${idli}"><h3>${showName}</h3><img src="${showImage}" alt="covershow"></li>`;
        list.innerHTML += html;
      }
    }
    paintfavorites();
    listenShows();
  }