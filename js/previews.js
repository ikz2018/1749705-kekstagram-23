import {showBigPicture, getPictureComments} from './big-photo.js';

const PHOTOS_TEMPLATE = document.querySelector('#picture').content;
const PHOTOS_CONTAINER = document.querySelector('.pictures');

const onPhotoClick = (photo) => () => {
  showBigPicture(photo);
};

const fillPhotos = (photos) => {
  const fragment = document.createDocumentFragment();

  photos.forEach((photo) => {
    const {url, likes, comments} = photo;
    const pictureElement = PHOTOS_TEMPLATE.cloneNode(true);

    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    pictureElement.querySelector('.picture').addEventListener('click', onPhotoClick(photo));
    pictureElement.querySelector('.picture').addEventListener('click', getPictureComments(comments));

    fragment.appendChild(pictureElement);
  });

  PHOTOS_CONTAINER.appendChild(fragment);
};

export {fillPhotos};
