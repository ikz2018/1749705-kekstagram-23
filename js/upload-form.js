import {zoomImageUp, zoomImageDown, zoomImageDrop} from './zoom-image.js';

const BODY = document.querySelector('body');
const UPLOAD_INPUT = document.querySelector('.img-upload__input');
const UPLOAD_IMAGE_FORM = document.querySelector('.img-upload__overlay');
const UPLOAD_IMAGE_CLOSE_BUTTON = document.querySelector('.img-upload__cancel');
const HASTAGS_INPUT = document.querySelector('.text__hashtags');
const IMAGE_COMMENT = document.querySelector('.text__description');
const MAX_HASHTAG_NUMBER = 5;
const MAX_COMMENT_LENGTH = 140;
const CORRECT_HASHTAG = /^#[A-Za-zА-Яа-я0-9]{1,19}$/;
const RE = /\s+/;
const onUploadImageFormEsc = (evt) => {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    // eslint-disable-next-line no-use-before-define
    closeUploadImageForm();
  }
};

const openUploadImageForm = () => {
  UPLOAD_IMAGE_FORM.classList.remove('hidden');
  BODY.classList.add('modal-open');
  document.querySelector('.scale__control--smaller').addEventListener('click', zoomImageDown);
  document.querySelector('.scale__control--bigger').addEventListener('click', zoomImageUp);
  document.addEventListener('keydown', onUploadImageFormEsc);
};

const closeUploadImageForm = () => {
  UPLOAD_IMAGE_FORM.classList.add('hidden');
  BODY.classList.remove('modal-open');
  UPLOAD_INPUT.value = null;
  zoomImageDrop();
  document.removeEventListener('keydown',onUploadImageFormEsc);
};

const openUploadForm = UPLOAD_INPUT.addEventListener('change', openUploadImageForm);

const closeUploadForm = UPLOAD_IMAGE_CLOSE_BUTTON.addEventListener('click', closeUploadImageForm);

const checkHashtagValidity = () => {
  const array = HASTAGS_INPUT.value.toLowerCase().split(RE);
  const hashtagsSet = new Set(array);

  for (let index = 0; index < array.length; index++) {
    if (array.length > MAX_HASHTAG_NUMBER) {
      HASTAGS_INPUT.setCustomValidity(`Количество хэштэгов не может превышать ${MAX_HASHTAG_NUMBER}`);
    } else if (array.length !== hashtagsSet.size) {
      HASTAGS_INPUT.setCustomValidity('Нельзя использовать один хэш-тег дважды');
    } else if (!CORRECT_HASHTAG.test(array[index])) {
      HASTAGS_INPUT.setCustomValidity('Введён неправильный формат хэштега');
    } else {
      HASTAGS_INPUT.setCustomValidity('');
    }
  }
  HASTAGS_INPUT.reportValidity();
};

const checkCommentValidity = () => {
  const valueLength = IMAGE_COMMENT.value.length;

  if (valueLength > MAX_COMMENT_LENGTH) {
    IMAGE_COMMENT.setCustomValidity(`Удалите лишние ${  valueLength - MAX_COMMENT_LENGTH } симв.`);
  } else {
    IMAGE_COMMENT.setCustomValidity('');
  }

  IMAGE_COMMENT.reportValidity();
};

const commentValidity = IMAGE_COMMENT.addEventListener('input', checkCommentValidity);
const hashtagValidity = HASTAGS_INPUT.addEventListener('input', checkHashtagValidity);

export {openUploadForm,closeUploadForm,commentValidity,hashtagValidity};
