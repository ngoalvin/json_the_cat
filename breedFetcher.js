const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (err, response, body) => {
    if (err) {
      callback(err, body);
      return;
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      callback(err, ("NOT FOUND"));
    } else {
      callback(err, (data[0].description));
    }
  });
};

module.exports = {fetchBreedDescription};

