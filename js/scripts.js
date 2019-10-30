var menuBtn = document.querySelector(".burger-btn");
var menu = document.querySelector(".page-menu");
var contactBtn = document.querySelector(".contacts-btn");
var contactList = document.querySelector(".contacts");

menuBtn.addEventListener("click", function(event) { // отслеживает клик на бургер
    event.preventDefault();
    menu.classList.toggle("visually-hidden"); // переключает класс у меню
    contactList.classList.add("visually-hidden");
});

contactBtn.addEventListener("click", function(event){
    event.preventDefault();
    menu.classList.add("visually-hidden"); // переключает класс у меню
    contactList.classList.toggle("visually-hidden");
})