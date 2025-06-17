//모두 동일한 효과이고 방향만 반대방향-여러개이므로 배열을 이용한 반복문


gsap.utils.toArray('section').forEach((section,index)=>{
  //console.log(section, index);
  //setction은 부모고 자식들에게 애니메이션을 줘야하므로 자식들을 가져옴
  const w = section.querySelector('.wrapper');
  //console.log(w);

  if(w){
    const [x,xEnd] = index % 2 ? ['100%',-(w.scrollWidth - innerWidth)] : [-(w.scrollWidth),0];
    console.log(x, xEnd);

    gsap.fromTo(w,{x:x},{
      x:xEnd,
      scrollTrigger:{
        trigger:section,
        scrub:0.5
      }
    })
  }

});

