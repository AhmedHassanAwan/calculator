
const input = document.querySelector("#input")
function dabaya(a) {
    input.value +=a
    console.log(a);
}

function equal() {
    input.value = eval(input.value)
}

function clr() {
    input.value = ""
}
