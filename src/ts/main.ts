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

  document.querySelectorAll(".page-layer").forEach((layer) => {
    //get height of the .more element and apply as a css variable --content-height
    const more = layer.querySelector(".more");
    const title = layer.querySelector(".inner-page-title");
    if (more && title) {
      (layer as HTMLElement).style.setProperty(
        "--content-height",
        `${more.clientHeight}px`
      );
      (layer as HTMLElement).style.setProperty(
        "--title-height",
        `${title.clientHeight}px`
      );
    }
  });
});

// Export for potential external use
export { Site };
