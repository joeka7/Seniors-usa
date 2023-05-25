let age_options = document.querySelector(".age-options");
let us_options = document.querySelector(".us-options");
let dental_benefits = document.querySelector(".dental-benefits");
let benefits_need = document.querySelector(".benefits-need");
let popup = document.querySelector(".popup");

let age_btns_one = document.querySelector(".age-options .one").onclick = function() {
    age_options.style.display = "none";
    us_options.style.display = "block";
};
let age_btns_two = document.querySelector(".age-options .two").onclick = function() {
    age_options.style.display = "none";
    us_options.style.display = "block";
};
let age_btns_three = document.querySelector(".age-options .three").onclick = function() {
    age_options.style.display = "none";
    us_options.style.display = "block";
};


let us_btns_one = document.querySelector(".us-options .one").onclick = function() {
    us_options.style.display = "none";
    dental_benefits.style.display = "block";
};
let us_btns_two = document.querySelector(".us-options .two").onclick = function() {
    us_options.style.display = "none";
    dental_benefits.style.display = "block";
};

let db_btns_one = document.querySelector(".dental-benefits .one").onclick = function() {
    dental_benefits.style.display = "none";
    benefits_need.style.display = "block";
};
let db_btns_two = document.querySelector(".dental-benefits .two").onclick = function() {
    dental_benefits.style.display = "none";
    benefits_need.style.display = "block";
};


let bn_btns_one = document.querySelector(".benefits-need .one").onclick = function() {
    benefits_need.style.display = "none";
    document.querySelector(".content-text").style.display = "none";
    document.querySelector(".image").style.display = "none";
    document.querySelector(".text").style.display = "none";
    popup.style.display = "block";
};
let bn_btns_two = document.querySelector(".benefits-need .two").onclick = function() {
    benefits_need.style.display = "none";
    document.querySelector(".content-text").style.display = "none";
    document.querySelector(".image").style.display = "none";
    document.querySelector(".text").style.display = "none";
    popup.style.display = "block";
};
let bn_btns_three = document.querySelector(".benefits-need .three").onclick = function() {
    benefits_need.style.display = "none";
    document.querySelector(".content-text").style.display = "none";
    document.querySelector(".image").style.display = "none";
    document.querySelector(".text").style.display = "none";
    popup.style.display = "block";
};
let bn_btns_four = document.querySelector(".benefits-need .four").onclick = function() {
    benefits_need.style.display = "none";
    document.querySelector(".content-text").style.display = "none";
    document.querySelector(".image").style.display = "none";
    document.querySelector(".text").style.display = "none";
    popup.style.display = "block";
};
let bn_btns_five = document.querySelector(".benefits-need .five").onclick = function() {
    benefits_need.style.display = "none";
    document.querySelector(".content-text").style.display = "none";
    document.querySelector(".image").style.display = "none";
    document.querySelector(".text").style.display = "none";
    popup.style.display = "block";
};