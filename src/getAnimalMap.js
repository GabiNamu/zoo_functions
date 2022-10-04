const data = require('../data/zoo_data');

const locationsArray = ['NE', 'NW', 'SE', 'SW'];
function www() {
  return locationsArray.reduce((acc, element) => {
    acc[element] = data.species.filter((specie) => {
      const sp = specie.location.includes(element);
      return sp;
    }).map((specie) => specie.name);
    return acc;
  }, {});
}
console.log(www());

function withResidents(name) {
  return locationsArray.reduce((acc, element) => {
    acc[element] = data.species.filter((specie) => specie.location.includes(element)).map((ele) => {
      const re = ele.residents;
      return re;
    });
    return acc;
  }, {});
}
const neZero = withResidents().NE[0].reduce((acc, element) => {
  acc.lions.push(element.name);
  return acc;
}, { lions: [] });

const neOne = withResidents().NE[1].reduce((acc, element) => {
  acc.giraffes.push(element.name);
  return acc;
}, { giraffes: [] });

const nwZero = withResidents().NW[0].reduce((acc, element) => {
  acc.tigers.push(element.name);
  return acc;
}, { tigers: [] });

const nwOne = withResidents().NW[1].reduce((acc, element) => {
  acc.bears.push(element.name);
  return acc;
}, { bears: [] });

const nwTwo = withResidents().NW[2].reduce((acc, element) => {
  acc.elephants.push(element.name);
  return acc;
}, { elephants: [] });

const seZero = withResidents().SE[0].reduce((acc, element) => {
  acc.penguins.push(element.name);
  return acc;
}, { penguins: [] });

const seOne = withResidents().SE[1].reduce((acc, element) => {
  acc.otters.push(element.name);
  return acc;
}, { otters: [] });

const swZero = withResidents().SW[0].reduce((acc, element) => {
  acc.frogs.push(element.name);
  return acc;
}, { frogs: [] });

const swOne = withResidents().SW[1].reduce((acc, element) => {
  acc.snakes.push(element.name);
  return acc;
}, { snakes: [] });

const femaleNe = withResidents().NE[0].filter((element) => {
  const fe = element.sex === 'female';
  return fe;
}).map((element) => element.name);
const femaleNeOne = withResidents().NE[1].filter((element) => {
  const fe = element.sex === 'female';
  return fe;
}).map((element) => element.name);
const femaleNw = withResidents().NW[0].filter((element) => {
  const fe = element.sex === 'female';
  return fe;
}).map((element) => element.name);
const femaleNwOne = withResidents().NW[1].filter((element) => {
  const fe = element.sex === 'female';
  return fe;
}).map((element) => element.name);
const femaleNwTwo = withResidents().NW[2].filter((element) => {
  const fe = element.sex === 'female';
  return fe;
}).map((element) => element.name);
const femaleSe = withResidents().SE[0].filter((element) => {
  const fe = element.sex === 'female';
  return fe;
}).map((element) => element.name);
const femaleSeOne = withResidents().SE[1].filter((element) => {
  const fe = element.sex === 'female';
  return fe;
}).map((element) => element.name);
const femaleSw = withResidents().SW[0].filter((element) => {
  const fe = element.sex === 'female';
  return fe;
}).map((element) => element.name);
const femaleSwOne = withResidents().SW[1].filter((element) => {
  const fe = element.sex === 'female';
  return fe;
}).map((element) => element.name);

const maleNe = withResidents().NE[0].filter((element) => {
  const ma = element.sex === 'male';
  return ma;
}).map((element) => element.name);
const maleNeOne = withResidents().NE[1].filter((element) => {
  const ma = element.sex === 'male';
  return ma;
}).map((element) => element.name);
const maleNw = withResidents().NW[0].filter((element) => {
  const ma = element.sex === 'male';
  return ma;
}).map((element) => element.name);
const maleNwOne = withResidents().NW[1].filter((element) => {
  const ma = element.sex === 'male';
  return ma;
}).map((element) => element.name);
const maleNwTwo = withResidents().NW[2].filter((element) => {
  const ma = element.sex === 'male';
  return ma;
}).map((element) => element.name);
const maleSe = withResidents().SE[0].filter((element) => {
  const ma = element.sex === 'male';
  return ma;
}).map((element) => element.name);
const maleSeOne = withResidents().SE[1].filter((element) => {
  const ma = element.sex === 'male';
  return ma;
}).map((element) => element.name);
const maleSw = withResidents().SW[0].filter((element) => {
  const ma = element.sex === 'male';
  return ma;
}).map((element) => element.name);
const maleSwOne = withResidents().SW[1].filter((element) => {
  const ma = element.sex === 'male';
  return ma;
}).map((element) => element.name);

