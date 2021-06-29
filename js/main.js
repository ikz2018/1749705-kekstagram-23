import {getRandomPhotos} from './data.js';
import {fillPhotos} from './previews.js';

const photos = getRandomPhotos(25);

fillPhotos(photos);

