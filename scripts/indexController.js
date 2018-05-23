'use strict';

var app = app || {};

(function(module) {
  const indexController = {};

  indexController.index = () => {
    $('#about').hide();
    $('#home').show();
    $('#scholarships').hide();
    $('#school-program').hide();
  };
  module.indexController = indexController;
})(app);