//searchBtn 클릭시
var searchBtn = $(".search");
var search_Area = $(".search-area");
var search_innerArea = $(".inner-area");
var header = $(".header");
var cart = $("span.cart");
var logo = $("h1.logo");
var gnb = $(".gnb");

searchBtn.on("click", searchFunc);
function searchFunc() {
  search_Area.fadeIn();
  search_innerArea.animate({ right: "50%" });
  header.css({ background: "#000" });
  cart.css({ opacity: "0" });
  gnb.css({ opacity: "0" });
  logo.css({ opacity: "0" });
}

var search_close = $(".search-close-btn");
search_close.on("click", searchCloseFunc);
function searchCloseFunc() {
  search_innerArea.animate({ right: "-100%" }, function () {
    search_Area.fadeOut();
    header.css({ background: "#333" });
    cart.css({ opacity: "1" });
    gnb.css({ opacity: "1" });
    logo.css({ opacity: "1" });
  });
}
