var link = document.querySelector(".map-content-btn");
var popup = document.querySelector(".write-form");
var popup_off = document.querySelector(".btn-contacts-exit");
var overlay = document.querySelector(".overlay");

link.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.add("write-form-show");
    overlay.style.display = "block";
});
popup_off.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.remove("write-form-show");
    overlay.style.display = "none";
});