import { motion } from 'framer-motion';
import { certifications } from '../data/portfolio';
import { EASE, SectionHeading } from './fx';

export default function Certifications() {
  return (
    <>
      <SectionHeading kicker="Credentials" title="Certifications" />
      <div className="gutter grid gap-4 sm:grid-cols-2">
        {certifications.map((certification, i) => (
          <motion.article
            key={certification.name}
            className="relative flex min-h-64 flex-col overflow-hidden rounded-2xl bg-[radial-gradient(120%_80%_at_50%_0%,#1c3830,#132228_60%,#0e181c)] p-6 ring-1 ring-[#EBAE29]/25 transition duration-500 hover:ring-[#EBAE29]/60 sm:p-8"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-8% 0px' }}
            transition={{ duration: 0.7, delay: i * 0.1, ease: EASE }}
          >
            <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#EBAE29]/70 to-transparent" />
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#EBAE29]">{certification.issuer}</p>
            <h3 className="mt-5 font-display text-3xl leading-tight tracking-wide text-bone">{certification.name}</h3>
            {certification.detail && <p className="mt-4 text-sm leading-relaxed text-bone/70">{certification.detail}</p>}
            {certification.link && (
              <a href={certification.link} target="_blank" rel="noreferrer" className="mt-auto pt-6 text-xs font-semibold tracking-wide text-bone underline decoration-[#EBAE29]/60 underline-offset-4 hover:decoration-[#EBAE29]">
                View certificate ↗
              </a>
            )}
          </motion.article>
        ))}
      </div>
    </>
  );
}
