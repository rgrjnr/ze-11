import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";

export const initAnimations = () => {
  gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, ScrollSmoother, SplitText);

  console.log("initAnimations");

  const smoother = ScrollSmoother.create({
    smooth: 1,
    effects: true,
  });

  // Progress bar animation
  const progressBar = document.querySelector(".progress-bar") as HTMLElement;
  const progressBarContainer = document.querySelector(
    ".progress-bar-container"
  ) as HTMLElement;
  if (progressBar && progressBarContainer) {
    gsap.set(progressBar, { scaleX: 0 });
    gsap.set(progressBarContainer, { y: "-200%" });

    ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        // Show progress bar after scrolling 5% of the page
        if (self.progress > 0.05) {
          gsap.to(progressBarContainer, {
            y: "0%",
            duration: 0.4,
            ease: "power2.out",
          });
        } else {
          gsap.to(progressBarContainer, {
            y: "-200%",
            duration: 0.4,
            ease: "power2.out",
          });
        }

        gsap.to(progressBar, {
          scaleX: self.progress,
          duration: 0.1,
          ease: "none",
        });
      },
    });
  }

  document.querySelectorAll("[data-draw]").forEach((el) => {
    const delay = el.getAttribute("data-delay") || 0;
    const duration = el.getAttribute("data-duration") || 0.5;
    const ease = el.getAttribute("data-ease") || "power1.out";
    const stagger = parseFloat(el.getAttribute("data-stagger") || "0.5");

    gsap.from(el.querySelectorAll("path"), {
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom top",
      },
      drawSVG: 0,
      duration: duration,
      ease: ease,
      stagger: stagger,
      delay: delay,
    });
  });

  (gsap.utils.toArray("h2") as HTMLElement[]).forEach((h2: HTMLElement) => {
    ScrollTrigger.create({
      trigger: h2,
      start: "top 60%",
      onEnter: () => h2.classList.add("animated"),
      once: true,
    });
  });

  document.fonts.ready.then(() => {
    document.querySelectorAll("[data-line-split]").forEach((el) => {
      const delay = el.getAttribute("data-delay") || 0;
      const duration = el.getAttribute("data-duration") || 0.5;
      const ease = el.getAttribute("data-ease") || "power1.out";
      const stagger = parseFloat(el.getAttribute("data-stagger") || "0.05");

      const split = new SplitText(el, { type: "words,lines", mask: "lines" });

      gsap.from(split.words, {
        y: -100,
        opacity: 0,
        duration: duration,
        stagger: stagger,
        delay: delay,
        ease: ease,
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
        },
      });
    });
  });
};
