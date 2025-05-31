gsap.registerPlugin(ScrollTrigger);

//01-배경 위치 애니메이션 (프레임 기반)
const frameCount = 14, //엎드려있는부분 
      offsetValue = 100;

gsap.to(".stage", {
  backgroundPosition: (-offsetValue * frameCount * 2.0) + "px center",
  ease: "steps(" + frameCount + ")",
  scrollTrigger: {
    trigger: ".character",
    start: "top top",
    end: "+=" + (frameCount * offsetValue),
    pin: true,
    scrub: true,
    // markers: true
  }
});

// 02 - 마우스 따라다니는 텍스트 애니메이션
const container = document.querySelector(".container");

document.body.addEventListener("mousemove", e => {
  const x = e.clientX;
  const y = e.clientY;

  gsap.to(container, {
    y: y
  });

  gsap.to(".mask", {
    y: -y
  });
});