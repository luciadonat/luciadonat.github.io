document.addEventListener( 'DOMContentLoaded', function() { 
    var splide = new Splide( '#firstGallery', {
        type   : 'loop',
        drag   : 'free',
        focus  : 'center',
        fixedWidth: 300,
        gap: 40,
        arrows: false,
        perPage: 2,
        autoScroll: {
            speed: 0.4,
        },
    }  ).mount( window.splide.Extensions );
    var splide2 = new Splide( '#secondGallery', {
        type   : 'loop',
        drag   : 'free',
        focus  : 'center',
        fixedWidth: 300,
        gap: 40,
        arrows: false,
        perPage: 2,
        autoScroll: {
            speed: 0.6,
        },
    }  ).mount( window.splide.Extensions );
  } );