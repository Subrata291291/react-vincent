// Register plugin
gsap.registerPlugin(ScrollTrigger);

// ============================
// 🔥 REUSABLE TIMELINE FUNCTION
// ============================
function createTimeline(trigger) {
  return gsap.timeline({
    scrollTrigger: {
      trigger: trigger,
      start: "top 70%",
      toggleActions: "play none none none" // play once (better UX)
    }
  });
}

// ============================
// 🔥 INIT ALL ANIMATIONS
// ============================
function initAnimations() {

  // ===== Topbar =====
  gsap.from(".topbar-area ul li", {
    y: -30,
    opacity: 0,
    duration: 1,
    stagger: 0.2
  });

  // ===== Header =====
  gsap.from(".header-left", {
    opacity: 0,
    duration: 1,
    x: -30
  });

  gsap.from(".header-right ul li", {
    y: -30,
    opacity: 0,
    duration: 1,
    stagger: 0.2
  });

  gsap.from(".header-right button", {
    opacity: 0,
    duration: 1,
    y: -30
  });

  // ===== Banner =====
  let bannerTl = createTimeline(".banner-area");

  bannerTl
    .from(".banner-area .banner-content h3", {
      opacity: 0,
      x: -50,
      duration: 0.5
    })
    .from(".banner-area .banner-content h1", {
      opacity: 0,
      x: -50,
      duration: 0.5
    })
    .from(".banner-area .banner-content p", {
      opacity: 0,
      x: -50,
      duration: 0.5
    })
    .from(".banner-area .banner-content button", {
      opacity: 0,
      x: -50,
      duration: 0.5
    });

  // ===== About =====
  let aboutTl = createTimeline(".about-area");

  aboutTl
    .from(".about-area .about-left", {
      x: -80,
      opacity: 0,
      duration: 1
    })
    .from(".about-area .about-right", {
      x: 80,
      opacity: 0,
      duration: 1
    });

  // ===== Activity =====
  let activityTl = createTimeline(".activity-area");

  activityTl
    .from(".activity-area .title-box", {
      opacity: 0,
      x: -50,
      duration: 0.5
    })
    .from(".activity-area .activity-box", {
      opacity: 0,
      y: -50,
      duration: 0.5,
      stagger: 0.1
    });

  // ===== Program =====
  let programTl = createTimeline(".program-area");

  programTl
    .from(".program-area .title-box", {
      x: -80,
      opacity: 0,
      duration: 1
    })
    .from(".program-area .swiper-box", {
      opacity: 0,
      y: 50,
      duration: 0.5,
      stagger: 0.1
    });

  // ===== Award =====
  let awardTl = createTimeline(".award-area");

  awardTl
    .from(".award-area .title-box", {
      x: -80,
      opacity: 0,
      duration: 1
    })
    .from(".award-area .swiper-box", {
      opacity: 0,
      y: 50,
      duration: 0.5,
      stagger: 0.1
    });

  // ===== Advisor =====
  let advisorTl = createTimeline(".advisor-area");

  advisorTl
    .from(".advisor-area .title-box", {
      x: -80,
      opacity: 0,
      duration: 1
    })
    .from(".advisor-area .swiper-box", {
      opacity: 0,
      y: 50,
      duration: 0.5,
      stagger: 0.1
    });

  // ===== Events =====
  let eventsTl = createTimeline(".events-area");

  eventsTl
    .from(".events-area .title-box", {
      x: -80,
      opacity: 0,
      duration: 1
    })
    .from(".events-area .swiper-box", {
      opacity: 0,
      y: 50,
      duration: 0.5,
      stagger: 0.1
    });

  // Refresh after everything
  ScrollTrigger.refresh();
}

// ============================
// 🔥 LOADER ANIMATION
// ============================

// Lock scroll during loading
document.body.style.overflow = "hidden";

let loaderTl = gsap.timeline({
  defaults: { ease: "power3.out" },
  onComplete: () => {

    // Enable scroll
    document.body.style.overflow = "auto";

    // Remove loader safely
    const loader = document.getElementById("page-loader");
    if (loader) loader.remove();

    // Init animations AFTER loader
    initAnimations();
  }
});

loaderTl
  // Logo reveal
  .to(".loader-logo", {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    duration: 1.2
  })

  // Vibration effect
  .to(".loader-logo", {
    x: 2,
    repeat: 6,
    yoyo: true,
    duration: 0.05
  })

  // Progress bar
  .to(".loader-bar", {
    width: "100%",
    duration: 0.9,
    ease: "power4.inOut"
  }, "-=0.4")

  // Text reveal
  .to(".loader-text-wrap h1", {
    y: 0,
    duration: 0.8
  }, "-=0.4")

  // Pause
  .to({}, { duration: 0.3 })

  // Exit animation
  .to("#page-loader", {
    y: "-100%",
    duration: 1,
    ease: "power4.inOut"
  });

  gsap.from(".program-boy", {
  scrollTrigger: {
    trigger: ".program-area",
    start: "top 80%"
  },
  opacity: 0,
  y: -100,
  duration: 1.2,
  ease: "power3.out"
});