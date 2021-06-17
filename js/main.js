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


const MIN_VALUE_OF_LIKES = 15;
const MAX_VALUE_OF_LIKES = 200;
const MIN_VALUE_OF_COMMENTS = 1;
const MAX_VALUE_OF_COMMENTS = 5;
const IMAGE_COUNT = 25;
const COMMENTATOR_NAMES = ['Александр', 'Алексей', 'Григорий', 'Сергей', 'Рудольф', 'Игорь', 'Егор', 'Владимир'];
const COMMENTATOR_MESSAGES = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

// 1.3 Функция для возврата массива с перемешенными значениями от 1 до n без повторений
const createRandomPhotos = function (count) {
  const photoUrls = [];
  for (let i = 0; i < count; i++) {
    photoUrls[i] = i + 1;
  }
  // Случайно перемешаем массив
  const changeValue;
  for (let i = 0; i < photoUrls.length; i++) {
    const randomKey = getRandomBetween(0, photoUrls.length - 1);
    changeValue = photoUrls[i];
    photoUrls[i] = photoUrls[randomKey];
    photoUrls[randomKey] = changeValue;
  }
  return photoUrls;
};
// 1.4 Функция для создания случайного сообщения, которое состоит из одного или двух элементов массива COMMENTATOR_MESSAGES
const createRandomMessage = function (array) {
  const message = '';
  // Находим случайным образом количество частей из которых будет состоять комментарий.
  const messagePartCount = getRandomBetween(1, 2);
  if (messagePartCount === 1) {
    message = array[getRandomBetween(0, array.length - 1)];
  } else {
    message = array[getRandomBetween(0, array.length - 1)] + ' ' + array[getRandomBetween(0, array.length - 1)];

  }
  return message;
};
// 1.5 Функция для создания массива из сгенерированных JS объектов, которые описывают фотографии
const createRandomPhotoObjects = function (count) {
  const array = [];
  const photoSources = createRandomPhotos(count);
  for (let i = 0; i < count; i++) {
    const photoObject = {};
    photoObject.url = 'photos/' + photoSources[i] + '.jpg';
    photoObject.description = 'описание фотографии';
    photoObject.likes = getRandomBetween(MIN_VALUE_OF_LIKES, MAX_VALUE_OF_LIKES);
    photoObject.comments = [];
    const countOfComments = getRandomBetween(MIN_VALUE_OF_COMMENTS, MAX_VALUE_OF_COMMENTS);
    // Заполняем комменты
    for (const j = 0; j < countOfComments; j++) {
      photoObject.comments[j] = {};
      photoObject.comments[j].avatar = 'img/avatar-' + getRandomBetween(1, 6) + '.svg';
      photoObject.comments[j].message = createRandomMessage(COMMENTATOR_MESSAGES);
      photoObject.comments[j].name = COMMENTATOR_NAMES[getRandomBetween(0, COMMENTATOR_NAMES.length - 1)];

    }
    array[i] = photoObject;
  }
  return array;
};
const randomPhotos = createRandomPhotoObjects(IMAGE_COUNT);