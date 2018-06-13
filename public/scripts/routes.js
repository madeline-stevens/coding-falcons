'use strict';

// $(document).ready(function() {
//   $('#about').hide();
//   $('#scholarships').hide();
//   $('#programs').hide();
//   $('#contact').hide();
//   $('#home').show();
// });


var app = app || {};

page('/about', app.aboutController.about);
page('/scholarships', app.scholarshipController.scholarships);
page('/programs', app.programsController.programs);
page('/contact', app.contactController.contact);

page();
