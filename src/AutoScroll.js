import $ from "jquery";

(function (window, document) {
  var t = setInterval(function () {
    if ("complete" === document.readyState) {
      clearInterval(t);
      // JS:
      $(document).ready(function () {
        $('a[href^="#"]').on("click", function (e) {
          e.preventDefault();

          var target = this.hash;
          var $target = $(target);

          $("html, body").animate(
            {
              scrollTop: $target.offset().top,
            },
            1000,
            "swing"
          );
        });
      });
      // JS/>
    }
  }, 10);
})(window, document);
