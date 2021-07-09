/* eslint-disable no-unused-vars */
import {getRandomPhotos} from './data.js';
import {fillPhotos} from './previews.js';
import {openUploadForm, closeUploadForm, commentValidity, hashtagValidity} from './upload-form.js';

const photos = getRandomPhotos(25);

fillPhotos(photos);
