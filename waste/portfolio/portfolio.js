
var tl = gsap.timeline({
  scrollTrigger: {
    trigger: "portfolio-images",
    markers: true
  }
})
tl.from(".five", { x: -150, opacity: 0, duration: 1})
tl.from(".seven", { x: 150, opacity: 0, duration: 1})
tl.from(".sevenone", { x: 150, opacity: 0, duration: 1})




// gsap.registerPlugin(ScrollTrigger)

// var tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".portfolio-images",
//     // start: "80% 90%",
//     // end: "175% 1%",
//     // id: "t1",
//     // toggleActions: "restart reverse restart none",
//     markers: true,
//   }
// })

// tl.fromTo(".five",{ x: -150, opacity: 0},{ x: 0, opacity: 1, duration: 0.5})
//   .fromTo(".seven",{ x: 150, opacity: 0},{ x: 0, opacity: 1, duration: 0.5})
//   .fromTo(".sevenone",{ x: 150, opacity: 0},{ x: 0, opacity: 1, duration: 0.5})

// // ScrollTrigger.create({
// //   trigger: ".services",
// //   // start: "top 95%",
// //   // end: "100% 50%",
// //   toggleActions: "restart none none none",
// //   markers: true,
// //   // onEnter: () => {console.log("Enter")},
// //   toggleClass: "show",
// //   // markers: true
// // })