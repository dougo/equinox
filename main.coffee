requirejs.config
  shim:
    'lib/zepto':
      exports: 'Zepto'

require ["lib/zepto", "equinox"], ($, game) ->
  window.game = game
  $('#main').show()
  game.start()
