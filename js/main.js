$(function () {
    $('.tours__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        autoplay: true,
        speed: 500,
        pauseOnHover: false,
        responsive: [
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 2,
              }
            },
            {
                breakpoint: 630,
                settings: {
                  slidesToShow: 1,
                }
              },
          ]
    });

    $('.recommends__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        autoplay: true,
        speed: 500,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1241,
                settings: {
                  slidesToShow: 3,
                }
              },
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 2,
              }
            },
            {
                breakpoint: 630,
                settings: {
                  slidesToShow: 1,
                }
              },
          ]
    });

    $('.testimonials__slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
      autoplay: true,
      speed: 1000,
      pauseOnHover: false,
  });

    $('.header__menu-btn').on('click', function(){
        $('.header__items').toggleClass('active');
    })

    $('.header__menu-btn').on('click', function(){
      $('.header__menu-btn').toggleClass('active');
  })
})


// toTop
const mybutton = document.getElementById("toTop");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
}

// discover block
$('.discover').on('mousemove', (e) => {
  const x = e.pageX / $(window).width();
  const y = e.pageY / $(window).height();
  
  $('.discover__background').css (
    'transform',
    'translate(-' + x * 30 + 'px, -' + y * 30 + 'px)'

  );

  $('.discover__img:nth-child(1)').css (
    'transform',
    'translate(' + x * 60 + 'px, ' + y * 60 + 'px)'
  );

  $('.discover__img:nth-child(2)').css (
    'transform',
    'translate(-' + x * 60 + 'px, -' + y * 60 + 'px)'
  );

  $('.discover__img:nth-child(3)').css (
    'transform',
    'translate(-' + x * 30 + 'px, -' + y * 30 + 'px)'
  );

  $('.discover__img:nth-child(4)').css (
    'transform',
    'translate(' + x * 150 + 'px, ' + y * 150 + 'px)'
  );

  $('.discover__img:nth-child(5)').css (
    'transform',
    'translate(-' + x * 90 + 'px, -' + y * 90 + 'px)'
  );

  $('.discover__img:nth-child(6)').css (
    'transform',
    'translate(' + x * 45 + 'px, ' + y * 45 + 'px)'
  );
});