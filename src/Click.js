(function (window, document) {
  var t = setInterval(function () {
    if ("complete" === document.readyState) {
      clearInterval(t);
      // JS:
        
        var Aside = document.getElementById("aside-bar");
      var Button = document.querySelector(".CreditsButton");
      var Maps = document.querySelector(".Loc");
      var BackgroundMaps = document.querySelector(".BackgroundMaps");

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
      var btn3 = document.getElementById("btn#3");
      btn3.addEventListener("click", function () {
        console.log("btn#3")
        Maps.style.opacity = "1";

        Maps.style.zIndex = "3";
        Maps.style.content = "";
        Maps.style.width = "100%";
        Maps.style.height = "100%";
        Maps.style.position = "fixed";
        Maps.style.top = "0";
        Maps.style.left = "0";
        Maps.style.backgroundColor = "rgba(0,0,0,0.6)";
        Maps.style.display = "flex";
        Maps.style.animation = "Opacity .7s forwards";
        BackgroundMaps.style.animation = "OpacityMovement .7s forwards";
      });
      var btn4 = document.getElementById("btn#4");
      btn4.addEventListener("click", function () {
        console.log("btn#4")

        Maps.style.right = "-100rem";
        Maps.style.zIndex = "1";
        Maps.style.display = "none";

      });
      // JS/>
    }
  }, 1);
})(window, document);
