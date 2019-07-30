$(document).on("scroll", function() {
  $("#main-title").css("left", Math.max(700 - 0.35 * window.scrollY) + "px");
});
