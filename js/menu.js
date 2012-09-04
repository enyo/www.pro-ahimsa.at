$(function(){

  var content = $("#content");

  var linkClick = function(e) {
    var href = $(this).attr("href");
    if (!/^\?site\=/.test(href)) return;
    e.stopPropagation();
    e.preventDefault();
    content.fadeOut(1);
    content.load(href + "&onlyContent=1", function() {
      content.fadeIn(800);
      $("a", content).click(linkClick);
      $("a[rel^='prettyPhoto']").prettyPhoto();
    }); 
  };

  $("#MenuBar1 li a, #top a").click(linkClick);

  $("a", content).click(linkClick);

  $("a[rel^='prettyPhoto']").prettyPhoto();


});
