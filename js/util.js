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

  var wizardTemplate = document.querySelector('#similar-wizard-template');

  var renderWizard = function (wizard) {
    var element = wizardTemplate.content.cloneNode(true);

    var wizardElement = element.querySelector('.wizard');
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    element.querySelector('.setup-similar-label').innerText = wizard.name;

    return element;
  };

  var similar = document.querySelector('.setup-similar');
  var similarList = document.querySelector('.setup-similar-list');

  window.util = {
    getRandom: getRandom,
    getRandomElement: getRandomElement,
    render: function (data) {
      var takeNumber = data.length > 4 ? 4 : data.length;
      similarList.innerHTML = '';
      for (var i = 0; i < takeNumber; i++) {
        similarList.appendChild(renderWizard(data[i]));
      }

      similar.classList.remove('hidden');
    }
  };
})();
