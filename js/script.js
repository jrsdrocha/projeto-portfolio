document.addEventListener("DOMContentLoaded", function() {
	//sticky navbar on scroll script
    window.addEventListener("scroll", function(){
        if(this.scrollY > 20){
            document.querySelector('.navbar').classList.add("sticky");
        }else{
            document.querySelector('.navbar').classList.remove("sticky");
        }

        // scroll-up button show/hide script
        if(this.scrollY > 500){
            document.querySelector('.scroll-up-btn').classList.add("show");
        }else{
            document.querySelector('.scroll-up-btn').classList.remove("show");
        }
    });

    // slide-up script
    document.querySelector('.scroll-up-btn').addEventListener("click", function(){
        window.scrollTo(0, 0);
        // removing smooth scroll on slide-up button click
        document.querySelector("html").style.scrollBehavior = "auto";
    });

    document.querySelectorAll('.navbar .menu li a').forEach(function(element){
        element.addEventListener("click", function(){
            // applying again smooth scroll on menu items click
            document.querySelector("html").style.scrollBehavior = "smooth";
        });
    });

    //toggle menu/navbar script
    document.querySelector('.menu-btn').addEventListener("click", function(){
        document.querySelector('.navbar .menu').classList.toggle("active");
        document.querySelector('.menu-btn i').classList.toggle("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});