'use strict';

var app = app || {};

(function(module) {
  const scholarshipController = {};

  scholarshipController.index = () => {
    $('#about').hide();
    $('#home').hide();
    $('#school-program').hide();
    $('#scholarships').show();
  };
  module.scholarshipController = scholarshipController;
})(app);