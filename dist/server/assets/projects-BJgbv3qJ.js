import { jsx, jsxs } from "react/jsx-runtime";
import { Sparkles, Github, ExternalLink } from "lucide-react";
import { c as cn, B as Badge } from "./badge-BxI9hQBx.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
const allProjects = [
  {
    "title": "Prediksi Harga Rumah (ML)",
    "description": "Analisis dan prediksi harga rumah Jabodetabek dengan klasifikasi, clustering, PCA, dan Random Forest—dari preprocessing, EDA, training, tuning, hingga penyimpanan model .h5 untuk deployment.",
    "tags": [
      "Python",
      "Machine Learning",
      "Scikit-learn",
      "PCA",
      "Random Forest"
    ],
    "github": "https://github.com/adiityanugraha/Project-ML-Prediksi-Harga-Rumah",
    "highlight": true,
    "content": "Notebook akhir untuk clustering dan klasifikasi, dataset regional, serta artefak model tersimpan untuk reuse.",
    "_meta": {
      "filePath": "ml-prediksi-harga-rumah.md",
      "fileName": "ml-prediksi-harga-rumah.md",
      "directory": ".",
      "extension": "md",
      "path": "ml-prediksi-harga-rumah"
    }
  },
  {
    "title": "Sistem Poin Pelanggaran Mobile",
    "description": "Aplikasi Flutter untuk manajemen pelanggaran siswa: autentikasi multi-peran (Admin, Guru, Siswa), poin & sanksi, dashboard per peran, laporan/rekap, FCM, dan upload bukti ke Firebase.",
    "tags": [
      "Flutter",
      "Dart",
      "Firebase",
      "Mobile"
    ],
    "github": "https://github.com/adiityanugraha/mobile_sistem_poin_pelanggaran",
    "highlight": true,
    "content": "Tugas besar berbasis Flutter dengan Firebase (Auth, Firestore, Storage, Functions, Messaging) dan state management Provider.",
    "_meta": {
      "filePath": "mobile-sistem-poin-pelanggaran.md",
      "fileName": "mobile-sistem-poin-pelanggaran.md",
      "directory": ".",
      "extension": "md",
      "path": "mobile-sistem-poin-pelanggaran"
    }
  }
];
function Card({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "card",
      className: cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      ),
      ...props
    }
  );
}
function CardHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "card-header",
      className: cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      ),
      ...props
    }
  );
}
function CardTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "card-title",
      className: cn("leading-none font-semibold", className),
      ...props
    }
  );
}
function CardDescription({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "card-description",
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}
function CardFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "card-footer",
      className: cn("flex items-center px-6 [.border-t]:pt-6", className),
      ...props
    }
  );
}
function Projects() {
  const highlights = allProjects.filter((p) => p.highlight === true);
  const other = allProjects.filter((p) => !p.highlight);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen px-8 py-16 lg:px-14 lg:py-20 max-w-5xl", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-xs uppercase tracking-widest text-primary font-semibold mb-10", children: "Projects" }),
    highlights.length > 0 ? /* @__PURE__ */ jsxs("section", { className: "mb-16", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-6", children: [
        /* @__PURE__ */ jsx(Sparkles, { className: "size-4 text-primary shrink-0", "aria-hidden": true }),
        /* @__PURE__ */ jsx("h3", { className: "text-sm font-semibold text-foreground tracking-tight", children: "Highlight projects" })
      ] }),
      /* @__PURE__ */ jsx("ul", { className: "grid gap-6 sm:grid-cols-2 list-none p-0 m-0", children: highlights.map((project) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(ProjectCard, { project, emphasized: true }) }, project._meta.path)) })
    ] }) : null,
    other.length > 0 ? /* @__PURE__ */ jsxs("section", { children: [
      /* @__PURE__ */ jsx("h3", { className: "text-sm font-semibold text-foreground tracking-tight mb-6", children: "More projects" }),
      /* @__PURE__ */ jsx("ul", { className: "grid gap-6 sm:grid-cols-2 list-none p-0 m-0", children: other.map((project) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(ProjectCard, { project }) }, project._meta.path)) })
    ] }) : null,
    highlights.length === 0 && other.length === 0 ? /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Belum ada proyek yang dipublikasikan." }) : null
  ] });
}
function ProjectCard({
  project,
  emphasized = false
}) {
  return /* @__PURE__ */ jsxs(Card, { className: cn("h-full transition-shadow hover:shadow-md", emphasized && "border-primary/25 bg-primary/[0.03]"), children: [
    /* @__PURE__ */ jsxs(CardHeader, { className: "gap-3", children: [
      /* @__PURE__ */ jsx(CardTitle, { className: "text-base leading-snug", children: project.title }),
      /* @__PURE__ */ jsx(CardDescription, { className: "text-sm leading-relaxed", children: project.description }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1.5 pt-1", children: project.tags.map((tag) => /* @__PURE__ */ jsx(Badge, { variant: "secondary", className: "font-normal text-xs", children: tag }, tag)) })
    ] }),
    /* @__PURE__ */ jsxs(CardFooter, { className: "flex flex-wrap gap-3 border-t border-border/60 pt-4 mt-auto", children: [
      project.github ? /* @__PURE__ */ jsxs("a", { href: project.github, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline", children: [
        /* @__PURE__ */ jsx(Github, { className: "size-4 shrink-0", "aria-hidden": true }),
        "GitHub",
        /* @__PURE__ */ jsx(ExternalLink, { className: "size-3.5 opacity-70", "aria-hidden": true })
      ] }) : null,
      project.liveUrl ? /* @__PURE__ */ jsxs("a", { href: project.liveUrl, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground", children: [
        "Live demo",
        /* @__PURE__ */ jsx(ExternalLink, { className: "size-3.5 shrink-0 opacity-70", "aria-hidden": true })
      ] }) : null
    ] })
  ] });
}
export {
  Projects as component
};
