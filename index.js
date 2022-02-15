// var http = require("http");

//   /* Create an HTTP server to handle responses */

//   http.createServer(function(request, response) {
//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.write("Hello World");
//     response.end();
//   }).listen(8888);

var accessToken = 'BQAPcKN43KHJ12ZVjHKWOiypjvVPvSqpkWh-Pq8OgLWbKAXo9KsRcSHW-HSvq3Wy20lM_vi9uZ8jZEaHLxIl5HfbhBvboeIhMo3triRA9dVbKX1c2SvA5y3tVgs5BXZT0YHFSqgK3sXlXqY';

fetch('https://api.spotify.com/v1/search?q=Bad%20Bunny&type=artist', {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + accessToken
  }
})
// .then(response => response.json())
// .then(artistsData => {
//   console.log(artistsData);
//   // console.log(artistsData.artists.items)
//   let realBadBunny = artistsData.artists.items[0];
//   renderImage(realBadBunny);
// })

// function renderImage(realBadBunny) {
//   let div = document.createElement('div');
//   let img = document.createElement('img');
//   // debugger;
//   img.src = realBadBunny.images[0].url;

//   document.body.append(div);
//   div.appendChild(img);
// }

.then(response => response.json())
.then(artistsData => {
  // console.log(artistsData);
  // console.log(artistsData.artists);
  // console.log(artistsData.artists.items);
  let items = artistsData.artists.items;
  for(let i = 0; i < 3; i++) {
    renderEachArtistsData(items[i]);
  };
});

function renderEachArtistsData(element) {
  console.log(element.name, element.images[0]);
  let div = document.createElement('div');
  let img = document.createElement('img');
  let name = document.createElement('p');
  name.textContent = element.name;
  // debugger;
  img.src = element.images[0].url;

  document.body.append(div);
  div.appendChild(name);
  div.appendChild(img);
}