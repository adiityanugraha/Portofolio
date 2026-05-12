import { jsxs, jsx } from "react/jsx-runtime";
import { ExternalLink } from "lucide-react";
function DicodingLogo() {
  return /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 40 40", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: "w-10 h-10", children: [
    /* @__PURE__ */ jsx("rect", { width: "40", height: "40", rx: "8", fill: "#4D47C3" }),
    /* @__PURE__ */ jsx("text", { x: "20", y: "28", fontFamily: "'Space Grotesk', sans-serif", fontWeight: "700", fontSize: "22", fill: "white", textAnchor: "middle", children: "d" })
  ] });
}
function IBMLogo() {
  return /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 48 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: "w-12 h-8", children: [
    /* @__PURE__ */ jsx("rect", { width: "48", height: "32", rx: "4", fill: "#1F70C1" }),
    /* @__PURE__ */ jsx("text", { x: "24", y: "21", fontFamily: "'Arial', sans-serif", fontWeight: "900", fontSize: "15", fill: "white", textAnchor: "middle", letterSpacing: "1", children: "IBM" })
  ] });
}
const certifications = [{
  title: "Belajar Dasar AI",
  issuer: "Dicoding",
  logo: "dicoding",
  link: "https://www.linkedin.com/in/aditya-nugraha-a8725b2a5/details/certifications/"
}, {
  title: "Memulai Pemrograman dengan Python",
  issuer: "Dicoding",
  logo: "dicoding",
  link: "https://www.linkedin.com/in/aditya-nugraha-a8725b2a5/details/certifications/"
}, {
  title: "Belajar Machine Learning untuk Pemula",
  issuer: "Dicoding",
  logo: "dicoding",
  link: "https://www.linkedin.com/in/aditya-nugraha-a8725b2a5/details/certifications/"
}, {
  title: "Introduction to Large Language Models",
  issuer: "IBM",
  logo: "ibm",
  link: "https://www.linkedin.com/in/aditya-nugraha-a8725b2a5/details/certifications/"
}, {
  title: "Build an AI Agent",
  issuer: "IBM",
  logo: "ibm",
  link: "https://www.linkedin.com/in/aditya-nugraha-a8725b2a5/details/certifications/"
}];
function Certifications() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen px-10 py-16 lg:px-16 lg:py-20 max-w-5xl", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-xs uppercase tracking-widest text-primary font-semibold mb-10", children: "Certifications & Courses" }),
    /* @__PURE__ */ jsx("div", { className: "space-y-4", children: certifications.map((cert) => /* @__PURE__ */ jsxs("a", { href: cert.link, target: "_blank", rel: "noopener noreferrer", className: "group flex items-center gap-5 p-5 rounded-xl border border-border hover:border-primary/40 hover:bg-card transition-all duration-200", children: [
      /* @__PURE__ */ jsx("div", { className: "shrink-0 flex items-center justify-center", children: cert.logo === "dicoding" ? /* @__PURE__ */ jsx(DicodingLogo, {}) : /* @__PURE__ */ jsx(IBMLogo, {}) }),
      /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
        /* @__PURE__ */ jsx("p", { className: "text-base font-medium text-foreground group-hover:text-primary transition-colors leading-snug", children: cert.title }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mt-1", children: cert.issuer })
      ] }),
      /* @__PURE__ */ jsx(ExternalLink, { size: 16, className: "text-muted-foreground group-hover:text-primary transition-colors shrink-0" })
    ] }, cert.title)) }),
    /* @__PURE__ */ jsx("div", { className: "mt-10", children: /* @__PURE__ */ jsxs("a", { href: "https://www.linkedin.com/in/aditya-nugraha-a8725b2a5/details/certifications/", target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors font-medium group", children: [
      "View all certifications on LinkedIn",
      /* @__PURE__ */ jsx(ExternalLink, { size: 14, className: "group-hover:translate-x-0.5 transition-transform" })
    ] }) })
  ] });
}
export {
  Certifications as component
};
