'use strict';

var app = app || {};

(function(module) {
  const mainController = {};

  mainController.index = () => {
  // aboutController.initAboutController = function () {
    $('#summer-coding').show();
    $('#scholarship-opportunities').hide();
    $('#school-program').hide();
    $('#about').hide();
  };
  module.mainController = mainController;
})(app);