const animalObj = {
  NE: [neZero, neOne],
  NW: [nwZero, nwOne, nwTwo],
  SE: [seZero, seOne],
  SW: [swZero, swOne],
};

const animalObjFemale = {
  NE: [{ lions: femaleNe }, { giraffes: femaleNeOne }],
  NW: [{ tigers: femaleNw }, { bears: femaleNwOne }, { elephants: femaleNwTwo }],
  SE: [{ penguins: femaleSe }, { otters: femaleSeOne }],
  SW: [{ frogs: femaleSw }, { snakes: femaleSwOne }],
};

const animalObjMale = {
  NE: [{ lions: maleNe }, { giraffes: maleNeOne }],
  NW: [{ tigers: maleNw }, { bears: maleNwOne }, { elephants: maleNwTwo }],
  SE: [{ penguins: maleSe }, { otters: maleSeOne }],
  SW: [{ frogs: maleSw }, { snakes: maleSwOne }],
};

function verifySorted(options) {
  if (Object.keys(options).includes('sex') && options.sex === 'female') {
    const animalObjFemaleSort = {
      NE: [{ lions: femaleNe.sort() }, { giraffes: femaleNeOne.sort() }],
      NW: [{ tigers: femaleNw.sort() },
        { bears: femaleNwOne.sort() }, { elephants: femaleNwTwo.sort() }],
      SE: [{ penguins: femaleSe.sort() }, { otters: femaleSeOne.sort() }],
      SW: [{ frogs: femaleSw.sort() }, { snakes: femaleSwOne.sort() }],
    };
    return animalObjFemaleSort;
  }
}

function verifySortedMale(options) {
  if (Object.keys(options).includes('sorted')) {
    const animalObjMaleSort = {
      NE: [{ lions: maleNe.sort() }, { giraffes: maleNeOne.sort() }],
      NW: [{ tigers: maleNw.sort() }, { bears: maleNwOne.sort() }, { elephants: maleNwTwo.sort() }],
      SE: [{ penguins: maleSe.sort() }, { otters: maleSeOne.sort() }],
      SW: [{ frogs: maleSw.sort() }, { snakes: maleSwOne.sort() }],
    };
    return animalObjMaleSort;
  }
}

function femaleOrMale(options) {
  if (options.sex === 'female') {
    return verifySorted(options);
  }
  if (options.sex === 'male') {
    return verifySortedMale(options);
  }
}

function as(options) {
  if (options.sex === 'female') {
    return animalObjFemale;
  }
  if (options.sex === 'male') {
    return animalObjMale;
  }
}

function sortedAll(options) {
  if (Object.keys(options).includes('sorted')) {
    return femaleOrMale(options);
  }
  return as(options);
}
function sortAnimal() {
  const animalObjSort = {
    NE: [{ lions: neZero.lions.sort() }, { giraffes: neOne.giraffes.sort() }],
    NW: [{ tigers: nwZero.tigers.sort() },
      { bears: nwOne.bears.sort() }, { elephants: nwTwo.elephants.sort() }],
    SE: [{ penguins: seZero.penguins.sort() }, { otters: seOne.otters.sort() }],
    SW: [{ frogs: swZero.frogs.sort() }, { snakes: swOne.snakes.sort() }],
  };
  return animalObjSort;
}

function getAnimalMap(options = 0) {
  if (options === 0) {
    return www();
  }
  if (!Object.keys(options).includes('includeNames')) {
    return www();
  }
  if (Object.keys(options).includes('sex')) {
    return sortedAll(options);
  }
  if (Object.keys(options).includes('sorted')) {
    return sortAnimal();
  }
  return animalObj;
}

console.log(getAnimalMap({ includeNames: true, sex: 'female' }));

module.exports = getAnimalMap;
