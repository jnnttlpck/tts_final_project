// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require_tree .
//= require jquery
//= require bootstrap-sprockets
$(window).scroll(function() {
    if ($(this).width() < 992) {
        if ($(this).height() <= 768) {
            if ($(this).scrollTop() < 500) {
                $('.parallax__cover').fadeIn("slow");
            }
            if($(this).scrollTop() > 1000) {
            $('.parallax__cover').fadeIn("slow");
            }
        }
    }
});

$(document).ready(function(){
  $('.parallax__cover1').hover(function() {
    $(this).stop().animate({"opacity": "0"}, {duration: 4000}, "swing");
    },
    function() {
    $(this).stop().animate({"opacity": "1"}, {duration: 4000}, "swing");
});

});

$('.lg-pic').mouseenter(function(){
  $('.lg-pic').fadeIn("slow");
});
