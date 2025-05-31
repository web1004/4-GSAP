//각 자식의 secion들을 움직이는 방법

const sections = gsap.utils.toArray('.section');

/* gsap.to(sections,{
  xPercent: -100 * (sections.length-1),
  scrollTrigger:{
    trigger:'.hero',
    scrub:1,
    pin:true,
    end:()=> '+=' + innerWidth * 2
  }
}) */

const tween = gsap.to(sections,{
  xPercent: -100 * (sections.length-1),
  scrollTrigger:{
    trigger:'.hero',
    scrub:1,
    pin:true,
    end:()=> '+=' + innerWidth * 2
  }
})


ScrollTrigger.create({
  trigger: '.section02',
  start: 'left center',
  end: 'right center',
  horizontal: true,  //애니메이션을 가로로로
  containerAnimation:tween, //대상을 참조해서 전달달
  animation: gsap.to('.box',{rotation:360}),
  markers: true,
  scrub: true,
})

