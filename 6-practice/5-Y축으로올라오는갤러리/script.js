gsap.registerPlugin(ScrollTrigger);

// gallery
let upBox = document.querySelectorAll('.upBox');

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.gallery',
    pin: true,
    scrub: 3,  //부드럽게 진행될수 있도록(1,2,3 중 3으로 제일 부드럽게)
    start: 'top top',
    end: '+=400%', // 시작구간에서 400%까지 스크롤한 후 종료
    markers: true
  }
})

tl.from(upBox, {y: '400%', duration: 8, ease: 'none', stagger: 6}) // stagger: 각 애니메이션의 시간차이 등
  .to(upBox, {y: '0'});