'use strict';

var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_FAIRBOLL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var wizardsQuantity = 4;

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

var similarListElement = settingsWindow.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

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

var generationWizard = function () {
  var wizardОbject = {
    name: getRandomElement(WIZARD_NAMES) + ' ' + getRandomElement(WIZARD_SURNAMES),
    coatColor: getRandomElement(WIZARD_COAT_COLORS),
    eyesColor: getRandomElement(WIZARD_EYES_COLORS)
  };
  return wizardОbject;
};

var wizards = [];

for (var i = 0; i < wizardsQuantity; i++) {
  wizards[i] = generationWizard();
}

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var j = 0; j < wizards.length; j++) {
  fragment.appendChild(renderWizard(wizards[j]));
}
similarListElement.appendChild(fragment);

settingsWindow.querySelector('.setup-similar').classList.remove('hidden');

var statFocusInput = true;

var onFocusInput = function () {
  statFocusInput = false;
}

var onBlurInput = function () {
  statFocusInput = true;
}

var onPopupEscPress = function (evt) {
  if (evt.key === ESC_KEY && statFocusInput) {
    closePopup();
  }
};

var onWizardEyesColor = function () {
  var color = getRandomElement(WIZARD_EYES_COLORS);
  wizardEyesBlock.style.fill = color;
  wizardEyesInput.value = color;
}

var onWizardCoatColor = function () {
  var color = getRandomElement(WIZARD_COAT_COLORS);
  wizardCoatBlock.style.fill = color;
  wizardCoatInput.value = color;
}

var onWizardFairbollColor = function () {
  var color = getRandomElement(WIZARD_FAIRBOLL_COLORS);
  wizardFairbollBlock.style.backgroundColor = color;
  wizardFairbollInput.value = color;
}

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
};

buttonOpenSetting.addEventListener('click', function () {
  openPopup();
});

buttonOpenSetting.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    openPopup();
  }
});

buttonClossSetting.addEventListener('click', function () {
  closePopup();
});

buttonClossSetting.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    closePopup();
  }
});
