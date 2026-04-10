import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register ONCE globally
gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };