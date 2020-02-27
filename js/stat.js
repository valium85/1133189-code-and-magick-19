'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var HISTO_HEIGHT = 150;
var BAR_WIDTH = 40;
var TEXT_HEIGHT = 20;
var barHeight = HISTO_HEIGHT - TEXT_HEIGHT * 2;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP * 2, CLOUD_Y + GAP * 2);
  ctx.fillText('Список результатов:', CLOUD_X + GAP * 2, CLOUD_Y + GAP * 4);

  var maxTime = getMaxElement(times);
  var randomColor = function () {
    return 'hsl(240, ' + Math.floor(Math.random() * 100) + '% , 50%)';
  };

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), CLOUD_X + GAP * 4 + BAR_WIDTH * 2 * i, CLOUD_Y + GAP * 8 + barHeight - (barHeight * times[i] / maxTime));
    ctx.fillText(players[i], CLOUD_X + GAP * 4 + BAR_WIDTH * 2 * i, CLOUD_Y + GAP * 8 + HISTO_HEIGHT);

    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = randomColor();
    }

    ctx.fillRect(CLOUD_X + GAP * 4 + BAR_WIDTH * 2 * i, CLOUD_Y + GAP * 8 + TEXT_HEIGHT + barHeight - (barHeight * times[i] / maxTime), BAR_WIDTH, barHeight * times[i] / maxTime);
  }
};

