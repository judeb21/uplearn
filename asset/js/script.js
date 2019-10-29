const socialButton = document.querySelector('#social');
const socialOpen = document.querySelector('.social');
const prevButton = document.querySelector('.back');

const tl1 = new TimelineLite({ paused: true, reversed: true });

tl1.fromTo(".none", 1, {
    opacity: 1,
    ease: Power2.easeOut
}, {
    x: -200, 
    opacity: 0,
}, "-=.5").fromTo( ".social", 0.5,{
    opacity: 0,
    x: 50,
    ease: Power2.easeOut
}, {
    opacity: 1,
    x: 0,
    onComplete: function() {
        socialOpen.style.pointerEvents = 'auto';
        console.log('done');
        document.querySelector('.none').style.pointerEvents = 'none';
        document.querySelector('.prevArrow').style.display = 'flex';
    }
});

socialButton.addEventListener("click", () => {
    tl1.play();
});

prevButton.addEventListener("click", () => {
    document.querySelector('.prevArrow').style.display = 'none';
    toggleTween(tl1);
});

function toggleTween(tween) {
    tween.reversed() ? tween.play() : tween.reverse();
}