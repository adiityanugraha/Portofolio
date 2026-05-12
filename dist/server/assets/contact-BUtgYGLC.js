import { jsxs, jsx } from "react/jsx-runtime";
import { Linkedin, Github, Mail } from "lucide-react";
const socialLinks = [{
  href: "https://www.linkedin.com/in/aditya-nugraha-a8725b2a5/",
  icon: Linkedin,
  label: "LinkedIn",
  handle: "aditya-nugraha-a8725b2a5",
  color: "hover:text-blue-400"
}, {
  href: "https://github.com/",
  icon: Github,
  label: "GitHub",
  handle: "github.com",
  color: "hover:text-foreground"
}, {
  href: "mailto:adityanugraha789@gmail.com",
  icon: Mail,
  label: "Email",
  handle: "adityanugraha789@gmail.com",
  color: "hover:text-primary"
}];
function Contact() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen px-10 py-16 lg:px-16 lg:py-20 max-w-5xl", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-xs uppercase tracking-widest text-primary font-semibold mb-3", children: "Contact" }),
    /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-base leading-relaxed mb-10 max-w-lg", children: "Have a question, collaboration idea, or just want to say hello? Feel free to reach out." }),
    /* @__PURE__ */ jsx("div", { className: "space-y-3", children: socialLinks.map(({
      href,
      icon: Icon,
      label,
      handle,
      color
    }) => /* @__PURE__ */ jsxs("a", { href, target: "_blank", rel: "noopener noreferrer", className: `group flex items-center gap-5 p-5 rounded-xl border border-border hover:border-primary/30 hover:bg-card transition-all duration-200 text-muted-foreground ${color}`, children: [
      /* @__PURE__ */ jsx(Icon, { size: 20, className: "shrink-0" }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground/60 uppercase tracking-widest", children: label }),
        /* @__PURE__ */ jsx("p", { className: "text-base font-medium text-foreground", children: handle })
      ] })
    ] }, label)) })
  ] });
}
export {
  Contact as component
};
