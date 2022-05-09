$(".download-button").hover(function() {
  $(".title-QR").addClass("shake");
  setTimeout(function(){
    $(".title-QR").removeClass("shake");
  },500)
});
