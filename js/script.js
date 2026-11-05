
/* =========================================
   MODERN HAMBURGER MENU + EXISTING SCRIPTS
========================================= */

$(document).ready(function () {

    /* MODERN HAMBURGER MENU */

    const modernMenuBtn = document.getElementById("modernMenuBtn");
    const modernNavMenu = document.getElementById("modernNavMenu");

    if (modernMenuBtn && modernNavMenu) {

        // Open and close menu
        modernMenuBtn.addEventListener("click", function () {

            const isOpen = modernNavMenu.classList.toggle("modern-show");

            modernMenuBtn.classList.toggle("modern-active", isOpen);

            modernMenuBtn.setAttribute("aria-expanded", isOpen);

            modernMenuBtn.setAttribute(
                "aria-label",
                isOpen ? "Close menu" : "Open menu"
            );

        });

        // Close menu when a navigation link is clicked
        modernNavMenu.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", function () {

                modernNavMenu.classList.remove("modern-show");
                modernMenuBtn.classList.remove("modern-active");

                modernMenuBtn.setAttribute("aria-expanded", "false");
                modernMenuBtn.setAttribute("aria-label", "Open menu");

            });

        });

        // Close menu when clicking outside
        document.addEventListener("click", function(event) {

            if (
                !modernMenuBtn.contains(event.target) &&
                !modernNavMenu.contains(event.target)
            ) {

                modernNavMenu.classList.remove("modern-show");
                modernMenuBtn.classList.remove("modern-active");

                modernMenuBtn.setAttribute("aria-expanded", "false");
                modernMenuBtn.setAttribute("aria-label", "Open menu");

            }

        });

    }


    /* ANIMATED PROGRESS BARS */

    $(".animated-progress span").each(function () {

        var progress = $(this).data("progress");

        $(this).animate(
            {
                width: progress + "%",
            },
            1000
        );

        $(this).text(progress + "%");

    });


    /* STICKY NAVBAR AND SCROLL-UP BUTTON */

    $(window).scroll(function(){

        // Sticky navbar on scroll
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // Scroll-up button show/hide
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }

    });


    /* SCROLL-UP BUTTON */

    $('.scroll-up-btn').click(function(){

        $('html').animate({scrollTop: 0});

        $('html').css("scrollBehavior", "auto");

    });


    /* SMOOTH SCROLLING */

    $('.navbar .menu li a').click(function(){

        $('html').css("scrollBehavior", "smooth");

    });


    /* TYPING TEXT ANIMATIONS */

    if ($(".typing").length && typeof Typed !== "undefined") {

        var typed = new Typed(".typing", {

            strings: [
                "Graphic Designer",
                "UI/UX Designer",
                "Web Developer",
                "Poet",
                "Sports Junkie"
            ],

            typeSpeed: 80,
            backSpeed: 50,
            loop: true

        });

    }


    if ($(".typing-2").length && typeof Typed !== "undefined") {

        var typed2 = new Typed(".typing-2", {

            strings: [
                "Web Developer",
                "Open Source Contributor",
                "Freelancer",
                "AI Enthusiast",
                "Front End Enthusiast",
                "UI Designer",
                "Photographer",
                "Technical Writer",
                "Author",
                "And Sports Junkie"
            ],

            typeSpeed: 100,
            backSpeed: 60,
            loop: true

        });

    }


    /* OWL CAROUSEL */

    if ($.fn.owlCarousel && $('.carousel').length) {

        $('.carousel').owlCarousel({

            margin: 20,
            loop: true,
            autoplayTimeOut: 2000,
            autoplayHoverPause: true,

            responsive: {

                0: {
                    items: 1,
                    nav: false
                },

                600: {
                    items: 2,
                    nav: false
                },

                1000: {
                    items: 3,
                    nav: false
                }

            }

        });

    }

});


/* PAGE LOADING */

setTimeout(loading, 1000);
