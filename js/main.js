/* eslint-disable no-unused-vars */
import {loadData} from './api.js';
import {onUploadImageFormClose} from './upload-form.js';
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
  onUploadImageFormClose();
  renderMessagePopup('success');
};

const executeFormError = () => {
  onUploadImageFormClose();
  renderMessagePopup('error');
};

setUserFormSubmit(executeFormSuccess, executeFormError);
