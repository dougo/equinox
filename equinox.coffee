define ['lib/zepto', 'lib/lodash', 'lib/kinetic'], ($, _, Kinetic) ->
  start: ->
    width = document.documentElement.offsetWidth
    height = document.documentElement.clientHeight
    stage = new Kinetic.Stage
      container: 'main'
      width: width
      height: height

    layer = new Kinetic.Layer

    hex = new Kinetic.RegularPolygon
      x: width / 2
      y: height / 2
      sides: 6
      radius: 52
      rotationDeg: 90
      fill: 'lightgray'
      draggable: true

    hex.on 'mouseover', -> document.body.style.cursor = 'move'
    hex.on 'mouseout',  -> document.body.style.cursor = 'default'

    layer.add hex
    stage.add layer

    $(window).on 'resize', _.bind(@resize, @)

    @stage = stage

  resize: ->
    width = document.documentElement.clientWidth
    height = document.documentElement.clientHeight

    @stage.setWidth width
    @stage.setHeight height
