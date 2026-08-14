import { Link } from "react-router-dom";

export default function Logo({ variant = "light" }) {
  return (
    <Link to="/" className="flex items-center gap-2.5 shrink-0" aria-label="DV Elevate Digital home">
      <img
        src="/images/brand/logo.png"
        alt="DV Elevate Digital logo"
        className="h-11 w-11 object-contain"
      />
      <span className="leading-tight">
        <span
          className={`block font-display font-bold text-[1.05rem] tracking-tight ${
            variant === "light" ? "text-white" : "text-ink-800"
          }`}
        >
          DV Elevate <span className="text-sky">Digital</span>
        </span>
        <span
          className={`block font-mono text-[0.6rem] tracking-[0.2em] uppercase ${
            variant === "light" ? "text-white/50" : "text-slate"
          }`}
        >
          Build · Innovate · Elevate
        </span>
      </span>
    </Link>
  );
}
