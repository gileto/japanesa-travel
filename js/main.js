(function () {
let header = document.getElementById("header");
window.onscroll = () => {
    if (window.pageYOffset > 50) {
        header.style.backgroundColor = "#0E1D28";
    } else {
        header.style.backgroundColor = "transparent";
    }
}
}
());