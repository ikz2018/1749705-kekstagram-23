import {getRandomPhotos} from './data.js';
import {fillPhotos} from './previews.js';
// eslint-disable-next-line no-unused-vars
import {openUploadForm,closeUploadForm,commentValidity,hashtagValidity} from './upload-form.js';

const photos = getRandomPhotos(25);

fillPhotos(photos);
