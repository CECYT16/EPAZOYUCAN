//Codigo de StackOverflow XD

// Get the current page URL
var currentPage = window.location.href;

// Get all the links in the .nav-container
var links = document.querySelectorAll('.nav-container a');

// Loop through each link
links.forEach(function(link) {
    // Check if the link href matches the current page URL
    if (link.getAttribute('href') === currentPage) {
        // Disable the click event if it's the current page
        link.addEventListener('click', function(event) {
            event.preventDefault();
        });
        // Optionally, add a visual indicator that the link is disabled
        link.style.pointerEvents = 'none';
        link.style.opacity = '0.5';
    }
});