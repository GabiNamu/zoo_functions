const data = require('../data/zoo_data');

function countAnimals(animal = null) {
  if (animal === null) {
    return data.species.reduce((acc, specie) => {
      const nome = specie.name;
      acc[nome] = specie.residents.length;
      return acc;
    }, {});
  }
  if (Object.keys(animal).includes('sex')) {
    const name = data.species.find((specie) => specie.name === animal.specie).residents;
    return name.filter((resident) => resident.sex === animal.sex).length;
  }
  return data.species.find((specie) => specie.name === animal.specie).residents.length;
}
console.log(countAnimals());

module.exports = countAnimals;
