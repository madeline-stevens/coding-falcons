'use strict';

var app = app || {};

(function(module) {
  const contactController = {};

  contactController.index = () => {
    $('#about').hide();
    $('#home').hide();
    $('#scholarships').hide();
    $('#programs').hide();
    $('#contact').show();

  };
  module.contactController = contactController;
})(app);