import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import { categories } from "../data/services";
import { site } from "../data/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
    setMobileServicesOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }, [location.pathname]);

  useEffect(() => {
    function onClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = mobileOpen ? "hidden" : "";
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const linkClass = ({ isActive }) =>
    `relative py-2 font-medium text-[0.95rem] transition-colors ${
      isActive ? "text-brand-500" : scrolled ? "text-ink-800 hover:text-brand-500" : "text-white hover:text-sky"
    }`;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur shadow-[0_4px_30px_-10px_rgba(10,15,44,0.15)]" : "bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between h-20">
        <Logo variant={scrolled ? "dark" : "light"} />

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <NavLink to="/" className={linkClass} end>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>

          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setDropdownOpen((v) => !v)}
              onMouseEnter={() => setDropdownOpen(true)}
              className={`flex items-center gap-1.5 py-2 font-medium text-[0.95rem] transition-colors ${
                location.pathname.startsWith("/services")
                  ? "text-brand-500"
                  : scrolled
                  ? "text-ink-800 hover:text-brand-500"
                  : "text-white hover:text-sky"
              }`}
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
            >
              Services
              <svg
                width="11"
                height="7"
                viewBox="0 0 11 7"
                fill="none"
                className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
              >
                <path d="M1 1L5.5 5.5L10 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>

            {dropdownOpen && (
              <div
                onMouseLeave={() => setDropdownOpen(false)}
                className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[720px] max-w-[90vw] rounded-2xl bg-white shadow-2xl border border-ink-800/[0.06] p-6 grid grid-cols-2 gap-1"
              >
                <div className="col-span-2 flex items-center justify-between pb-3 mb-2 border-b border-ink-800/[0.06]">
                  <span className="eyebrow">All Services</span>
                  <Link to="/services" className="text-xs font-semibold text-brand-500 hover:underline">
                    View all →
                  </Link>
                </div>
                {categories.map((cat) => (
                  <Link
                    key={cat.slug}
                    to={`/services/${cat.slug}`}
                    className="group flex items-start gap-3 rounded-xl px-3 py-2.5 hover:bg-brand-50 transition-colors"
                  >
                    <span className="mt-1 h-8 w-8 shrink-0 rounded-lg bg-brand-gradient flex items-center justify-center text-white font-mono text-[10px]">
                      {"</>"}
                    </span>
                    <span>
                      <span className="block font-semibold text-sm text-ink-800 group-hover:text-brand-500">
                        {cat.title}
                      </span>
                      <span className="block text-xs text-slate mt-0.5 leading-snug">{cat.tagline}</span>
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <NavLink to="/portfolio" className={linkClass}>
            Portfolio
          </NavLink>
          <NavLink to="/blog" className={linkClass}>
            Blog
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href={`tel:${site.phoneHref}`}
            className={`text-sm font-semibold ${scrolled ? "text-ink-800" : "text-white"}`}
          >
            {site.phone}
          </a>
          <button onClick={() => navigate("/contact")} className="btn-primary !py-3 !px-5 text-sm">
            Get a Quote
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="lg:hidden relative z-[70] h-11 w-11 flex flex-col items-center justify-center gap-1.5 -mr-2"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span
            className={`block h-0.5 w-7 rounded-full transition-all duration-300 ${
              mobileOpen ? "bg-ink-800 rotate-45 translate-y-2" : scrolled ? "bg-ink-800" : "bg-white"
            }`}
          />
          <span
            className={`block h-0.5 w-7 rounded-full transition-all duration-300 ${
              mobileOpen ? "opacity-0" : scrolled ? "bg-ink-800" : "bg-white"
            }`}
          />
          <span
            className={`block h-0.5 w-7 rounded-full transition-all duration-300 ${
              mobileOpen ? "bg-ink-800 -rotate-45 -translate-y-2" : scrolled ? "bg-ink-800" : "bg-white"
            }`}
          />
        </button>
      </div>

      {/* Mobile full-screen menu — rendered via portal directly on <body> so it can
          never be affected by the header's own stacking/positioning context, and is
          always guaranteed to sit above every other element on the page. */}
      {createPortal(
        <div
          className={`lg:hidden fixed left-0 right-0 top-0 z-[999] bg-white overflow-y-auto transition-opacity duration-200 ease-out ${
            mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          style={{ height: "100dvh", minHeight: "100vh" }}
          aria-hidden={!mobileOpen}
        >
          <div className="container-x pt-24 pb-10 flex flex-col gap-1 min-h-full">
            <MobileLink to="/" label="Home" />
            <MobileLink to="/about" label="About" />

            <button
              type="button"
              onClick={() => setMobileServicesOpen((v) => !v)}
              className="flex items-center justify-between py-4 border-b border-ink-800/[0.06] font-semibold text-lg text-ink-800"
            >
              Services
              <svg
                width="13"
                height="8"
                viewBox="0 0 11 7"
                fill="none"
                className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
              >
                <path d="M1 1L5.5 5.5L10 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>
            {mobileServicesOpen && (
              <div className="flex flex-col pl-2 pb-2 pt-1 gap-0.5 bg-paper rounded-lg mb-1">
                {categories.map((cat) => (
                  <Link
                    key={cat.slug}
                    to={`/services/${cat.slug}`}
                    className="py-2.5 px-3 text-sm text-slate hover:text-brand-500"
                  >
                    {cat.title}
                  </Link>
                ))}
              </div>
            )}

            <MobileLink to="/portfolio" label="Portfolio" />
            <MobileLink to="/blog" label="Blog" />
            <MobileLink to="/contact" label="Contact" />

            <div className="mt-6 flex flex-col gap-3">
              <a href={`tel:${site.phoneHref}`} className="btn-outline w-full">
                Call {site.phone}
              </a>
              <Link to="/contact" className="btn-primary w-full">
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>,
        document.body
      )}
    </header>
  );
}

function MobileLink({ to, label }) {
  return (
    <NavLink
      to={to}
      end={to === "/"}
      className={({ isActive }) =>
        `py-4 border-b border-ink-800/[0.06] font-semibold text-lg ${
          isActive ? "text-brand-500" : "text-ink-800"
        }`
      }
    >
      {label}
    </NavLink>
  );
}
