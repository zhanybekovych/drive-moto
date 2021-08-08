$(function () {
  $(".banner__slider").slick({
    dots: true,
    prevArrow:
      '<button class="banner-slider-btn banner-slider-btn-prev"><img src="images/arrow-left.svg" alt=""></button>',
    nextArrow:
      '<button class="banner-slider-btn banner-slider-btn-next"><img src="images/arrow-right.svg" alt=""></button>',
  });

  $(".products__slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:
      '<button class="banner-slider-btn products__slider-btn-prev banner-slider-btn-prev"><img src="images/arrow-left-dark.svg" alt=""></button>',
    nextArrow:
      '<button class="banner-slider-btn products__slider-btn-next banner-slider-btn-next"><img src="images/arrow-right-dark.svg" alt=""></button>',
  });

  const tabs = $(".tabs__tab");

  tabs.on("click", function (e) {
    e.preventDefault();

    $($(this).siblings()).removeClass("tabs__tab--active");

    $($(this).parent().siblings().find("div")).removeClass(
      "tabs__content--active"
    );

    $(this).addClass("tabs__tab--active");

    const target = $($(this).attr("href"));

    target.addClass("tabs__content--active");

    if (target.find("div.slick-slider").hasClass("slick-initialized")) {
      target.find(".products__slider").slick("refresh");
    }
  });
});
