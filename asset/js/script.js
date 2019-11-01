'use strict';
const socialButton = document.querySelector('#social');
const generalButton = document.querySelector('#general');
const literacyButton = document.querySelector('#literacy');
const languageButton = document.querySelector('#language');
const mathButton = document.querySelector('#math');
const otherButton = document.querySelector('#other');
const socialOpen = document.querySelector('.social');
const generalOpen = document.querySelector('.general');
const literacyOpen = document.querySelector('.literacy');
const languageOpen = document.querySelector('.language');
const mathOpen = document.querySelector('.math');
const otherOpen = document.querySelector('.other');
const prevButton = document.querySelector('.back');


const tl1 = new TimelineLite({ paused: true });
const tl2 = new TimelineLite({ paused: true });
const tl3 = new TimelineLite({ paused: true });
const tl4 = new TimelineLite({ paused: true });
const tl5 = new TimelineLite({ paused: true });
const tl6 = new TimelineLite({ paused: true });

tl1.fromTo(".none", 1, {
    opacity: 1,
    ease: Power2.easeOut
}, {
    x: -200, 
    opacity: 0,
    pointerEvents: 'none',
    zIndex: -1
}, "-=.5").fromTo( ".social", 0.5,{
    opacity: 0,
    x: 50,
    ease: Power2.easeOut
}, {
    opacity: 1,
    x: 0,
    zIndex: 10,
    pointerEvents: 'auto',
    onComplete: function() {
        socialOpen.style.pointerEvents = 'auto';
        document.querySelector('.none').style.pointerEvents = 'none';
        document.querySelector('.prevArrow').style.display = 'flex';
        var catClasses = document.querySelectorAll('.general, .language, .literacy, .math, .other');
            // for(var i = 0; i < catClasses.length; i++) {
            //     catClasses[i].style.display = "none";
            // }
    }
});

tl2.fromTo(".none", 1, {
    opacity: 1,
    ease: Power2.easeOut
}, {
    x: -200, 
    opacity: 0,
    pointerEvents: 'none',
    zIndex: -1
}, "-=.5").fromTo( ".general", 0.5,{
    opacity: 0,
    x: 50,
    ease: Power2.easeOut
}, {
    opacity: 1,
    x: 0,
    zIndex: 10,
    pointerEvents: 'auto',
    onComplete: function() {
        socialOpen.style.pointerEvents = 'auto';
        document.querySelector('.none').style.pointerEvents = 'none';
        document.querySelector('.prevArrow').style.display = 'flex';
        var catClasses = document.querySelectorAll('.social, .language, .literacy, .math, .other');
            // for(var i = 0; i < catClasses.length; i++) {
            //     catClasses[i].style.display = "none";
            // }
    }
});

tl3.fromTo(".none", 1, {
    opacity: 1,
    ease: Power2.easeOut
}, {
    x: -200, 
    opacity: 0,
    pointerEvents: 'none',
    zIndex: -1
}, "-=.5").fromTo( ".literacy", 0.5,{
    opacity: 0,
    x: 50,
    ease: Power2.easeOut
}, {
    opacity: 1,
    x: 0,
    zIndex: 10,
    pointerEvents: 'auto',
    onComplete: function() {
        socialOpen.style.pointerEvents = 'auto';
        document.querySelector('.none').style.pointerEvents = 'none';
        document.querySelector('.prevArrow').style.display = 'flex';
        // var catClasses = document.querySelectorAll('.social, .language, .literacy, .math, .other');
            // for(var i = 0; i < catClasses.length; i++) {
            //     catClasses[i].style.display = "none";
            // }
    }
});

