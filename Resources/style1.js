$('.carousel-item').carousel-item({
    stagePadding: 200,
    loop:true,
    margin:10,
    items:1,
    nav:true,
  responsive:{
        0:{
            items:1,
            stagePadding: 60
        },
        600:{
            items:1,
            stagePadding: 100
        },
        1000:{
            items:1,
            stagePadding: 200
        },
        1200:{
            items:1,
            stagePadding: 250
        },
        1400:{
            items:1,
            stagePadding: 300
        },
        1600:{
            items:1,
            stagePadding: 350
        },
        1800:{
            items:1,
            stagePadding: 400
        }
    }
})

var playerSettings = {
      controls : ['play-large'],
      fullscreen : { enabled: false},
      resetOnEnd : true,
      hideControls  :true,
  clickToPlay:true,
      keyboard : false,
    }

const players = Plyr.setup('.js-player', playerSettings);

 players.forEach(function(instance,index) {
            instance.on('play',function(){
                players.forEach(function(instance1,index1){
                  if(instance != instance1){
                        instance1.pause();
                    }
                });
            });
        });

$('.video-section').on('translated.carousel.item', function (event) {
  players.forEach(function(instance,index1){
                  instance.pause();
                });
});