define(["jquery", "lib/kinetic"], function($) {
  var stage = new Kinetic.Stage({
    container: 'main',
    width: 1200,
    height: 500
  });
  var layer = new Kinetic.Layer();
  var hex = new Kinetic.RegularPolygon({
    x: stage.getWidth() / 2,
    y: stage.getHeight() / 2,
    sides: 6,
    radius: 52,
    rotationDeg: 90,
    fill: 'lightgray',
    draggable: true
  });
  layer.add(hex);
  stage.add(layer);

  return { stage: stage };
});
