'use strict';


var app = app || {};

(function(module) {
  const aboutController = {};

  aboutController.about = () => {
    $('#about').show();
    $('.tab-content').hide();

  };
  module.aboutController = aboutController;
})(app);


// 'use strict';
// var app = app || {};
// (function(module) {
//   const aboutController = {
//   };
//   aboutController.about = function () {
