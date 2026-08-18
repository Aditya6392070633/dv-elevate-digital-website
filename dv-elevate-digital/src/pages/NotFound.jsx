import { Link } from "react-router-dom";
import { useSEO } from "../hooks/useSEO";

export default function NotFound() {
  useSEO({
    title: "Page Not Found | DV Elevate Digital",
    description: "The page you're looking for doesn't exist or has moved.",
    path: "/404",
  });

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-ink-800 text-white px-5">
      <div className="text-center">
        <span className="font-display font-bold text-[6rem] sm:text-[8rem] leading-none bg-brand-gradient bg-clip-text text-transparent">
          404
        </span>
        <h1 className="font-display font-bold text-2xl sm:text-3xl mt-2">This page went off-brief.</h1>
        <p className="text-white/60 mt-3 max-w-sm mx-auto">
          The page you're looking for doesn't exist or has moved. Let's get you back on track.
        </p>
        <Link to="/" className="btn-primary mt-8">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
