import { gsap } from "./gsap";

export const createTimeline = (trigger) => {
  return gsap.timeline({
    scrollTrigger: {
      trigger,
      start: "top 70%",
      toggleActions: "play none none none",
    },
  });
};