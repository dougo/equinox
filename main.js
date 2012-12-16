requirejs.config({
  baseUrl: 'lib',
  urlArgs: 'bust=' + new Date().getTime()
});

require(["jquery", "jquerypp/event/drag", "jquery.mobile"], function($) {
  $('.hex').on('draginit', function (ev, drag) { });
  $('#main').show();
});
