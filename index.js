var accessToken = 'BQD79_Y8fDhdLJJvpdTlKzWXf4NGphMnSRU79DR-6E9g1C1Fqq_ySwptgiuf1JoPoaUQ1TYBk_ToDGimpOv5wfcQH-Evu_8HD7Gbz04f_Ppdr3yYSplY3l-eFGMz-BhdmwTblwCIi1bNxDVmmYkG4w';

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
  elementDiv.className = 'searchResults';
  let artistId = element.id;
  console.log(artistId);

  let img = document.createElement('img');
  img.src = element.images[0].url;
  
  let name = document.createElement('p');
  name.textContent = element.name;

  elementDiv.appendChild(img);
  elementDiv.appendChild(name);
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
      let artistName = artist.name;
    })
  })

  clickableDiv.append(elementDiv)
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}