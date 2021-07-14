const loadData = (onSuccess, onFail) => {
  fetch('https://23.javascript.pages.academy/kekstagram/data')
    .then((response) => response.json())
    .then((images) => {
      onSuccess(images);
    })
    .catch(() => {
      onFail('Не удалось загрузить данные с сервера');
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    'https://23.javascript.pages.academy/kekstagram',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        throw new Error('Не удалось отправить форму. Попробуйте ещё раз');
      }
    })
    .catch((error) => {
      onFail(error.message);
    });
};

export {loadData, sendData};
