document.onreadystatechange = function() {
            if (document.readyState !== "complete") {
                document.querySelector(
                  "body").style.visibility = "hidden";
                document.querySelector(
                  "#spinner").style.visibility = "visible";
            } else {
                document.querySelector(
                  "#spinner").style.display = "none";
                document.querySelector(
                  "body").style.visibility = "visible";
            }
        };

// $( ".chaotic-orbit" ).load( "test.html", function() { 
//   $(".chaotic-orbit").fadeOut("slow"); 
// });

// if (document.readyState == 'complete') {
//     $(".chaotic-orbit").fadeOut("slow");
// } else {
//     $(window).load(function () {
//         $(".chaotic-orbit").fadeOut("slow");
//     })
// };