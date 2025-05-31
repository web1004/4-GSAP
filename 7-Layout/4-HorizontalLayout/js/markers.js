

const markers = () => {

  if (document.querySelector('.gsap-marker-scroller-start')) {
    const markers = gsap.utils.toArray('[class *= "gsap-marker"]');
    
    
    const scrollMarkers = markers.filter((m)=> m.className.includes('scroller'))

    //console.log( scrollMarkers );

    
    // const arr = [];
    // markers.forEach((m)=>{
    //   if(m.className.includes('scroller')){
    //     arr.push(m)
    //   }
    // })

    // console.log( arr );

    scrollbar.addListener(({ offset }) => {
      gsap.set(scrollMarkers, { marginLeft: -offset.y }); //방향수정정
    });
  }
}















