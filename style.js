const display = document.getElementById('display');



function appendToDisplay(input) {
    if (input === '.' && display.value.includes('.')) return
    display.value += input;
}

function clearDisplay() {
    display.value = ''
}


function calculate() {
    display.value = eval(display.value);
    
}

function removeDisplay() {
    display.value = display.value.slice(0, -1)
}

function loadedTheme() {

}

const body = document.querySelector('body');
const toggle = document.getElementById('toggle');
let theme;

// function setTheme() {
//     if (body.classList.contains('active')) {
//         console.log('active2')
//         theme = 'active2'
//     }
// }
document.body.classList.add(localStorage.getItem('theme'))

const two = document.getElementById('two');
two.addEventListener('click', () => {
    body.classList.add('active2')
    body.classList.remove('active3')
    toggle.style.left = '36%'
    toggle.style.background = "hsl(25, 98%, 40%)";
    localStorage.setItem('theme', 'active2');
})

const three = document.getElementById('three');
three.addEventListener('click',() => {
    body.classList.add('active3');
    body.classList.remove('active2')
    toggle.style.left = "66%";
    toggle.style.background = "hsl(176, 100%, 44%)";
    localStorage.setItem("theme", "active3");

})

const one = document.getElementById('one');
one.addEventListener('click', () => {
    body.classList.remove('active2')
    body.classList.remove('active3');
    toggle.style.left = "1%";
    toggle.style.background = "hsl(6, 63%, 50%)";
    localStorage.setItem("theme", "active1");

    
})



