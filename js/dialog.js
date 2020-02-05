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
    if (evt.key === window.constatns.ESC_KEY && statFocusInput) {
      closePopup();
    }
  };

  var onWizardEyesColor = function () {
    var color = window.random.getElement(window.constatns.WIZARD_EYES_COLORS);
    wizardEyesBlock.style.fill = color;
    wizardEyesInput.value = color;
  };

  var onWizardCoatColor = function () {
    var color = window.random.getElement(window.constatns.WIZARD_COAT_COLORS);
    wizardCoatBlock.style.fill = color;
    wizardCoatInput.value = color;
  };

  var onWizardFairbollColor = function () {
    var color = window.random.getElement(window.constatns.WIZARD_FAIRBOLL_COLORS);
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

  buttonOpenSetting.addEventListener('click', function () {
    openPopup();
  });

  buttonOpenSetting.addEventListener('keydown', function (evt) {
    if (evt.key === window.constatns.ENTER_KEY) {
      openPopup();
    }
  });

  buttonClossSetting.addEventListener('click', function () {
    closePopup();
  });

  buttonClossSetting.addEventListener('keydown', function (evt) {
    if (evt.key === window.constatns.ENTER_KEY) {
      closePopup();
    }
  });
})();
