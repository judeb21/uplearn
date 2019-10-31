const socialButton = document.querySelector('#social');
const generalButton = document.querySelector('#general');
const socialOpen = document.querySelector('.social');
const generalOpen = document.querySelector('.general');
const prevButton = document.querySelector('.back');

const tl1 = new TimelineLite({ paused: true });
// const tl2 = new TimelineLite({ paused: true });

document.getElementById('header').addEventListener("click", function(e) {
    var target = e.target;
    
    if (target.id === 'social') {

        tl1.to(".none", 1, {
            opacity: 0,
            zIndex: -1,
            ease: Power2.easeOut
        });
        
        tl1.to(".social", 1, {
            opacity: 1,
            zIndex: 10,
            x: 0,
            ease: Power2.easeOut,
            onComplete: function() {
                document.querySelector(".none").style.pointerEvents = 'none';
                document.querySelector(".prevArrow").style.display = 'flex';
                document.querySelector(".social").style.pointerEvents = 'auto';

                var catClasses = document.querySelectorAll('.general, .language, .literacy, .math, .other');
                
                for(var i = 0; i < catClasses.length; i++) {
                    catClasses[i].style.display = "none";
                }
                
                // document.querySelector(".social").style.display = 'flex';
            }
        });

        tl1.play();

        prevButton.addEventListener("click", () => {
            document.querySelector('.prevArrow').style.display = 'none';
            tl1.reverse();
        });

    }

    else if (target.id == 'general') {

        tl1.to(".none", 1, {
            opacity: 0,
            zIndex: -1,
            ease: Power2.easeOut
        });
        
        tl1.to(".general", 0.5, {
            opacity: 1,
            zIndex: 10,
            x: 0,
            ease: Power2.easeOut,
            onComplete: function() {
                document.querySelector(".none").style.pointerEvents = 'none';
                document.querySelector(".prevArrow").style.display = 'flex';
                document.querySelector(".general").style.pointerEvents = 'auto';
                
                var cateClasses = document.querySelectorAll('.social, .language, .literacy, .math, .other');
                    //catClasses.style.opacity = 0;
                    for(var i = 0; i < cateClasses.length; i++) {
                        cateClasses[i].style.display = "none";
                    }

                // document.querySelector(".general").style.display = 'flex';
            }
        });
        
        tl1.play();

        prevButton.addEventListener("click", () => {
            document.querySelector('.prevArrow').style.display = 'none';
            tl1.reverse();
        });
    } 
});


// function toggleTween(tween) {
//     tween.reversed() ? tween.play() : tween.reverse();
// }


