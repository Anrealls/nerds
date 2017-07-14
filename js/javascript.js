var link = document.querySelector(".map-content-btn");
var popup = document.querySelector(".write-form");
var popup_off = document.querySelector(".btn-contacts-exit");
var overlay = document.querySelector(".overlay");

var radio_1 = document.querySelector(".slider-radio-first");
var radio_2 = document.querySelector(".slider-radio-second");
var radio_3 = document.querySelector(".slider-radio-third");
var slide_1 = document.querySelector(".slide-first-content");
var slide_2 = document.querySelector(".slide-second-content");
var slide_3 = document.querySelector(".slide-third-content");



radio_1.addEventListener("click", function () {
    slide_1.style.display = "block";
    slide_2.style.display = "none";
    slide_3.style.display = "none";
});
radio_2.addEventListener("click", function () {
    slide_1.style.display = "none";
    slide_2.style.display = "block";
    slide_3.style.display = "none";
});
radio_3.addEventListener("click", function () {
    slide_1.style.display = "none";
    slide_2.style.display = "none";
    slide_3.style.display = "block";
});

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