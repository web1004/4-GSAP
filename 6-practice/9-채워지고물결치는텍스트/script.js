gsap.registerPlugin(ScrollTrigger);

//(1)마우스 따라다니는 텍스트 애니메이션
const container = document.querySelector(".container");

//문서의 body에 "mousemove"이벤트가 발생할때마다 실핼되는 콜백함수
document.body.addEventListener("mousemove", e => {
  //마우스커서의 x,y좌표를 변수에 할당
  const x = e.clientX; //스크롤은 무시하고 브라우저의 top 0을 기준으로 좌표값 반환
  const y = e.clientY;

  //container요소의 y축 위치변경
  gsap.to(container, {
    y: y //현재 y 마우스 좌표값
  });

  //mask요소의 y축 위치변경
  gsap.to(".mask", {
    y: -y //변수 y값만큼 뺀 윛로 변경
  });
});