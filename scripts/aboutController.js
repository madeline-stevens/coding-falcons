'use strict';

// $(document).ready(function() {
//   $('#about').hide();
// });

var app = app || {};

(function(module) {
  const aboutController = {};

  aboutController.index = () => {
    $('#about').show();
    $('#home').hide();
    $('#scholarships').hide();
    $('#programs').hide();
    $('#contact').hide();

  };
  module.aboutController = aboutController;
})(app);