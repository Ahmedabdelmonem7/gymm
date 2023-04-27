function search(){
    document.getElementById('more').className = "off";
    document.getElementById('search').className = 'search';
}

function closeSearch(){
    document.getElementById('more').className = "on";
    document.getElementById('search').className = 'off';
}

// swiper js pc
var swiper = new Swiper(".sections2-pc .mySwiper", {
    slidesPerView: 2,
    spaceBetween: -350,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
});

// swiper js mobile
var swiper = new Swiper(".sections2-mob .mySwiper", {
    slidesPerView: 1,
    spaceBetween: 25,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
});


// scrolling

// let section = document.querySelector(".sections2")
// let imgs = document.querySelectorAll(".card-content img")
// let title = document.querySelectorAll(".title h1")
// let hr = document.querySelectorAll(".title hr")
// let sec3 = document.querySelector(".section3")

// window.onscroll = function(){
//     if(window.scrollY >= section.offsetTop-350){
//         imgs.forEach((img) => {
//             img.style.bottom = "0px";
//             // img.style.width = "350px";
//         });
//         title.forEach((h1) => {
//             h1.style.fontSize = "2.5em";
//         });
//         hr.forEach((hr) => {
//             hr.style.width = "200px";
//         });
        
//     }
//     if(window.scrollY >= section.offsetTop +100){
//         sec3.style.backgroundImage = 'url("../images/sec3.jpg")';
//     }
// }


// sidebar

let sideopenBtn = document.querySelector(".sidebar-icon #openbtn")
let sidecloseBtn = document.querySelector(".sidebar-icon #closebtn")
let sidebar = document.querySelector(".sidebar")
sidecloseBtn.style = "display:none";

sideopenBtn.onclick = function () {
    sidebar.classList.toggle('active');
    // sidebar.style.left = "0";
    sideopenBtn.style = "display:none";
    sidecloseBtn.style = "display:flex";
};

sidecloseBtn.onclick = function () {
    sidebar.classList.toggle('active');
    // sidebar.style.left = "-60%";
    sidecloseBtn.style = "display:none";
    sideopenBtn.style = "display:flex";
};

// search mob
let searchMob = document.querySelector("#searchMob");
let headerIcon1 = document.querySelector(".user-info");
let headerIcon2 = document.querySelector(".nav-cart");
let headerIcon3 = document.querySelector(".sidebar-icon");
let searchDIV = document.querySelector(".search-mob");
let closesearchMob = document.querySelector("#close-search-mob");
let logo = document.querySelector(".logo");
searchMob.onclick = function () {
    headerIcon1.style = "display:none";
    headerIcon2.style = "display:none";
    headerIcon3.style = "display:none";
    searchDIV.style = "display:flex;justify-content:center;align-items:center;width:90%;display: flex;height:100%";
    logo.style = "display:none";
};

closesearchMob.onclick = function () {
    headerIcon1.style = "display:flex";
    headerIcon2.style = "display:flex";
    headerIcon3.style = "display:flex";
    searchDIV.style = "display:none";
    logo.style = "display:flex";
};

// userinfo-mob onclick

let userInfo = document.querySelector(".user-info");
let userInfoIconOpen = document.querySelector(".user-info #icon-openn");
let userInfoImgOpen = document.querySelector(".user-info #img-open");
let userInfoIconClose = document.querySelector(".user-info #icon-close");
let userInfoImgClose = document.querySelector(".user-info .img-close");
let userMore = document.querySelector(".user-more");
userInfoImgOpen.onclick = function () {
    userMore.style = "display:flex";
    userInfoIconOpen.style = "display:none";
    userInfoImgOpen.style = "display:none";
    userInfoIconClose.style = "display:flex";
    userInfoImgClose.style = "display:flex";
};
userInfoIconOpen.onclick = function () {
    userMore.style = "display:flex";
    userInfoIconOpen.style = "display:none";
    userInfoImgOpen.style = "display:none";
    userInfoIconClose.style = "display:flex";
    userInfoImgClose.style = "display:flex";
};
userInfoImgClose.onclick = function () {
    userMore.style = "display:none";
    userInfoIconOpen.style = "display:flex";
    userInfoImgOpen.style = "display:flex";
    userInfoIconClose.style = "display:none";
    userInfoImgClose.style = "display:none";
};
userInfoIconClose.onclick = function () {
    userMore.style = "display:none";
    userInfoIconOpen.style = "display:flex";
    userInfoImgOpen.style = "display:flex";
    userInfoIconClose.style = "display:none";
    userInfoImgClose.style = "display:none";
};


let sections = document.querySelector("section");
sections.onclick = function () {
    userMore.style = "display:none";
    userInfoIconOpen.style = "display:flex";
    userInfoImgOpen.style = "display:flex";
    userInfoIconClose.style = "display:none";
    userInfoImgClose.style = "display:none";
};