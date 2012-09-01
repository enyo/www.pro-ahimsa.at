$(document).ready(function(){

  var content = $("#content");

  $("#MenuBar1 li").click(function() {
    content.fadeOut(1);
    content.load(this.id, function() { content.fadeIn(800) });

     });
  });

$(document).ready(function(){
               var content = $("#content");
               
               $("a").click(function(){
                           switch(this.id){
                             case "gewaltlos":
                               content.fadeOut(1)
                            content.load("gewaltlos.html");
                            content.fadeIn(800);
                             break;
                             
                             case "umsetzung":
                               content.fadeOut(1)
                            content.load("umsetzung.html");
                            content.fadeIn(800);
                             break;
                             
                             case "ethik":
                               content.fadeOut(1)
                            content.load("ethik.html");
                            content.fadeIn(800);
                             break;
                             
                             case "faszinierend":
                               content.fadeOut(1)
                            content.load("faszinierend.html");
                            content.fadeIn(800);
                             break;
                             
                             case "yoga":
                               content.fadeOut(1)
                            content.load("yoga.html");
                            content.fadeIn(800);
                             break;
                             
                             case "archiv":
                               content.fadeOut(1)
                            content.load("archiv.html");
                            content.fadeIn(800);
                             break;
                             
                             case "downloads":
                               content.fadeOut(1)
                            content.load("archiv.html");
                            content.fadeIn(800);
                             break;
                             
                             case "about":
                               content.fadeOut(1)
                            content.load("about.html");
                            content.fadeIn(800);
                             break;
                             
                             case "impressum":
                               content.fadeOut(1)
                            content.load("impressum.html");
                            content.fadeIn(800);
                             break;
                             
                             case "newsletter":
                               content.fadeOut(1)
                            content.load("newsletter.html");
                            content.fadeIn(800);
                             break;
                             
                             case "links":
                               content.fadeOut(1)
                            content.load("links.html");
                            content.fadeIn(800);
                             break;
                             
                           }
                           });
               });
$(document).ready(function(){
               $("#content").load("aktueles.html");
               });