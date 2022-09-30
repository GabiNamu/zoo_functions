const data = require('../data/zoo_data');

function isManager(id) {
  const employee = data.employees.find((employe) => employe.id === id).firstName;
  // console.log(employee);
  if (employee === 'Burl' || employee === 'Ola' || employee === 'Stephanie') {
    return true;
  }
  if (employee === 'Emery') {
    return true;
  }
  return false;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const relatedEmployessFilter = data.employees.filter((employee) => {
    const relatedEmployees = employee.managers.find((element) => element === managerId);
    return relatedEmployees;
  });
  return relatedEmployessFilter.map((element) => `${element.firstName} ${element.lastName}`);
}

console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = { isManager, getRelatedEmployees };
