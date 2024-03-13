$(document).ready(function () {
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
});

//Text Script Starts here 
$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Graphic Designer", "UI/UX Designer", "Web Developer","Poet", "Sports Junkie"],
        typeSpeed: 80,
        backSpeed: 50,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Web Developer", "Open Source Contributor", "Freelancer", "AI Enthusiast", "Front End Enthusiast", "UI Designer", "Photographer", "Technical Writer", "Author", "And Sports Junkie"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
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

// candycane loading animation

  function loading() {
    document.querySelectorAll('.bar').forEach(function (current) {
      let startWidth = 0;
      const endWidth = current.dataset.size;
  
      /*
        setInterval() time should be set as transition time / 100.
        In our case, 2 seconds / 100 = 20 milliseconds.
      */
      const interval = setInterval(frame, 20);
  
      function frame() {
        if (startWidth >= endWidth) {
          clearInterval(interval);
        } else {
          startWidth++;
          current.style.width = `${endWidth}%`;
          current.firstElementChild.innerText = `${startWidth}%`;
        }
      }
    });
  }
  
  setTimeout(loading, 1000);
  