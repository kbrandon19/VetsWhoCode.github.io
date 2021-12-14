let topText = document.getElementById('top');
let bottomText = document.getElementById('bottom');

let controller = new ScrollMagic.Controller();

let timeline = new TimelineMax();


//timeline.to( parameter/ element, duration, the action)

timeline.to('#top',2,{x:-1050,opacity:1})
        .to('#bottom',2,{x:1000,opacity:1}, '-=2')
        .to('.attributes',2,{opacity:1});


        let scene = new ScrollMagic.Scene({
            triggerElement:"hero-container",
            duration:"100%",
            //triggerhook defines where you want to trigger the animation
            // 0 the beginning (top)
            // 1 the end (bottom)
            triggerHook:0,
          
          
          })
          
          .setTween(timeline)
          .setPin("hero-container")
          .addTo(controller)