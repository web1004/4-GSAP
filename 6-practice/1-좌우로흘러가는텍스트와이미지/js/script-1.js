//애니메이션을 주는 대상의 크기가 얼마인지 중요함!
//(1)
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
})  */


//(2)나의 길이만큼 움직이기기
/* const tween = gsap.fromTo('.wrapper.text',{
  x:'100%', 
},{
  //x:'-100%' //실제의 크기가 아님 현재 보이는 브라우저의 크기안에서의 텍스트 크기만큼만 움직임
  x(){
    //console.log(this.targets()[0]);
    //console.log(this.targets()[0].offsetWidth); ->전체길이가 아님
    //console.log(this.targets()[0].scrollWidth);
    //return -this.targets()[0].scrollWidth;
    return -(this.targets()[0].scrollWidth - innerWidth) //창 하나 크기만큼 빼줌
  }
}); */

// const tween = gsap.fromTo('.wrapper.text',
//   {x:'100%'},
//   {x(){return -(this.targets()[0].scrollWidth - innerWidth)}}
// );

//반대방향
// const tween = gsap.fromTo('.wrapper.text',
//   {x(){return -(this.targets()[0].scrollWidth - innerWidth)}},
//   {x:0}
// );

//완전히 안보이는데부터 시작하고 싶을때
const tween = gsap.fromTo('.wrapper.text',
  {x(){return -(this.targets()[0].scrollWidth)}},
  {x:0}
);

ScrollTrigger.create({
  trigger: '.demo-text',
  animation: tween,
  markers: true,
  scrub: true,
})