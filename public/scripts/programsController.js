'use strict';

var app = app || {};

(function(module) {
  const programsController = {};

  programsController.index = () => {
    $('#about').hide();
    $('#home').hide();
    $('#programs').show();
    $('#scholarships').hide();
    $('#contact').hide();

    
  };
  module.programsController = programsController;
})(app);