'use strict';

(function () {
  var ESC_KEY = 'Escape';
  var ENTER_KEY = 'Enter';

  var WIZARD = {
    COAT_COLORS: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    EYES_COLORS: ['black', 'red', 'blue', 'yellow', 'green'],
    FAIRBOLL_COLORS: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'],
    DEFAULT_COAT_COLOR: 'rgb(101, 137, 164)',
    DEFAULT_EYES_COLOR: 'black'
  };

  var wizardsQuantity = 4;

  var settingsWindow = document.querySelector('.setup');

  window.constants = {
    ESC_KEY: ESC_KEY,
    ENTER_KEY: ENTER_KEY,
    WIZARD: WIZARD,
    wizardsQuantity: wizardsQuantity,
    settingsWindow: settingsWindow
  };
})();
