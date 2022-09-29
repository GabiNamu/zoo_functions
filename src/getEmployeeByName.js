const data = require('../data/zoo_data');

function getEmployeeByName(employeeName = null) {
  if (employeeName === null) {
    return {};
  }
  return data.employees.find((employee) => (
    employee.firstName === employeeName || employee.lastName === employeeName));
}
console.log(getEmployeeByName());
module.exports = getEmployeeByName;
