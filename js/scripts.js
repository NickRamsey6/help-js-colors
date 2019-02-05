//document).ready(function() {
  // $("h1").click(function() {
  //   alert("This is a header.");
  // });
  // $("h1").select(function() {
  //   alert("123");
  // });
  //
  // $("p").click(function() {
  //   alert("This is a paragraph.");
  // });
  //
  // $("img").click(function() {
  //   alert("This is an image.");
  // });

//   $(".clickable").click(function() {
//     $("#initially-showing").toggle();
//     $("#initially-hidden").toggle();
//   });
//
//   $("#fadeout").click(function() {
//     $("h1").fadeOut();
//   })
//
//   $("#fadein").click(function() {
//     $("h1").fadeIn();
//   })
//
//   $("#fadetoggle").click(function() {
//     $("h1").fadeToggle( "slow", "linear" );
//   })
//   $("#slidedown").click(function() {
//     $("div").slidedown();
//   })
//   $("#slideup").click(function() {
//     $("div").slideup();
//   })
//   $("#slidetoggle").click(function() {
//     $("div").slidetoggle();
//   })
// });
//
// $(document).ready(function() {
//   $("button#green").click(function() {
//     $("body").removeClass();
//     $("body").addClass("green-background");
//   });
//   $("button#yellow").click(function() {
//     $("body").removeClass();
//     $("body").addClass("yellow-background");
//   });
//   $("button#red").click(function() {
//     $("body").removeClass();
//     $("body").addClass("background-color", "red");
//   });
$(document).ready(function() {
  $("button#dark").click(function() {
    $("body").removeClass();
    $("body").addClass("dark");
  });

  $("button#light").click(function() {
    $("body").removeClass();
    $("body").addClass("light");
  });

  $("button#original").click(function() {
    $("body").removeClass();
    $("body").addClass("original");
  });

  $("h1").click(function() {
    // $("h1").highlight("highlight");
    // $(".highlight").css({ background-color: "#FFFF88" });
    if ($("h1").hasClass("highlight")) {
      $("h1").removeClass("highlight");
    }
    else {
      $("h1").addClass("highlight");
    }
  });
});
