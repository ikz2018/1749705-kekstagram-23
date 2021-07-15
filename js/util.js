const isPositiveNumber = (value) => typeof value === 'number' && value >=0;

// eslint-disable-next-line no-unused-vars
function getRandomBetween(min, max) {
  if (!isPositiveNumber(min) || !isPositiveNumber(max)) {
    throw new Error('Аргументы должны быть числами.');
  }

  const from = Math.min(min, max);
  const to = Math.max(min, max);

  return Math.round(Math.random() * (to - from)) + from;
}

// eslint-disable-next-line no-unused-vars
const isApprociateStrLength = function (str, maxLength) {
  return str.length <= maxLength;
};

const getRandomFloat = (...args) => {
  const [min, max, pow] = [
    Math.min(args[0], args[1]),
    Math.max(args[0], args[1]),
    Math.pow(10, args[2] ? args[2] : 0),
  ];

  return Math.round( (Math.random() * (max - min) + min) * pow) / pow;
};

const getRandomItem = (array) => array[getRandomFloat(0, array.length)];

const randomCompareItems = () => Math.floor(Math.random()*30) - 10;

const createGetRandomItem = (data) => {
  const mixed = [...data].sort(randomCompareItems);
  let idx = 0;

  return () => mixed[idx++ % mixed.length];
};

const createGetId = (startValue = 1) => {
  let idx = startValue;

  return () => idx++;
};

const fillBy = (count, cb) => {
  const result = [];

  // eslint-disable-next-line id-length
  for(let i = 0; i < count; i++) {
    result.push(cb());
  }

  return result;
};

const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

const ALERT_TEMPLATE = document.querySelector('#alert').content;
const ALERT_MESSAGE = 'Не удалось получить данные. Попробуйте ещё раз';
const ALERT_SHOW_TIME = 5000;

const showAlert = (alertMessage) => {
  const allertElement = ALERT_TEMPLATE.cloneNode(true);
  const allertInner = allertElement.querySelector('.alert__inner');
  alertMessage = ALERT_MESSAGE;
  allertInner.textContent = alertMessage;

  document.body.append(allertInner);

  setTimeout(() => {
    allertElement.remove();
  }, ALERT_SHOW_TIME);
};

export {
  getRandomItem,
  fillBy,
  createGetId,
  createGetRandomItem,
  getRandomFloat,
  showAlert,
  isEscEvent
};
