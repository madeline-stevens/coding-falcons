'use strict';

$(document).ready(function() {
  $('#about').hide();
  $('#scholarships').hide();
  $('#programs').hide();
  $('#contact').hide();
  $('#home').show();
});


var app = app || {};




// page('/', app.indexController.index); don't need right now for just clicking on home
page('/about', app.aboutController.about);
page('/scholarships', app.scholarshipController.scholarships);
page('/programs', app.programsController.programs);
page('/contact', app.contactController.contact);


page();


//this does not work:
// if (window.location.pathname !== '/') {
//     page.base('/avalanche-client');
//   }
  
//   page('/*', (ctx, next) => {
//     $('.page').hide();
//     next();
//   });
