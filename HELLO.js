var header = document.querySelector(".header");
      var ms = document.getElementById("models");
      var m3 = document.getElementById("model3");
      var mx = document.getElementById("modelx");
      var my = document.getElementById("modely");
      var model = document.getElementById("model");
      var hello = document.getElementById("hello");
      var hi = document.getElementById("hi");
      var innerhtml = document.getElementById("innerhtml");
      var ul = document.getElementById("ul");

      ms.onclick = function () {
        header.style.backgroundImage =
          "url(https://img.drivemag.net/media/default/0001/91/2019-BMW-M5-Competition-0-7899-default-large.jpeg)";
        model.innerHTML = "Bmwm5";
        hello.innerHTML = "129 mph";
        hi.innerHTML = "2.8 s";
        innerhtml.innerHTML = "163mph";
        ul.innerHTML = "553mi";
      };
      m3.onclick = function () {
        header.style.backgroundImage =
          "url(https://i.ytimg.com/vi/K9W0MtwrK98/maxresdefault.jpg)";
        model.innerHTML = "Bmwm8";
        hello.innerHTML = "155 mph";
        hi.innerHTML = "2.8 s";
        innerhtml.innerHTML = "250mph";
        ul.innerHTML = "300mi";
      };
      mx.onclick = function () {
        header.style.backgroundImage =
          "url(https://cdn.carbuzz.com/gallery-images/1600/835000/500/835579.jpg)";
        model.innerHTML = "7 series";
        hello.innerHTML = "100 mph";
        hi.innerHTML = "3.9 s";
        innerhtml.innerHTML = "155 mph";
        ul.innerHTML = "506mi";
      };

      my.onclick = function () {
        header.style.backgroundImage =
          "url(https://cdn.motor1.com/images/mgl/RPrgg/s3/bmw-m4-competition-kith-design-study-edition-lead-image.jpg)";
        model.innerHTML = "Bmwm4";
        hello.innerHTML = "155 mph";
        hi.innerHTML = "3.8 s";
        innerhtml.innerHTML = "250mph";
        ul.innerHTML = "180mi";
      };