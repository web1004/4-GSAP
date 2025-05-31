//(1)
$(function(){
  $('.animate').scrolla({
      mobile: true, // 모바일에서도 작동 여부
      once:false  // true면 한 번만 실행, false면 스크롤마다 반복
  });
});

/* 
ScrollTrigger.matchMedia({
    '(min-width: 800px)': function() {
      이곳에 스크롤 트리거를 작성 
    }
})
*/

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.matchMedia({
  '(min-width: 1024px)': function(){

    //(2)리스트
    let list = gsap.utils.toArray('.work ul li');
    let scrollTween = gsap.to(list, {
        xPercent: -100 * (list.length - 1), //전체 리스트의 갯수보다 1을 뺀 값으로 가로로 이동하는 공식
        ease:'none',
        scrollTrigger: {
          trigger: '.work',
          pin: true,
          scrub: 1,
          start: 'center center',
          end: '300%',  //뷰포트 높이의 300%, 숫자가 높아질수록 느려짐
          //markers:true
        }
    });

    //(3).imGbOX 모션
    gsap.utils.toArray('.imgBox').forEach(function(imgBox){
      //(3-1)imgBox가 처음에 나타나게 하는 애니메이션 => 맨 오른쪽에서 커지기 시작해서 중앙에서 끝나는 애니
      gsap.timeline({
        scrollTrigger: {
          trigger: imgBox,
          containerAnimation: scrollTween,  //가로스크롤에서 트리거시점을 잡아줌
          start: 'center right',
          end: 'center center',
          scrub:true,
          //markers: true
        }
      })
      .to(imgBox, {'clip-path':'inset(0%)',ease:'none', duration:1}, 0)
    });

    //(3-2)imgBox 작아지는 애니메이션 : 화면중앙에서 작아지기 시작해서 왼쪽에서 끝나는 애니
    gsap.utils.toArray('.imgBox').forEach(function(imgBox){
      gsap.timeline({
        scrollTrigger: {
          trigger: imgBox,
          containerAnimation: scrollTween,
          start: 'center center',
          end: 'center left',
          scrub:true,
          //markers: true
        }
      })
      .to(imgBox, {'clip-path':'inset(30%)',ease:'none', duration:1}, 0)
  });

  //(4)textBox 오픈
  gsap.utils.toArray('.work ul li .textBox').forEach(function(textBox){
    //(4-1)textBox가 나타나는 애니메이션이다 => 화면 오른쪽에서 커지가 시작해서 중앙에서 끝나는 애니
    gsap.timeline({
      scrollTrigger: {
        trigger: textBox,
        containerAnimation: scrollTween,
        start: 'center 70%',
        end: 'center 40%',
        scrub:true,
        //markers: true
      }
    })
    .to(textBox, {'opacity':'1','x':-100}, 0)

    //(4-2)textBox가 사라지는 애니메이션. 화면 중앙에서 작아지기 시작해서 왼쪽에서 끝나는 애니
    gsap.timeline({
      scrollTrigger: {
        trigger: textBox,
        containerAnimation: scrollTween,
        start: 'center 30%',
        end: 'center 20%',
        scrub:true,
        //markers: true
      }
    })
    .to(textBox, {'opacity':'0'}, 0)
  });

  //(5).counter 숫자 트리거
  gsap.utils.toArray('.num').forEach(function(text){
    let num = text.getAttribute('data-text')
    let counter = document.querySelector('.counter .now');

    ScrollTrigger.create({
      trigger: text,
      start: '0% center',
      end: '100% center',
      scrub:true,
      containerAnimation: scrollTween,
      onEnter: self => counter.innerText = num, //스크롤위치가 start를 지나 앞으로 이동할 때 .counter .now에 작성된다
      onEnterBack: self => counter.innerText = num, //스크롤위치가 end를 지나 뒤로 이동할 때 .counter .now에 작성된다
      //markers:true
    })
  });

  }

});
