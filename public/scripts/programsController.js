'use strict';

var app = app || {};

(function(module) {
  const programsController = {};

  programsController.programs = () => {
    $('#programs').show();
    $('.tab-content').hide();

  };
  module.programsController = programsController;
})(app);