const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const pessoa = data.employees.find((employee) => employee.id === id);
  const primeiroAnimal = data.species.find((specie) => specie.id === pessoa.responsibleFor[0]);
  const reduceAnimal = primeiroAnimal.residents.reduce((acc, resident) => {
    if (acc.age < resident.age) {
      return resident;
    }
    return acc;
  });
  return Object.values(reduceAnimal);
}
console.log(getOldestFromFirstSpecies('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));

module.exports = getOldestFromFirstSpecies;
