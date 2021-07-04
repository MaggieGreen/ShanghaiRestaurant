$(function(){
    $(".responsive-button").bind("click", function() {
      if ($(".nav-link").is(":visible")) {
          console.log(1)
        $(".nav-link").hide(500);
        $(".responsive-button").removeClass('the-icon');
      } else {
          console.log(2)
        $(".nav-link").css({
            "animation": "listShow ease-in	 0.8s 0.2s forwards",
            "display": "flex",

        });
        $(".responsive-button").addClass('the-icon');
      }
    });
  });
  