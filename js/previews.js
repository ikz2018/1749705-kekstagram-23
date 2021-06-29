const PHOTOS_TEMPLATE = document.querySelector('#picture').content;
const PHOTOS_CONTAINER = document.querySelector('.pictures');

const fillPhotos = (photos) => {
  const fragment = document.createDocumentFragment();

  photos.forEach(({url, likes, comments}) => {
    const pictureElement = PHOTOS_TEMPLATE.cloneNode(true);

    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    fragment.appendChild(pictureElement);
  });

  PHOTOS_CONTAINER.appendChild(fragment);
};

export {fillPhotos};