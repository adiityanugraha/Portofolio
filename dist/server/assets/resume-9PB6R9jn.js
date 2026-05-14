import { jsxs, jsx } from "react/jsx-runtime";
import { ExternalLink, Award } from "lucide-react";
function CertificationBadge({
  issuer
}) {
  const isDicoding = issuer === "Dicoding";
  return /* @__PURE__ */ jsx("div", { className: ["flex size-10 shrink-0 items-center justify-center rounded-lg", isDicoding ? "bg-[#4D47C3]" : "bg-[#1F70C1]"].join(" "), "aria-hidden": true, children: /* @__PURE__ */ jsx(Award, { className: "size-5 text-white", strokeWidth: 2 }) });
}
const certifications = [{
  title: "Belajar Dasar AI",
  issuer: "Dicoding",
  link: "https://www.linkedin.com/in/aditya-nugraha-a8725b2a5/details/certifications/"
}, {
  title: "Memulai Pemrograman dengan Python",
  issuer: "Dicoding",
  link: "https://www.linkedin.com/in/aditya-nugraha-a8725b2a5/details/certifications/"
}, {
  title: "Belajar Machine Learning untuk Pemula",
  issuer: "Dicoding",
  link: "https://www.linkedin.com/in/aditya-nugraha-a8725b2a5/details/certifications/"
}, {
  title: "Introduction to Large Language Models",
  issuer: "IBM",
  link: "https://www.linkedin.com/in/aditya-nugraha-a8725b2a5/details/certifications/"
}, {
  title: "Build an AI Agent",
  issuer: "IBM",
  link: "https://www.linkedin.com/in/aditya-nugraha-a8725b2a5/details/certifications/"
}];
function Certifications() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen px-10 py-16 lg:px-16 lg:py-20 max-w-5xl", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-xs uppercase tracking-widest text-primary font-semibold mb-10", children: "Certifications & Courses" }),
    /* @__PURE__ */ jsx("div", { className: "space-y-4", children: certifications.map((cert) => /* @__PURE__ */ jsxs("a", { href: cert.link, target: "_blank", rel: "noopener noreferrer", className: "group flex items-center gap-5 p-5 rounded-xl border border-border hover:border-primary/40 hover:bg-card transition-all duration-200", children: [
      /* @__PURE__ */ jsx(CertificationBadge, { issuer: cert.issuer }),
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
