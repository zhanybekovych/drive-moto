$(function () {
  $(".banner__slider").slick({
    dots: true,
    prevArrow:
      '<button class="banner-slider-btn banner-slider-btn-prev"><img src="images/arrow-left.svg" alt=""></button>',
    nextArrow:
      '<button class="banner-slider-btn banner-slider-btn-next"><img src="images/arrow-right.svg" alt=""></button>',
  });

  const tabs = $(".search__tabs-item");

  tabs.on("click", function (e) {
    e.preventDefault();

    tabs.removeClass("search__tabs-item--active");
    $(".search__content-item").removeClass("search__content-item--active");

    $(this).addClass("search__tabs-item--active");
    $($(this).attr("href")).addClass("search__content-item--active");
  });
});
