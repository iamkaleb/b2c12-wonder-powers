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

document.querySelector("#activate-all").addEventListener("click", function () {
    document.getElementById("xray").classList.add("enabled");
    document.getElementById("xray").classList.remove("disabled");
    document.getElementById("mindreading").classList.add("enabled");
    document.getElementById("mindreading").classList.remove("disabled");
    document.getElementById("flight").classList.add("enabled");
    document.getElementById("flight").classList.remove("disabled");
})

document.querySelector("#deactivate-all").addEventListener("click", function () {
    document.getElementById("xray").classList.remove("enabled");
    document.getElementById("xray").classList.add("disabled");
    document.getElementById("mindreading").classList.remove("enabled");
    document.getElementById("mindreading").classList.add("disabled");
    document.getElementById("flight").classList.remove("enabled");
    document.getElementById("flight").classList.add("disabled");
})