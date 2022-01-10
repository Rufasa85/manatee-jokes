var setText = document.getElementById('setup')
var punchText = document.getElementById('punchline')
var jokebtn = document.getElementById('get-joke')
var punchbtn = document.getElementById('show-punchline')

var punchLine = "";
var setup = "";

function handleGetJoke() {
    punchText.setAttribute('class', 'hidden')
    fetch('http://manateejokesapi.herokuapp.com/manatees/random')
        .then(function(res) {
            return res.json();
        })
        .then(function(response) {
            console.log(response);
            setup = response.setup;
            punchLine = response.punchline;
            punchText.textContent = punchLine
            setText.textContent = setup
        })
};

function showPunchLine() {
    punchText.setAttribute('class', 'show')
}

punchbtn.addEventListener('click', showPunchLine)
jokebtn.addEventListener('click', handleGetJoke)
