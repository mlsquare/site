(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 70)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 100
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  $.getJSON("https://spreadsheets.google.com/feeds/list/1E5jcq2w42gN8bMIaeaRJpAdhgSVN-2XDJ_YTHe4qfwY/3/public/full?alt=json", function (data) {

    var sheetData2 = data.feed.entry;
    var i;
    for (i = 0; i < sheetData2.length; i++) {

      var feature = data.feed.entry[i]['gsx$feature']['$t'];
      var description = data.feed.entry[i]['gsx$description']['$t'];
      var status = data.feed.entry[i]['gsx$status']['$t'];

      document.getElementById('roadmap').innerHTML += ('<tr>'+'<td>'+feature+'</td>'+'<td>'+description+'</td>'+'<td>'+status+'</td>'+'</tr>');

    }
  });

  $.getJSON("https://spreadsheets.google.com/feeds/list/1E5jcq2w42gN8bMIaeaRJpAdhgSVN-2XDJ_YTHe4qfwY/1/public/full?alt=json", function (data) {

    var sheetData = data.feed.entry;

    var i;
    for (i = 3; i < sheetData.length; i++) {

      var dataset_name = data.feed.entry[i]['gsx$datasetinfo']['$t'];
      var algorithm = data.feed.entry[i]['gsx$_cpzh4']['$t'];
      var dope_score = data.feed.entry[i]['gsx$accuracy']['$t'];
      var sklearn_score = data.feed.entry[i]['gsx$_cztg3']['$t'];

      document.getElementById('demo').innerHTML += ('<tr>'+'<td>'+algorithm+'</td>'+'<td>'+dataset_name+'</td>'+'<td>'+dope_score+'</td>'+'<td>'+sklearn_score+'</td>'+'</tr>');

    }


    $(document).ready(function () {
      $('table.display').DataTable({
        "searching": false,
        "lengthChange": false,
        "pageLength": 10,
        "ordering": false,
        "info": false
      });
    });
  });


})(jQuery); // End of use strict

function addActiveClass() {
  var element = document.getElementById("featuresCarousel");
  element.classList.add("active");
} 
