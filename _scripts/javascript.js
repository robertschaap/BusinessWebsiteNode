// v1 Vanilla
//function myFunction() {
//    var x = document.getElementById("navi");
//    if (x.className === "") {
//        x.className += " openburger";
//    } else {
//        x.className = "";
//    }
//}
//
//window.addEventListener("resize", function() {
//    if ( document.documentElement.clientWidth > 600 ) {
//    document.getElementById("navi").className = "";
//    }
//});

// v2 jQuery
$("#navi").click(function() {
  $(this).toggleClass("openburger");
});

$(window).on("resize", function() {
  if ($(window).width() > 600) {
      $("#navi").removeClass();
  }
});