//01
// const tween = gsap.to('.wrapper.text',{
//   x: -innerWidth
// });

// const tween = gsap.fromTo('.wrapper.text',
// { x:'100%' },  // 부터 
// { x: -innerWidth}) // 까지


// const tween = gsap.fromTo('.wrapper.text',
// { x:'100%' },  // 부터 
// { x(){ 
//   //console.log(this.targets()[0]);
//   //console.log(this.targets()[0].offsetWidth); ->전체길이가 아님
//   //console.log(this.targets()[0].scrollWidth);
//   //return -this.targets()[0].scrollWidth;
//   return -(this.targets()[0].scrollWidth - innerWidth) //창 하나 크기만큼 빼줌줌
//   } 
// }) 


// const tween = gsap.fromTo('.wrapper.text',
//   { x:'100%' },  // 부터 
//   { x(){ return -(this.targets()[0].scrollWidth - innerWidth) } }) //까지


//반대방향일 경우
// const tween = gsap.fromTo('.wrapper.text',
//   { x(){ return -(this.targets()[0].scrollWidth - innerWidth) } }, //부터터
//   { x:0 }) // 까지

//완전 안보이는데부터 시작할 경우
// const tween = gsap.fromTo('.wrapper.text',
//   { x(){ return -(this.targets()[0].scrollWidth) } }, //부터터
//   { x:0 }) // 까지
  


// ScrollTrigger.create({
//   trigger: '.demo-text',
//   // start: 'top bottom', (기본값값)
//   // end:'bottom top', (기본값)
//   animation: tween,
//   markers: true,
//   scrub: true,
// })


// gsap.utils.toArray('section').forEach((section,index)=>{
//   //console.log(section, index)
//   const w = section.querySelector('.wrapper');
//   //console.log(w);

//   if(w) {
//     const [x,xEnd] = index % 2 ? ['100%',-(w.scrollWidth - innerWidth)] : [-(w.scrollWidth),0];
//     console.log(x, xEnd);

//     gsap.fromTo(w,{x},{
//       x:xEnd,
//       scrollTrigger:{
//         trigger:section,
//         scrub:0.5
//       }
//     })
//   }

// });


const showDemo = ()=>{
  //추가
  gsap.to('.loader',{autoAlpha:0});
  document.body.style.overflow = 'auto';
  document.scrollingElement.scrollTo(0,0)


  gsap.utils.toArray('section').forEach((section,index)=>{
    //console.log(section, index)
    const w = section.querySelector('.wrapper');
    //console.log(w);
  
    if(w) {
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

}


const awsome = ()=>{

  const tl = gsap.timeline({
    defaults:{
      ease:'none'
    }
  })
  .from('.awsome .text',{x:innerWidth})
  .to('.awsome .text',{scale:50,xPercent:-200})
  .to('body',{duration:0.3,backgroundColor:'black'},'-=0.5')


  ScrollTrigger.create({
    trigger: '.awsome',
    start: 'top top',
    end: '+=3000',
    animation: tl,
    pin: true,
    scrub: 1,
  })

}

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

//init();



const img = gsap.utils.toArray('img');
const loader = document.querySelector('.loader--text');

/* //console.log(img);
imagesLoaded(img).on('progress', (instance) =>{
  //console.log(instance);
  //console.log(instance.progressedCount);
  //console.log(instance.progressedCount / img.length);
  //console.log(instance.progressedCount * 100 / img.length);
  //console.log(Math.round(instance.progressedCount * 100 / img.length));

  //loader.textContent = Math.round(instance.progressedCount * 100 / img.length) + '%'
  loader.textContent = `${Math.round(instance.progressedCount * 100 / img.length)}%`
})
.on('always', () => {
  //console.log('finish');
  init();
}) */


const updateProgress = (instance)=>{
  loader.textContent = `${Math.round(instance.progressedCount * 100 / img.length)}%`
}

imagesLoaded(img)
.on('progress',updateProgress)
.on('always',init)



/* https://imagesloaded.desandro.com/ */
