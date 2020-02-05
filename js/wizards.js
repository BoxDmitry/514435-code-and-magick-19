'use strict';

(function () {
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var settingsWindow = document.querySelector('.setup');

  var similarListElement = settingsWindow.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var generationWizard = function () {
    var wizardОbject = {
      name: window.random.getElement(window.constatns.WIZARD_NAMES) + ' ' + window.random.getElement(window.constatns.WIZARD_SURNAMES),
      coatColor: window.random.getElement(window.constatns.WIZARD_COAT_COLORS),
      eyesColor: window.random.getElement(window.constatns.WIZARD_EYES_COLORS)
    };
    return wizardОbject;
  };

  var wizards = [];

  for (var i = 0; i < window.constatns.wizardsQuantity; i++) {
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
})()
