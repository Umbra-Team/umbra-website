$("#case-study-icon").click(function (e) {
  // Check if the event was triggered by #case-study-icon
  if (e.target === this) {
    e.stopPropagation();
    // Check if #case-study-nav is currently visible
    if ($("#case-study-nav").is(":visible")) {
      // If it's visible, animate it to hide it
      $("#case-study-nav").animate(
        {
          opacity: 0,
          height: "toggle",
        },
        500
      );
      $(this).attr("src", "/images/open-arrows.png");
    } else {
      // If it's not visible, animate it to show it
      $("#case-study-nav").animate(
        {
          opacity: 1,
          height: "toggle",
        },
        500
      );
      $(this).attr("src", "/images/up_down.png");
    }
  }
});

$("#case-study-nav-link").click(function (e) {
  e.stopPropagation();
  e.preventDefault();
  $(this).addClass("scrolly active");
});
