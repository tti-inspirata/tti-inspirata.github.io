jQuery(document).ready(function(a) {
    "use strict";
    var h = a(".scroll-to-top-btn");
    if (h.length > 0 && (a(window).on("scroll", function() {
            a(this).scrollTop() > 600 ? h.addClass("visible") : h.removeClass("visible")
        }), h.on("click", function(b) {
            b.preventDefault(), a("html").velocity("scroll", {
                offset: 0,
                duration: 1200,
                easing: "easeOutExpo",
                mobileHA: !1
            })
        })), a(document).on("click", ".scroll-to", function(b) {
            var c = a(this).attr("href");
            if ("#" === c) return !1;
            var d = a(c);
            if (d.length > 0) {
                var e = d.data("offset-top") || 70;
                a("html").velocity("scroll", {
                    offset: a(this.hash).offset().top - e,
                    duration: 1e3,
                    easing: "easeOutExpo",
                    mobileHA: !1
                })
            }
            b.preventDefault()
        }), function(b) {
            b.each(function() {
                var b = a(this),
                    c = b.data("filter-list"),
                    d = b.find("input[type=text]"),
                    e = b.find("input[type=radio]"),
                    f = a(c).find(".list-group-item");
                d.keyup(function() {
                    var b = d.val();
                    f.each(function() {
                        0 == a(this).text().toLowerCase().indexOf(b.toLowerCase()) ? a(this).show() : a(this).hide()
                    })
                }), e.on("click", function(b) {
                    var c = a(this).val();
                    "all" !== c ? (f.hide(), a("[data-filter-item=" + c + "]").show()) : f.show()
                })
            })
        }(a("[data-filter-list]")), function(b, c) {
            b.each(function() {
                var b = a(this),
                    d = a(this).data("date-time");
                (c || b).downCount({
                    date: d,
                    offset: 10
                })
            })
        }(a(".countdown")), a("[data-toast]").on("click", function() {
            var b = a(this),
                c = b.data("toast-type"),
                d = b.data("toast-icon"),
                e = b.data("toast-position"),
                f = b.data("toast-title"),
                g = b.data("toast-message"),
                h = "";
            switch (e) {
                case "topRight":
                    h = {
                        class: "iziToast-" + c || "",
                        title: f || "Title",
                        message: g || "toast message",
                        animateInside: !1,
                        position: "topRight",
                        progressBar: !1,
                        icon: d,
                        timeout: 3200,
                        transitionIn: "fadeInLeft",
                        transitionOut: "fadeOut",
                        transitionInMobile: "fadeIn",
                        transitionOutMobile: "fadeOut"
                    };
                    break;
                case "bottomRight":
                    h = {
                        class: "iziToast-" + c || "",
                        title: f || "Title",
                        message: g || "toast message",
                        animateInside: !1,
                        position: "bottomRight",
                        progressBar: !1,
                        icon: d,
                        timeout: 3200,
                        transitionIn: "fadeInLeft",
                        transitionOut: "fadeOut",
                        transitionInMobile: "fadeIn",
                        transitionOutMobile: "fadeOut"
                    };
                    break;
                case "topLeft":
                    h = {
                        class: "iziToast-" + c || "",
                        title: f || "Title",
                        message: g || "toast message",
                        animateInside: !1,
                        position: "topLeft",
                        progressBar: !1,
                        icon: d,
                        timeout: 3200,
                        transitionIn: "fadeInRight",
                        transitionOut: "fadeOut",
                        transitionInMobile: "fadeIn",
                        transitionOutMobile: "fadeOut"
                    };
                    break;
                case "bottomLeft":
                    h = {
                        class: "iziToast-" + c || "",
                        title: f || "Title",
                        message: g || "toast message",
                        animateInside: !1,
                        position: "bottomLeft",
                        progressBar: !1,
                        icon: d,
                        timeout: 3200,
                        transitionIn: "fadeInRight",
                        transitionOut: "fadeOut",
                        transitionInMobile: "fadeIn",
                        transitionOutMobile: "fadeOut"
                    };
                    break;
                case "topCenter":
                    h = {
                        class: "iziToast-" + c || "",
                        title: f || "Title",
                        message: g || "toast message",
                        animateInside: !1,
                        position: "topCenter",
                        progressBar: !1,
                        icon: d,
                        timeout: 3200,
                        transitionIn: "fadeInDown",
                        transitionOut: "fadeOut",
                        transitionInMobile: "fadeIn",
                        transitionOutMobile: "fadeOut"
                    };
                    break;
                case "bottomCenter":
                    h = {
                        class: "iziToast-" + c || "",
                        title: f || "Title",
                        message: g || "toast message",
                        animateInside: !1,
                        position: "bottomCenter",
                        progressBar: !1,
                        icon: d,
                        timeout: 3200,
                        transitionIn: "fadeInUp",
                        transitionOut: "fadeOut",
                        transitionInMobile: "fadeIn",
                        transitionOutMobile: "fadeOut"
                    };
                    break;
                default:
                    h = {
                        class: "iziToast-" + c || "",
                        title: f || "Title",
                        message: g || "toast message",
                        animateInside: !1,
                        position: "topRight",
                        progressBar: !1,
                        icon: d,
                        timeout: 3200,
                        transitionIn: "fadeInLeft",
                        transitionOut: "fadeOut",
                        transitionInMobile: "fadeIn",
                        transitionOutMobile: "fadeOut"
                    }
            }
            iziToast.show(h)
        }), a('[data-toggle="toast"]').on("click", function() {
            var b = "#" + a(this).data("toast-id");
            a(b).toast("show")
        }), a(".btn-wishlist").on("click", function() {
            var b = a(this).data("iteration") || 1,
                c = {
                    title: "Product",
                    animateInside: !1,
                    position: "topRight",
                    progressBar: !1,
                    timeout: 3200,
                    transitionIn: "fadeInLeft",
                    transitionOut: "fadeOut",
                    transitionInMobile: "fadeIn",
                    transitionOutMobile: "fadeOut"
                };
            switch (b) {
                case 1:
                    a(this).addClass("active"), c.class = "iziToast-info", c.message = "added to your wishlist!", c.icon = "icon-bell";
                    break;
                case 2:
                    a(this).removeClass("active"), c.class = "iziToast-danger", c.message = "removed from your wishlist!", c.icon = "icon-ban"
            }
            iziToast.show(c), b++, b > 2 && (b = 1), a(this).data("iteration", b)
        }), a(".isotope-grid").length) var i = a(".isotope-grid").imagesLoaded(function() {
        i.isotope({
            itemSelector: ".grid-item",
            transitionDuration: "0.7s",
            masonry: {
                columnWidth: ".grid-sizer",
                gutter: ".gutter-sizer"
            }
        })
    });
    if (a(".filter-grid").length > 0) {
        var j = a(".filter-grid");
        a(".nav-pills").on("click", "a", function(b) {
            b.preventDefault(), a(".nav-pills a").removeClass("active"), a(this).addClass("active");
            var c = a(this).attr("data-filter");
            j.isotope({
                filter: c
            })
        })
    }
    
    
    
});