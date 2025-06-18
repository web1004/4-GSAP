//(1) 모든 a태그 클릭 방지
$(document).on('click', 'a[href="#"]', function(e){
  e.preventDefault();
});

//스크롤트리거 전에 플러그인 소스를 먼저 입력해야 한다.
//(2) scrolla.js
$(function(){
  $('.animate').scrolla({
    mobile: true,
    once: false
  });
});

//(3) splitting
$(function(){Splitting();});

//(4) scrollTrigger
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('section').forEach((section, i) => {
  ScrollTrigger.create({
    trigger: section,
    start: 'top top',
    pin: true,
    pinSpacing: false,
    markers: true
  });
});

//(5)스냅기능
ScrollTrigger.create({
  snap: 1 / (section.length - 1)
});