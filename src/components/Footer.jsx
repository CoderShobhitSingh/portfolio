import { ArrowUp, Github, Instagram, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/portfolioData.js'

const icons = { GitHub: Github, LinkedIn: Linkedin, Instagram }

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-content flex-col gap-5 px-5 py-7 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="font-mono text-muted">© {new Date().getFullYear()} {profile.name}</p>
        <div className="flex items-center gap-5">
          <a href={`mailto:${profile.email}`} aria-label="Email Shobhit" className="text-muted transition hover:text-mint"><Mail size={16} /></a>
          {profile.socials.map((social) => {
            const Icon = icons[social.label]
            return <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label} className="text-muted transition hover:text-mint"><Icon size={16} /></a>
          })}
          <a href="#home" aria-label="Back to top" className="ml-2 border-l border-white/10 pl-5 text-muted transition hover:text-mint"><ArrowUp size={16} /></a>
        </div>
      </div>
    </footer>
  )
}