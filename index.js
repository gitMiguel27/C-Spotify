var accessToken = 'BQDyFq8HnA8VvPQE2CoCyEFWQGYZ9Udkhc1TR_NWhdI_upBZ2jmy_Wyf2I1O1C-SUHeE3xDPl5ghHiq0UWgeKfx1UdcjqSvI8FlwLyACWOan22pKxHczIlp61MdKM_lhNhJIlB4JsN8O-es';

let clickableDiv = document.getElementById('searchResults'); 

let artistId;

let form = document.getElementById('form');

form.addEventListener('submit', event => {
  event.preventDefault();
  removeAllChildNodes(clickableDiv);
  let searchArtist = event.target.aName.value;
  
  fetch(`https://api.spotify.com/v1/search?q=${searchArtist}&type=artist`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + accessToken
    }
  })
  .then(response => response.json())
  .then(artistsData => {
    // console.log(artistsData);
    let items = artistsData.artists.items;
    for(let i = 0; i < 3; i++) {
      renderEachArtistsData(items[i]);
    };
  });

  form.reset();
});


function renderEachArtistsData(element) {
  // console.log(element.name, element.images[0]);
  let elementDiv = document.createElement('div');
  
  let artistId = element.id;
  console.log(artistId);

  let img = document.createElement('img');
  img.src = element.images[0].url;

  let name = document.createElement('p');
  name.textContent = element.name;

  elementDiv.appendChild(name);
  elementDiv.appendChild(img);
  elementDiv.addEventListener('click', event => {
    // console.log('i was clicked!')
    fetch(`https://api.spotify.com/v1/artists/${artistId}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + accessToken
      }
    })
    .then(response => response.json())
    .then(artist => {
      console.log(artist);
    })
  })

  clickableDiv.append(elementDiv)
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}