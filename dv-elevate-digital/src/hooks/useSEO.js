import { useEffect } from "react";

const SITE_URL = "https://www.dvelevateddigital.online";

function setMeta(attr, key, value) {
  if (!value) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
}

function setLink(rel, href) {
  if (!href) return;
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * Sets document title, meta description, canonical URL and Open Graph /
 * Twitter tags for the current page. Call this once at the top of every
 * page component.
 *
 * @param {Object} opts
 * @param {string} opts.title - Full page title (already includes brand suffix if wanted)
 * @param {string} opts.description - Meta description (~150-160 chars ideal)
 * @param {string} opts.path - Path starting with "/" used to build canonical + OG url
 * @param {string} [opts.image] - Absolute or root-relative image URL for social previews
 */
export function useSEO({ title, description, path = "/", image }) {
  useEffect(() => {
    const canonicalUrl = `${SITE_URL}${path === "/" ? "" : path}`.replace(/\/$/, "") + (path === "/" ? "/" : "");
    const imageUrl = image
      ? image.startsWith("http")
        ? image
        : `${SITE_URL}${image}`
      : `${SITE_URL}/images/brand/logo.png`;

    if (title) document.title = title;

    setMeta("name", "description", description);
    setLink("canonical", canonicalUrl);

    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", canonicalUrl);
    setMeta("property", "og:image", imageUrl);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:site_name", "DV Elevate Digital");

    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", imageUrl);
  }, [title, description, path, image]);
}
