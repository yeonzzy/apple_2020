//모바일사이즈 menuToggle 제어
var idx = 0;
$(".menu-trigger").on("click", menuIconFunc);
function menuIconFunc() {
  if (idx == 0) {
    $(this).addClass("active");
    $(".inner-menuBox").addClass("on");
    $("span.cart").fadeOut();
    $(".header").css({ background: "#000" });
    $(".menuBox").animate({ top: "44px" }, 1000);
    idx++;
  } else {
    $(this).removeClass("active");
    $(".inner-menuBox").removeClass("on");
    $(".menuBox").animate({ top: "-100%" }, 1000);
    $(".header").css({ background: "#333" });
    $("span.cart").delay(1000).fadeIn();
    idx = 0;
  }
}

//모바일사이즈 search 제어
$(".menuBox-search>input").on("click", function () {
  $(this).animate({ width: "80%" });
  $(".menuBox").animate({ top: "0" }, 500);
  $(".inner-menuBox").removeClass("on");
  $(".inner-searchBox").addClass("on");
  $("span.cancle").css({ display: "block" });
  searchMenuHover();
});

$("span.cancle").on("click", function () {
  $(".menuBox").animate({ top: "44px" }, 500);
  $(".menuBox-search>input").animate({ width: "95%" });
  $(".inner-menuBox").addClass("on");
  $(".inner-searchBox").removeClass("on");
  $("span.cancle").css({ display: "none" });
});

//모바일사이즈 searchMenu hover시!!!
function searchMenuHover() {
  for (i = 1; i <= 5; i++) {
    $(".inner-searchBox>ul>li")
      .eq(i)
      .hover(
        function () {
          $(this).css({ color: "#2997ff" });
          $(this).css({ cursor: "pointer" });
        },
        function () {
          $(this).css({ color: "#fff" });
          $(this).css({ cursor: "unset" });
        }
      );
  }
}
