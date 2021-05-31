// eslint-disable-next-line no-unused-vars
function getRandomRang(myMin, myMax) {
  if (myMin <= myMax) {
    return Math.floor( Math.random() * (myMax - myMin + 1) + myMin );
  } else if (myMin === myMax) {
    return myMin;
  }
  throw new Error('Вы задали неверный диапазон');
}


//const isAppropriateStrLength = (str, maxLength) => str.length <= maxLength ;

// eslint-disable-next-line no-unreachable
const IS_APPROPRIATE_STR_LENGTH = function (str, maxLength) {
  return str.length <= maxLength;
};
