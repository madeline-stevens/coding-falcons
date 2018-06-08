'use strict';

var app = app || {};

(function(module) {
  const indexController = {};

  indexController.index = () => {
    $('#home').show();
    $('.tab-content').hide();


    
  };
  module.indexController = indexController;
})(app);