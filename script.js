const container = document.getElementById("container")
const text = document.getElementById("text")
const textAfter = window.getComputedStyle(text, "::after");
text.style.setProperty('--backgroundColor', 'rgba(255, 255, 255, 0)')

function typewriter() {
text.style.setProperty('--backgroundColor', 'rgb(255, 255, 255)')
var str = "I am Mohammad Irfan Lohar"
var str1 = "And I am a MERN Stack Developer"
var count = 0;

// String 1 Type State
    

var interval = setInterval(() => {

    if (count != str.length) {
        text.textContent += str[count];
        count++;
    }

    else 
        clearInterval(interval)

}, 100);

// String 1 Erase State
setTimeout(() => {
    var interval = setInterval(() => {
        if (count >= 0) {
            text.textContent = str.slice(0, count - 1)
            str = str.slice(0, count-1)
            count--;
        }

        else {
            text.textContent = ""
            count=0;
            clearInterval(interval)
        }
    }, 100);
}, 5000);

// String 2 Type state
setTimeout(() => {
    var interval = setInterval(() => {

        if (count != str1.length) {
            text.textContent += str1[count];
            count++;
        }

        else 
            clearInterval(interval)
        
    }, 100);
}, 10000);

// String 2 Erase State
setTimeout(() => {
    var interval = setInterval(() => {
        if (count >= 0) {
            text.textContent = str1.slice(0, count - 1)
            str1 = str1.slice(0, count-1)
            count--;
        }

        else {
            text.textContent = ""
            count=0;
            clearInterval(interval)
        }
    }, 100);
}, 16000);

}
setTimeout(() => {
typewriter();
}, 2200);

setInterval(() => {
    typewriter();
}, 23000);
