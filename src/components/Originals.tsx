import { motion } from 'framer-motion';
import { profile, projects, type Project } from '../data/portfolio';
import { EASE, RevealText } from './fx';
import ProjectCard from './ProjectCard';

export default function Originals({ onOpen }: { onOpen: (p: Project) => void }) {
  return (
    <section className="py-10 sm:py-16">
      <div className="gutter mb-8 sm:mb-10">
        <p className="mb-3 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-crimson-2">
          <span className="h-px w-8 bg-crimson-2" /> {projects.length} Projects · {projects[0].year}
        </p>
        <RevealText as="h2" text="PROJECTS" className="font-display text-[clamp(3.5rem,9vw,8rem)] leading-[0.85] text-bone" />
        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-mist">
          Practical projects across AI, web apps, and machine learning. Open any project to see how it works and view the code.
        </p>
      </div>

      <div className="gutter grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} onOpen={() => onOpen(p)} />
        ))}
      </div>

      <motion.div
        className="gutter mt-10"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: EASE }}
      >
        <a href={profile.links.github} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-3 text-sm font-semibold text-mist transition hover:text-bone">
          <span className="h-px w-8 bg-crimson-2 transition-all group-hover:w-12" /> More projects on GitHub <span aria-hidden="true">↗</span>
        </a>
      </motion.div>
    </section>
  );
}
