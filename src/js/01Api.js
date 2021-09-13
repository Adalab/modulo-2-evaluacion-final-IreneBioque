
function getApi() {
  let inputValue = input.value;
  let api = `//api.tvmaze.com/search/shows?q=${inputValue}`;
  return api;
}

function url() {
  let api = getApi();
  fetch(api)
    .then( response => response.json() )
    .then( dataApi => {
      shows = dataApi.map(data => {

        return {
          id: data.show.id,
          title: data.show.name,
          image: data.show.image
        };
      });
       // Call the function that paints HTML to be updated when I search for a result.
      paintHtml();
    });

}