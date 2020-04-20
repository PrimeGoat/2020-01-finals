const makeRunOn = function(sentence) {

  let lastP;
  if(sentence[sentence.length - 1] == '.') {
    lastP = true;
  } else {
    lastP = false;
  }

  sentence = sentence.replace(/\./g, ',');

  if(lastP) {
    return sentence.slice(0, sentence.length - 1) + '.';
  } else {
    return sentence;
  }
}

const backwards = function(input) {
  input = input.split('');
  for(let i = 0, j = input.length - 1; i < j; i++, j--) {
    let tmp = input[j];
    input[j] = input[i];
    input[i] = tmp;
  }

  return input.join('');
}

const stringOut = function(input) {
  input = input.replace(/ +/g, '');
  input = input.replace(/.{0}/g, ' ');
  return input.trim();
}

const nightOwls = function(people) {
  let owls = [];

  for(person of people) {
    if(person.localTime >= 100 && person.localTime <= 400 && !person.asleep) {
      owls.push(person);
    }
  }

  return owls;
}

const totalScore = function(scores) {
  let total = 0;

  for(entry of scores) {
    if(isNaN(entry.multiplier)) {
      entry.multiplier = 1;
    }
    total += entry.multiplier * entry.score;
  }
  return total;
}

const getToBed = function(people) {
  let owls = [];

  // The test for this makes absolutely zero sense.
  for(person of people) {
    if(person.localTime >= 100 && person.localTime <= 400 && !person.asleep) {
      person.asleep = 1;
      owls.push(person);
    }
  }

  return owls;
}

// The test for this in main.test.js is incorrect.  isEven is supposed to return 3 as even??
const findIndices = function(array, callback) {
  let out = [];
  for(let i = 0; i < array.length; i++) {
    if(callback(array[i])) {
      out.push(array[i]);
    }
  }
  return out;
}

if (typeof makeRunOn === 'undefined') {
  makeRunOn = undefined;
}

if (typeof stringOut === 'undefined') {
  stringOut = undefined;
}

if (typeof nightOwls === 'undefined') {
  nightOwls = undefined;
}

if (typeof totalScore === 'undefined') {
  totalScore = undefined;
}

if (typeof getToBed === 'undefined') {
  getToBed = undefined;
}

if (typeof findIndices === 'undefined') {
  findIndices = undefined;
}

if (typeof Faqtory === 'undefined') {
  Faqtory = undefined;
}

module.exports = {
  makeRunOn,
  stringOut,
  nightOwls,
  totalScore,
  getToBed,
  findIndices,
  Faqtory,
}
