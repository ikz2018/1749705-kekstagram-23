import {getRandomPhotos} from './data.js';
import {createPictureList} from './previews.js'
console.log(getRandomPhotos(25));
createPictureList(getRandomPhotos(25));

