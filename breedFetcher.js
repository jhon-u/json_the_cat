const request = require('request');

const breedFetcher = (bread) => {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${bread}`;
  request(url, function(error, response, body) {
    if (error) {
      return console.log(error);
    }
    
    const data = JSON.parse(body);
    if (data.length === 0) {
      return console.log('The requested breed was not found.');
    }
    console.log(data[0].description);
  });
};

const [bread] = process.argv.slice(2);
breedFetcher(bread);