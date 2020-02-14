'use strict';

(function () {
  var buttonOpenSetting = document.querySelector('.setup-open');
  var buttonClossSetting = document.querySelector('.setup-close');
  var settingsWindow = document.querySelector('.setup');

  var wizardCoatBlock = document.querySelector('.setup-wizard .wizard-coat');
  var wizardEyesBlock = document.querySelector('.setup-wizard .wizard-eyes');
  var wizardFairbollBlock = document.querySelector('.setup-fireball-wrap');

  var wizardCoatInput = document.querySelector('input[name="coat-color"]');
  var wizardEyesInput = document.querySelector('input[name="eyes-color"]');
  var wizardFairbollInput = document.querySelector('input[name="fireball-color"]');
  var nameInput = document.querySelector('.setup-user-name');

  var form = document.querySelector('.setup-wizard-form');
  var sendForm = document.querySelector('.setup-submit');

  var openPopup = function () {
    settingsWindow.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
    nameInput.addEventListener('focus', onFocusInput);
    nameInput.addEventListener('blur', onBlurInput);
    wizardCoatBlock.addEventListener('click', onWizardCoatColor);
    wizardEyesBlock.addEventListener('click', onWizardEyesColor);
    wizardFairbollBlock.addEventListener('click', onWizardFairbollColor);
  };

  var closePopup = function () {
    settingsWindow.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
    nameInput.removeEventListener('focus', onFocusInput);
    nameInput.removeEventListener('blur', onBlurInput);
    wizardCoatBlock.removeEventListener('click', onWizardCoatColor);
    wizardEyesBlock.removeEventListener('click', onWizardEyesColor);
    wizardFairbollBlock.removeEventListener('click', onWizardFairbollColor);
    settingsWindow.style.top = '80px';
    settingsWindow.style.left = '50%';
  };

  var onPopupEscPress = function (evt) {
    if (evt.key === window.constants.ESC_KEY && statFocusInput) {
      closePopup();
    }
  };

  var onWizardEyesColor = function () {
    var color = window.util.getRandomElement(window.constants.WIZARD_EYES_COLORS);
    wizardEyesBlock.style.fill = color;
    wizardEyesInput.value = color;
  };

  var onWizardCoatColor = function () {
    var color = window.util.getRandomElement(window.constants.WIZARD_COAT_COLORS);
    wizardCoatBlock.style.fill = color;
    wizardCoatInput.value = color;
  };

  var onWizardFairbollColor = function () {
    var color = window.util.getRandomElement(window.constants.WIZARD_FAIRBOLL_COLORS);
    wizardFairbollBlock.style.backgroundColor = color;
    wizardFairbollInput.value = color;
  };

  var statFocusInput = true;

  var onFocusInput = function () {
    statFocusInput = false;
  };

  var onBlurInput = function () {
    statFocusInput = true;
  };

  var successHandler = function () {
    closePopup();
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

  var onSendForm = function (evt) {
    evt.preventDefault();

    var urlSendForm = 'https://js.dump.academy/code-and-magick';
    window.backend.save(successHandler, errorHandler, urlSendForm, new FormData(form));
  };

  buttonOpenSetting.addEventListener('click', function () {
    openPopup();
  });

  buttonOpenSetting.addEventListener('keydown', function (evt) {
    if (evt.key === window.constants.ENTER_KEY) {
      openPopup();
    }
  });

  buttonClossSetting.addEventListener('click', function () {
    closePopup();
  });

  buttonClossSetting.addEventListener('keydown', function (evt) {
    if (evt.key === window.constants.ENTER_KEY) {
      closePopup();
    }
  });

  sendForm.addEventListener('click', onSendForm);

  sendForm.addEventListener('keydown', function (evt) {
    if (evt.key === window.constants.ENTER_KEY) {
      onSendForm();
    }
  });
})();
