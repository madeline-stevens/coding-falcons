'use strict';

var app = app || {};

(function(module) {
  const aboutController = {};

  aboutController.index = () => {
  // aboutController.initAboutController = function () {
    $('#summer-coding').hide();
    $('#scholarship-opportunities').show();
    $('#school-program').hide();
    $('#about').hide();
  };
  module.aboutController = aboutController;
})(app);