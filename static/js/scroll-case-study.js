$(window).scroll(function () {
  var caseStudyTop = $("#case-study").offset().top;
  var caseStudyBottom = caseStudyTop + $("#case-study").outerHeight() - 200;

  if (
    $(window).scrollTop() >= caseStudyTop &&
    $(window).scrollTop() <= caseStudyBottom
  ) {
    $("#case-study-nav").slideDown(500);
  } else {
    $("#case-study-nav").slideUp(500);
  }
});

$('a[href="#case-study"]').click(function (e) {
  // Check if #case-study-nav is currently visible
  if ($("#case-study-nav").is(":visible")) {
    // If it's visible, slide it up to hide it
    $("#case-study-nav").slideUp(500);
  } else {
    // If it's not visible, slide it down to show it
    $("#case-study-nav").slideDown(500);
  }
});
