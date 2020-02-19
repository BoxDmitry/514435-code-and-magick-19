'use strict';

(function () {
  var coatColor = window.constants.WIZARD.DEFAULT_COAT_COLOR;
  var eyesColor = window.constants.WIZARD.DEFAULT_COAT_COLOR;
  var wizards = [];

  var wizardTemplate = document.querySelector('#similar-wizard-template');

  var similar = document.querySelector('.setup-similar');
  var similarList = document.querySelector('.setup-similar-list');

  var renderWizard = function (wizard) {
    var element = wizardTemplate.content.cloneNode(true);

    var wizardElement = element.querySelector('.wizard');
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    element.querySelector('.setup-similar-label').innerText = wizard.name;

    return element;
  };

  var render = function (data) {
    var takeNumber = data.length > 4 ? 4 : data.length;
    similarList.innerHTML = '';
    for (var i = 0; i < takeNumber; i++) {
      similarList.appendChild(renderWizard(data[i]));
    }

    similar.classList.remove('hidden');
  };

  var getRank = function (wizard, coatColorActive, eyesColorActive) {
    var rank = 0;

    if (wizard.colorCoat === coatColorActive) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColorActive) {
      rank += 1;
    }

    return rank;
  };

  var updateWizards = function (coatColorActive, eyesColorActive) {
    render(wizards.slice().sort(function (left, right) {
      var rankDiff = getRank(right, coatColorActive, eyesColorActive) - getRank(left, coatColorActive, eyesColorActive);
      if (rankDiff === 0) {
        rankDiff = wizards.indexOf(left, coatColorActive, eyesColorActive) - wizards.indexOf(right, coatColorActive, eyesColorActive);
      }
      return rankDiff;
    }));
  };

  var successHandler = function (data) {
    wizards = data;
    updateWizards(coatColor, eyesColor);
    window.constants.settingsWindow.querySelector('.setup-similar').classList.remove('hidden');
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red; padding: 20px; border-radius: 10px';
    node.style.position = 'absolute';
    node.style.left = '50%';
    node.style.top = 0;
    node.style.transform = 'translateX(-50%) translateY(50%)';
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.backend.load(successHandler, errorHandler, window.backend.API_URL.data);

  var dialogHandler = window.constants.settingsWindow.querySelector('.upload');

  dialogHandler.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      var settingsElem = window.constants.settingsWindow;

      settingsElem.style.top = (settingsElem.offsetTop - shift.y) + 'px';
      settingsElem.style.left = (settingsElem.offsetLeft - shift.x) + 'px';

    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (clickEvt) {
          clickEvt.preventDefault();
          dialogHandler.removeEventListener('click', onClickPreventDefault);
        };
        dialogHandler.addEventListener('click', onClickPreventDefault);
      }

    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

  window.wizards = {
    updateAll: updateWizards
  };
})();
