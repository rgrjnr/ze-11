// Main TypeScript file for the 11ty site
import posthog from "posthog-js";
import { initAnimations } from "./animation";

interface SiteConfig {
  theme: "light" | "dark";
  animations: boolean;
}

class Site {
  private config: SiteConfig;

  constructor() {
    this.config = {
      theme: "light",
      animations: true,
    };
    this.init();
  }

  private init(): void {
    console.log("Site initialized");
    this.setupEventListeners();
    this.initAnimations();
  }

  private setupEventListeners(): void {
    // Mobile menu toggle
    const mobileMenuButton = document.querySelector(
      "[data-mobile-menu-toggle]"
    );
    const mobileMenu = document.querySelector("[data-mobile-menu]");

    if (mobileMenuButton && mobileMenu) {
      mobileMenuButton.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
      });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute("href")!);
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
          });
        }
      });
    });
  }

  private initAnimations(): void {
    if (!this.config.animations) return;

    // Fade in animations for elements on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
        }
      });
    }, observerOptions);

    document.querySelectorAll("[data-animate]").forEach((el) => {
      observer.observe(el);
    });
  }

  public setTheme(theme: "light" | "dark"): void {
    this.config.theme = theme;
    document.documentElement.setAttribute("data-theme", theme);
  }

  public toggleAnimations(): void {
    this.config.animations = !this.config.animations;
  }
}

// Initialize the site when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new Site();
  initAnimations();

  posthog.init("phc_EURtqaH02FjTJsJHvksqGPoehMzE978qjkh7PDcQnt6", {
    api_host: "https://eu.i.posthog.com",
    person_profiles: "identified_only", // or 'always' to create profiles for anonymous users as well
  });

  document.querySelectorAll(".figma-embed").forEach((iframe) => {
    console.log(iframe.getAttribute("src"));

    try {
      const urlObj = new URL(iframe.getAttribute("src")!);
      if (urlObj.hostname.includes("figma.com")) {
        urlObj.hostname = "embed.figma.com";
        const params = new URLSearchParams(urlObj.search);
        params.set("embed-host", "jose-ferreira");
        params.set("footer", "false");
        params.set("theme", "light");
        urlObj.search = params.toString();
        iframe.setAttribute("src", urlObj.toString());
      }
    } catch (error) {
      console.error("Invalid URL");
    }
  });

  // Mobile header menu (hamburger, below 768px)
  const header = document.querySelector<HTMLElement>(".site-header");
  const toggle = header?.querySelector<HTMLButtonElement>(".site-header-toggle");
  if (header && toggle) {
    const setOpen = (open: boolean) => {
      header.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    };
    toggle.addEventListener("click", () => setOpen(!header.classList.contains("is-open")));
    header.querySelectorAll(".site-header-nav a").forEach((link) =>
      link.addEventListener("click", () => setOpen(false))
    );
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && header.classList.contains("is-open")) {
        setOpen(false);
        toggle.focus();
      }
    });
    document.addEventListener("click", (event) => {
      if (!header.contains(event.target as Node)) setOpen(false);
    });
  }

  // Expose the height of each case's hidden content (.more) and title as CSS
  // variables so the hover can expand to fit. Re-measure whenever they resize:
  // the cover image usually loads after DOMContentLoaded, and fonts and the
  // viewport width change heights too.
  document.querySelectorAll<HTMLElement>(".page-layer").forEach((layer) => {
    const more = layer.querySelector<HTMLElement>(".more");
    const title = layer.querySelector<HTMLElement>(".inner-page-title");
    if (!more || !title) return;

    const measure = () => {
      layer.style.setProperty("--content-height", `${more.offsetHeight}px`);
      layer.style.setProperty("--title-height", `${title.offsetHeight}px`);
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(more);
    observer.observe(title);
  });
});

// Export for potential external use
export { Site };
