const data = require('../data/zoo_data');

const getEmployee = (id) => {
  if ('id' in id) {
    const pessoa = data.employees.find((employee) => employee.id === id.id);
    return pessoa;
  }
  return data.employees.find((employee) => {
    const funcionario = employee.firstName === id.name || employee.lastName === id.name;
    return funcionario;
  });
};

function trueOrFalse(id) {
  const idFalse = data.employees.some((element) => element.id === id.id);
  const nameFalse = data.employees.some((element) => {
    const verifyName = element.firstName === id.name || element.lastName === id.name;
    return verifyName;
  });
  console.log(nameFalse);
  if (idFalse === false && nameFalse === false) {
    return false;
  }
  return true;
}

const getSpecies = (id) => {
  const whatAnimalName = [];
  getEmployee(id).responsibleFor.forEach((animal) => {
    whatAnimalName.push(data.species.find((specie) => specie.id === animal).name);
  });
  return whatAnimalName;
};

const getSpeciesLocation = (id) => {
  if (id === 0) {
    return data.employees.reduce((acc, element) => {
      const speciesAll = element.responsibleFor.map((animal) => data.species.find((specie) => {
        const species = specie.id === animal;
        return species;
      }).name);
      acc.push(speciesAll);
      return acc;
    }, []);
  }
  const whatAnimalLocation = [];
  getEmployee(id).responsibleFor.forEach((animal) => {
    whatAnimalLocation.push(data.species.find((specie) => specie.id === animal).location);
  });
  return whatAnimalLocation;
};

function getAllEmployees(id) {
  return data.employees.reduce((acc, employee) => {
    const ss = {
      id: employee.id,
      fullName: `${employee.firstName} ${employee.lastName}`,
      species: employee.responsibleFor.map((animal) => data.species.find((specie) => {
        const speciesName = specie.id === animal;
        return speciesName;
      }).name),
      locations: employee.responsibleFor.map((animal) => data.species.find((specie) => {
        const speciesLocation = specie.id === animal;
        return speciesLocation;
      }).location),
    };
    acc.push(ss);
    return acc;
  }, []);
}

function getEmployeesCoverage(id = 0) {
  if (id === 0) {
    return getAllEmployees();
  }
  if (trueOrFalse(id) === false) {
    throw new Error('Informações inválidas');
  }
  return data.employees.reduce((acc, employee) => {
    acc.id = getEmployee(id).id;
    acc.fullName = `${getEmployee(id).firstName} ${getEmployee(id).lastName}`;
    acc.species = getSpecies(id);
    acc.locations = getSpeciesLocation(id);
    return acc;
  }, {});
}

console.log(getEmployeesCoverage());
module.exports = getEmployeesCoverage;
