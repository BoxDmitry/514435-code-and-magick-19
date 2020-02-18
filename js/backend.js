'use strict';

(function () {
  var StatusCode = {
    OK: 200
  };

  var API_URL = {
    data: 'https://js.dump.academy/code-and-magick/data',
    save: 'https://js.dump.academy/code-and-magick/'
  };


  var getXhr = function (dataType, onLoad, onError, URL, DATA, metod) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = dataType;

    xhr.addEventListener('load', function () {
      if (xhr.status === StatusCode.OK) {
        onLoad(xhr.response);
      } else {
        onError('Статус ответв: ' + xhr.status + ' ' + xhr.statusText);
      }
    });
    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });

    xhr.open(metod, URL);
    xhr.send(DATA);
  };

  var save = function (onLoad, onError, URL, DATA) {
    getXhr('', onLoad, onError, URL, DATA, 'POST');
  };

  var load = function (onLoad, onError, URL) {
    getXhr('json', onLoad, onError, URL, '', 'GET');
  };

  window.backend = {
    save: save,
    load: load,
    API_URL: API_URL
  };
})();
