const BIG_PICTURE = document.querySelector('.big-picture');
const BIG_PICTURE_IMG = BIG_PICTURE.querySelector('.big-picture__img img');
const BIG_PICTURE_LIKES = BIG_PICTURE.querySelector('.likes-count');
const BIG_PICTURE_COMMENTS = BIG_PICTURE.querySelector('.comments-count');
const BIG_PICTURE_DESCRIPTION = BIG_PICTURE.querySelector('.social__caption');
const BIG_PICTURE_COMMENTS_COUNT = BIG_PICTURE.querySelector('.social__comment-count');
const BIG_PICTURE_COMMENTS_LOADER = BIG_PICTURE.querySelector('.comments-loader');
const CANCEL_BUTTON = BIG_PICTURE.querySelector('.big-picture__cancel');
const COMMENTS_LIST = document.querySelector('.social__comments');
const BODY = document.querySelector('body');

const getPictureComments = (comments) => {
  const fragment = document.createDocumentFragment();

  for (let index = 0; index < comments.length; index++) {
    const newComment = document.createElement('li');

    newComment.classList.add('social__comment');
    newComment.innerHTML = `<img class="social__picture" src="${comments[index].avatar}" 
                            alt="${comments[index].name}" width="35" height="35">
                            <p class="social__text">${comments[index].message}</p>`;
    fragment.appendChild(newComment);
  }

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
  COMMENTS_LIST.innerHTML = '';
  COMMENTS_LIST.appendChild(getPictureComments(photo.comments));
  BODY.classList.remove('modal-open');
};

const addClass = () => {
  BIG_PICTURE.classList.add('hidden');
  BODY.classList.add('modal-open');
};

const buttonAddClass = () => {
  addClass();
};

const escAddClass = (evt) => {
  if (evt.keyCode === 27) {
    addClass();
  }
};

CANCEL_BUTTON.addEventListener ('click', buttonAddClass);

document.addEventListener('keydown', escAddClass);

export {showBigPicture, getPictureComments};
