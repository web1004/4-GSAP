//Splitting();  //스플리팅 호출

$(function(){

  //scrolla Plugin
  $('.animate').scrolla({
    mobile: true, 
    once: false, //반복적으로 사용
  });



  //Mobile
  // $('.menuOpen').on('click', function(e){
  //   e.preventDefault();
  //   $('.gnb').toggleClass('on');
  //   $(this).toggleClass('on');
  //   $('body').toggleClass('on');  //스크롤을 방지하기 위해서 작성성
  // });

});

$(function(){
  //simplyscroll Plugin
  $('.s3 .list').simplyscroll({
    speed:4,
    pauseOnHover:false,
    pauseOnTouch:false
  });
});

$(function(){
  //Mobile
  $('.menuOpen').on('click', function(e){
    e.preventDefault();
    $('.gnb').toggleClass('on');
    $(this).toggleClass('on');
    $('body').toggleClass('on');  //스크롤을 방지하기 위해서 작성성
  });

});



//header영역 스크롤방향 이벤트
const header = document.querySelector('header');
let prevScrollTop = 0;

document.addEventListener('scroll', function(){
  let nowScrollTop = window.scrollY;

  if(nowScrollTop > prevScrollTop){
    header.classList.add('active');
  }else{
    header.classList.remove('active');
  }
  prevScrollTop = nowScrollTop;
});


//Section-s1
gsap.timeline({
  scrollTrigger:{
    trigger:'.s1',  //트리거대상
    start:'0% 80%', //트리거대상의 0%와 브라우저의 80%가 만났을때 애니메이션이 시작함
    end:'100% 100%',  //트리거의 100%와 브라우저의 100%가 만났을때 애니메이션이 종료함함
    scrub:1,  //GSAP ScrollTrigger의 스크롤이 사용될때만 재생되도록 만드는 속성성
    //markers:true, //시작위치와 끝위치를 확인가능하게 하는 마커커
  }
})

.to('#wrap',{backgroundColor:'#fff', color:'#000', ease:'none', duration:5},0)
.to('.svgAni path',{stroke:'#000', ease:'none', duration:5},0)
.to('scroll',{opacity:0, ease:'none',duration:5},0)
.fromTo('.videoWrap video',
  {clipPath:'inset(60% 60% 60% 60% round 30%)'},
  {clipPath:'inset(0% 0% 0% 0% round 0%)', ease:'none', duration:10},0);


//Section-s2
gsap.timeline({
  scrollTrigger:{
    trigger:'.s2',  
    start:'0% 100%', 
    end:'0% 20%', 
    scrub:1, 
    //markers:true, 
  }
})

//title
.fromTo('.s2 .title .a',
  {x:'-100%'},
  {x:'0%', ease:'none', duration:5},0)
.fromTo('.s2 .title .b',
  {x:'100%'},
  {x:'0%', ease:'none', duration:5},0)

//workList
gsap.timeline({
  scrollTrigger:{
    trigger:'.workList',  
    start:'0% 100%', 
    end:'0% 100%', 
    scrub:1, 
    //markers:true, 
  }
})

.to('#wrap',{backgroundColor:'#000', color:'#fff', ease:'none', duration:5},0)
.to('.s2 .title',{position:'fixed', ease:'none', left:0, top:0, width:'100%', duration:5},0)
//.workList에 margin-top을 적용해서 애니메이션을 좀더 자연스럽게게
.fromTo('.workList',
  {margin:'0 auto'},
  {margin:'100vh auto 0', position:'relative', zIndex:10, duration:1},0)


//workList가 끝날때 title글자가 화면밖으로 사라지도록록
gsap.timeline({
  scrollTrigger:{
    trigger:'.workList',  
    start:'100% 50%', 
    end:'100% 0%', 
    scrub:1, 
    //markers:true, 
  }
})
.to('.s2 .title .a',{x:'-100%', ease:'none', duration:5},0)
.to('.s2 .title .b',{x:'100%', ease:'none', duration:5},0)