tl4.fromTo(".none", 1, {
    opacity: 1,
    ease: Power2.easeOut
}, {
    x: -200, 
    opacity: 0,
    pointerEvents: 'none',
    zIndex: -1
}, "-=.5").fromTo( ".language", 0.5,{
    opacity: 0,
    x: 50,
    ease: Power2.easeOut
}, {
    opacity: 1,
    x: 0,
    zIndex: 10,
    pointerEvents: 'auto',
    onComplete: function() {
        socialOpen.style.pointerEvents = 'auto';
        document.querySelector('.none').style.pointerEvents = 'none';
        document.querySelector('.prevArrow').style.display = 'flex';
        var catClasses = document.querySelectorAll('.social, .language, .literacy, .math, .other');
            // for(var i = 0; i < catClasses.length; i++) {
            //     catClasses[i].style.display = "none";
            // }
    }
});

tl5.fromTo(".none", 1, {
    opacity: 1,
    ease: Power2.easeOut
}, {
    x: -200, 
    opacity: 0,
    pointerEvents: 'none',
    zIndex: -1
}, "-=.5").fromTo( ".math", 0.5,{
    opacity: 0,
    x: 50,
    ease: Power2.easeOut
}, {
    opacity: 1,
    x: 0,
    zIndex: 10,
    pointerEvents: 'auto',
    onComplete: function() {
        socialOpen.style.pointerEvents = 'auto';
        document.querySelector('.none').style.pointerEvents = 'none';
        document.querySelector('.prevArrow').style.display = 'flex';
        var catClasses = document.querySelectorAll('.social, .language, .literacy, .math, .other');
            // for(var i = 0; i < catClasses.length; i++) {
            //     catClasses[i].style.display = "none";
            // }
    }
});

tl6.fromTo(".none", 1, {
    opacity: 1,
    ease: Power2.easeOut
}, {
    x: -200, 
    opacity: 0,
    pointerEvents: 'none',
    zIndex: -1
}, "-=.5").fromTo( ".other", 0.5,{
    opacity: 0,
    x: 50,
    ease: Power2.easeOut
}, {
    opacity: 1,
    x: 0,
    zIndex: 10,
    pointerEvents: 'auto',
    onComplete: function() {
        socialOpen.style.pointerEvents = 'auto';
        document.querySelector('.none').style.pointerEvents = 'none';
        document.querySelector('.prevArrow').style.display = 'flex';
        var catClasses = document.querySelectorAll('.social, .language, .literacy, .math, .other');
            // for(var i = 0; i < catClasses.length; i++) {
            //     catClasses[i].style.display = "none";
            // }
    }
});

socialButton.addEventListener("click", () => {
    tl1.play();

    prevButton.addEventListener("click", () => {
        document.querySelector('.prevArrow').style.display = 'none';
        // tl1.reversed(!tl1.reversed());
        tl1.reverse();
    });
});

generalButton.addEventListener("click", () => {
    tl2.play();

    prevButton.addEventListener("click", () => {
        document.querySelector('.prevArrow').style.display = 'none';
        // toggleTween(tl2);
        tl2.reverse();
    });
});

literacyButton.addEventListener("click", () => {
    tl3.play();

    prevButton.addEventListener("click", () => {
        document.querySelector('.prevArrow').style.display = 'none';
        // toggleTween(tl2);
        tl3.reverse();
    });
});

languageButton.addEventListener("click", () => {
    tl4.play();

    prevButton.addEventListener("click", () => {
        document.querySelector('.prevArrow').style.display = 'none';
        // toggleTween(tl2);
        tl4.reverse();
    });
});

mathButton.addEventListener("click", () => {
    tl5.play();

    prevButton.addEventListener("click", () => {
        document.querySelector('.prevArrow').style.display = 'none';
        // toggleTween(tl2);
        tl5.reverse();
    });
});

otherButton.addEventListener("click", () => {
    tl6.play();

    prevButton.addEventListener("click", () => {
        document.querySelector('.prevArrow').style.display = 'none';
        // toggleTween(tl2);
        tl6.reverse();
    });
});

function toggleTween(tween) {
    tween.reversed() ? tween.play() : tween.reverse();
}

