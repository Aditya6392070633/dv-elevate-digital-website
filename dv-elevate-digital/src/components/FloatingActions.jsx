import { site } from "../data/site";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col gap-3">
      <a
        href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
          "Hi DV Elevate Digital, I'd like to discuss a project."
        )}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="h-[52px] w-[52px] rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_10px_30px_-8px_rgba(37,211,102,0.6)] hover:scale-110 transition-transform"
      >
        <svg width="26" height="26" viewBox="0 0 32 32" fill="currentColor">
          <path d="M16.02 3C9.4 3 4 8.37 4 15c0 2.35.68 4.55 1.86 6.4L4 29l7.8-1.8A11.9 11.9 0 0 0 16.02 27C22.63 27 28 21.63 28 15S22.63 3 16.02 3Zm0 21.7c-2 0-3.87-.55-5.47-1.5l-.4-.23-4.6 1.07 1.1-4.47-.26-.42a9.6 9.6 0 0 1-1.5-5.15c0-5.35 4.36-9.7 9.72-9.7 5.34 0 9.7 4.35 9.7 9.7 0 5.36-4.36 9.7-9.29 9.7Zm5.35-7.28c-.29-.15-1.73-.86-2-.95-.27-.1-.46-.15-.66.14-.2.3-.75.95-.92 1.15-.17.2-.34.22-.63.08-.29-.15-1.23-.46-2.34-1.46-.86-.77-1.45-1.72-1.62-2.02-.17-.3-.02-.46.13-.6.13-.14.3-.34.44-.51.15-.17.2-.3.3-.5.1-.19.05-.36-.02-.5-.08-.15-.66-1.6-.9-2.2-.24-.57-.48-.5-.66-.5h-.56c-.2 0-.51.07-.78.36-.27.3-1.02 1-1.02 2.43s1.05 2.82 1.2 3.02c.15.2 2.06 3.15 5 4.4.7.3 1.24.48 1.67.62.7.22 1.34.19 1.85.12.56-.09 1.73-.7 1.97-1.38.24-.68.24-1.27.17-1.39-.07-.13-.26-.2-.55-.35Z" />
        </svg>
      </a>
      <a
        href={`tel:${site.phoneHref}`}
        aria-label="Call us"
        className="h-[52px] w-[52px] rounded-full bg-brand-gradient text-white flex items-center justify-center shadow-glow hover:scale-110 transition-transform"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.6 10.8c1.4 2.7 3.6 4.9 6.3 6.3l2.1-2.1c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.4 21 3 13.6 3 4.5c0-.6.4-1 1-1h3.6c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.3 0 .7-.2 1L6.6 10.8Z" />
        </svg>
      </a>
    </div>
  );
}
