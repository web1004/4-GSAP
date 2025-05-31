//(3)함수로 묶어서 관리, awsome글자 애니메니션 추가

const showDemo = ()=>{
  gsap.utils.toArray('section').forEach((section,index)=>{
    const w = section.querySelector('.wrapper');
  
    if(w){
      const [x,xEnd] = index % 2 ? ['100%',-(w.scrollWidth - innerWidth)] : [-(w.scrollWidth),0];
  
      gsap.fromTo(w,{x},{
        x:xEnd,
        scrollTrigger:{
          trigger:section,
          scrub:0.5
        }
      })
    }
  });
};

const awsome = ()=>{
  //tl = gsap.timeline()
  const tl = gsap.timeline({
    defaults:{
      ease:'none'
    }
  })
  .from('.awsome .text',{x:innerWidth})
  .to('.awsome .text',{scale:50,xPercent:-200})
  //.to('body',{duration:0.3,backgroundColor:'black'})
  .to('body',{duration:0.3,backgroundColor:'black'},'-=0.5') //0.5초 빠르게


  ScrollTrigger.create({
    trigger: '.awsome',
    start: 'top top',
    end: '+=3000',
    animation: tl,
    pin: true,
    scrub: 1,  //좀더 부드럽게 나올수 있도록 1로 바꿈
  })
}; 

showDemo();
awsome()