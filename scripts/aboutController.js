
'use strict';

var app = app || {};

(function(module) {
  const aboutController = {};

  aboutController.index = () => {
  // aboutController.initAboutController = function () {
    $('#about').show();
    $('#summer-coding').hide();
    $('#scholarship-opportunities').hide();
    $('#school-program').hide();
  };
  module.aboutController = aboutController;
})(app);