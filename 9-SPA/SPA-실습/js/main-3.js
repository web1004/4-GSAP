barba.hooks.leave(()=>{
  ScrollTrigger.getAll().forEach(t=>t.kill())
})


barba.hooks.after(()=>{
  scrollbar.update();
  scrollbar.scrollTo(0,0)
  markers()
})

//(5)
barba.hooks.beforeEnter((data)=>{
  //console.log(data.next.namespace)

  if(data.next.namespace !== 'main'){
    gsap.set('nav', {pointerEvents:'none'})
    gsap.set('nav li', {yPercent:innerHeight})
  }

})


//(2)
function pageEnter() {
  const heading = gsap.timeline()
  .from('.line',{scaleX:0,transformOrigin:'left center'})
  .from('h3 span',{yPercent:100})
  .from('p span',{yPercent:-100},'<')

}


function pageLeave(){
  const nav = gsap.timeline()  
  .set('nav',{pointerEvents:'none'}) 
  .to('nav li',{
    yPercent: innerHeight,
    duration:2,
    ease:'power3,inOut',
    stagger:{
      amount:0.2,
      from:'end'
    }
  })

  const scale = gsap.timeline()
    .to('.image_container',{scale:1, duration:1.5, ease:'power3.inOut'})
    .to('.image_container > div',{filter:'brightness(1)'})

    return scale
}

function detailLeave(){
  const tl = gsap.timeline()
  .to('.visual',{filter:'brightness(0.4)'})
  .to('.visual',{scale:0.5,ease:'power3.inOut',duration:1.5},0)
  
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

  //(3)
  const heading = gsap.timeline()
  .to('.line',{scaleX:0,transformOrigin:'left center'})
  .to('h3 span',{yPercent:100})
  .to('p span',{yPercent:-100},'<')
  
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


function setImageOrder({current}){
  const n = current.namespace;

  const tl = gsap.timeline()
  .set('.image_container .cover',{height:0})
  .set(`.image_container .cover[data-name="${n}"]`,{height:'100%',zIndex:5})
  
}


const commonOptions = {
  sync:true, 
  leave:()=>{
    scrollbar.scrollTo(0,0,600); //(4)
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
        //(1)
        pageEnter()
      }
    },

    { namespace:'rome', ...commonOptions },
    { namespace:'england', ...commonOptions },
    { namespace:'india', ...commonOptions },
    { namespace:'peru', ...commonOptions }
  ]
});