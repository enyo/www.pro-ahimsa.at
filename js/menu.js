$(document).ready(function(){

  var content = $("#content");

  $("#MenuBar1 li a, #top a").click(function(e) {
    e.stopPropagation();
    e.preventDefault();
    content.fadeOut(1);
    content.load(this.href + "&onlyContent=1", function() { content.fadeIn(800); });
  });

});
