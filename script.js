// typewriter effect home page
    var i = 0;
    var txt = 'Appreciation Archive';
    var speed = 50;

    function typeWriter() {
        if (i < txt.length) {
        document.getElementById("Appreciation").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
        }
    }
// button to scroll to top
    // Get the button:
    let mybutton = document.getElementById("myBtn");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

//Reload home page
function reloadHomePage() {
    // Get the current page's URL and set it as the href
    window.location.href = window.location.href;
    window.onload = topFunction() {
        typeWriter();
    };
}