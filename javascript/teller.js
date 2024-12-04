let teller = document.getElementById("tall");
let count = 0

//Minske tall
function decrease() {
    count--
     teller.innerHTML = count
}

//Øke tall
function increase() {
    count++
     teller.innerHTML = count
}