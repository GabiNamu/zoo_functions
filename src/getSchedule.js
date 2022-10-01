const data = require('../data/zoo_data');

function arrayAnimalsSchedule(name) {
  const specie = data.species.find((element) => element.name === name);
  return specie.availability;
}

function isAnimalOrDay(param) {
  const falseName = data.species.some((element) => element.name === param);
  const arrayDay = ['Monday', 'Tuesday', 'Thursday', 'Wednesday', 'Friday', 'Saturday', 'Sunday'];
  const falseDay = arrayDay.some((element) => element === param);
  if (falseName === false && falseDay === false) {
    return false;
  }
  return true;
}

const tuesdays = data.species.filter((animal) => animal.availability.includes('Tuesday'));
const tuesday = tuesdays.map((element) => element.name);

const thursdays = data.species.filter((animal) => animal.availability.includes('Thursday'));
const thursday = thursdays.map((element) => element.name);

const wednesdays = data.species.filter((animal) => animal.availability.includes('Wednesday'));
const wednesday = wednesdays.map((element) => element.name);

const fridays = data.species.filter((animal) => animal.availability.includes('Friday'));
const friday = fridays.map((element) => element.name);

const saturdays = data.species.filter((animal) => animal.availability.includes('Saturday'));
const saturday = saturdays.map((element) => element.name);

const sundays = data.species.filter((animal) => animal.availability.includes('Sunday'));
const sunday = sundays.map((element) => element.name);

const objMonday = {
  Monday: {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  },
};

const hoursT = Object.values(data.hours.Tuesday);
const hoursTh = Object.values(data.hours.Thursday);
const hoursW = Object.values(data.hours.Wednesday);
const hoursF = Object.values(data.hours.Friday);
const hoursS = Object.values(data.hours.Saturday);
const hoursSu = Object.values(data.hours.Sunday);

const obj = {
  Monday: {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  },
  Tuesday: {
    officeHour: `Open from ${hoursT[0]}am until ${hoursT[1]}pm`,
    exhibition: tuesday,
  },
  Wednesday: {
    officeHour: `Open from ${hoursW[0]}am until ${hoursW[1]}pm`,
    exhibition: wednesday,
  },
  Thursday: {
    officeHour: `Open from ${hoursTh[0]}am until ${hoursTh[1]}pm`,
    exhibition: thursday,
  },
  Friday: {
    officeHour: `Open from ${hoursF[0]}am until ${hoursF[1]}pm`,
    exhibition: friday,
  },
  Saturday: {
    officeHour: `Open from ${hoursS[0]}am until ${hoursS[1]}pm`,
    exhibition: saturday,
  },
  Sunday: {
    officeHour: `Open from ${hoursSu[0]}am until ${hoursSu[1]}pm`,
    exhibition: sunday,
  },
};

function getSchedule(scheduleTarget = 0) {
  if (scheduleTarget === 0 || isAnimalOrDay(scheduleTarget) === false) {
    return obj;
  }
  if (scheduleTarget === 'Monday') {
    return objMonday;
  }
  if (Object.keys(data.hours).includes(scheduleTarget)) {
    const objAll = {};
    const objValues = Object.values(data.hours[scheduleTarget]);
    const Alldays = data.species.filter((animal) => animal.availability.includes(scheduleTarget));
    const Allday = Alldays.map((element) => element.name);
    objAll[scheduleTarget] = {
      officeHour: `Open from ${objValues[0]}am until ${objValues[1]}pm`,
      exhibition: Allday,
    };
    return objAll;
  }
  return arrayAnimalsSchedule(scheduleTarget);
}
console.log(getSchedule('Tuesday'));
module.exports = getSchedule;
