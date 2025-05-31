/* 
웹은 일반적으로 기본이 수직스크롤이 기본이다.
진짜 가로스클로은 만들지지 않고 실제로는 세로 스크롤이지만 대각선으로 내려서 사용자로 하여금 가로스클이 되는거것처럼 만든다.
*/
//전체 큰거를 미는 방법법

//(2)
gsap.defaults({ease:'none'}); //(4)

const horizontal = gsap.to('.wrapper',{
  x:(_,t)=>{
    console.log(_,t);
    //관례적으로 이 매겨변수는 사용하지 않겠다는 뜻으로 _를 사용함함
    return -(t.scrollWidth - innerWidth)
  }
})


//(1)
/* ScrollTrigger.create({
  trigger: '.hero',
  start: 'top top',
  end: ()=> '+=' + innerHeight * 2,
  pin: true,
  // pinspacing 을 주지 않으면 end 포인트에 따라서 아래 여백이 생기게 됨
  markers: true,
}) */

//(3)

ScrollTrigger.create({
  trigger: '.hero',
  start: 'top top',
  end: ()=> '+=' + innerHeight * 2,
  animation:horizontal,
  pin: true,
  markers: true,
  scrub: true,
})


