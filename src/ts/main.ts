// Main TypeScript file for the 11ty site

interface SiteConfig {
    theme: 'light' | 'dark';
    animations: boolean;
}

class Site {
    private config: SiteConfig;

    constructor() {
        this.config = {
            theme: 'light',
            animations: true
        };
        this.init();
    }

    private init(): void {
        console.log('Site initialized');
        this.setupEventListeners();
        this.initAnimations();
    }

    private setupEventListeners(): void {
        // Mobile menu toggle
        const mobileMenuButton = document.querySelector('[data-mobile-menu-toggle]');
        const mobileMenu = document.querySelector('[data-mobile-menu]');

        if (mobileMenuButton && mobileMenu) {
            mobileMenuButton.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
        }

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href')!);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
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
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in');
                }
            });
        }, observerOptions);

        document.querySelectorAll('[data-animate]').forEach((el) => {
            observer.observe(el);
        });
    }

    public setTheme(theme: 'light' | 'dark'): void {
        this.config.theme = theme;
        document.documentElement.setAttribute('data-theme', theme);
    }

    public toggleAnimations(): void {
        this.config.animations = !this.config.animations;
    }
}

// Initialize the site when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Site();
});

// Export for potential external use
export { Site }; 