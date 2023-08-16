const container = document.getElementById("container")
const text = document.getElementById("text")
const textAfter = window.getComputedStyle(text, "::after");
text.style.setProperty('--backgroundColor', 'rgba(255, 255, 255, 0)')
const imageChange = document.getElementById("image-change")
var count = 2;

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
                str = str.slice(0, count - 1)
                count--;
            }

            else {
                text.textContent = ""
                count = 0;
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
                str1 = str1.slice(0, count - 1)
                count--;
            }

            else {
                text.textContent = ""
                count = 0;
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


// image changer code

function imageChanger() {
    setTimeout(() => {
        imageChange.style.opacity = '0'
    }, 1500);
    
    setTimeout(() => {
        imageChange.style.transform = count == 2 ? "skewX(5deg)" : "skewX(-10deg)"
        imageChange.src = `./Sources/i${count}.jpg`
        imageChange.style.opacity = '1'
        count = count == 2 ? 1 : 2 
    }, 2000);
}

setInterval(() => {
    imageChanger();
}, 3000);



// Extending Input Width Function
function extend_width(e) {
    var input = document.getElementById(e);
    input.style.width = "35vw"
}

// Cutting Down Input Width Function
function cut_down_width(e) {
    var input = document.getElementById(e);
    input.style.width = '30vw'
}
