const container = document.querySelector('#container');

const state = {
  isPlaying : true
}

let currentPageIndex = 1; 
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

//함수를 만들어서 담아둠
function transition(index,dir){
  const {page01,page02,page03,page04} = pages; 
  console.log(dir)

  gsap.to('.wrapper', {
    y:-innerHeight * (index -1),
    duration:1.5,
    ease:'expo.inOut',
    onStart:()=>{
      // console.log('leave');
      switch (dir == 'up' ? index + 1 : index-1){
        case 1:page01.leave(); break;
        case 2:page02.leave(); break;
        case 3:page03.leave(); break;
        case 4:page04.leave(); break;
      }
    },
    onComplete:()=>{
      state.isPlaying = true;

      switch (index){
        case 1:page01.enter(); break;
        case 2:page02.enter(); break;
        case 3:page03.enter(); break;
        case 4:page04.enter(); break;

      }

    }
  });
};

function handleWheel(e){
  let direction = e.deltaY < 0 ? 'up' : 'down';
  //const {page01,page02,page03,page04} = pages; ->위 함수로 이동동

  if(state.isPlaying){

    state.isPlaying = false;

    if(direction == 'up'){  
      if(currentPageIndex <= 1) return;
      --currentPageIndex;
    }else{  
      if(currentPageIndex >= sections.length) return;
      ++currentPageIndex;
    }

    transition(currentPageIndex,direction);

  };

};

container.addEventListener('wheel',handleWheel);


markers();