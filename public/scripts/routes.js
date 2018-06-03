'use strict';

$(document).ready(function() {
  $('#about').hide();
  $('#scholarships').hide();
  $('#programs').hide();
  $('#contact').hide();


});

var app = app || {};
// page('/home', app.indexController.index); don't need right now for just clicking on home
page('/about', app.aboutController.index);
page('/scholarships', app.scholarshipController.index);
page('/programs', app.programsController.index);
page('/contact', app.contactController.index);


page();