import { motion } from 'framer-motion';
import type { CSSProperties } from 'react';
import type { Project } from '../data/portfolio';
import { EASE, Tilt } from './fx';

const cardThemes = [
  { background: '#1C1D20', outline: '#FFC928' },
  { background: '#1C1D20', outline: '#FFC928' },
  { background: '#1C1D20', outline: '#FFC928' },
] as const;

export default function ProjectCard({ project, index, onOpen }: { project: Project; index: number; onOpen: () => void }) {
  const theme = cardThemes[index % cardThemes.length];
  return (
    <motion.article
      className="w-full"
      initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.9, delay: index * 0.08, ease: EASE }}
    >
      <Tilt max={5} className="group rounded-2xl">
        <div
          role="button"
          tabIndex={0}
          data-cursor="view"
          onClick={onOpen}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onOpen();
            }
          }}
          aria-label={`Open ${project.title}`}
          className="focus-ring relative aspect-[4/5] overflow-hidden rounded-2xl ring-1 transition duration-500 group-hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] md:aspect-auto md:h-[38vh] md:min-h-[280px] md:max-h-[380px]"
          style={{
            backgroundColor: `${theme.background}cc`,
            '--tw-ring-color': `${theme.outline}99`,
          } as CSSProperties}
        >
          <span aria-hidden="true" className="pointer-events-none absolute left-4 top-3 z-0 select-none font-display text-[4rem] leading-[0.78] text-white/[0.07]">
            {String(index + 1).padStart(2, '0')}
          </span>
          <div className="absolute inset-0 z-10 flex flex-col p-5 sm:p-6 [transform:translateZ(40px)]">
            <div className="flex shrink-0 items-start justify-between">
              {project.year && <span className="rounded border border-white/30 px-1.5 py-px text-[10px] font-bold text-bone">{project.year}</span>}
              <div className="ml-auto flex items-center gap-2">
                <span className="font-display text-xl leading-none text-crimson-2">G</span>
                <span className="text-[10px] font-bold tracking-[0.34em] text-bone/80">PROJECT</span>
              </div>
            </div>

            <div className="mt-auto min-h-0 pt-3">
            <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-mist">{project.genre}</p>
            <h3 className="line-clamp-2 font-display text-[clamp(1.45rem,2.35vw,2.25rem)] leading-[0.96] tracking-wide text-bone">
              {project.title}
            </h3>
            <p className="mt-2 line-clamp-2 max-w-xl text-xs leading-snug text-bone/80 sm:text-sm md:line-clamp-1">
              {project.logline}
            </p>
            <div className="mt-2 flex max-h-[44px] flex-wrap gap-1.5 overflow-hidden">
              {project.stack.map((t) => (
                <span key={t} className="rounded-full bg-black/50 px-2.5 py-1 text-[10px] font-medium leading-none text-bone/90 backdrop-blur sm:text-[11px]">
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <span className="flex min-h-10 items-center gap-2 rounded-md bg-bone px-4 text-sm font-bold text-ink transition group-hover:bg-white">▶ View Project</span>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="link"
                  onClick={(e) => e.stopPropagation()}
                  className="flex min-h-10 items-center gap-2 rounded-md border border-white/25 bg-black/40 px-4 text-sm font-semibold text-bone backdrop-blur transition hover:border-bone"
                >
                  GitHub ↗
                </a>
              )}
            </div>
            </div>
          </div>
        </div>
      </Tilt>
    </motion.article>
  );
}
