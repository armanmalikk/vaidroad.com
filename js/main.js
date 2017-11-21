$(document).ready(function(){

  $("#side-menu-singup").click(function(){
    $("#side-menu-singup").hide();
    $("#side-menu-singup1").css({"display": "initial","transform" : "rotate(180deg)" });
    console.log("Hello world");
});

$("#side-menu-singup1").click(function(){
  $("#side-menu-singup1").hide();
  $("#side-menu-singup").css({"display": "initial", "transform": "rotate(180deg)" });
  console.log("Hello world");
});

$("#side-menu-singup").click(function(){
  $("#menu").css({"display": "initial" });
  console.log("Hello world");
});

$("#side-menu-singup1").click(function(){
  $("#menu").css({"display": "none" });
  console.log("Hello world");
});

$("#project-box").hover(function(){
  $("#hidden-button").css({"display": "initial"});
},function(){
  $("#hidden-button").css({"display": "none" });
});

$("#project-box1").hover(function(){
  $("#hidden-button1").css({"display": "initial"});
},function(){
  $("#hidden-button1").css({"display": "none" });
});

$("#project-box2").hover(function(){
  $("#hidden-button2").css({"display": "initial"});
},function(){
  $("#hidden-button2").css({"display": "none" });
});

$("#project-box3").hover(function(){
  $("#hidden-button3").css({"display": "initial"});
},function(){
  $("#hidden-button3").css({"display": "none" });
});

 new WOW().init();

 var speed = 5000;

    var run = setInterval(rotate, speed);
    var slides = $('.slide');
    var container = $('#slides ul');
    var elm = container.find(':first-child').prop("tagName");
    var item_width = container.width();
    var previous = 'prev'; //id of previous button
    var next = 'next'; //id of next button
    slides.width(item_width); //set the slides to the correct pixel width
    container.parent().width(item_width);
    container.width(slides.length * item_width); //set the slides container to the correct total width
    container.find(elm + ':first').before(container.find(elm + ':last'));
    resetSlides();


    //if user clicked on prev button

    $('#buttons a').click(function (e) {
        //slide the item

        if (container.is(':animated')) {
            return false;
        }
        if (e.target.id == previous) {
            container.stop().animate({
                'left': 0
            }, 1500, function () {
                container.find(elm + ':first').before(container.find(elm + ':last'));
                resetSlides();
            });
        }

        if (e.target.id == next) {
            container.stop().animate({
                'left': item_width * -2
            }, 1500, function () {
                container.find(elm + ':last').after(container.find(elm + ':first'));
                resetSlides();
            });
        }

        //cancel the link behavior
        return false;

    });

    //if mouse hover, pause the auto rotation, otherwise rotate it
    container.parent().mouseenter(function () {
        clearInterval(run);
    }).mouseleave(function () {
        run = setInterval(rotate, speed);
    });


    function resetSlides() {
        //and adjust the container so current is in the frame
        container.css({
            'left': -1 * item_width
        });
    }

});

function rotate() {
    $('#next').click();
}
