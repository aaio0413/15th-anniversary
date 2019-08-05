$(document).on("scroll", function() {
  $("#main-title").css("left", Math.max(700 - 0.35 * window.scrollY) + "px");
});

(function($) {
  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  $.fn.visible = function(partial) {
    var $t = $(this),
      $w = $(window),
      viewTop = $w.scrollTop(),
      viewBottom = viewTop + $w.height(),
      _top = $t.offset().top,
      _bottom = _top + $t.height(),
      compareTop = partial === true ? _bottom : _top,
      compareBottom = partial === true ? _top : _bottom;

    return compareBottom <= viewBottom && compareTop >= viewTop;
  };
})(jQuery);

var win = $(window);

var allMods = $(".module");

allMods.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible");
  }
});

win.scroll(function(event) {
  allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in");
    }
  });
});

const loader = document.getElementById("loader");
window.addEventListener("load", function() {
  // loader.style.height = "100px";
  // loader.style.width = "100px";
  loader.style.visibility = "hidden";
});

// $('.social-share').addClass('fa-3x').removeClass('fa-4x');

if ($(window).width() < 769) {
  $(".social-share-icon")
    .removeClass("fa-4x")
    .addClass("fa-3x");
} else {
  $(".social-share-icon").addClass("fa-4x");
}
