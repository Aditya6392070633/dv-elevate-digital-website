import { Link } from "react-router-dom";
import Logo from "./Logo";
import { categories } from "../data/services";
import { site } from "../data/site";

export default function Footer() {
  return (
    <footer className="bg-ink-800 text-white pt-20 pb-8 relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "22px 22px" }}
      />
      <div className="container-x relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-14 border-b border-white/10">
          <div className="lg:col-span-2">
            <Logo variant="light" />
            <p className="mt-5 text-white/60 text-sm leading-relaxed max-w-xs">
              A full-service digital agency helping ambitious brands build, innovate and elevate their online
              presence — from first sketch to scaled growth.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {[
                ["Facebook", site.social.facebook, "M13.5 9H15V6.5h-1.5C11.6 6.5 10 8.1 10 10.2V12H8v2.5h2V21h3v-6.5h2.1l.4-2.5h-2.5v-1.3c0-.7.3-1.2 1.5-1.2Z"],
                ["Instagram", site.social.instagram, "M12 7.8a4.2 4.2 0 1 0 0 8.4 4.2 4.2 0 0 0 0-8.4Zm0 6.9a2.7 2.7 0 1 1 0-5.4 2.7 2.7 0 0 1 0 5.4Zm5.3-7.1a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM21 8c-.1-1-.3-1.8-.7-2.4a4.8 4.8 0 0 0-2.8-2.8C16.9 2.4 16.1 2.2 15 2.1 13.9 2 13.6 2 12 2s-1.9 0-3 .1c-1.1.1-1.9.3-2.5.7a4.8 4.8 0 0 0-2.8 2.8C3.3 6.2 3.1 7 3 8.1 2.9 9.2 2.9 9.5 2.9 12s0 2.8.1 3.9c.1 1.1.3 1.9.7 2.5a4.8 4.8 0 0 0 2.8 2.8c.6.4 1.4.6 2.5.7 1.1.1 1.4.1 3 .1s1.9 0 3-.1c1.1-.1 1.9-.3 2.5-.7a4.8 4.8 0 0 0 2.8-2.8c.4-.6.6-1.4.7-2.5.1-1.1.1-1.4.1-3.9s0-1.9-.1-3Z"],
                ["LinkedIn", site.social.linkedin, "M6.9 8.4H3.6V20H6.9V8.4ZM5.3 3.6a1.9 1.9 0 1 0 0 3.9 1.9 1.9 0 0 0 0-3.9ZM20.4 20h-3.3v-6c0-1.4 0-3.3-2-3.3s-2.3 1.6-2.3 3.2V20H9.5V8.4h3.2v1.6c.5-.8 1.6-1.7 3.2-1.7 3.5 0 4.1 2.3 4.1 5.2V20Z"],
                ["X", site.social.x, "M14.2 10.5 21 3h-1.6l-5.9 6.5L8.8 3H3l7.1 9.9L3 21h1.6l6.2-6.9 5 6.9H21l-6.8-10.5Zm-2.2 2.5-.7-1L5.7 4.2h2.5l4.6 6.4.7 1 6 8.3h-2.5l-4.9-6.9Z"],
              ].map(([label, href, path]) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="h-9 w-9 rounded-full border border-white/15 flex items-center justify-center hover:bg-brand-500 hover:border-brand-500 transition-colors"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d={path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-5">Services</h4>
            <ul className="space-y-3 text-sm text-white/60">
              {categories.slice(0, 6).map((c) => (
                <li key={c.slug}>
                  <Link to={`/services/${c.slug}`} className="hover:text-sky transition-colors">
                    {c.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-5">Company</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li><Link to="/about" className="hover:text-sky transition-colors">About Us</Link></li>
              <li><Link to="/portfolio" className="hover:text-sky transition-colors">Portfolio</Link></li>
              <li><Link to="/blog" className="hover:text-sky transition-colors">Blog</Link></li>
              <li><Link to="/services" className="hover:text-sky transition-colors">All Services</Link></li>
              <li><Link to="/contact" className="hover:text-sky transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-5">Get in Touch</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>{site.address}</li>
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-sky transition-colors">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={`tel:${site.phoneHref}`} className="hover:text-sky transition-colors">
                  {site.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} DV Elevate Digital. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/contact" className="hover:text-sky">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-sky">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
