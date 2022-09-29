const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids === null) {
    return [];
  }
  return ids.map((id) => data.species.find((specie) => specie.id === id));
}
// const species = data.species.find((specie) => specie.id === ids).name;
//   return species;

console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));

module.exports = getSpeciesByIds;
