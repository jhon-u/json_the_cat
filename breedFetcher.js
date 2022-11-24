const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, function(error, response, body) {
    if (error) {
      return callback(error, null);
    }
    
    const data = JSON.parse(body);
    
    if (data.length === 0) {
      const error = 'The requested breed was not found.';
      return callback(error, null);
    }
  
    return callback(null, data[0].description);
  });
};

module.exports = { fetchBreedDescription };