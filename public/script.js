$(document).ready(function(){
    /*=== Adjustments for mobile devices ===*/
    if($(window).width() < 650){
        $(".nav-menu").toggleClass("make-nav-small");
        $(".content-container").toggleClass("margin-left-reduce");
        $(".sticky-bar").toggleClass("padding-left-reduce");
        $(".nav-link-name").toggleClass("hide");
        $(".logo").toggleClass("hide");
    }
    
    /*=== Navigation Toggle and related adjustments ===*/
    $(".nav-toggle-button").click(function(){
        $(".nav-menu").toggleClass("make-nav-small");
        
        $(".sticky-bar").toggleClass("padding-left-reduce");
        $(".nav-link-name").toggleClass("hide");
        $(".logo").toggleClass("hide");
        if($(window).width() < 650){
            $(".graph-container").toggleClass("width-100-percent");
            $(".chart").toggleClass("width-100-percent");
            $(".sf-sticky-bar-container").toggleClass("hide");
        }else{
            $(".content-container").toggleClass("margin-left-reduce");
        }
    });
});
