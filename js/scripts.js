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

$(window).ready(function () {
    if($(window).width() >= 960){
        $('.page-menu').removeClass('visually-hidden');
        $('.contacts').removeClass('visually-hidden');
        $('.contacts-btn').addClass('visually-hidden');
        $('.burger-btn').addClass('visually-hidden');
    }
})
// jQuery(document).ready(function(){
//     function classFunction(){
//       if(jQuery('body').width()>=960){
//         jQuery('.page-menu').removeClass('visually-hidden');
//         jQuery('.contacts').removeClass('visually-hidden');
//         jQuery('.contacts-btn').addClass('visually-hidden');
//         jQuery('.burger-btn').addClass('visually-hidden');
//       }
//     }
    
//     classFunction();
//     jQuery(window).resize(classFunction);
//    })