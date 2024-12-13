isTouchscreen ||
      ($("#home-hero").length &&
        (0 == scrollPos
          ? ($("#home-hero-image")
              .show()
              .css({
                "clip-path": "circle(100% at 50% 50%)",
                "-webkit-clip-path": "circle(100% at 50% 50%)",
              }),
            $("#home-hero-text").css({ transform: "translateY(0)" }))
          : scrollPos < 0.375 * winHeight
          ? ((secPercent =
              100 -
              (secPercent = (scrollPos / (0.375 * winHeight)) * 100).toFixed(
                2
              )),
            $("#home-hero-image")
              .show()
              .css({
                "clip-path": "circle(" + secPercent + "% at 50% 50%)",
                "-webkit-clip-path": "circle(" + secPercent + "% at 50% 50%)",
              }),
            $("#home-hero-text").css({
              transform: "translateY(-" + 1.25 * scrollPos + "px)",
            }))
          : $("#home-hero-image").hide()),
      $(".full-bleed:has(.hero-image:not(.home-hero-image))").each(function () {
        (secTopPos = $(this).offset().top),
          (secHeight = $(this).height()),
          (secBot = secTopPos + secHeight),
          $body.is('[data-loading="false"]') &&
            (secTopPos - winHeight - headerHeight <= scrollPos &&
            scrollPos < secBot + headerHeight
              ? $(this).find(".hero-image").is(".hidden") &&
                $(this).find(".hero-image").removeClass("hidden")
              : $(this).find(".hero-image").is(".hidden") ||
                $(this).find(".hero-image").addClass("hidden"));
      }))