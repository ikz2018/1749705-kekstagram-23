const isPositiveNumber = (value) => typeof value === 'number' && value >=0;

function getRandomBetween(min, max) {
  if (!isPositiveNumber(min) || !isPositiveNumber(max)) {
    throw new Error('Аргументы должны быть числами.');
  }

  const from = Math.min(min, max);
  const to = Math.max(min, max);

  return Math.round(Math.random() * (to - from)) + from;
}
try {
  getRandomBetween('123123','123123');
} catch (err) {
  // eslint-disable-next-line no-console
  console.log(err); //не выходит в консоль
}

// eslint-disable-next-line no-unused-vars
const isApprociateStrLength = function (str, maxLength) {
  return str.length <= maxLength;
};

const DESCRIPTION = ['Природа', 'Искусство', 'Техника'];
const MESSAGE = ['Всё отлично!',
'В целом всё неплохо. Но не всё.',
'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

const getRandomFloat = (...args) => {
  const [min, max, pow] = [
    Math.min(args[0], args[1]),
    Math.max(args[0], args[1]),
    Math.pow(10, args[2] ?? 0),
  ];

  return Math.round( (Math.random() * (max - min) + min) * pow) / pow;
}

const getRandomItem = array => array[getRandomFloat(0, array.length)];

const randomCompareItems = () => Math.floor(Math.random()*30) - 10;

const createGetRandomItem = data => {
  const mixed = [...data].sort(randomCompareItems);
  let idx = 0;

  return () => mixed[idx++ % mixed.length];
}

const createGetId = (startValue = 1) => {
  let id = startValue;

  return () => id++;
}

const getId = createGetId();
const getCommentId = createGetId(1000);
const id = createGetId();

const getAvatarUrl = idx => `img/avatar-${idx}.svg`;
const getUrl = id => `photos/${id}.jpg`;

const getRandomComment = () => {
  const id = getCommentId();

  return {
    id,
    avatar: getAvatarUrl(getRandomFloat(1, 6, 0)),
    message: 'В целом всё неплохо',
    name: 'Вася',
  }
};

const fillBy = (count, cb) => {
  const result = [];

  for(let i = 0; i < count; i++) {
    result.push(cb());
  }

  return result;
}

const createRandomPhotos = () => {
  return {
    id: getId(),
    url: getUrl(),
    description: getRandomItem(DESCRIPTION),
    likes: getRandomFloat(15, 200, 0),
    comments: fillBy(getRandomFloat(1, 2, 0), getRandomComment),
  }
}
const getRandomPhotos = (count) => {
  const randomPhotos = [];
  for (let i = 0; i < count; i++) {
    randomPhotos.push(createRandomPhotos());
  };
  return randomPhotos;
};


console.log(getRandomPhotos(25))