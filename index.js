$(".download-button").hover(function() {
  $(".title-QR").addClass("shake");
  setTimeout(function(){
    $(".title-QR").removeClass("shake");
  },500)
});



const cursor =document.querySelector(".cursor");

document.addEventListener('mousemove', e=>{
  cursor.setAttribute("style","top: "+e.pageY +"px; left:"+e.pageX+"px;")
})
