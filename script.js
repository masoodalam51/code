!function(t){var a=t("#search-form-wrap"),e=!1,n=function(t){setTimeout(function(){e=!1,t&&t()},200)};t("#nav-search-btn").on("click",function(){e||(e=!0,a.addClass("on"),n(function(){t(".search-form-input").focus()}))}),t(".search-form-input").on("blur",function(){e=!0,a.removeClass("on"),n()}),t("body").on("click",function(){t(".article-share-box.on").removeClass("on")}).on("click",".article-share-link",function(a){a.stopPropagation(),a=t(this);var e=a.attr("data-url"),n=encodeURIComponent(e),o="article-share-box-"+a.attr("data-id");if(a=a.offset(),t("#"+o).length){if(e=t("#"+o),e.hasClass("on"))return e.removeClass("on"),void 0}else e=['<div id="'+o+'" class="article-share-box">','<input class="article-share-input" value="'+e+'">','<div class="article-share-links">','<a href="https://twitter.com/intent/tweet?url='+n+'" class="article-share-twitter" target="_blank" title="Twitter"></a>','<a href="https://www.facebook.com/sharer.php?u='+n+'" class="article-share-facebook" target="_blank" title="Facebook"></a>','<a href="http://pinterest.com/pin/create/button/?url='+n+'" class="article-share-pinterest" target="_blank" title="Pinterest"></a>','<a href="https://plus.google.com/share?url='+n+'" class="article-share-google" target="_blank" title="Google+"></a>',"</div></div>"].join(""),e=t(e),t("body").append(e);t(".article-share-box.on").hide(),e.css({top:a.top+25,left:a.left}).addClass("on")}).on("click",".article-share-box",function(t){t.stopPropagation()}).on("click",".article-share-box-input",function(){t(this).select()}).on("click",".article-share-box-link",function(t){t.preventDefault(),t.stopPropagation(),window.open(this.href,"article-share-box-window-"+Date.now(),"width=500,height=450")}),t(".article-entry").each(function(a){t(this).find("img").each(function(){if(!t(this).parent().hasClass("fancybox")){var a=this.alt;a&&t(this).after('<span class="caption">'+a+"</span>"),t(this).wrap('<a href="'+this.src+'" title="'+a+'" class="fancybox"></a>')}}),t(this).find(".fancybox").each(function(){t(this).attr("rel","article"+a)})}),t.fancybox&&t(".fancybox").fancybox();var o=t("#container"),i=!1,s=function(){setTimeout(function(){i=!1},200)};t("#main-nav-toggle").on("click",function(){i||(i=!0,o.toggleClass("mobile-nav-on"),s())}),t("#wrap").on("click",function(){!i&&o.hasClass("mobile-nav-on")&&o.removeClass("mobile-nav-on")})}(jQuery);