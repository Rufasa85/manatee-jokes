var punchLine = "";
var setup = "";

function handleGetJoke() {
    fetch('http://manateejokesapi.herokuapp.com/manatees/random')
        .then(function(res) {
            return res.json();
        })
        .then(function(response) {
            setup = response.setup;
            punchLine = response.punchLine;
        })
};