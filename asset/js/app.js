//hide nav on scroll down
'use strict';

var t1 = new TimelineMax({paused: true});

t1.to("#nav-icon span:nth-child(1)", 0.5, {
    y: -7,
    x: 18,
    rotation: 45,
    ease: Expo.easeInOut,
    onComplete: function() {
        document.querySelector('.one').style.background = '#fff';
    }
});
t1.to("#nav-icon span:nth-child(2)", 0.5, {
    y: -8,
    x: 5,
    rotation: -45,
    ease: Expo.easeInOut,
    onComplete: function() {
        document.querySelector('.two').style.background = '#fff';
    }
});

t1.to(".mobile-nav", 0.5, {
     top: "0%",
     ease: Expo.easeInOut,
     delay: -0.5
});

t1.staggerFrom(".mobile-nav ul li", 0.5, {x: -200, opacity: 0, ease:Expo.easeOut}, 0.3);

t1.reverse();
$(document).on("click", "#nav-icon", function() {
    document.querySelector('.one').style.background = '#000';
    document.querySelector('.two').style.background = '#000';
    t1.reversed(!t1.reversed());
});
$(document).on("click", ".data ul li a", function() {
     t1.reversed(!t1.reversed());
});