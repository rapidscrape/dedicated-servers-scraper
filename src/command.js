const util = require('util');
const fs = require('fs');
const scrape = require('./scrape');

scrape(process.argv[2])
  .then(data => console.log(util.inspect(data, false, null, true)));
