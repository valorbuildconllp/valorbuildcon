import { FocusEvent, useCallback, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, MessageCircle, Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

type NavChild = {
  label: string;
  path: string;
};

type NavItem = {
  label: string;
  path: string;
} | {
  label: string;
  children: NavChild[];
};

const Header = () => {
    // Scroll trigger for shrinking navbar
    useEffect(() => {
      let lastScrollY = window.scrollY;
      const navbar = document.getElementById("navbar");
      const container = document.getElementById("navbar-container");
      const desktopMediaQuery = window.matchMedia("(min-width: 1024px)");

      const resetShrinkClasses = () => {
        navbar?.classList.remove("navbar-shrink");
        container?.classList.remove("navbar-shrink-container");
      };

      function onScroll() {
        if (!navbar || !container) return;
        if (!desktopMediaQuery.matches) {
          resetShrinkClasses();
          lastScrollY = window.scrollY;
          return;
        }
        if (window.scrollY > lastScrollY && window.scrollY > 30) {
          // Scrolling down
          navbar.classList.add("navbar-shrink");
          container.classList.add("navbar-shrink-container");
        } else {
          // Scrolling up
          navbar.classList.remove("navbar-shrink");
          container.classList.remove("navbar-shrink-container");
        }
        lastScrollY = window.scrollY;
      }

      const onViewportChange = () => {
        if (!desktopMediaQuery.matches) {
          resetShrinkClasses();
        }
        lastScrollY = window.scrollY;
      };

      window.addEventListener("scroll", onScroll);
      desktopMediaQuery.addEventListener("change", onViewportChange);
      onViewportChange();

      return () => {
        window.removeEventListener("scroll", onScroll);
        desktopMediaQuery.removeEventListener("change", onViewportChange);
      };
    }, []);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isContactHovered, setIsContactHovered] = useState(false);
  const [isContactPinned, setIsContactPinned] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const dropdownCloseTimeout = useRef<number | null>(null);
  const headerRef = useRef<HTMLElement | null>(null);
  const contactWidgetRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();
  const isContactOpen = isTouchDevice ? isContactPinned : isContactHovered || isContactPinned;
  const navItems: NavItem[] = [{
    label: "Home",
    path: "/"
  }, {
    label: "Services",
    children: [{
      label: "Civil Work",
      path: "/rcc-work"
    }, {
      label: "RMC Plant",
      path: "/rmc-plant"
    }]
  }, {
    label: "Projects",
    path: "/projects"
  }, {
    label: "About Us",
    path: "/about"
  }];
  const isActive = (path: string) => {
    if (path.startsWith("/#")) return false;
    return location.pathname === path;
  };
  const isParentActive = (children: NavChild[]) => children.some(child => isActive(child.path));
  const clearDropdownTimeout = () => {
    if (dropdownCloseTimeout.current) {
      window.clearTimeout(dropdownCloseTimeout.current);
      dropdownCloseTimeout.current = null;
    }
  };
  const scheduleDropdownClose = () => {
    clearDropdownTimeout();
    dropdownCloseTimeout.current = window.setTimeout(() => {
      setActiveDropdown(null);
      dropdownCloseTimeout.current = null;
    }, 120);
  };
  const handleDropdownBlur = (event: FocusEvent<HTMLDivElement>) => {
    const nextTarget = event.relatedTarget as Node | null;
    if (!nextTarget || !event.currentTarget.contains(nextTarget)) {
      setActiveDropdown(null);
    }
  };
  const syncHeaderHeight = useCallback(() => {
    if (typeof window === "undefined") return;
    if (!headerRef.current) return;

    const { height } = headerRef.current.getBoundingClientRect();
    document.documentElement.style.setProperty("--header-height", `${Math.ceil(height)}px`);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) setOpenMobileDropdown(null);
  }, [isMenuOpen]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    syncHeaderHeight();

    const handleResize = () => syncHeaderHeight();
    window.addEventListener("resize", handleResize);

    let resizeObserver: ResizeObserver | null = null;
    if (headerRef.current && "ResizeObserver" in window) {
      resizeObserver = new ResizeObserver(() => syncHeaderHeight());
      resizeObserver.observe(headerRef.current);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, [syncHeaderHeight]);

  useEffect(() => {
    syncHeaderHeight();
  }, [isMenuOpen, openMobileDropdown, syncHeaderHeight]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(hover: none), (pointer: coarse)");
    const updateTouchMode = () => setIsTouchDevice(mediaQuery.matches);
    updateTouchMode();

    mediaQuery.addEventListener("change", updateTouchMode);
    return () => mediaQuery.removeEventListener("change", updateTouchMode);
  }, []);

  useEffect(() => {
    if (!isTouchDevice || !isContactPinned) return;

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node | null;
      if (!target) return;
      if (contactWidgetRef.current?.contains(target)) return;
      setIsContactPinned(false);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [isTouchDevice, isContactPinned]);

    return <header ref={headerRef} className="fixed top-0 left-0 right-0 z-50 bg-transparent border-b-0 shadow-none rounded-none pointer-events-none">
      <div className="w-full px-3 sm:px-4 lg:container transition-all duration-300 py-3 lg:py-7 pointer-events-auto" id="navbar-container" style={{position:'relative',zIndex:2}}>
        <nav className="flex items-center justify-between gap-3 rounded-full px-8 py-2 transition-all duration-300 navbar-pill" id="navbar" style={{position:'relative',zIndex:2}}>

          <Link to="/" className="flex items-center gap-2 min-w-0">
            <img
              src="/valor_logo.png"
              alt="Valor Buildcon logo"
              className="h-10 w-auto object-contain sm:h-12"
            />
            <div className="block min-w-0">
              <div className="font-semibold navbar-lightblue text-sm sm:text-base leading-tight truncate">Valor Buildcon LLP</div>
              <div className="hidden sm:block text-xs text-muted-foreground">Experience the Excellence</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map(item => "children" in item ? <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => {
                    clearDropdownTimeout();
                    setActiveDropdown(item.label);
                  }}
                  onMouseLeave={scheduleDropdownClose}
                  onFocusCapture={() => setActiveDropdown(item.label)}
                  onBlurCapture={handleDropdownBlur}
                >
                  <button
                    type="button"
                    className={cn("flex items-center gap-1 text-base font-semibold transition-colors hover:text-primary", (isParentActive(item.children) || activeDropdown === item.label) ? "text-primary" : "text-muted-foreground")}
                    aria-haspopup="true"
                    aria-expanded={activeDropdown === item.label}
                  >
                    {item.label}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  <div
                    className={cn(
                      "absolute left-0 top-full mt-3 min-w-[220px] rounded-2xl border border-border bg-background/95 backdrop-blur-sm shadow-lg",
                      activeDropdown === item.label ? "block" : "hidden"
                    )}
                    onMouseEnter={clearDropdownTimeout}
                    onMouseLeave={scheduleDropdownClose}
                  >
                    <div className="flex flex-col py-3">
                      {item.children.map(child => <Link key={child.path} to={child.path} className="dropdown-link px-5 py-2 text-sm font-medium transition-colors">
                            {child.label}
                          </Link>)}
                    </div>
                  </div>
                </div> : <Link key={item.path} to={item.path} className={cn("text-base font-semibold transition-colors hover:text-primary", isActive(item.path) ? "text-primary" : "text-muted-foreground")}> 
                  {item.label}
                </Link>)}

            {/* Get a Quote pill button */}
            <a
              href="/#contact"
              className="ml-2 rounded-full px-6 py-2 font-bold get-a-quote-btn bg-[#F0E9E0] border-2 border-[#F0E9E0] shadow-sm focus:outline-none focus:ring-2 focus:ring-[hsl(355_34%_33%)] focus:ring-offset-2"
              style={{ whiteSpace: 'nowrap' }}
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 shrink-0 rounded-md border border-border/60 bg-background/80 backdrop-blur"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && <div id="mobile-nav" className="lg:hidden mobile-nav-panel">
            <div className="flex flex-col gap-4 max-h-[calc(100vh-220px)] overflow-y-auto overscroll-contain pr-1">
              {navItems.map(item => "children" in item ? <div key={item.label} className="flex flex-col gap-2">
                    <button type="button" className="flex items-center justify-between text-base font-semibold text-primary-foreground/80 hover:text-primary-foreground transition-colors" onClick={() => setOpenMobileDropdown(openMobileDropdown === item.label ? null : item.label)}>
                      <span>{item.label}</span>
                      <ChevronDown className={cn("h-4 w-4 transition-transform", openMobileDropdown === item.label && "rotate-180")}/>
                    </button>
                    {openMobileDropdown === item.label && <div className="pl-4 border-l border-border/50 flex flex-col gap-2">
                        {item.children.map(child => <Link key={child.path} to={child.path} className={cn("text-base font-semibold transition-colors hover:text-primary-foreground", isActive(child.path) ? "text-primary-foreground" : "text-primary-foreground/80")} onClick={() => {
                            setIsMenuOpen(false);
                            setOpenMobileDropdown(null);
                          }}>
                            {child.label}
                          </Link>)}
                      </div>}
                  </div> : <Link key={item.path} to={item.path} className={cn("text-base font-semibold transition-colors hover:text-primary-foreground py-2", isActive(item.path) ? "text-primary-foreground" : "text-primary-foreground/80")} onClick={() => setIsMenuOpen(false)}>
                    {item.label}
                  </Link>)}

              {/* Get a Quote pill button for mobile */}
              <a
                href="/#contact"
                className="mt-2 rounded-full px-6 py-2 font-bold get-a-quote-btn bg-[#F0E9E0] border-2 border-[#F0E9E0] shadow-sm focus:outline-none focus:ring-2 focus:ring-[hsl(355_34%_33%)] focus:ring-offset-2 text-center"
                style={{ whiteSpace: 'nowrap', display: 'block' }}
                onClick={() => setIsMenuOpen(false)}
              >
                Get a Quote
              </a>
            </div>
          </div>}
      </div>

      <div
        ref={contactWidgetRef}
        className="fixed bottom-3 left-3 sm:bottom-4 sm:left-4 z-50 pointer-events-auto flex flex-col items-start"
        onMouseEnter={() => {
          if (!isTouchDevice) setIsContactHovered(true);
        }}
        onMouseLeave={() => {
          if (!isTouchDevice) setIsContactHovered(false);
        }}
      >
        <div
          className={cn(
            "mb-2 w-[min(260px,calc(100vw-1.5rem))] sm:w-[260px] rounded-xl border border-border bg-background/95 backdrop-blur-sm shadow-lg p-3 text-sm origin-bottom-left transition-all duration-300 ease-out",
            isContactOpen
              ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
              : "opacity-0 translate-y-2 scale-95 pointer-events-none"
          )}
          aria-hidden={!isContactOpen}
        >
          <a href="tel:+919607140999" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors duration-200">
            <Phone className="h-4 w-4" />
            <span>9607140999</span>
          </a>
          <a href="mailto:valorbuildconllp@gmail.com" className="mt-2 flex items-center gap-2 text-foreground hover:text-primary transition-colors duration-200">
            <Mail className="h-4 w-4" />
            <span>valorbuildconllp@gmail.com</span>
          </a>
        </div>

        <button
          type="button"
          className="h-11 w-11 sm:h-12 sm:w-12 rounded-full bg-primary text-primary-foreground border border-primary/70 shadow-md flex items-center justify-center transition-all duration-300 ease-out hover:bg-primary/90 hover:scale-105"
          aria-label="Show contact details"
          aria-expanded={isContactOpen}
          onClick={() => setIsContactPinned((prev) => !prev)}
        >
          <MessageCircle className="h-5 w-5 sm:h-5 sm:w-5" />
        </button>
      </div>
    </header>;
};
export default Header;