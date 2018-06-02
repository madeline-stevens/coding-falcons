'use strict';

var app = app || {};

(function(module) {
  const schoolController = {};

  schoolController.index = () => {
    $('#about').hide();
    $('#home').hide();
    $('#programs').show();
    $('#scholarships').hide();
    $('#contact').hide();

    
  };
  module.schoolController = schoolController;
})(app);