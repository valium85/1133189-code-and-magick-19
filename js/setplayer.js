// Настройка игрока
// setplayer.js
'use strict';

(function () {
  var colors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var eyes = ['black', 'red', 'blue', 'yellow', 'green'];
  var fireballs = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var player = document.querySelector('.setup-player');
  var playerCoat = player.querySelector('.wizard-coat');
  var playerCoatInput = player.querySelector('.coat-input');
  var playerEyes = player.querySelector('.wizard-eyes');
  var playerEyesInput = player.querySelector('.eyes-input');
  var playerFireball = player.querySelector('.setup-fireball-wrap');
  var playerFireballInput = player.querySelector('.fireball-input');

  var wizard = {
    onEyesChange: function () {},
    onCoatChange: function () {}
  };

  var randomIndex = function (arr) {
    return Math.floor(Math.random() * arr.length);
  };

  playerCoat.addEventListener('click', function () {
    var newColor = colors[randomIndex(colors)];
    playerCoat.style.fill = newColor;
    playerCoatInput.value = newColor;
    wizard.onCoatChange(newColor);
  });

  playerEyes.addEventListener('click', function () {
    var newColor = eyes[randomIndex(eyes)];
    playerEyes.style.fill = newColor;
    playerEyesInput.value = newColor;
    wizard.onEyesChange(newColor);
  });

  playerFireball.addEventListener('click', function () {
    var newColor = fireballs[randomIndex(fireballs)];
    playerFireball.style.backgroundColor = newColor;
    playerFireballInput.value = newColor;

  });

  window.wizard = wizard;

})();

