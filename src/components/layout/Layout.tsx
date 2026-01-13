import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import BackToTopButton from "@/components/ui/back-to-top-button";
import useGsapAnimations from "@/hooks/use-gsap-animations";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const FALLBACK_HEADER_HEIGHT = 140;

const getHeaderHeight = () => {
  if (typeof window === "undefined") return FALLBACK_HEADER_HEIGHT;

  const value = window
    .getComputedStyle(document.documentElement)
    .getPropertyValue("--header-height")
    .trim();

  const parsed = Number.parseFloat(value);
  return Number.isNaN(parsed) ? FALLBACK_HEADER_HEIGHT : parsed;
};

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  useGsapAnimations();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    if (!location.hash) return;
    const targetId = location.hash.replace("#", "");
    if (!targetId) return;

    const element = document.getElementById(targetId);
    if (!element) return;

    const headerOffset = getHeaderHeight();
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition > 0 ? offsetPosition : 0,
      behavior: "smooth",
    });
  }, [location.hash, location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main
        className="flex-1 page-transition"
        style={{ paddingTop: "var(--header-height, 140px)" }}
      >
        {children}
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default Layout;
