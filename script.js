// function Hamburgue() {
//     var divHamburgue = document.getElementById("DivHamburgue");
//     if (divHamburgue.style.display === "block") {
//         divHamburgue.style.display = "none";
//     } else {
//         divHamburgue.style.display = "block";
//     }
// }

function Hamburgue() {
    var divHamburgue = document.getElementById("DivHamburgue");
    divHamburgue.classList.toggle('active');
}