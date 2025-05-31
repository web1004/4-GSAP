gsap.registerPlugin(ScrollTrigger);

/* gsap.timeline({
  scrollTrigger:{
    trigger:'.textBox2',
    pinnedContainer:'.textBox2',
    start:'0% 60%',
    markers:true,
    scrub:1
  }
})
.fromTo('textBox2 .mask span',{
  backgroundSize:'0% 100%',
},{
  backgroundSize:'100% 100%',
}) */

gsap.fromTo('.textBox2 .mask span',{
  'background-size':'0% 100%',
},{
  'background-size':'100% 100%',
  scrollTrigger:{
    trigger:'.textBox2',
    pinnedContainer:'.textBox2',
    start:'0% 60%',
    markers:true,
    scrub:1
  }
})