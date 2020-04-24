document.querySelector("#activate-flight").addEventListener("click", function flightHandlerFunction() {
    document.getElementById("flight").classList.add("enabled");
    document.getElementById("flight").classList.remove("disabled");
})

document.querySelector("#activate-mindreading").addEventListener("click", function () {
    document.getElementById("mindreading").classList.add("enabled");
    document.getElementById("mindreading").classList.remove("disabled");
})

document.querySelector("#activate-xray").addEventListener("click", function () {
    document.getElementById("xray").classList.add("enabled");
    document.getElementById("xray").classList.remove("disabled");
})

const powers = document.querySelectorAll(".power");

document.querySelector("#activate-all").addEventListener("click", function () {
    for (i = 0; i < powers.length; i++) {  
    powers[i].classList.add("enabled");
    powers[i].classList.remove("disabled");
    }
})

document.querySelector("#deactivate-all").addEventListener("click", function () {
    for (i = 0; i < powers.length; i++) {  
        powers[i].classList.add("disabled");
        powers[i].classList.remove("enabled");
    }
})