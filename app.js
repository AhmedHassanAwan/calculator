// function dabaya(a){
//     document.getElementById("calculator").value += a
// }


// function equal() {
//    var a = document.getElementById('calculator')
//    a.value = eval(a.value)
// }

// function clr() {
//     document.getElementById('calculator').value = ""
// }

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

function clear() {
    
    
}