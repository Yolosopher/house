$(document).ready(function () {
    // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    function videoRemove() {
        $(".video-block div").addClass("noactive");
        $(".video-block div").removeClass("active");
        $(".video-block > .drop-video").removeClass("active");
    }
    var objress = ".drop-video.rop-resp";
    var objdess = ".drop-video.rop-des";
    var objJustt = ".drop-video";
    var ifra = ".viframe";

    function videoClickIf(obj, classN, vframe, empty, src) {
        if ($(obj).hasClass("active")) {
            videoRemove();
            $(".viframe").attr("src", empty);
            setTimeout(() => {
                $(obj).parent().find(vframe).children().attr("src", src);
            }, 150);
            $(obj).addClass("active");
            $(obj).parent().find(classN).addClass("active");
        } else {
            $(obj).parent().find(classN).removeClass("active");
            $(obj).parent().find(".viframe").attr("src", empty);
            $(".video-block div").removeClass("noactive");
        }
        $(obj).parent().find(".drop-video").children().attr("src", empty);
    }

    var catmedia1 = window.matchMedia("(max-width: 800px)");
    if (true) { //edited from if(catmedia1.matches)
        $(".video-block div").on("click", function () {
            const empty = "";
            const imgSrc = $(this).children().attr("data");
            $(this).toggleClass("active");
            const obj = $(this);

            if ($(this).is(":nth-child(1)") || $(this).is(":nth-child(2)")) {
                videoClickIf(obj, objress, objress, empty, imgSrc);
            } else {
                videoClickIf(obj, objdess, objdess, empty, imgSrc);
            }
        });
    } else {
        $(".video-block div").on("click", function () {
            const empty = "";
            const imgSrc = $(this).children().attr("data");
            $(this).toggleClass("active");
            const obj = $(this);
            videoClickIf(obj, objdess, objdess, empty, imgSrc);
        });
    }

    // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

    // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    function photoRemove() {
        $(".photo-block > img").addClass("noactive");
        $(".photo-block > img").removeClass("active");
        $(".photo-block > .drop-img").removeClass("active");
    }
    var objres = ".drop-img.rop-resp";
    var objdes = ".drop-img.rop-des";
    var objJust = ".drop-img";

    function photoClickIf(obj, classN) {
        if ($(obj).parent().find("img").hasClass("active")) {
            photoRemove();
            $(obj).addClass("active");
            $(obj).parent().find(classN).addClass("active");
        } else {
            $(obj).parent().find(".drop-img").removeClass("active");
            $(".photo-block > img").removeClass("noactive");
        }
    }

    var catmedia = window.matchMedia("(max-width: 800px)");
    if (true) { //edited from if(catmedia.matches)
        $(".photo-block > img").on("click", function () {
            const imgSrc = $(this).attr("src");
            $(this).toggleClass("active");
            const obj = $(this);
            if ($(this).is(":nth-child(1)") || $(this).is(":nth-child(2)")) {
                photoClickIf(obj, objres);
                $(this)
                    .parent()
                    .find(".drop-img")
                    .children()
                    .attr("src", imgSrc);
            } else {
                photoClickIf(obj, objdes);
                $(this)
                    .parent()
                    .find(".drop-img.rop-des")
                    .children()
                    .attr("src", imgSrc);
            }
        });
    } else {
        $(".photo-block > img").on("click", function () {
            const imgSrc = $(this).attr("src");
            const obj = $(this);
            $(this).toggleClass("active");
            photoClickIf(obj, objJust);
            $(this).parent().find(".drop-img").children().attr("src", imgSrc);
        });
    }
    // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
});
