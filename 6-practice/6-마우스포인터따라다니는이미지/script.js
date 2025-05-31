gsap.registerPlugin(ScrollTrigger);

let activeImage;

gsap.utils.toArray('.con02 ul li a').forEach((elem) => {
  let image = elem.querySelector('img.fadeImg');

  let align = e => {
    gsap.set(image, {
      x: e.clientX,
      y: e.clientY
    });
  };

  const startPoint = () => document.addEventListener('mousemove', align),
        stopPoint = () => document.removeEventListener('mousemove', align);

  let fade = gsap.to(image, {autoAlpha: 0.8, ease: 'none', paused: true});

  elem.addEventListener('mouseenter', (e) => {
    fade.play();

    if (activeImage) {
      gsap.set(image, {
        x: gsap.getProperty(activeImage, "x"),
        y: gsap.getProperty(activeImage, "y")
      });
    }

    activeImage = image;
    gsap.quickTo(image, "x", {duration: 0.5, ease: "elastic"});
    gsap.quickTo(image, "y", {duration: 0.5, ease: "elastic"});

    align(e);
    startPoint();
  });

  elem.addEventListener('mouseleave', () => {
    fade.reverse();
    stopPoint();
  });
  
});