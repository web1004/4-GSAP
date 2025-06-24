//(1)객체 생성
const theme = {
  primary: "#3f83f9",
  secondary: "#e8e2da",
};

const keywords = ['France','England','Spain','Italy']



//(5)헤더고정
const fixedHeader = () => {

  ScrollTrigger.create({
    trigger: '.nav_container',
    start: 'top top',
    //end: '+=3000',
    //endTrigger:'.footer',
    end: 'max',
    pin: true,
    pinSpacing: false, //빈공간으로 나오기 때문에 안나오게 함
  })
};


//(2)로고
/* 
gsap.set() 은 GSAP에서 특정요소의 속성이나 상태를 즉시 설정할때 사용하는 메서드
애니메이션 없이 한 번에 값을 “세팅”만 할 때 사용되며, 초기값을 설정하거나 요소를 숨기거나 위치를 조정하는 데 자주 쓰임
*/
const heroAnimation = () => {
  gsap.set('.logo',{
    width:'100%',
    yPercent: -90
  })
  
  ScrollTrigger.create({
    trigger: '.hero',
    start: 'top top',
    end: 'bottom 20%',
    animation: gsap.to('.logo',{width:'15%',yPercent:0}),
    //markers: true,
    scrub: true,
  })
};

//(3)텍스트
const textAnimation = () => {
  gsap.utils.toArray('.header_text-wrap').forEach((text,index)=>{
    //console.log(text);
    const target = text.querySelector('.header_text-move');
    //console.log(target);
    //const [x, xEnd] = index % 2 ? [innerWidth,0] : [-innerWidth, 0]

    ScrollTrigger.create({
      trigger: text,
      start: 'top center',
      end: 'bottom center',
      //animation: gsap.from(text, {x:innerWidth}),
      animation: gsap.fromTo(text, {x:innerWidth},{x:0}),
      //animation: gsap.fromTo(text,{ x: x },{ x: xEnd }),
      animation: gsap.fromTo(text,{ x: index % 2 ? innerWidth : -innerWidth },{ x:0 }),
      //markers: true,
      scrub: true,
    })

  });
};

//(4)이미지 마스크
const maskAnimation = () => {

  // const circleTween = gsap.to('.circle_element',{
  //   borderRadius:0,
  //   width: innerWidth,
  //   height: innerHeight
  // })

  const circleTween = gsap.timeline()
  .to('.circle_element',{
    borderRadius:0,
    width: innerWidth,
    height: innerHeight
  })
  //.to('body, .nav_container',{backgroundColor:theme.secondary, color:theme.primary})
  .add(changeTheme(),0)

  ScrollTrigger.create({
    trigger: '.circle_wrap',
    start: 'top top',
    end: '+=2000',
    animation: circleTween,
    pin: true,
    scrub: true,
  })
};


//(6)
const categorieAnimation =() => {

  const tween = gsap.from('.categories > a',{
    opacity:0,
    filter:'blur(3px)',
    stagger:{
      each:0.1,
      from:'random'
    }
  })

  ScrollTrigger.create({
    trigger: '.catories_container',
    start: 'top top',
    end: '+=2000',
    animation: tween,
    pin: true,
    scrub: true,
  })
};

function changeTheme(themeMode = 'light'){
  const tween = gsap.to('body,.nav_container',{
    backgroundColor: themeMode === 'light' ? theme.secondary : theme.primary,
    color:themeMode === 'light' ? theme.primary : theme.secondary
  })

  return tween
};


//(7)
const gallaryAnimation = () => {

  ScrollTrigger.create({
    trigger: '.text_container',
    start: 'top top',
    endTrigger:'.image_container',
    end: 'bottom bottom',
    animation: gsap.to('.front_image',{yPercent:-20}), 
    pin: true,
    pinSpacing: false,
    //markers: true,
    scrub: true,
    // onUpdate : (self) => {
    //   console.log(self)
    // } 

    onUpdate:({progress})=>{
      const ratio = Math.round(progress * 100);
      //console.log( ratio );

      // if(ratio > 0 && ratio < 25){
      //   console.log('1분할');
      //   document.querySelector('.text_container span').textContent = keywords[0];
      // }
      // if(ratio >= 25 && ratio < 50){
      //   console.log('2분할');
      //   document.querySelector('.text_container span').textContent = keywords[1];
      // }
      // if(ratio >= 50 && ratio < 75){
      //   console.log('3분할');
      //   document.querySelector('.text_container span').textContent = keywords[2];
      // }
      // if(ratio >= 75 && ratio <= 100){
      //   console.log('4분할');
      //   document.querySelector('.text_container span').textContent = keywords[3];
      // }

      // let index = 0;

      // if(ratio > 0 && ratio < 25){
      //   index = 0;
      //   gsap.to('body, .nav_container',{backgroundColor:theme.secondary, color:theme.primary})
      // }
      // if(ratio >= 25 && ratio < 50){
      //   index = 1;
      //   gsap.to('body, .nav_container',{backgroundColor:theme.primary, color:theme.secondary})
      // }
      // if(ratio >= 50 && ratio < 75){
      //   index = 2;
      //   gsap.to('body, .nav_container',{backgroundColor:theme.secondary, color:theme.primary})
      // }
      // if(ratio >= 75 && ratio <= 100){
      //   index = 3;
      //   gsap.to('body, .nav_container',{backgroundColor:theme.primary, color:theme.secondary})
      // }

      let index = 0;
      let mode = 'light'

      if(ratio > 0 && ratio < 25){
        index = 0;
        mode = 'light'
      }
      if(ratio >= 25 && ratio < 50){
        index = 1;
        mode = 'dark'
      }
      if(ratio >= 50 && ratio < 75){
        index = 2;
        mode = 'light'
      }
      if(ratio >= 75 && ratio <= 100){
        index = 3;
        mode = 'dark'
      }

      changeTheme(mode);
      document.querySelector('.text_container span').textContent = keywords[index];

    }
  })
};


fixedHeader();
heroAnimation();
textAnimation();
maskAnimation();
categorieAnimation();
gallaryAnimation();

markers();



/* 
gsap.set("타겟", {속성: 속성값, ....}); 
gsap.set() 메서드는 요소에 속성 값을 설정합니다. gsap.to() 메서드를 이용하여 애니메이션 주기 위하여, 
애니메이션 초기 설정이 필요합니다. 이럴 경우 CSS를 통해 설정 할 수도 있지만, gsap.set()를 통해 설정하면, 조금 더 편하다.
*/