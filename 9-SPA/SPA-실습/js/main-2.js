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
  //(2-2)메뉴를 클릭했을때 내려감
  const nav = gsap.timeline()  
  .set('nav',{pointerEvents:'none'}) //내릴때 마우스로 인식안되게
  .to('nav li',{
    yPercent: innerHeight,
    duration:2,
    ease:'power3,inOut',
    stagger:{
      amount:0.2,
      from:'end'
    }
  })

  //(2-1)
  const scale = gsap.timeline()
    .to('.image_container',{scale:1, duration:1.5, ease:'power3.inOut'})
    .to('.image_container > div',{filter:'brightness(1)'})

    return scale
}

//(3)
function detailLeave(){
  const tl = gsap.timeline()
  .to('.visual',{filter:'brightness(0.4)'})
  .to('.visual',{scale:0.5,ease:'power3.inOut',duration:1.5},0)

  //(3-1)메인으로 돌아올때 다시 올라옴
  const nav = gsap.timeline()
  .set('nav',{pointerEvents:'initial'})  
  .to('nav li',{
    yPercent: 0,
    duration:1.5,
    ease:'power4,inOut',
    stagger:{
      amount:0.2,
      from:'start'
    }
  })
  
  return tl;
}


function main(){
  let count = 5;

  gsap.utils.toArray('nav li').forEach((li,i)=>{

    li.addEventListener('mouseenter',()=>{
      const exceptMe = `.image_container .cover:not(:nth-child(${i + 1}))`;  
      const me = `.image_container .cover:nth-child(${i +1})`; 

      const navAnimation = gsap.timeline({defaults:{duration:0.2}})
      .to('nav li',{opacity:0.2})
      .to(li,{opacity:1},0)

      gsap.defaults({overwrite:'auto'}) 
      const imageAnimation = gsap.timeline()
      .to(exceptMe,{height:0,onComplete:()=>{
        gsap.set(me,{zIndex:++count})
      }})
      .set(me, {height:'100%'},0)

    })
    //(6)
    li.addEventListener('mouseleave',()=> gsap.to('nav li',{opacity:1}))
  })
};




function rome(){
  console.log('rome');
}

function england(){
  console.log('england');
};

function india(){
  console.log('india');
};

function peru(){
  console.log('peru');
};

//(4-1)갔따왔을때해당하는 이미지 뜨게 하기기
// function setImageOrder(data){
//   //console.log(data);
//   console.log(data.current.namespace);
// }

function setImageOrder({current}){
  const n = current.namespace;

  const tl = gsap.timeline()
  .set('.image_container .cover',{height:0})
  .set(`.image_container .cover[data-name="${n}"]`,{height:'100%',zIndex:5})
  
}


//(5-1)
const commonOptions = {
  sync:true, 
  leave:()=>{
    return detailLeave();
  },
  beforeEnter:(data)=>{  
    setImageOrder(data)
  }
}



barba.init({
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
        return pageLeave()
      },
      enter:()=>{
        //console.log('enter');
      }
    },
    //(1)각자 페이지에서 떠날때
    // {
    //   namespace:'rome',
    //   leave:()=>{
    //     //console.log('rome leave');
    //     return detailLeave();
    //   }
    // },
    // {
    //   namespace:'england',
    //   sync:true, //(4-2) 꿈뻑거리는 거 없앰(미리 로드함)
    //   leave:()=>{
    //     return detailLeave();
    //   },
    //   beforeEnter:(data)=>{  //(4)다른 페이지에 들어가기 직전전
    //     //console.log('beforeEnter')
    //     setImageOrder(data)
    //   }
    // },

    //(5-2)
    { namespace:'rome', ...commonOptions },
    { namespace:'england', ...commonOptions },
    { namespace:'india', ...commonOptions },
    { namespace:'peru', ...commonOptions }
  ]
});