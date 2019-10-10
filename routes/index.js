const fs = require('fs');
let routes = [];

// dynamic load

fs.readdirSync(__dirname)
  .filter(file => file !== 'index.js')
  .forEach(file => routes = routes.concat(require(`./${file}`)));

module.exports = routes;

/**
 // It's also can be export statically

 const calc = require('./calc');
 const user = require('./user');

 module.exports = [].concat(calc, user);

*/
