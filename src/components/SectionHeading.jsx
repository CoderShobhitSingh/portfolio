export default function SectionHeading({ number, title, eyebrow }) {
  return (
    <div className="mb-10 flex items-end justify-between gap-5 border-b border-white/10 pb-4 sm:mb-12">
      <div>
        {eyebrow && <p className="mb-2 font-mono text-[11px] uppercase tracking-normal text-mint">{eyebrow}</p>}
        <h2 className="text-2xl font-semibold tracking-normal text-white sm:text-3xl">{title}</h2>
      </div>
      <span className="font-mono text-xs text-muted">{number}</span>
    </div>
  )
}