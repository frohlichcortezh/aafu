var _print = window.print;

window.print = function() {
    [...acc].forEach(function(elem) {
        elem.classList.toggle("active", true);
        elem.nextElementSibling.style.maxHeight = elem.nextElementSibling.scrollHeight + "px";
    });
    var btnPrint = document.getElementById("btnPrint");
    toogleBtnVisibility(btnPrint);
    _print();
    toogleBtnVisibility(btnPrint);
 }

function toogleBtnVisibility(elem) {
    if (elem.style.display === "none") {
        elem.style.display = "block";
    } else {
        elem.style.display = "none";
    }
}
