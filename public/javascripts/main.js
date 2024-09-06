// main.js
//const React = require("react");

//const { BrowserRouter as Router, Route, Switch, Link } = ReactRouterDOM;
//console.log(ReactRouterDOM);
console.log("yee")
//const { BrowserRouter: Router, Route, Switch, Link } = ReactRouterDOM;
//console.log(window.ReactRouterDOM);


document.querySelector('.scroll-arrow').addEventListener('click', function() {
    document.querySelector('.content-section').scrollIntoView({ behavior: 'smooth' });
});

