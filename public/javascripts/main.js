// main.js
//const React = require("react");

//const { BrowserRouter as Router, Route, Switch, Link } = ReactRouterDOM;
//console.log(ReactRouterDOM);
console.log("yee")
//const { BrowserRouter: Router, Route, Switch, Link } = ReactRouterDOM;
//console.log(window.ReactRouterDOM);

const currentPath = window.location.pathname;

    // Get all the anchor tags in the nav bar
    const navLinks = document.querySelectorAll('nav.tabs a');

    // Loop through each link and set the 'active' class if the href matches the current URL
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
document.querySelector('.scroll-arrow').addEventListener('click', function() {
    document.querySelector('.content-section').scrollIntoView({ behavior: 'smooth' });
});

