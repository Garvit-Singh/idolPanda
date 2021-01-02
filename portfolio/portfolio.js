gsap.registerPlugin(ScrollTrigger)

const t1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".five",
    start: "80% 90%",
    end: "175% 1%",
    id: "t1",
    toggleActions: "restart reverse restart none",
    ease:Linear.easeNone,
    // markers: true,
  }
})

t1.from(".five",{ x: -150, opacity: 0, duration: 1.5})
  .from(".seven",{ x: 150, opacity: 0, duration: 1.5},"-=1.5")
  .from(".sevenone",{ x: 150, opacity: 0, duration: 1.5},"-=1.5")

ScrollTrigger.create({
  trigger: ".services",
  start: "top 95%",
  end: "100% 50%",
  toggleActions: "restart none none none",
  // markers: true,
  // onEnter: () => {console.log("Enter")},
  toggleClass: "show",
  // markers: true
})
