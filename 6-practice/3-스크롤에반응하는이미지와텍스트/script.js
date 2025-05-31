gsap.registerPlugin(ScrollTrigger);

/* gsap.timeline()
.to('.visual h1',{
  opacity:1, 
  ease:'none',
  duration:10,
  scrollTrigger:{
    trigger:'.visual',
    start:'top top',
    end:'bottom top',
    scrub:1,
    pin:true,
    markers:true,
  }
},5) */

//(1)Visual
gsap.timeline({
  scrollTrigger:{
    trigger:'.visual',
    start:'top top',
    end:'bottom top',
    scrub:1,
    pin:true,
    //markers:true,
  }
})
.to('.visual h1',{opacity:1, ease:'none',duration:10},5)
.to('.visual img',{scale:0.4, ease:'none',duration:10, opacity:0.3},5)


//(2) imgBox
gsap.utils.toArray('.imgBox').forEach((imgbox) => {
  //toArray() : 배열로 만드는 메서드
  gsap.timeline({
    scrollTrigger:{
      trigger:imgbox,
      start:'50% 100%',
      toggleClass:{targets:imgbox, className:'active'},
      scrub:1,
      //markers:true,
    }
  })
})

//(3)tetxBox
gsap.utils.toArray('.textBox').forEach((textbox) => {
  //toArray() : 배열로 만드는 메서드
  gsap.timeline({
    scrollTrigger:{
      trigger:textbox,
      start:'50% 80%',
      end:'1005 0%',
      toggleClass:{targets:textbox, className:'active'},
      scrub:1,
      markers:true,
    }
  })
})



