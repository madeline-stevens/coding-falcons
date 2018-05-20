
'use strict';

var app = app || {};

(function(module) {
  const mainController = {};

  mainController.index = () => {
  // aboutController.initAboutController = function () {
    $('#about').hide();
    $('#summer-coding').show();
    $('#scholarship-opportunities').hide();
    $('#school-program').hide();
  };
  module.mainController = mainController;
})(app);