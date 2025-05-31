const container = document.querySelector('#container');

//애니메이션의 상태를 객체로 만들어둠
const state = {
  isPlaying : true
}

//현재 페이지가 어디를 보고 있는지를 계속 찍어주는 변수가 필요함
let currentPageIndex = 1; //현재 페이지는 첫번째 페이지를 보고 있음
const sections = gsap.utils.toArray('.section');

const pages = {
  page01:{
    enter:()=>{
      console.log('enter page01');
    },
    leave:()=>{
      console.log('leave page01');
    }
  },
  page02:{
    enter:()=>{
      console.log('enter page02');
    },
    leave:()=>{
      console.log('leave page02');
    }
  },
  page03:{
    enter:()=>{
      console.log('enter page03');
    },
    leave:()=>{
      console.log('leave page03');
    }
  },
  page04:{
    enter:()=>{
      console.log('enter page04');
    },
    leave:()=>{
      console.log('leave page04');
    }
  },
};

function handleWheel(e){
  //console.log(e.deltaY); //올리면 음수, 내리면 양수
  let direction = e.deltaY < 0 ? 'up' : 'down';
  //console.log(direction);
  const {page01,page02,page03,page04} = pages;  //구조분해할당

  if(state.isPlaying){

    state.isPlaying = false;

    if(direction == 'up'){  
      if(currentPageIndex <= 1) return;
      --currentPageIndex;
    }else{  
      if(currentPageIndex >= sections.length) return;
      ++currentPageIndex;
    }

    gsap.to('.wrapper', {
      y:-innerHeight * (currentPageIndex -1),
      duration:1.5,
      ease:'expo.inOut',
      onStart:()=>{
        // console.log('leave');
        switch (currentPageIndex-1){
          case 1:page01.leave(); break;
          case 2:page02.leave(); break;
          case 3:page03.leave(); break;
          case 4:page04.leave(); break;
        }
      },
      onComplete:()=>{
        state.isPlaying = true;

        switch (currentPageIndex){
          // case 1: console.log('enter page01'); break;
          // case 2: console.log('enter page02'); break;
          // case 3: console.log('enter page03'); break;
          // case 4: console.log('enter page04'); break;

          // case 1:pages.page01.enter(); break;
          // case 2:pages.page02.enter(); break;
          // case 3:pages.page03.enter(); break;
          // case 4:pages.page04.enter(); break;

          case 1:page01.enter(); break;
          case 2:page02.enter(); break;
          case 3:page03.enter(); break;
          case 4:page04.enter(); break;

        }

      }
    });
  };


  /* if(direction == 'up'){  //휠을 올렸을때
    if(currentPageIndex <= 1) return;
    --currentPageIndex;
  }else{  //휠을 내렸을때
    if(currentPageIndex >= sections.length) return;
    ++currentPageIndex;
  }
  //console.log(currentPageIndex);

  gsap.to('.wrapper', {
    //y:-innerHeight
    y:-innerHeight * (currentPageIndex -1) //크게 휠을 내리게 내면 훅 내려가버림
  }); */
};

container.addEventListener('wheel',handleWheel);


markers();