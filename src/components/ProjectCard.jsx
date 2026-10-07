import { ArrowUpRight, Github } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.08 }}
      className="group overflow-hidden rounded border border-white/10 bg-panel transition duration-300 hover:-translate-y-1 hover:border-mint/35 hover:shadow-[0_12px_40px_rgba(0,0,0,0.22)]"
    >
      <div className="relative aspect-[16/9] overflow-hidden border-b border-white/10 bg-[#151d20]">
        <img src={project.image} alt={`${project.name} project preview`} loading="lazy" className={`h-full w-full ${project.imageFit === 'contain' ? 'object-contain' : 'object-cover'} opacity-75 transition duration-500 group-hover:scale-[1.035] group-hover:opacity-100`} />
        <span className="absolute left-3 top-3 rounded border border-white/15 bg-ink/80 px-2.5 py-1 font-mono text-[10px] text-mint backdrop-blur-sm">{project.category}</span>
      </div>
      <div className="p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-white">{project.name}</h3>
            <p className="mt-2 text-sm leading-6 text-muted">{project.description}</p>
          </div>
          <ArrowUpRight size={18} className="mt-1 shrink-0 text-muted transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-mint" aria-hidden="true" />
        </div>
        <ul className="mt-5 space-y-2">
          {project.points.map((point) => <li key={point} className="flex gap-2 text-xs leading-5 text-muted"><span className="text-mint">/</span>{point}</li>)}
        </ul>
        <div className="mt-5 flex flex-wrap gap-2 border-t border-white/10 pt-4">
          {project.tags.map((tag) => <span key={tag} className="font-mono text-[10px] text-muted/80">{tag}</span>)}
        </div>
        {(project.demo || project.repository) && (
          <div className="mt-5 flex gap-4">
            {project.demo && <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 font-mono text-xs text-mint hover:text-white">Live demo <ArrowUpRight size={13} /></a>}
            {project.repository && <a href={project.repository} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 font-mono text-xs text-muted hover:text-mint"><Github size={13} /> Source</a>}
          </div>
        )}
      </div>
    </motion.article>
  )
}