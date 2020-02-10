'use strict';

(function () {
  var getRandom = function (min, max) {
    var least = Math.ceil(min);
    var most = Math.floor(max);
    return Math.floor(Math.random() * (most - least + 1)) + least;
  };

  var getRandomElement = function (array) {
    var min = 0;
    var max = array.length - 1;
    return array[getRandom(min, max)];
  };

  window.util = {
    getRandom: getRandom,
    getRandomElement: getRandomElement
  };
})();
