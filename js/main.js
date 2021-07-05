import {getRandomPhotos} from './data.js';
import {fillPhotos} from './previews.js';
import './upload-form.js';

const photos = getRandomPhotos(25);

fillPhotos(photos);
