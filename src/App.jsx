import { ArrowDown, ArrowRight, ArrowUpRight, Code2, Download, ExternalLink, Mail } from 'lucide-react'
import { motion } from 'framer-motion'
import developerIllustration from '../property/dev.png'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import ProjectCard from './components/ProjectCard.jsx'
import Reveal from './components/Reveal.jsx'
import SectionHeading from './components/SectionHeading.jsx'
import SkillBadge from './components/SkillBadge.jsx'
import { milestones, profile, projects, skillGroups } from './data/portfolioData.js'

function Hero() {
  return (
    <section id="home" className="relative flex min-h-[min(850px,100svh)] scroll-mt-24 items-center overflow-hidden border-b border-white/[0.06] pt-24">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_86%)]" />
      <div className="relative mx-auto grid w-full max-w-content items-center gap-8 px-5 pb-20 pt-12 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:pb-28">
        <div className="max-w-2xl">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="mb-5 flex items-center gap-2 font-mono text-xs uppercase tracking-normal text-mint">
            <span className="size-1.5 rounded-full bg-mint shadow-[0_0_12px_rgba(145,242,195,0.8)]" /> Building thoughtful web experiences
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.08 }} className="text-[clamp(2.8rem,8vw,5.7rem)] font-semibold leading-[1.02] tracking-normal text-white">
            {profile.name}<span className="text-mint">.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.16 }} className="mt-5 font-mono text-base text-muted sm:text-lg">
            {profile.role} <span className="text-mint">/</span> front-end focused
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.23 }} className="mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
            {profile.summary}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.3 }} className="mt-8 flex flex-wrap gap-3">
            <a href={profile.resume} download className="inline-flex min-h-11 items-center gap-2 rounded bg-mint px-4 font-mono text-xs font-semibold text-ink transition hover:bg-white active:scale-[0.98]">
              <Download size={15} /> Resume
            </a>
            <a href="#contact" className="inline-flex min-h-11 items-center gap-2 rounded border border-white/15 px-4 font-mono text-xs text-white transition hover:border-mint/60 hover:text-mint active:scale-[0.98]">
              <Mail size={15} /> Contact me
            </a>
            {profile.socials.slice(0, 2).map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-1 rounded px-3 font-mono text-xs text-muted transition hover:text-mint">
                {social.label} <ArrowUpRight size={13} />
              </a>
            ))}
          </motion.div>
          <a href="#about" className="mt-12 inline-flex items-center gap-2 font-mono text-[11px] text-muted/75 transition hover:text-mint">
            <ArrowDown size={13} /> Scroll to explore
          </a>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="relative mx-auto flex w-full max-w-[420px] items-center justify-center lg:max-w-none">
          <div className="absolute inset-x-8 inset-y-10 border border-mint/15" />
          <div className="relative w-full border border-white/10 bg-[#0c1113]/90 p-4 shadow-2xl sm:p-5">
            <div className="flex items-center justify-between border-b border-white/10 pb-3 font-mono text-[10px] text-muted">
              <span className="flex items-center gap-2"><Code2 size={13} className="text-mint" /> developer.profile</span>
              <span>01 — 04</span>
            </div>
            <div className="grid min-h-[270px] grid-cols-[1fr_0.8fr] items-center gap-1 overflow-hidden sm:min-h-[330px]">
              <div className="relative z-10 space-y-3 font-mono text-[10px] leading-5 sm:text-xs">
                <p className="text-muted"><span className="text-[#b49cff]">const</span> developer = {'{'}</p>
                <p className="pl-3 text-white">name: <span className="text-mint">&quot;Shobhit&quot;</span>,</p>
                <p className="pl-3 text-white">focus: <span className="text-mint">&quot;the web&quot;</span>,</p>
                <p className="pl-3 text-white">curious: <span className="text-[#f5c77e]">true</span>,</p>
                <p className="text-muted">{'}'}</p>
                <p className="pt-2 text-muted"><span className="text-[#b49cff]">//</span> good ideas, made real</p>
              </div>
              <div className="relative -mr-8 h-full min-h-[260px] sm:-mr-12 sm:min-h-[320px]">
                <img src={developerIllustration} alt="Illustration of a developer working at a computer" className="absolute inset-0 h-full w-[145%] object-contain object-center opacity-90 [mix-blend-mode:screen]" />
              </div>
            </div>
            <div className="flex items-center justify-between border-t border-white/10 pt-3 font-mono text-[10px] text-muted">
              <span>building with intention</span><span className="text-mint">● online</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-content">
        <SectionHeading number="01 / 04" title="A little about me" eyebrow="Background & toolkit" />
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <p className="font-mono text-xs text-mint">// the short version</p>
            <p className="mt-4 text-lg leading-8 text-white/85">I&apos;m a {profile.role.toLowerCase()} with a strong focus on front-end development. I enjoy turning ideas into scalable, responsive, and user-friendly applications.</p>
            <p className="mt-4 text-sm leading-7 text-muted">I value clear communication, collaborative problem-solving, and the small details that make digital products feel considered.</p>
          </Reveal>
          <div className="space-y-7">
            {skillGroups.map((group, index) => (
              <Reveal key={group.name} delay={index * 0.06}>
                <div className="flex flex-col gap-3 sm:flex-row sm:gap-6">
                  <h3 className="w-28 shrink-0 pt-1 font-mono text-xs text-white">{group.name}<span className="text-mint">.</span></h3>
                  <div className="flex flex-wrap gap-2">{group.skills.map((skill) => <SkillBadge key={skill}>{skill}</SkillBadge>)}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Work() {
  return (
    <section id="work" className="scroll-mt-24 border-y border-white/[0.06] bg-[#0c1012] px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-content">
        <SectionHeading number="02 / 04" title="Selected projects" eyebrow="Things I&apos;ve worked on" />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => <ProjectCard key={project.name} project={project} index={index} />)}
        </div>
        <a href="https://github.com/CoderShobhitSingh/" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 font-mono text-xs text-mint transition hover:text-white">More on GitHub <ArrowRight size={14} /></a>
      </div>
    </section>
  )
}

function Journey() {
  return (
    <section id="journey" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-content">
        <SectionHeading number="03 / 04" title="Learning by building" eyebrow="Journey so far" />
        <div className="grid gap-4 md:grid-cols-2">
          {milestones.map((milestone, index) => (
            <Reveal key={milestone.title} delay={index * 0.08}>
              <article className="flex h-full gap-5 border border-white/10 bg-panel p-5 sm:p-7">
                <div className="mt-1 grid size-10 shrink-0 place-items-center border border-mint/25 bg-mint/[0.06] text-mint"><Code2 size={17} /></div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-normal text-mint">{milestone.type}</p>
                  <h3 className="mt-2 text-lg font-semibold text-white">{milestone.title}</h3>
                  <p className="mt-1 font-mono text-xs text-muted">{milestone.organization}</p>
                  <p className="mt-4 text-sm leading-6 text-muted">{milestone.description}</p>
                  {milestone.link && (
                    <a href={milestone.link} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs text-mint transition hover:text-white">
                      View credential <ExternalLink size={13} />
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-white/[0.06] bg-[#0c1012] px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-content">
        <SectionHeading number="04 / 04" title="Have something in mind?" eyebrow="Get in touch" />
        <Reveal>
          <div className="flex flex-col justify-between gap-8 border border-white/10 bg-panel p-6 sm:p-9 md:flex-row md:items-center">
            <div className="max-w-xl">
              <p className="text-lg leading-8 text-white">I&apos;m always open to thoughtful conversations, interesting projects, and new opportunities.</p>
              <p className="mt-3 font-mono text-xs text-muted">The quickest way to reach me is by email.</p>
            </div>
            <a href={`mailto:${profile.email}`} className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded bg-mint px-5 font-mono text-xs font-semibold text-ink transition hover:bg-white active:scale-[0.98]">
              Say hello <ArrowUpRight size={15} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-ink text-white antialiased">
      <Navbar />
      <main><Hero /><About /><Work /><Journey /><Contact /></main>
      <Footer />
    </div>
  )
}