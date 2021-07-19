/* eslint-disable no-unused-vars */
import {loadData} from './api.js';
import {fillPhotos} from './previews.js';
import {openUploadImageForm, closeUploadImageForm, onCheckCommentValidity, onCheckHashtagValidity} from './upload-form.js';
import {setUserFormSubmit} from './upload-form.js';
import {renderMessagePopup} from './messages.js';
import {showAlert} from './util.js';
import {addFiltersHandler} from './image-filters.js';

const DOWNLOAD_URL = 'https://23.javascript.pages.academy/kekstagram/data';

loadData(
  addFiltersHandler,
  showAlert,
  DOWNLOAD_URL,
);

const executeFormSuccess = () => {
  closeUploadImageForm();
  renderMessagePopup('success');
};

const executeFormError = () => {
  closeUploadImageForm();
  renderMessagePopup('error');
};

setUserFormSubmit(executeFormSuccess, executeFormError);
