
function PageTransition() {
  document.querySelector(".wrapper").classList.remove("active")
  const tl = gsap.timeline();
  tl.to(".transition", { 
    duration: 1, scaleX: 1, transformOrigin: "bottom left",
  });
  tl.to(".transition", {
    duration: 1, scaleX: 0, transformOrigin: "bottom right", delay: 0.6
  });
}

function contentAnimation() {
  document.querySelector(".wrapper").classList.remove("active")
  var tl = gsap.timeline();
  tl.from('header',{ duration: 2, translateY: 50, opacity: 0})
}


function delay(n) {
  n = n || 2000;
  return new Promise(done => {
    setTimeout(() => {
      done();
    },n)
  })
}

barba.init({
  sync: true,
  transitions: [{

    async leave(data) {
      const done = this.async();
      PageTransition();
      await delay(1500);
      done();
    },
    async enter(data) {
      contentAnimation();
    },
    async once(data) {
      contentAnimation();
    }
  },{
      name: 'self',
      enter() {
        contentAnimation();
      },
  }],
  prefetchIgnore: false,
})