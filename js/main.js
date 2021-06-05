const isPositiveNumber = (value) => typeof value === 'number' && value >=0;

function getRandomBetween(min = 0, max = 0) {
  if (!isPositiveNumber(min) || !isPositiveNumber(max)) {
    throw new Error('Аргументы должны быть числами.');
  }
  const from = Math.min(min, max);
  const to = Math.max(min, max);
  return Math.floor(Math.random() * (to - from + 1)) + from;
}
try {
  getRandomBetween();
} catch (err) {
  // eslint-disable-next-line no-console
  console.log(err); //не выходит в консоль
}

// eslint-disable-next-line no-unused-vars
const IS_APPROPRIATE_STR_LENGTH = function (str, maxLength) {
  return str.length <= maxLength;
};
