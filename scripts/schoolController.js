'use strict';

var app = app || {};

(function(module) {
  const schoolController = {};

  schoolController.index = () => {
    $('#about').hide();
    $('#home').hide();
    $('#school-program').show();
    $('#scholarships').hide();
  };
  module.schoolController = schoolController;
})(app);