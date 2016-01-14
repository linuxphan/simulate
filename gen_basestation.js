var faker = require('faker');
var fs = require('fs');

// generate Basestation UUID's
var bigSet = [];

var numBaseStations = +process.argv[2]

for(i = 1; i <= numBaseStations; i++){
var randomBase = {
  uuid: faker.random.uuid(),
{
  macid: faker.internet.mac(),
  latitude: faker.address.latitude(),
  longitude: faker.address.longitude()
}
};

  bigSet.push(randomBase);
};

fs.writeFile(__dirname + '/basestation_list.json',  JSON.stringify({
uuid: bigSet}), function() {
  console.log("Basestations generated successfully!");
});
