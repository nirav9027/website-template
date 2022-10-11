// OUR SERVICE
$(document).ready(function () {
    $("#design").click(function () {
        $(this).addClass("active");
        $(".design-content").css({ "display": "block" });
        $(".web-content").css({ "display": "none" });
        $(".mobile-content").css({ "display": "none" });
        $("#web-development , #mobile-application").removeClass("active");
    })
    $("#web-development").click(function () {
        $(this).addClass("active");
        $(".web-content").css({ "display": "block" });
        $(".design-content").css({ "display": "none" });
        $(".mobile-content").css({ "display": "none" });
        $("#design , #mobile-application").removeClass("active");
    })
    $("#mobile-application").click(function () {
        $(this).addClass("active");
        $(".mobile-content").css({ "display": "block" });
        $(".design-content").css({ "display": "none" });
        $(".web-content").css({ "display": "none" });
        $("#design , #web-development").removeClass("active");
    })
})


// OUR INDUSTRIES  
$(document).ready(function () {
    
    $("#real-estate").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        $(".real-estate").css({ "display": "block" });
        $(".sport , .e-commerce , .travel , .business-app , .education , .media , .fintech , .healthcare , .fitness , .logistics" ).css({"display":"none"})                   
    })
    $("#e-commerce").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        $(".e-commerce").css({ "display": "block" });
        $(".real-estate , .sport , .travel , .business-app , .education , .media , .fintech , .healthcare , .fitness , .logistics" ).css({"display":"none"});                 
    })
    $("#sports").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        $(".sport").css({ "display": "block" });
        $(".real-estate , .e-commerce , .travel , .business-app , .education , .media , .fintech , .healthcare , .fitness , .logistics" ).css({"display":"none"});
        $("#e-commerce , #real-estate , #travel , #business-app , #education , #media , #fintech , #healthcare , #fitness , #logistics").removeClass("active");         
    })
    $("#travel").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        $(".travel").css({ "display": "block" });
        $(".real-estate , .e-commerce , .sports , .business-app , .education , .media , .fintech , .healthcare , .fitness , .logistics" ).css({"display":"none"}) 
               
    })
    $("#business-app").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        $(".business-app").css({ "display": "block" });
        $(".real-estate , .e-commerce , .sports , .travel , .education , .media , .fintech , .healthcare , .fitness , .logistics" ).css({"display":"none"})               
    })
    $("#education").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        $(".education").css({ "display": "block" });
        $(".real-estate , .e-commerce , .sports , .travel , .business-app , .media , .fintech , .healthcare , .fitness , .logistics" ).css({"display":"none"})               
    })
    $("#media").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        $(".media").css({ "display": "block" });
        $(".real-estate , .e-commerce , .sports , .travel , .business-app , .education , .fintech , .healthcare , .fitness , .logistics" ).css({"display":"none"})               
    })
    $("#fintech").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        $(".fintech").css({ "display": "block" });
        $(".real-estate , .e-commerce , .sports , .travel , .business-app , .education , .media , .healthcare , .fitness , .logistics" ).css({"display":"none"})               
    })               
    $("#healthcare").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        $(".healthcare").css({ "display": "block" });
        $(".real-estate , .e-commerce , .sports , .travel , .business-app , .education , .media , .fintech , .fitness , .logistics" ).css({"display":"none"})               
    })
    $("#fitness").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        $(".fitness").css({ "display": "block" });
        $(".real-estate , .e-commerce , .sports , .travel , .business-app , .education , .media , .fintech , .healthcare , .logistics" ).css({"display":"none"})               
    })
    $("#logistics").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        $(".logistics").css({ "display": "block" });
        $(".real-estate , .e-commerce , .sports , .travel , .business-app , .education , .media , .fintech , .healthcare , .fitness" ).css({"display":"none"})               
    })
})


$(document).ready(function () {
    $("#mobile").click(function () {
        $(".objective-c , .xamarin , .android , .ionic , .react , .ios , .flutter , .swift , .kotlin").css({ "display": "block"});
        $(" #mobile h4").addClass("active"); 
        $("#front-end h4 , #backend h4 ,#cms h4 , #ecommerce h4 , #ui-design h4").removeClass("active");    
    })
    $("#front-end").click(function () {      
        $(".objective-c , .xamarin , .android , .ionic").css({ "display": "block" });
        $(" .react , .ios , .flutter , .swift , .kotlin").css({"display":"none"}); 
        $(" #front-end h4").addClass("active"); 
        $("#mobile  h4 , #backend h4 ,#cms h4 , #ecommerce h4 , #ui-design h4").removeClass("active");   
    })
    
    $("#backend").click(function (){
        $(" .android , .ionic , .react   , .flutter , .swift , .kotlin").css({ "display": "block" });
        $(" .objective-c , .ionic , .xamarin ").css({"display":"none"}); 
        $("#backend h4").addClass("active"); 
        $("#mobile  h4 , #front-end h4 ,#cms h4 , #ecommerce h4 , #ui-design h4").removeClass("active");      
    })
    $("#cms").click(function () {
        $(" .android ,  .ios , .flutter , .swift , .kotlin").css({ "display": "block" });
        $(" .objective-c , .ionic , .xamarin , .ionic , .react ").css({"display":"none"}); 
        $("#cms h4").addClass("active"); 
        $("#mobile  h4 , #front-end h4 ,#backend h4 , #ecommerce h4 , #ui-design h4").removeClass("active");   
    })
    $("#ecommerce").click(function () {
        $(" .objective-c , .ionic , .xamarin ,.android , .ionic , .react , .ios , .flutter , .swift , .kotlin").css({ "display": "block" });
        $(" #ecommerce h4").addClass("active"); 
        $("#mobile  h4 , #front-end h4 , #backend h4 , #cms h4 , #ui-design h4").removeClass("active");     
    })
    $("#ui-design").click(function () {
        $(" .android ,  .ios , .flutter , .swift , .kotlin").css({ "display": "block" });
        $(" .objective-c , .ionic , .xamarin , .ionic , .react ").css({"display":"none"}); 
        $("#ui-design h4").addClass("active"); 
        $("#mobile  h4 , #front-end h4 ,#backend h4 , #cms h4 , #ecommerce h4").removeClass("active");    
    })
})

// Toggle menu 
$(document).ready(function () {
    $(".mobile-toggle").click(function () {
        $("body").toggleClass('mobile-open');
    })
})