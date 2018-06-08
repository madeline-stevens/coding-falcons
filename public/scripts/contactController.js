'use strict';

var app = app || {};

(function(module) {
  const contactController = {};

  contactController.index = () => {
    $('.tab-content').hide();
    $('#contact').show();

  };
  module.contactController = contactController;
})(app);