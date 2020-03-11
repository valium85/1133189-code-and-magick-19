'use strict';

// Блок отрисовки рандомных волшебников

var firstNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var lastNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var colors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyes = ['black', 'red', 'blue', 'yellow', 'green'];
var fireballs = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
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

// Блок пользовательских сценариев

// Открытие и закрытие окна

var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var userNameInput = setup.querySelector('.setup-user-name');

var onPopupEscPress = function (evt) {
  if (evt.key === ESC_KEY) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  if (document.activeElement === userNameInput) {
    userNameInput.blur();
  } else {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  }
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    closePopup();
  }
});

// Настройка игрока

var player = document.querySelector('.setup-player');
var playerCoat = player.querySelector('.wizard-coat');
var playerCoatInput = player.querySelector('.coat-input');
var playerEyes = player.querySelector('.wizard-eyes');
var playerEyesInput = player.querySelector('.eyes-input');
var playerFireball = player.querySelector('.setup-fireball-wrap');
var playerFireballInput = player.querySelector('.fireball-input');

playerCoat.addEventListener('click', function () {
  var coatColor = colors[randomIndex(colors)];
  playerCoat.style.fill = coatColor;
  playerCoatInput.value = coatColor;
});

playerEyes.addEventListener('click', function () {
  var eyesColor = eyes[randomIndex(eyes)];
  playerEyes.style.fill = eyesColor;
  playerEyesInput.value = eyesColor;
});

playerFireball.addEventListener('click', function () {
  var fireballColor = fireballs[randomIndex(fireballs)];
  playerFireball.style.backgroundColor = fireballColor;
  playerFireballInput.value = fireballColor;
});
