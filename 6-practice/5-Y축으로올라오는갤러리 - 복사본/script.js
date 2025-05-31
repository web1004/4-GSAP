gsap.registerPlugin(ScrollTrigger);

    let list = gsap.utils.toArray('.portfolio .list li');
    let listA = gsap.utils.toArray('.portfolio .list .a');
    let listB = gsap.utils.toArray('.portfolio .list .b');
    let listC = gsap.utils.toArray('.portfolio .list .c');

    let scrollTween = gsap.to(list, {
      xPercent: -100 * (list.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: '.portfolio',
        pin: true,
        scrub: 1,
        start: 'center center',
        end: '200%',
        markers: true
      }
    });

    gsap.to(listA, {
      y: 50,
      rotation: 10,
      scrollTrigger: {
        trigger: '.portfolio',
        scrub: 2,
        end: '200%'
      }
    });

    gsap.to(listB, {
      y: 50,
      rotation: 20,
      scrollTrigger: {
        trigger: '.portfolio',
        scrub: 2,
        end: '200%'
      }
    });

    gsap.to(listC, {
      y: 50,
      x: 20,
      rotation: -10,
      scrollTrigger: {
        trigger: '.portfolio',
        scrub: 2,
        end: '200%'
      }
    });