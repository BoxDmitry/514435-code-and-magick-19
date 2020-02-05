'use strict';

(function () {
  var get = function (min, max) {
    var least = Math.ceil(min);
    var most = Math.floor(max);
    return Math.floor(Math.random() * (most - least + 1)) + least;
  };

  var getElement = function (array) {
    var min = 0;
    var max = array.length - 1;
    return array[get(min, max)];
  };

  window.random = {
    get: get,
    getElement: getElement
  };
})();
