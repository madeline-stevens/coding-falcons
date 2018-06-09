'use strict';

var app = app || {};

(function(module) {
  const indexController = {};

  indexController.index = () => {
    $('.tab-content').hide();
    $('#home').show();
  };
  module.indexController = indexController;
})(app);