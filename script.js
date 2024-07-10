(function() {
  function scrollHorizontally(e) {
      e = window.event || e;
      var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
      this.scrollLeft -= (delta * 40); // Multiplied by 40
      e.preventDefault();
  }
  if (document.body.addEventListener) {
      // IE9, Chrome, Safari, Opera
      document.body.addEventListener('mousewheel', scrollHorizontally, false);
      // Firefox
      document.body.addEventListener('DOMMouseScroll', scrollHorizontally, false);
  } else {
      // IE 6/7/8
      document.body.attachEvent('onmousewheel', scrollHorizontally);
  }
})();