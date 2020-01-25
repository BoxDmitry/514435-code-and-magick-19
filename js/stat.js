'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var SHADOW_OFFSET = 10;
var CLOUD_X = 125;
var CLOUD_Y = 45;
var GAP = 20;
var CHART_HEIGHT = 150;
var CHART_WIDTH = 40;
var CHART_MARGIN = 50;

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

var printCloud = function (ctx, x, y, color, colorShadow) {
  ctx.fillStyle = colorShadow;
  ctx.fillRect(x + SHADOW_OFFSET, y + SHADOW_OFFSET, CLOUD_WIDTH, CLOUD_HEIGHT);

  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

function getRandom(min, max) {
  var least = Math.ceil(min);
  var most = Math.floor(max);
  return Math.floor(Math.random() * (most - least + 1)) + least;
}

window.renderStatistics = function (ctx, players, times) {
  printCloud(ctx, 100, 10, '#fff', 'rgba(0, 0, 0, 0.7)');

  ctx.fillStyle = '#000';
  ctx.font = 'PT Mono 16px';
  ctx.fillText('Ура вы победили!', CLOUD_X, CLOUD_Y);
  ctx.fillText('Список результатов:', CLOUD_X, CLOUD_Y + GAP);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(Math.floor(times[i]), (CHART_MARGIN + CHART_WIDTH) * i + CLOUD_X + CLOUD_X / 4.5, CLOUD_Y + GAP * 2.3 + CHART_HEIGHT - (CHART_HEIGHT * times[i]) / maxTime);

    ctx.fillStyle = '#000';
    ctx.fillText(players[i], (CHART_MARGIN + CHART_WIDTH) * i + CLOUD_X + CLOUD_X / 4.5, CLOUD_Y + GAP * 3.5 + CHART_HEIGHT);
    var color = players[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'hsl(240, 100%, ' + getRandom(10, 100) + '%)';

    ctx.fillStyle = color;
    ctx.fillRect((CHART_MARGIN + CHART_WIDTH) * i + CLOUD_X + CLOUD_X / 4.5, CLOUD_Y + GAP * 2.5 + CHART_HEIGHT - (CHART_HEIGHT * times[i]) / maxTime, CHART_WIDTH, (CHART_HEIGHT * times[i]) / maxTime);
  }
};
