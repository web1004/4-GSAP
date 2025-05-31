gsap.registerPlugin(ScrollTrigger);

gsap.timeline({
  scrollTrigger:{
    trigger:'.visual .imgBox',
    start:'60% 50%',
    end:'150%',
    scrub:1,
    pin:true,
    markers:true,
  }
})
.fromTo('.visual .imgBox img',{rotationX:50, rotationY:-40, width:'50%', opacity:0.2}, 
                              {rotationX:0, rotationY:-0, width:'100%', opacity:1},0)



gsap.timeline({
  scrollTrigger:{
    trigger:'.textBox2',
    pinnedContainer:'.textBox2',
    start:'0% 60%',
    markers:true,
    scrub:1
  }
})
.fromTo('.textBox2 .mask span',{
  backgroundSize:'0% 100%',
},{
  backgroundSize:'100% 100%',
})

/* gsap.fromTo('.textBox2 .mask span',{
  backgroundSize:'0% 100%',
},{
  backgroundSize:'100% 100%',
  scrollTrigger:{
    trigger:'.textBox2',
    pinnedContainer:'.textBox2',
    start:'0% 60%',
    markers:true,
    scrub:1
  }
}) */