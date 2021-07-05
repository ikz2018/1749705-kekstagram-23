const BIG_PICTURE = document.querySelector('.big-picture');
const BIG_PICTURE_IMG = BIG_PICTURE.querySelector('.big-picture__img img');
const BIG_PICTURE_LIKES = BIG_PICTURE.querySelector('.likes-count');
const BIG_PICTURE_COMMENTS = BIG_PICTURE.querySelector('.comments-count');
const BIG_PICTURE_DESCRIPTION = BIG_PICTURE.querySelector('.social__caption');
const BIG_PICTURE_COMMENTS_COUNT = BIG_PICTURE.querySelector('.social__comment-count');
const BIG_PICTURE_COMMENTS_LOADER = BIG_PICTURE.querySelector('.comments-loader');
const CANCEL_BUTTON = BIG_PICTURE.querySelector('.big-picture__cancel');
const COMMENTS_LIST = document.querySelector('.social__comments');
const COMMENT_TEMPLATE = document.querySelector('#social__comment').content;

const BODY = document.querySelector('body');

const getPictureComments = (comments) => {
  const fragment = document.createDocumentFragment();

  comments.forEach((comment) => {
    const {avatar, name, message} = comment;
    const commentElement = COMMENT_TEMPLATE.cloneNode(true);

    commentElement.querySelector('.social__picture').src = avatar;
    commentElement.querySelector('.social__picture').alt = name;
    commentElement.querySelector('.social__text').textContent = message;

    fragment.appendChild(commentElement);
  });
  return fragment;
};

const showBigPicture = (photo) => {
  BIG_PICTURE.classList.remove('hidden');
  BIG_PICTURE_IMG.src = photo.url;
  BIG_PICTURE_LIKES.textContent = photo.likes;
  BIG_PICTURE_COMMENTS.textContent = photo.comments.length;
  BIG_PICTURE_DESCRIPTION.textContent = photo.description;
  BIG_PICTURE_COMMENTS_COUNT.classList.add('hidden');
  BIG_PICTURE_COMMENTS_LOADER.classList.add('hidden');
  COMMENTS_LIST.textContent = '';
  COMMENTS_LIST.appendChild(getPictureComments(photo.comments));
  BODY.classList.add('modal-open');
};

const changeClass = () => {
  BIG_PICTURE.classList.add('hidden');
  BODY.classList.remove('modal-open');
};

const buttonAddClass = () => {
  changeClass();
};

const hidePopup = (evt) => {
  if (evt.keyCode === 27) {
    changeClass();
  }
};

CANCEL_BUTTON.addEventListener ('click', buttonAddClass);

document.addEventListener('keydown', hidePopup);

export {showBigPicture};
