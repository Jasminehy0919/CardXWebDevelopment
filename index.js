$(".download-button").hover(function() {
  $(".title-QR").addClass("shake_effect");
  setTimeout(function(){
    $(".title-QR").removeClass("shake_effect");
  },500)
});
