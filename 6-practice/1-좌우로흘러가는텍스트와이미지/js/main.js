

//(1)
// gsap.to('.wrapper.text',{
//   x:-innerWidth,
// }); 

//(2)
/* const tween = gsap.to('.wrapper.text',{
  x:-innerWidth,
});

ScrollTrigger.create({
  trigger: '.demo-text',
  // start: 'top bottom', (기본값값)
  // end:'bottom top', (기본값)
  animation: tween,
  markers: true,
  scrub: true,
}) */

//(3)애니메이션을 주는 대상의 크기가 얼마인지 중요
// const tween = gsap.fromTo('.wrapper.text',{
//   x:'100%', //부터
// },{
//   x:-innerWidth //~까지
// });

/* const tween = gsap.fromTo('.wrapper.text',
{ x:'100%' }, 
{ x(){ 
  //console.log(this.targets()[0]);
  //console.log(this.targets()[0].offsetWidth); ->전체길이가 아님
  //console.log(this.targets()[0].scrollWidth);
  //return -this.targets()[0].scrollWidth;
  return -(this.targets()[0].scrollWidth - innerWidth) //창 하나 크기만큼 빼줌
  } 
}); */

//반대방향향
// const tween = gsap.fromTo('.wrapper.text',
// { x(){return -(this.targets()[0].scrollWidth - innerWidth)}}, 
// { x : 0});

//완전히 안보이는데부터 시작하고 싶을때
// const tween = gsap.fromTo('.wrapper.text',
// { x(){return -(this.targets()[0].scrollWidth)}}, 
// { x : 0});


// ScrollTrigger.create({
//   trigger: '.demo-text',
//   animation: tween,
//   markers: true,
//   scrub: true,
// });


//(4)
/* gsap.utils.toArray('section').forEach((section,index)=>{
  //console.log(section, index);
  const w = section.querySelector('.wrapper');
  //console.log(w);

  if(w){
    const [x,xEnd] = index % 2 ? ['100%',-(w.scrollWidth - innerWidth)] : [-(w.scrollWidth),0];
    console.log(x, xEnd);

    gsap.fromTo(w,{x},{
      x:xEnd,
      scrollTrigger:{
        trigger:section,
        scrub:0.5
      }
    })
  }
});
 */


//(5) 함수로 만들어서 실행
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


//(6)awsome글자
/* const awsome = ()=>{
  tween = gsap.from('.awsome .text',{x:innerWidth})

  ScrollTrigger.create({
    trigger: '.awsome',
    start: 'top top',
    end: '+=3000',
    animation: tween,
    pin: true,
    scrub: true,
  })
}; */

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
  .to('body',{duration:0.3,backgroundColor:'black'},'-=0.5')


  ScrollTrigger.create({
    trigger: '.awsome',
    start: 'top top',
    end: '+=3000',
    animation: tl,
    pin: true,
    scrub: 1,  //좀더 부드럽게 나올수 있도록 1로 바꿈
  })
}; 


//(7)tryNow글자자
const tryNow = ()=>{ 
  ScrollTrigger.create({
    trigger: '.try',
    start: 'top top',
    end: '+=2000',
    animation: gsap.from('.try .text',{y:50,opacity:0}),
    pin: true,
    scrub: true,
  })
}

// showDemo();
// awsome();
// tryNow();

function init(){
  showDemo()
  awsome()
  tryNow()
}

init();