/*!
 * angular-slick-carousel
 * DevMark <hc.devmark@gmail.com>,Karan Batra-Daitch <karanganesha04@gmail.com>
 * https://github.com/devmark/angular-slick-carousel
 * Version: 3.0.2 - 2015-07-21T11:01:43.965Z
 * License: MIT
 */
!function () {
  "use strict";
  var e = [].indexOf || function (e) {
    for (var n = 0, t = this.length; t > n; n++)if (n in this && this[n] === e)return n;
    return-1
  };
  angular.module("slickCarousel", []).constant("slickCarouselConfig", {autoplay: !0, dots: !0, autoplaySpeed: 3e3, lazyLoad: "ondemand", method: {}, event: {}}).directive("slick", ["$timeout", "slickCarouselConfig", "$compile", function (n, t, i) {
    var o, a, r;
    return o = ["accessibility", "adaptiveHeight", "autoplay", "autoplaySpeed", "asNavFor", "appendArrows", "prevArrow", "nextArrow", "centerMode", "centerPadding", "cssEase", "customPaging", "dots", "draggable", "fade", "focusOnSelect", "edgeFriction", "infinite", "initialSlide", "lazyLoad", "mobileFirst", "pauseOnHover", "pauseOnDotsHover", "respondTo", "rows", "slide", "slidesPerRow", "slidesToShow", "slidesToScroll", "speed", "swipe", "swipeToSlide", "touchMove", "touchThreshold", "useCSS", "variableWidth", "vertical", "verticalSwiping", "rtl"], a = ["slickGoTo", "slickNext", "slickPrev", "slickPause", "slickPlay", "slickAdd", "slickRemove", "slickFilter", "slickUnfilter", "unslick"], r = ["afterChange", "beforeChange", "breakpoint", "destroy", "edge", "init", "reInit", "setPosition", "swipe"], {scope: {settings: "=", data: "="}, restrict: "AE", link: function (i, r, s) {
      var l, c, u, d, f;
      return c = function () {
        l = angular.extend(angular.copy(t), i.settings), angular.forEach(s, function (n, t) {
          e.call(o, t) >= 0 && (l[t] = i.$eval(n))
        })
      }, u = function () {
        for (var e = r.slick("getSlick"), n = 0; n < e.slideCount; n++)r.slick("slickRemove", n);
        return e = r.slick("unslick")
      }, d = function () {
        return n(function () {
          c();
          var e;
          e = r.slick(angular.element(r).hasClass("slick-initialized") ? "getSlick" : l), i.internalControl = l.method || {}, a.forEach(function (n) {
            i.internalControl[n] = function () {
              var t;
              t = Array.prototype.slice.call(arguments), t.unshift(n), e.slick.apply(r, t)
            }
          }), e.on("afterChange", function (e, n, t, i) {
            "undefined" != typeof l.event.afterChange && l.event.afterChange(e, n, t, i)
          }), "undefined" != typeof l.event.beforeChange && e.on("beforeChange", function (e, n, t, i) {
            l.event.beforeChange(e, n, t, i)
          }), "undefined" != typeof l.event.breakpoint && e.on("breakpoint", function (e, n, t) {
            l.event.breakpoint(e, n, t)
          }), "undefined" != typeof l.event.destroy && e.on("destroy", function (e, n) {
            l.event.destroy(e, n)
          }), "undefined" != typeof l.event.edge && e.on("edge", function (e, n, t) {
            l.event.edge(e, n, t)
          }), e.on("init", function (e, n) {
            "undefined" != typeof l.event.init && l.event.init(e, n)
          }), "undefined" != typeof l.event.reInit && e.on("reInit", function (e, n) {
            l.event.reInit(e, n)
          }), "undefined" != typeof l.event.setPosition && e.on("setPosition", function (e, n) {
            l.event.setPosition(e, n)
          }), "undefined" != typeof l.event.swipe && e.on("swipe", function (e, n, t) {
            l.event.swipe(e, n, t)
          })
        })
      }, f = function () {
        return angular.element(r).hasClass("slick-initialized") && u(), n(function () {
          return d()
        }, 1)
      }, i.$watch("settings", function (e, n) {
        return null !== e ? f() : void 0
      }, !0), i.$watch("data", function (e, n) {
        angular.equals(e, n) || f()
      }, !0)
    }}
  }])
}();
