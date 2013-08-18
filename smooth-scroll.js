/* =============================================================

    Smooth Scroll 2.1
    Animate scrolling to anchor links, by Chris Ferdinandi.
    http://gomakethings.com

    Free to use under the MIT License.
    http://gomakethings.com/mit/
    
 * ============================================================= */

// Feature Test
if ( 'querySelector' in document && 'addEventListener' in window && Array.prototype.forEach ) {

    // Function to animate the scroll
    var smoothScroll = function (anchor, duration) {

        // Calculate how far and how fast to scroll
        var startLocation = window.pageYOffset;
        var endLocation = anchor.offsetTop;
        var distance = endLocation - startLocation;
        var increments = distance/(duration/16);

        // Scroll the page by an increment, and check if it's time to stop
        var animateScroll = function () {
            window.scrollBy(0, increments);
            stopAnimation();
        }

        // Calculate when to stop scrolling
        if ( increments >= 0 ) {
            var stopAnimation = function () {
                var travelled = window.pageYOffset;
                if ( (travelled >= (endLocation - increments)) || ((window.innerHeight + travelled) >= document.body.offsetHeight) ) {
                    clearInterval(runAnimation);
                }
            }
        }
        else {
            var stopAnimation = function () {
                var travelled = window.pageYOffset;
                if ( travelled <= (endLocation || 0) ) {
                    clearInterval(runAnimation);
                }
            }
        }



        // Loop the animation function
        var runAnimation = setInterval(animateScroll, 16);
        console.log(increments);
   
    }

    // Define smooth scroll links
    var scrollToggle = document.querySelectorAll('.scroll');

    // For each smooth scroll link
    [].forEach.call(scrollToggle, function (toggle) {

        // When the smooth scroll link is clicked
        toggle.addEventListener('click', function(e) {

            // Prevent the default link behavior
            e.preventDefault();

            // Get anchor link and calculate distance from the top
            var dataID = this.getAttribute('href');
            var dataTarget = document.querySelector(dataID);

            // Scroll to the anchor
            smoothScroll(dataTarget, 500);

        }, false);

    });

}
