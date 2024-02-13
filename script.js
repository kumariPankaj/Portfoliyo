document.addEventListener("DOMContentLoaded", function() {
    // Get all the up arrow elements
    var upArrows = document.querySelectorAll(".up-arrow");

    // Loop through each up arrow
    upArrows.forEach(function(arrow) {
        // Add click event listener
        arrow.addEventListener("click", function(event) {
            // Prevent default behavior
            event.preventDefault();

            // Scroll to the top of the page
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Smooth scrolling behavior
            });

            // Remove 'active' class from all up arrows
            upArrows.forEach(function(item) {
                item.classList.remove("active");
            });

            // Add 'active' class to the clicked up arrow
            this.classList.add("active");
        });
    });
});
