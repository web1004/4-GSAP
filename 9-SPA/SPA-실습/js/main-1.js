//(3)
barba.hooks.leave(()=>{
  ScrollTrigger.getAll().forEach(t=>t.kill())
})


barba.hooks.after(()=>{
  scrollbar.update();
  scrollbar.scrollTo(0,0)
  markers()
})


//(2)
function pageLeave(){
  const scale = gsap.timeline()
    .to('.image_container',{scale:1, duration:1.5, ease:'power3.inOut'})
    .to('.image_container > div',{filter:'brightness(1)'})

    return scale
}


//(4)에 연결된 함수 생성성
function main(){
  let count = 5;
  //console.log('main');
  gsap.utils.toArray('nav li').forEach((li,i)=>{

    li.addEventListener('mouseenter',()=>{
      //console.log(i);
      const exceptMe = `.image_container .cover:not(:nth-child(${i + 1}))`;  //나를 제외한 나머지 요소
      const me = `.image_container .cover:nth-child(${i +1})`; //나를 찾음

      const navAnimation = gsap.timeline({defaults:{duration:0.2}})
      .to('nav li',{opacity:0.2})
      .to(li,{opacity:1},0)

      gsap.defaults({overwrite:'auto'})  //마우스를 빠르게 움직여도 자연스럽게 함함

      const imageAnimation = gsap.timeline()
      //.to(exceptMe, {height:0})
      .to(exceptMe,{height:0,onComplete:()=>{
        gsap.set(me,{zIndex:++count})
      }})
      //.to(me, {height:'100%'})
      .set(me, {height:'100%'},0)

    })

  })
};




function rome(){
  console.log('rome');
};

function england(){
  console.log('england');
};

function india(){
  console.log('india');
};

function peru(){
  console.log('peru');
};





//(1)
barba.init({
  //(4)
  views:[
    { namespace:'main', beforeEnter:()=> main() },
    { namespace:'rome', beforeEnter:()=> rome() },
    { namespace:'england', beforeEnter:()=> england() },
    { namespace:'india', beforeEnter:()=> india() },
    { namespace:'peru', beforeEnter:()=> peru() },
  ],
  transitions:[
    {
      name:'default-transitions',
      once:()=> markers(),
      leave:()=>{
        //console.log('leave');
        return pageLeave()
      },
      enter:()=>{
        //console.log('enter');
      }
    }
  ]
});