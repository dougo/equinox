requirejs.config({
  baseUrl: 'lib'
});

require(["jquery", "jquerypp/event/drag", "jquery.mobile"], function($) {
  $('.hex').on('draginit', function (ev, drag) { });
  $('#main').show();
});
