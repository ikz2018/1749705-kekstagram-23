import {
  getRandomItem,
  fillBy,
  createGetId,
  getRandomFloat
} from './util.js';

const FIRST_COMMENT = 20;
const SECOND_COMMENT = 30;
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const NUMBER_OF_COMMENTS = 1000;
const FIRST_AVATAR = 1;
const SIXTH_AVATAR = 6;
const DESCRIPTIONS = ['Природа', 'Искусство', 'Техника'];
const NAMES = [
  'Шахноза',
  'Арафат',
  'Умида',
  'Аиша',
  'Динора',
];
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const getId = createGetId();
const getCommentId = createGetId(NUMBER_OF_COMMENTS);

const getAvatarUrl = (idx) => `img/avatar-${idx}.svg`;
const getUrl = (idx) => `photos/${idx}.jpg`;

const getRandomComment = () => {
  const id = getCommentId();

  return {
    id,
    avatar: getAvatarUrl(getRandomFloat(FIRST_AVATAR, SIXTH_AVATAR, 0)),
    message: getRandomItem(MESSAGES),
    name: getRandomItem(NAMES),
  };
};

const createRandomPhoto = () => {
  const id = getId();
  return {
    id,
    url: getUrl(id),
    description: getRandomItem(DESCRIPTIONS),
    likes: getRandomFloat(MIN_LIKES, MAX_LIKES, 0),
    comments: fillBy(getRandomFloat(FIRST_COMMENT, SECOND_COMMENT, 0), getRandomComment),
  };
};

const getRandomPhotos = (count) => fillBy(count, createRandomPhoto);

export {getRandomPhotos};
