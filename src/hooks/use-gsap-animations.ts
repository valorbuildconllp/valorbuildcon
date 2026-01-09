import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let pluginsRegistered = false;

const getFromVars = (type: string) => {
  switch (type) {
    case "fade-down":
      return { autoAlpha: 0, y: -48 };
    case "fade-left":
      return { autoAlpha: 0, x: -64 };
    case "fade-right":
      return { autoAlpha: 0, x: 64 };
    case "scale":
      return { autoAlpha: 0, scale: 0.95 };
    case "fade-up":
    default:
      return { autoAlpha: 0, y: 48 };
  }
};

const toNumber = (value: string | undefined, fallback: number) => {
  if (!value) return fallback;
  const parsed = Number(value);
  return Number.isNaN(parsed) ? fallback : parsed;
};

export const useGsapAnimations = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (!pluginsRegistered) {
      gsap.registerPlugin(ScrollTrigger);
      pluginsRegistered = true;
    }

    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray<HTMLElement>("[data-animate]");

      elements.forEach((element) => {
        const type = element.dataset.animate ?? "fade-up";
        const delay = toNumber(element.dataset.animateDelay, 0);
        const duration = toNumber(element.dataset.animateDuration, 0.9);
        const stagger = toNumber(element.dataset.animateStagger, 0.12);
        const once = element.dataset.animateOnce === "true";
        const scrub = element.dataset.animateScrub === "true";
        const start = element.dataset.animateStart ?? "top 80%";
        const ease = element.dataset.animateEase ?? "power3.out";
        const targetsSelector = element.dataset.animateTargets;

        const fromVars = getFromVars(type);

        if (targetsSelector) {
          const targets = element.querySelectorAll<HTMLElement>(targetsSelector);

          if (targets.length) {
            gsap.set(element, { autoAlpha: 1, x: 0, y: 0 });
            gsap.fromTo(
              targets,
              fromVars,
              {
                autoAlpha: 1,
                x: 0,
                y: 0,
                duration,
                delay,
                stagger,
                ease,
                scrollTrigger: {
                  trigger: element,
                  start,
                  scrub: scrub || undefined,
                  once,
                  toggleActions: once ? "play none none none" : "play none none reverse",
                },
              }
            );

            return;
          }
        }

        gsap.fromTo(
          element,
          fromVars,
          {
            autoAlpha: 1,
            x: 0,
            y: 0,
            scale: 1,
            duration,
            delay,
            ease,
            scrollTrigger: {
              trigger: element,
              start,
              scrub: scrub || undefined,
              once,
              toggleActions: once ? "play none none none" : "play none none reverse",
            },
          }
        );
      });

      ScrollTrigger.refresh();
    });

    return () => ctx.revert();
  }, []);
};

export default useGsapAnimations;
