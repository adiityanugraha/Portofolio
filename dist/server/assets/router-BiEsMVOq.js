import { createRootRoute, HeadContent, Scripts, useRouterState, Link, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsxs, jsx } from "react/jsx-runtime";
import { X, Menu, Linkedin, Github, Mail } from "lucide-react";
import { useState } from "react";
const Route$5 = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Aditya Nugraha — AI & ML Engineer" },
      { name: "description", content: "Portfolio of Anak Agung Aryadipa Aditya Nugraha, AI and Machine Learning Engineer" }
    ]
  }),
  shellComponent: RootDocument
});
const navLinks = [
  { to: "/", label: "About" },
  { to: "/resume", label: "Certifications" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" }
];
const socialLinks = [
  {
    href: "https://www.linkedin.com/in/aditya-nugraha-a8725b2a5/",
    icon: Linkedin,
    label: "LinkedIn"
  },
  {
    href: "https://github.com/",
    icon: Github,
    label: "GitHub"
  },
  {
    href: "mailto:adityanugraha789@gmail.com",
    icon: Mail,
    label: "Email"
  }
];
function Sidebar({ onClose }) {
  const router2 = useRouterState();
  const pathname = router2.location.pathname;
  return /* @__PURE__ */ jsxs("aside", { className: "flex flex-col h-full px-10 py-12 justify-between", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("div", { className: "mb-7", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: "/profile.jpg",
          alt: "Aditya Nugraha",
          className: "w-28 h-28 rounded-full object-cover object-top border-2 border-primary/40"
        }
      ) }),
      /* @__PURE__ */ jsxs("h1", { className: "text-3xl font-bold text-foreground leading-tight mb-1.5", style: { fontFamily: "Space Grotesk, sans-serif" }, children: [
        "Anak Agung Aryadipa",
        /* @__PURE__ */ jsx("br", {}),
        "Aditya Nugraha"
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-base font-medium text-primary mb-5 tracking-wide", children: "AI and Machine Learning Engineer" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed mb-10 max-w-[240px]", children: "Saya berfokus pada pengembangan solusi berbasis data dan AI, termasuk machine learning, computer vision, dan LLM, guna menyelesaikan tantangan nyata. Saya tertarik membangun sistem AI yang terstruktur, dan production-ready." }),
      /* @__PURE__ */ jsx("nav", { className: "space-y-1", children: navLinks.map(({ to, label }) => {
        const isActive = pathname === to;
        return /* @__PURE__ */ jsxs(
          Link,
          {
            to,
            onClick: onClose,
            className: `group flex items-center gap-3 py-2.5 text-sm font-medium transition-all duration-200 ${isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"}`,
            children: [
              /* @__PURE__ */ jsx(
                "span",
                {
                  className: `h-px transition-all duration-200 ${isActive ? "w-10 bg-primary" : "w-4 bg-muted-foreground group-hover:w-8 group-hover:bg-foreground"}`
                }
              ),
              /* @__PURE__ */ jsx("span", { className: "tracking-widest text-xs uppercase", children: label })
            ]
          },
          to
        );
      }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex items-center gap-5 mt-8", children: socialLinks.map(({ href, icon: Icon, label }) => /* @__PURE__ */ jsx(
      "a",
      {
        href,
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": label,
        className: "text-muted-foreground hover:text-primary transition-colors duration-200",
        children: /* @__PURE__ */ jsx(Icon, { size: 20 })
      },
      label
    )) })
  ] });
}
function RootDocument({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  return /* @__PURE__ */ jsxs("html", { lang: "en", className: "dark", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { className: "bg-background text-foreground min-h-screen", children: [
      /* @__PURE__ */ jsxs("header", { className: "lg:hidden flex items-center justify-between px-6 py-4 border-b border-border sticky top-0 z-50 bg-background/90 backdrop-blur-sm", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "font-bold text-sm", style: { fontFamily: "Space Grotesk, sans-serif" }, children: "Aditya Nugraha" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-primary", children: "AI & ML Engineer" })
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setMobileOpen(!mobileOpen),
            className: "text-muted-foreground hover:text-foreground transition-colors",
            "aria-label": "Toggle menu",
            children: mobileOpen ? /* @__PURE__ */ jsx(X, { size: 22 }) : /* @__PURE__ */ jsx(Menu, { size: 22 })
          }
        )
      ] }),
      mobileOpen && /* @__PURE__ */ jsx("div", { className: "lg:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-sm pt-16", children: /* @__PURE__ */ jsx(Sidebar, { onClose: () => setMobileOpen(false) }) }),
      /* @__PURE__ */ jsxs("div", { className: "lg:flex min-h-screen", children: [
        /* @__PURE__ */ jsx("div", { className: "hidden lg:flex lg:flex-col lg:fixed lg:inset-y-0 lg:left-0 lg:w-[380px] lg:border-r lg:border-border", children: /* @__PURE__ */ jsx(Sidebar, {}) }),
        /* @__PURE__ */ jsx("main", { className: "lg:ml-[380px] flex-1 min-h-screen", children })
      ] }),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
const $$splitComponentImporter$4 = () => import("./resume-D7PoeIHr.js");
const Route$4 = createFileRoute("/resume")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./projects-BJgbv3qJ.js");
const Route$3 = createFileRoute("/projects")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./contact-BUtgYGLC.js");
const Route$2 = createFileRoute("/contact")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./index-DtXev8KP.js");
const Route$1 = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./_slug-DnPxYAkd.js");
const Route = createFileRoute("/blog/$slug")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const ResumeRoute = Route$4.update({
  id: "/resume",
  path: "/resume",
  getParentRoute: () => Route$5
});
const ProjectsRoute = Route$3.update({
  id: "/projects",
  path: "/projects",
  getParentRoute: () => Route$5
});
const ContactRoute = Route$2.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$5
});
const IndexRoute = Route$1.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$5
});
const BlogSlugRoute = Route.update({
  id: "/blog/$slug",
  path: "/blog/$slug",
  getParentRoute: () => Route$5
});
const rootRouteChildren = {
  IndexRoute,
  ContactRoute,
  ProjectsRoute,
  ResumeRoute,
  BlogSlugRoute
};
const routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const router2 = createRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Route as R,
  router as r
};
