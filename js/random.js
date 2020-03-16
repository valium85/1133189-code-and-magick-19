// Блок отрисовки рандомных волшебников
// random.js

'use strict';

(function () {
  var firstNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var lastNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var colors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var eyes = ['black', 'red', 'blue', 'yellow', 'green'];
  var wizards = [];

  var randomIndex = function (arr) {
    return Math.floor(Math.random() * arr.length);
  };

  var generateWizards = function () {
    for (var i = 0; i < 4; i++) {
      wizards[i] = {
        name: firstNames[randomIndex(firstNames)] + ' ' + lastNames[randomIndex(lastNames)],
        coatColor: colors[randomIndex(colors)],
        eyesColor: eyes[randomIndex(eyes)]
      };
    }
  };

  generateWizards();

  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');


  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  var renderWizardList = function () {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < wizards.length; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);
  };

  renderWizardList();

  document.querySelector('.setup-similar').classList.remove('hidden');

  window.random = {
    index: randomIndex
  };

})();
