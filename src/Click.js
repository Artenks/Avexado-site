(function (window, document) {
  var t = setInterval(function () {
    if ("complete" === document.readyState) {
      clearInterval(t);
      // JS:
        
        var Aside = document.getElementById("aside-bar");
        var Button = document.querySelector(".CreditsButton");

        var btn = document.getElementById("btn");
      btn.addEventListener("click", function () {
          console.log("btn");

          Aside.style.animation = "movement .5s forwards";
          Button.style.right = "-10rem";

      });
        var btn2 = document.getElementById("btn#2");
        btn2.addEventListener("click", function () {
            console.log("btn#2");
            Aside.style.animation = "movementOut .4s";
            Aside.style.opacity = "0";
            Button.style.right = "2rem";
        });
      // JS/>
    }
  }, 10);
})(window, document);
