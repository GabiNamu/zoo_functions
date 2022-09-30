const data = require('../data/zoo_data');

function countEntrants(entrants = []) {
  // if (Array.isArray(entrants)) {
    return entrants.reduce((acc, entrant) => {
      if (entrant.age < 18) {
        acc.child += 1;
      }
      if (entrant.age >= 18 && entrant.age < 50) {
        acc.adult += 1;
      }
      if (entrant.age >= 50) {
        acc.senior += 1;
      }
      return acc;
    }, { child: 0, adult: 0, senior: 0 });
//   }
//  return 0;
}
// console.log(countEntrants({}));

function calculateEntry(entrants = []) {
  if (entrants === []) {
    return 0;
  }
  if (Array.isArray(entrants)) {
    const child = countEntrants(entrants).child * data.prices.child;
    console.log(child);
    const adult = countEntrants(entrants).adult * data.prices.adult;
    const senior = countEntrants(entrants).senior * data.prices.senior;
    const precos = [child, adult, senior];
    return precos.reduce((acc, preco) => acc + preco, 0);
  }
  return 0;
}
console.log(calculateEntry([]));

module.exports = { calculateEntry, countEntrants };
