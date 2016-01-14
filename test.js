var faker = require('faker');

var randomLat = (faker.random.number(180 * 10000) / 10000.0 - 90.0).toFixed(4);
var randomLong = faker.address.longitude();
var randomName = faker.name.findName(); // Rowan Nikolaus
var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
var randomCard = faker.helpers.createCard(); // random contact card containing many properties

console.log(faker.random.number(90 * 10000)/ 10000.0 - 90.0);
console.log(randomLat);
console.log(randomLong);
