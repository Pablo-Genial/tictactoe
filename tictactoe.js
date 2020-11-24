// A szabályok a jól ismertek: két játékos van.
// Az egyik a “0” a másik az “X” jelet használja játék közben.
// A játékosok felváltva lépnek, azaz helyeznek el egy-egy jelet 
// a 3x3-as táblázat egy cellájában.
// Az a játékos győz, akinek előbb sikerül egymás alatt, mellett, 
// vagy átlósan elhelyezni a 3 azonos jelet.
// A játék végén ki kell írni, melyik jellel játszó játékos győzött,
// és egy gomb megnyomására új játékot lehet indítani.



let a1 = document.querySelector("input[name='a1']");
let a2 = document.querySelector("input[name='a2']");
let a3 = document.querySelector("input[name='a3']");
let b1 = document.querySelector("input[name='b1']");
let b2 = document.querySelector("input[name='b2']");
let b3 = document.querySelector("input[name='b3']");
let c1 = document.querySelector("input[name='c1']");
let c2 = document.querySelector("input[name='c2']");
let c3 = document.querySelector("input[name='c3']");



// const matrix = [
//     [a1, a2, a3],
//     [b1, b2, b3],
//     [c1, c2, c3],
// ]


let result = 0;

// if (a1.value === a2.value && a2.value === a3.value) {
//     result = a1.value;
// } else if ( b1.value === b2.value && b2.value === b3.value) {
//     result = 10;
// } else if (c1.value === c2.value && C2.value === c3.value) {
//     result = c1.value;
// } else if (a1.value === b1.value && b1.value === c1.value){
//     result = a1.value;
// }  else if (a2.value === b2.value && b2 === c2.value){
//     result = a2.value;
// }  else if (a3.value === b3.value && b3.value === c3.value){
//     result = a3.value;
// }  else if (a1.value === b2.value && b2 === c3.value){
//     result = a1.value;
// }  else if (a3.value === b2.value && b2.value === c1v){
//     result = a3.value;
// }  else {
//     result = "még senki nem ";
// }







// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

span.addEventListener('click', function () {
    document.querySelector("input[name='a1']").value = "";
    document.querySelector("input[name='a2']").value = "";
    document.querySelector("input[name='a3']").value = "";
    document.querySelector("input[name='b1']").value = "";
    document.querySelector("input[name='b2']").value = "";
    document.querySelector("input[name='b3']").value = "";
    document.querySelector("input[name='c1']").value = "";
    document.querySelector("input[name='c2']").value = "";
    document.querySelector("input[name='c3']").value = "";
});




