const BIG_PICTURE = document.querySelector('.big-picture');
const BIG_PICTURE_IMG = BIG_PICTURE.querySelector('.big-picture__img img');
const BIG_PICTURE_LIKES = BIG_PICTURE.querySelector('.likes-count');
const BIG_PICTURE_COMMENTS = BIG_PICTURE.querySelector('.comments-count');
const BIG_PICTURE_DESCRIPTION = BIG_PICTURE.querySelector('.social__caption');
const BIG_PICTURE_COMMENTS_COUNT = BIG_PICTURE.querySelector('.social__comment-count');
const BIG_PICTURE_COMMENTS_LOADER = BIG_PICTURE.querySelector('.comments-loader');
const CANCEL_BUTTON = BIG_PICTURE.querySelector('.big-picture__cancel');

const showBigPicture = function (photo) {
  BIG_PICTURE.classList.toggle('hidden');
  BIG_PICTURE_IMG.src = photo.url;
  BIG_PICTURE_LIKES.textContent = photo.likes;
  BIG_PICTURE_COMMENTS.textContent = photo.comments.length;
  BIG_PICTURE_DESCRIPTION.textContent = photo.description;
  BIG_PICTURE_COMMENTS_COUNT.classList.add('hidden');
  BIG_PICTURE_COMMENTS_LOADER.classList.add('hidden');
  body.classList.toggle('modal-open');
};

CANCEL_BUTTON.addEventListener ('click', () => {
  BIG_PICTURE.classList.toggle('hidden');
  body.classList.toggle('modal-open');
});

document.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27) {
    BIG_PICTURE.classList.toggle('hidden');
    body.classList.toggle('modal-open');
  }
});

export {showBigPicture};