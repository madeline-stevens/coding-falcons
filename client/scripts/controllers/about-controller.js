'use strict';

var app = app || {};

(function(module) {
  const aboutController = {};

  aboutController.index = () => {
  // aboutController.initAboutController = function () {
    $('#summer-coding').hide();
    $('#scholarship-opportunities').hide();
    $('#school-program').hide();
    $('#about').show();
  };
  module.aboutController = aboutController;
})(app);