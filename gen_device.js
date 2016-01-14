var faker = require('faker');
var fs = require('fs');
var Chance = require('chance');
var chance = new Chance();

var randomUUID = {
uuid: faker.random.uuid()
//uuid, macid, ip_addr
};

// generate Basestation UUID's
var bigSet = [];

var numBaseStations = +process.argv[2]

for(i = 1; i <= numBaseStations; i++){

var randomDevice = {
  uuid: faker.random.uuid(),
  macid: faker.internet.mac(),
  ip_addr: chance.ipv6()
};

  bigSet.push(randomDevice);
};

fs.writeFile(__dirname + '/device_list.json',  JSON.stringify({
uuid: bigSet}), function() {
  console.log("Basestations generated successfully!");
});
