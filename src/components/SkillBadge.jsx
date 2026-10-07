export default function SkillBadge({ children }) {
  return (
    <span className="inline-flex items-center rounded border border-white/10 bg-white/[0.025] px-3 py-2 font-mono text-xs text-muted transition duration-200 hover:-translate-y-0.5 hover:border-mint/50 hover:bg-mint/[0.06] hover:text-mint">
      {children}
    </span>
  )
}