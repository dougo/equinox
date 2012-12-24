define(["jquery", "lib/kinetic"], function($) {
  var game = {};

  game.start = function() {
    var width  = document.documentElement.offsetWidth;
    var height = document.documentElement.clientHeight;

    var stage = new Kinetic.Stage({
      container: 'main',
      width: width,
      height: height
    });

    var layer = new Kinetic.Layer();

    var hex = new Kinetic.RegularPolygon({
      x: width / 2,
      y: height / 2,
      sides: 6,
      radius: 52,
      rotationDeg: 90,
      fill: 'lightgray',
      draggable: true
    });

    hex.on('mouseover', function() {
      document.body.style.cursor = 'move';
    });
    hex.on('mouseout', function() {
      document.body.style.cursor = 'default';
    });

    layer.add(hex);
    stage.add(layer);

    $(window).on('resize', game.resize);
      
    game.stage = stage;
  };

  game.resize = function() {
    var width  = document.documentElement.clientWidth;
    var height = document.documentElement.clientHeight;

    game.stage.setWidth(width);
    game.stage.setHeight(height);
  };

  return game;
});
