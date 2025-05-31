//(3)-(1)수정
const tl = gsap.timeline();

gsap.utils.toArray('.section').forEach((section,index)=>{      
  //console.log(section); 
  
  //tl.from(section, {xPercent:100}) ->1번은 제외를 해야 함
  //console.log(section.classList.contains('section01'));
  // if(!section.classList.contains('section01')){
  //   tl.from(section, {xPercent:100}) 
  // }

  if(!section.classList.contains('section01')){
    tl.from(section,{xPercent: index % 2 ? -100 : 100})
  }     
});


//(1)
/* const tl = gsap.timeline();
tl.from('.section02', {xPercent: -100})
  .from('.section03', {xPercent: 100})
  .from('.section04', {yPercent: -100}) */

//(2)
ScrollTrigger.create({
  trigger: '.wrapper',
  start: 'top top',
  end: '+=4000',
  animation: tl,
  pin: true,
  markers: true,
  scrub: true,
});




markers();