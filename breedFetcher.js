const request = require('request');
const args = process.argv[2];
request(`https://api.thecatapi.com/v1/breeds/search?q=${args}`, (err, response, body) => {
  if (err) {
    console.log(`ERROR: ${err}`);
    return;
  }

  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log("NOT FOUND");
  } else {
    console.log(data);
    console.log(data[0].description);
  }
});