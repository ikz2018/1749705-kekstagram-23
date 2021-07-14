/* eslint-disable no-unused-vars */
import {getRandomPhotos} from './data.js';
import {loadData} from './api.js';
import {fillPhotos} from './previews.js';
import {openUploadImageForm, closeUploadImageForm, checkCommentValidity, checkHashtagValidity} from './upload-form.js';
import {setUserFormSubmit} from './upload-form.js';
import {renderMessagePopup} from './messages.js';

loadData((images) => {
  fillPhotos(images);
});

const executeFormSuccess = () => {
  closeUploadImageForm();
  renderMessagePopup('success');
};

setUserFormSubmit(executeFormSuccess);
