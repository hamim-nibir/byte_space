import type { LearningPath } from '@/types/learningPath'

export function LearningPathCard({ path }: { path: LearningPath }) {
  const { label, icon: Icon, href } = path

  return (
    <a
      href={href}
      className="group flex aspect-square flex-col items-center justify-center gap-4 rounded-3xl border border-gray-300 bg-white p-4 transition hover:border-primary hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      <span className="grid size-[60px] place-items-center rounded-full bg-accent text-ink transition group-hover:scale-105">
        <Icon size={28} strokeWidth={2.5} aria-hidden="true" />
      </span>
      <span className="text-center text-base text-ink">{label}</span>
    </a>
  )
}