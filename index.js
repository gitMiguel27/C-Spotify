// var http = require("http");

//   /* Create an HTTP server to handle responses */

//   http.createServer(function(request, response) {
//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.write("Hello World");
//     response.end();
//   }).listen(8888);

var accessToken = 'BQC9KV7_gN7rxDH-BdNufDNUq4DQ0gq0k5PUs1UFwtUGvDGM_77oQRd0lXDy-goNYXcEiUhVxab11gUpKvpF78FfyDlsYSTegdUxBGLIK-f-EdFfQ22oG5CpFW7vuahVH8POzmZDWHeHgLg';

fetch('https://api.spotify.com/v1/search?q=Bad%20Bunny&type=artist', {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + accessToken
  }
})
.then(response => response.json())
.then(artists => {
  console.log(artists);
  renderImage(artists);
})

function renderImage(artists) {
  let div = document.createElement('div');
  let img = document.createElement('img');
  img.src = artists.items[0].images[0].url;

  document.body.appendChild(div);
  div.appendChild(img);
}