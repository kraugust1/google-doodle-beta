console.log('OK');

gsap.to( '#fullturtle' , {
  
    scale : 1.1 , 
    duration: 2 ,
    transformOrigin: '50% 50%', 
    repeat : -1,
    yoyo : true    });

    // ==================================
    

gsap.to('#fullturtle', {
    scale: 1.1,
    duration: 2,
    transformOrigin: '50% 50%',
    repeat: -1,
    yoyo: true
});
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded');

    // Ensure pointer events are enabled on the SVG element
    var square5 = document.querySelector('.square5');
    if (square5) {
        console.log('square5 element found:', square5);

        // Add click event listener to the document
        document.addEventListener('click', function(event) {
            // Check if the click is on the square5 element
            if (event.target.closest('.square5')) {
                console.log('square5 clicked', event);

                // Prevent the click event from propagating to parent elements
                event.stopImmediatePropagation();

                // Animate the square5 element using GSAP
                gsap.to(square5, {
                    duration: 2,
                    y: 200,
                    ease: "power1.inOut",
                    repeat: -1,
                    yoyo: true,
                    onComplete: function() {
                        console.log('Animation complete');
                    }
                });
            } else {
                console.log('main element clicked', event);
            }
        }, true); // Use capture phase

        // Log that the event listener has been added
        console.log('Event listener added to document');
    } else {
        console.log('square5 element not found');
    }
});
