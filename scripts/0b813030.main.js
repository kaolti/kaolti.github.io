function scrollLink(a){"use strict";$("html, body").animate({scrollTop:$($.attr(this,"href")).offset().top},300),a.preventDefault()}$(".scroll-arrow").on("click","a",scrollLink),$(".scroll-arrow").on("touchstart","a",scrollLink),$("form").garlic(),$("#cklist-reset").on("click",function(){document.location.reload(!0),localStorage.clear()});