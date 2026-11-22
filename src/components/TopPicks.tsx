import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { profile, topPicks } from '../data/portfolio';
import { useMedia, useReducedMotionPref } from '../hooks/useMedia';
import { EASE, SectionHeading } from './fx';
import { PosterBackdrop } from './Poster';

export default function TopPicks() {
  const reduced = useReducedMotionPref();
  const wide = useMedia('(min-width: 1024px)');
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(() => (typeof window === 'undefined' ? 390 : window.innerWidth));
  useEffect(() => {
    const updateWidth = () => setViewportWidth(window.innerWidth);
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);
  const step = (Math.PI * 2) / topPicks.length;
  const radiusX = wide ? 340 : Math.max(100, Math.min(215, viewportWidth / 2 - 62));
  const radiusY = wide ? 120 : 84;
  const radiusZ = wide ? 150 : 75;
  const cardWidth = wide ? 145 : 78;
  const cardHeight = wide ? 220 : 120;
  const cardYaw = wide ? 34 : 42;
  const changeHighlight = (direction: 1 | -1) => {
    setActiveIndex((current) => (current + direction + topPicks.length) % topPicks.length);
  };

  return (
    <>
      <SectionHeading kicker="Selected resume highlights" title={`${profile.displayName}'s Highlights`} />
      <div className="gutter">
        <div className="relative mx-auto h-[400px] w-full overflow-hidden sm:h-[510px] [perspective:1200px]">
          <div className="absolute inset-0 [transform-style:preserve-3d]">
            {topPicks.map((pick, i) => {
              const angle = step * (i - activeIndex);
              const depth = Math.cos(angle);
              const selected = i === activeIndex;
              const mobileScale = selected ? 1.28 : 0.68 + ((depth + 1) / 2) * 0.16;
              return (
                <motion.article
                  key={pick.title}
                  className={`absolute left-1/2 top-1/2 overflow-hidden rounded-lg shadow-[0_12px_30px_rgba(0,0,0,0.55)] transition-[box-shadow,ring-color] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FFC928] ${activeIndex === i ? 'ring-2 ring-[#FFC928] shadow-[0_0_22px_rgba(255,201,40,0.3),0_12px_30px_rgba(0,0,0,0.55)]' : 'ring-1 ring-white/20 hover:ring-[#FFC928]/60'}`}
                  style={{
                    width: cardWidth,
                    height: cardHeight,
                    marginLeft: -cardWidth / 2,
                    marginTop: -cardHeight / 2,
                    transformStyle: 'preserve-3d',
                    zIndex: !wide && selected ? 20 : undefined,
                  }}
                  animate={{
                    x: Math.sin(angle) * radiusX,
                    y: depth * radiusY - 18,
                    z: depth * radiusZ + (!wide ? (selected ? 90 : -35) : 0),
                    rotateY: Math.sin(angle) * cardYaw,
                    scale: wide ? 0.78 + ((depth + 1) / 2) * 0.22 : mobileScale,
                    opacity: wide ? 0.68 + ((depth + 1) / 2) * 0.32 : selected ? 1 : 0.5 + ((depth + 1) / 2) * 0.2,
                  }}
                  transition={reduced ? { duration: 0.01 } : { type: 'spring', stiffness: 70, damping: 18 }}
                  role="button"
                  tabIndex={0}
                  aria-label={`Bring highlight ${pick.title} to the front`}
                  onClick={() => setActiveIndex(i)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault();
                      setActiveIndex(i);
                    }
                  }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <PosterBackdrop palette={pick.palette} />
                  <span aria-hidden="true" className="absolute -right-1 top-0 font-display text-5xl leading-none text-white/[0.08] sm:text-6xl">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="absolute inset-0 flex flex-col justify-between bg-gradient-to-t from-black/85 via-transparent to-black/20 p-2 sm:p-4">
                    <span className="text-[6px] font-bold uppercase tracking-[0.12em] text-bone/75 sm:text-[9px] sm:tracking-[0.2em]">{pick.label}</span>
                    <div>
                      <p className="line-clamp-2 font-display text-[12px] leading-[0.92] tracking-wide text-bone sm:text-2xl">{pick.title}</p>
                      <p className="mt-1 line-clamp-2 text-[7px] leading-snug text-mist sm:mt-1.5 sm:text-[11px]">{pick.detail}</p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-[15%] bottom-1 h-6 rounded-full bg-[#FFC928]/10 blur-2xl sm:bottom-2 sm:h-8" />
        </div>
        <div className="mt-2 flex items-center justify-center gap-5">
          <button type="button" aria-label="Previous highlight" onClick={() => changeHighlight(-1)} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-xl text-bone transition hover:border-[#FFC928] hover:text-[#FFC928]">‹</button>
          <span className="min-w-16 text-center text-xs font-semibold tracking-[0.2em] text-mist">{String(activeIndex + 1).padStart(2, '0')} / {String(topPicks.length).padStart(2, '0')}</span>
          <button type="button" aria-label="Next highlight" onClick={() => changeHighlight(1)} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-xl text-bone transition hover:border-[#FFC928] hover:text-[#FFC928]">›</button>
        </div>
      </div>
    </>
  );
}
