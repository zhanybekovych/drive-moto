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

  $(".filter-style").styler();

  $(".catalog__filter-drop, .catalog__filter-param").on("click", function () {
    $(this).toggleClass("catalog__filter-drop--active");
    $(this).next().slideToggle("fast");
  });

  $(".js-range-slider").ionRangeSlider({
    type: "double",
    grid: false,
    min: 100000,
    max: 500000,
    from: 150000,
    to: 300000,
    hide_from_to: true,
  });

  $(".catalog__sort-view--grid").on("click", function () {
    $(this).addClass("catalog__sort-view--active");
    $(".catalog__sort-view--line").removeClass("catalog__sort-view--active");
    $(".products__item-wrapper").removeClass(
      "products__item-wrapper-list-view"
    );
  });

  $(".catalog__sort-view--line").on("click", function () {
    $(this).addClass("catalog__sort-view--active");
    $(".catalog__sort-view--grid").removeClass("catalog__sort-view--active");
    $(".products__item-wrapper").addClass("products__item-wrapper-list-view");
  });

  const more = $(".product-single__specs-more");
  const specs = $(".product-single__specs-body");
  const less = $(".product-single__specs-less");

  more.on("click", function () {
    more.css("display", "none");
    less.css("display", "inline-block");
    specs.animate({ height: specs.get(0).scrollHeight }, 300);
  });

  less.on("click", function () {
    more.css("display", "inline-block");
    less.css("display", "none");
    specs.css({ height: "235px" });
  });

  $(".rate-yo").rateYo({
    normalFill: "#C4C4C4",
    ratedFill: "#1C62CD",
    spacing: "7px",
  });
});
