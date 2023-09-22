gsap.from(".hero__block", {
    x: -100,          // Slide in from the left
    opacity: 0,    // Fade in
    duration: 1,   // Animation duration in seconds
    ease: "power2.inOut", // Easing function
    delay: 0.5,
})

gsap.from(".hero__img", {
    x: 100,          // Slide in from the left
    opacity: 0,    // Fade in
    duration: 1,   // Animation duration in seconds
    ease: "power2.inOut", // Easing function
    delay: 0.5,
})

// Scroll Trigger for Solutions

let solution = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: ".solutions",
    //   pin: true,   // pin the trigger element while active
      start: "top 60%", // when the top of the trigger hits the top of the viewport
      end: "+=500", // end after scrolling 500px beyond the start
      scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    //   snap: {
    //     snapTo: "labels", // snap to the closest label in the timeline
    //     duration: {min: 0.2, max: 3}, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
    //     delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
    //     ease: "power1.inOut" // the ease of the snap animation ("power3" by default)
    //   }
    }
  });

// add animations and labels to the timeline

solution.addLabel("start")
  .from(".solutions .heading__primary", {opacity: 0,duration: 1, y: 100});


solution.addLabel("start")
  .from(".solutions .col-md-4", {opacity: 0, duration: 1,  y: 50, stagger: 0.2 });


// Services

const services = gsap.utils.toArray(".services");

services.forEach((service, index) => {
    gsap.from(service, {
        opacity: 0,
        y: 50,                // Fade in // Move to original position
        duration: 0.5,             // Animation duration in seconds
        scrollTrigger: {
          trigger: service,         // Use the section as the trigger
          start: "top 80%",      // Trigger animation when the section is at the center of the viewport
          end: "+=500",     // End animation when the section is at the bottom of the viewport
          scrub: true,              // Smoothly animate the properties
        //   markers: true, 
              }      // Easing function
    });
  });

//   Events

  let events = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: ".events",
    //   pin: true,   // pin the trigger element while active
      start: "top 60%", // when the top of the trigger hits the top of the viewport
      end: "+=500", // end after scrolling 500px beyond the start
      scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    //   snap: {
    //     snapTo: "labels", // snap to the closest label in the timeline
    //     duration: {min: 0.2, max: 3}, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
    //     delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
    //     ease: "power1.inOut" // the ease of the snap animation ("power3" by default)
    //   }
    }
  });

// add animations and labels to the timeline

events.addLabel("start")
  .from(".events .heading__primary", {opacity: 0,duration: 1, y: 100});


  events.addLabel("start")
  .from(".events .col-md-6", {opacity: 0, duration: 1,  y: 50, stagger: 0.2 });



  let team = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: ".team",
    //   pin: true,   // pin the trigger element while active
      start: "top 60%", // when the top of the trigger hits the top of the viewport
      end: "+=500", // end after scrolling 500px beyond the start
      scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    //   snap: {
    //     snapTo: "labels", // snap to the closest label in the timeline
    //     duration: {min: 0.2, max: 3}, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
    //     delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
    //     ease: "power1.inOut" // the ease of the snap animation ("power3" by default)
    //   }
    }
  });

// add animations and labels to the timeline

team.addLabel("start")
  .from(".team .heading__primary", {opacity: 0,duration: 1, y: 100});


  const teamitem = gsap.utils.toArray(".team .col-md-4");

  teamitem.forEach((teamd, index) => {
      gsap.from(teamd, {
          opacity: 0,
          y: 50,                // Fade in // Move to original position
          duration: 0.5,             // Animation duration in seconds
          scrollTrigger: {
            trigger: teamd,         // Use the section as the trigger
            start: "top 70%",      // Trigger animation when the section is at the center of the viewport
            end: "+=500",     // End animation when the section is at the bottom of the viewport
            scrub: true,              // Smoothly animate the properties
          //   markers: true, 
                }      // Easing function
      });
    });
  


const getFooter = document.querySelector("footer");
const sectionRect = getFooter.getBoundingClientRect();
const scrollDown =   document.querySelector(".scroll-downs");


window.addEventListener("scroll", function(e){
    const scrollPosition = window.scrollY || window.pageYOffset;
    if(scrollPosition >= sectionRect.top - 630){
        scrollDown.style.display = "none";
    } else if(scrollPosition < sectionRect.top - 630){
        scrollDown.style.display = "block";
    }
});