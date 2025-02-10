const navBtn = document.querySelector(".nav-mobile")
const navMenu = document.querySelector(".nav__mobile") // برای منو موبایل
const navDisable = document.querySelector(".nav__btn")
const resumeListItems = document.querySelectorAll('.resume-list__item')
const NavPortfolio = document.querySelectorAll('.navport__item')

let navOpen = false;
let MenuLinks = false;
let titleScreen = document.querySelector('.header');
titleScreen=document.querySelector('.main-logo');
console.log(titleScreen)
titleScreen.style.color = 'black';
titleScreen.innerHTML = 'GTI';
let list = document.querySelectorAll('.nav-items');
console.log(list)
list[4].style.fontSize = "10px";
list[4].innerHTML = '0';


let counter = 0;
function updateCounter() {
    if (counter <= 9999) {
        list[4].innerHTML = counter;
        console.log(counter);
        counter++;
        setTimeout(updateCounter, 1); // تاخیر 100 میلی ثانیه
    }
}
//exc
updateCounter()


;
navBtn.addEventListener("click", function () {
    if (navOpen) {
        navBtn.classList.remove("nav-mobile--open")
        navMenu.classList.remove("nav__mobile--open")
        navOpen = false
    } else {
        navBtn.classList.add("nav-mobile--open")
        navMenu.classList.add("nav__mobile--open")
        navOpen = true
    }
})

// For resume items


resumeListItems.forEach(resumeListItem => {
    resumeListItem.addEventListener('click', function() {
        // حذف کلاس active از همه آیتم‌ها
        resumeListItems.forEach(item => {
            item.classList.remove('active');
        });
        
        // اضافه کردن کلاس active به آیتم کلیک شده
        this.classList.add('active');
    });
});

//Portfolio


NavPortfolio.forEach(navPort => {
    navPort.addEventListener('click', function() {
        // حذف کلاس active از همه آیتم‌ها
        NavPortfolio.forEach(item => {
            item.classList.remove('active');
        });
        
        // اضافه کردن کلاس active به آیتم کلیک شده
        this.classList.add('active');
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // کلیه کدهای دیگر شما اینجا باشد
    
    // کد سوايپر
    const swiper = new Swiper('.swiper', {
        pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
            clickable:true,
            spaceBetween: 30,

        },
        breakpoints:{
            768:{
                slidesPerView:2,
            },
            1200:{
                slidesPerView:3,
            },
        },
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        autoplay: true,
        loopPreventsSlide: true,
    });
});

// var username = prompt("Enter ur username");
// var pass = prompt("Enter ur password");

// var passwords = "123456";
// var usernames = "admin";

// var myfunc = function(){
//     if((username == usernames) && (isNaN(username)==false)&&(username.lenth >= 3)){
//         if((pass == passwords) && (isNaN(pass)== false)&&(pass.lenth > 5)){
//             console.log("OK")
//         }
//         else{
//             console.log("Password is incorrect/password must have more 5 charachters")
//         }
//     }
//     else{
//         console.log("Username is incorrect/username must have 5 charachters or more");
//     }
// }
// myfunc();