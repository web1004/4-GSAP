// 01. a 클릭 방지
$(document).on('click', 'a[href="#"]', function(e){
  e.preventDefault();
});

// 02. scrolla.js
$(function(){
  $('.animate').scrolla({
    mobile: true,
    once: false
  });
});

// 03. splitting
$(function(){Splitting();});

// 04. scrollTrigger
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

ScrollTrigger.create({
  snap: 1 / (section.length - 1)
});