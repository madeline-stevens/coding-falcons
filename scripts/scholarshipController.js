'use strict';

var app = app || {};

(function(module) {
  const scholarshipController = {};

  scholarshipController.index = () => {
    $('#about').hide();
    $('#home').hide();
    $('#programs').hide();
    $('#scholarships').show();
    $('#contact').hide();

  };
  module.scholarshipController = scholarshipController;
})(app);