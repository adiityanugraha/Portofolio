import { jsxs, jsx } from "react/jsx-runtime";
function About() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen px-10 py-16 lg:px-16 lg:py-20 max-w-5xl", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-14", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xs uppercase tracking-widest text-primary font-semibold mb-7", children: "About" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6 text-muted-foreground leading-relaxed text-base", children: [
        /* @__PURE__ */ jsxs("p", { children: [
          "Saya adalah mahasiswa Software Engineering di",
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-foreground font-medium", children: "Telkom University Bandung" }),
          " ",
          "yang memiliki ketertarikan besar pada pengembangan teknologi berbasis software, data, dan artificial intelligence. Saya senang membangun solusi berbasis data melalui machine learning serta mengeksplorasi bagaimana teknologi AI dapat digunakan untuk menyelesaikan permasalahan nyata secara efektif dan scalable."
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Saat ini, saya sedang mendalami",
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-foreground font-medium", children: "machine learning" }),
          " dan",
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-foreground font-medium", children: "large language models (LLM)" }),
          ", khususnya dalam membangun sistem AI yang dapat diintegrasikan ke dalam aplikasi modern. Saya tertarik untuk mengubah eksperimen AI menjadi produk yang andal, efisien, dan siap digunakan di dunia nyata."
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Selain AI, saya juga memiliki minat yang sangat besar di bidang",
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-foreground font-medium", children: "finance" }),
          " dan sedang mengembangkan beberapa project yang berkaitan dengan dunia keuangan, analisis data, serta pengambilan keputusan berbasis data. Saya menikmati proses menggabungkan teknologi dan finance untuk menciptakan solusi yang inovatif dan bernilai."
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Di waktu senggang, saya senang berolahraga seperti",
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-foreground font-medium", children: "gym dan lari" }),
          " karena membantu saya menjaga konsistensi, disiplin, dan keseimbangan dalam aktivitas sehari-hari. Saya juga memiliki hobi di bidang otomotif, khususnya mobil, serta tertarik untuk membangun project teknologi yang berkaitan dengan dunia automotive di masa depan."
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xs uppercase tracking-widest text-primary font-semibold mb-7", children: "Core Skills" }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-4", children: ["Python", "Machine Learning", "Deep Learning", "Large Language Models", "TensorFlow / PyTorch", "Data Analysis", "SQL", "REST APIs", "Git", "JavaScript / TypeScript"].map((skill) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2.5 text-base text-muted-foreground group", children: [
        /* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full bg-primary shrink-0 group-hover:scale-125 transition-transform" }),
        skill
      ] }, skill)) })
    ] })
  ] });
}
export {
  About as component
};
