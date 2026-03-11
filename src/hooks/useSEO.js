import { useEffect } from "react";

/**
 * useSEO — sets document title and meta description for each page.
 * Usage: useSEO({ title: "About", description: "Learn about our team..." })
 */
export const useSEO = ({ title, description, keywords } = {}) => {
  useEffect(() => {
    // Title
    document.title = title
      ? `${title} | Promethium Labs`
      : "Promethium Labs — AI Tools & Developer Platforms";

    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      "content",
      description ||
        "Promethium Labs — Building next-generation AI tools, developer platforms, and digital products for startups and businesses. Based in Chennai, India."
    );

    // Meta keywords
    if (keywords) {
      let metaKw = document.querySelector('meta[name="keywords"]');
      if (!metaKw) {
        metaKw = document.createElement("meta");
        metaKw.setAttribute("name", "keywords");
        document.head.appendChild(metaKw);
      }
      metaKw.setAttribute("content", keywords);
    }

    // Open Graph
    const setOG = (property, content) => {
      let el = document.querySelector(`meta[property="${property}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("property", property);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setOG("og:site_name", "Promethium Labs");
    setOG(
      "og:title",
      title ? `${title} | Promethium Labs` : "Promethium Labs — AI Tools & Developer Platforms"
    );
    setOG(
      "og:description",
      description ||
        "Promethium Labs — Building next-generation AI tools, developer platforms, and digital products."
    );
    setOG("og:type", "website");

    return () => {
      document.title = "Promethium Labs — AI Tools & Developer Platforms";
    };
  }, [title, description, keywords]);
};
