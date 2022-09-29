const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const name = data.species.find((specie) => specie.name === animal);
  return name.residents.every((resident) => resident.age >= age);
}
console.log(getAnimalsOlderThan('lions', 7));
module.exports = getAnimalsOlderThan;
