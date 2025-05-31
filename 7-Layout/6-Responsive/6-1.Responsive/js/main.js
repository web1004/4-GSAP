const box = document.querySelector('.box');

/* gsap.to(box,{
  x:'100vw',
  xPercent:-100,
  yoyo:true,
  repeat:-1,
  duration:2,
  ease:'power3.inOut'
}) */





const mm = gsap.matchMedia();
//console.log(mm);

/* mm.add('(max-width:500px)', ()=>{
  //console.log('hi');
  gsap.to(box,{
    rotation:360,
    duration:2,
  })
});

mm.add('(min-width:501px)', ()=>{
  //console.log('hi');
  gsap.to(box,{
    rotation:-360,
    duration:2,
  })
}); */


/* mm.add('(max-width:500px)', (context)=>{

  //context.name = 'ani';
  context.hello = function(){
    return 'hello';
  }

  //console.log(context);
  gsap.to(box,{
    rotation:360,
    duration:2,
  })
  console.log(context);
}); */


/* 
mm.add('(max-width:500px)', (context)=>{

  box.addEventListener('click', () => {
    gsap.to(box,{
      rotation:360,
      duration:2,
      repeat:-1,
      ease:'none'
    })
  });

}); 
->작은 해상도에서 큰 해상도로 변경되어도 계속 돌아가는 문제
*/


/* mm.add('(max-width:500px)', (context)=>{

  context.add('spin',()=>{
    gsap.to(box,{
      rotation:360,
      duration:2,
      repeat:-1,
      ease:'none'
    })
  });

  box.addEventListener('click', context.spin)

}); 
->큰 화면에서 클릭이 되고 애니메이셔이 되는 문제
*/


/* mm.add('(max-width:500px)', (context)=>{

  context.add('spin',()=>{
    gsap.to(box,{
      rotation:360,
      duration:2,
      repeat:-1,
      ease:'none'
    })
  });

  box.addEventListener('click', context.spin);

  return ()=>{
    box.removeEventListener('click', context.spin)
  }

}); */


const options = {
  isMobile: '(max-width:500px)',
  isDesktop: '(min-width:501px)',
}

mm.add(options,(ctx)=>{
  //console.log(ctx);

  const {isMobile,isDesktop} = ctx.conditions;

  console.log(isMobile,isDesktop);

    gsap.to(box,{
      rotation:()=>{
        if(isMobile){
          return 360
        }else{
          return -360
        }
      },
      duration:2,
    })
  
})

const wrapper = document.querySelector('.wrapper');


mm.add(options,(ctx)=>{

  const {isMobile,isDesktop} = ctx.conditions;

  gsap.to('.green',{
    rotation:isMobile ? 360 : -360
  })

}, wrapper)