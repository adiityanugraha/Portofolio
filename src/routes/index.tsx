import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: About,
})

function About() {
  return (
    <div className="min-h-screen px-10 py-16 lg:px-16 lg:py-20 max-w-5xl">
      <div className="mb-14">
        <h2 className="text-xs uppercase tracking-widest text-primary font-semibold mb-7">About</h2>
        <div className="space-y-6 text-muted-foreground leading-relaxed text-base">
          <p>
            Saya adalah mahasiswa Software Engineering di{' '}
            <span className="text-foreground font-medium">Telkom University Bandung</span>{' '}
            yang memiliki ketertarikan besar pada pengembangan teknologi berbasis software, data, dan artificial intelligence. Saya senang membangun solusi berbasis data melalui machine learning serta mengeksplorasi bagaimana teknologi AI dapat digunakan untuk menyelesaikan permasalahan nyata secara efektif dan scalable.
          </p>
          <p>
            Saat ini, saya sedang mendalami{' '}
            <span className="text-foreground font-medium">machine learning</span> dan{' '}
            <span className="text-foreground font-medium">large language models (LLM)</span>, khususnya dalam membangun sistem AI yang dapat diintegrasikan ke dalam aplikasi modern. Saya tertarik untuk mengubah eksperimen AI menjadi produk yang andal, efisien, dan siap digunakan di dunia nyata.
          </p>
          <p>
            Selain AI, saya juga memiliki minat yang sangat besar di bidang{' '}
            <span className="text-foreground font-medium">finance</span> dan sedang mengembangkan beberapa project yang berkaitan dengan dunia keuangan, analisis data, serta pengambilan keputusan berbasis data. Saya menikmati proses menggabungkan teknologi dan finance untuk menciptakan solusi yang inovatif dan bernilai.
          </p>
          <p>
            Di waktu senggang, saya senang berolahraga seperti{' '}
            <span className="text-foreground font-medium">gym dan lari</span> karena membantu saya menjaga konsistensi, disiplin, dan keseimbangan dalam aktivitas sehari-hari. Saya juga memiliki hobi di bidang otomotif, khususnya mobil, serta tertarik untuk membangun project teknologi yang berkaitan dengan dunia automotive di masa depan.
          </p>
        </div>
      </div>

      {/* Skills */}
      <div>
        <h2 className="text-xs uppercase tracking-widest text-primary font-semibold mb-7">Core Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {[
            'Python',
            'Machine Learning',
            'Deep Learning',
            'Large Language Models',
            'TensorFlow / PyTorch',
            'Data Analysis',
            'SQL',
            'REST APIs',
            'Git',
            'JavaScript / TypeScript',
          ].map((skill) => (
            <div
              key={skill}
              className="flex items-center gap-2.5 text-base text-muted-foreground group"
            >
              <span className="w-2 h-2 rounded-full bg-primary shrink-0 group-hover:scale-125 transition-transform" />
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
