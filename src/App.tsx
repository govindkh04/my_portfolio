import { lazy, Suspense, useCallback, useEffect, useState, type ReactNode } from 'react';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import { viewerProfiles, type ProfileId, type Project, type SectionId } from './data/portfolio';
import { SmoothScrollProvider, useSmoothScroll } from './hooks/smoothScroll';
import CustomCursor from './components/CustomCursor';
import OpeningSequence from './components/OpeningSequence';
import ProfileSelector from './components/ProfileSelector';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Scene from './components/Scene';
import Seasons from './components/Seasons';
import Originals from './components/Originals';
import TopPicks from './components/TopPicks';
import Skills from './components/Skills';
import Certifications from './components/Achievements';
import FinalCTA from './components/FinalCTA';
import { EASE } from './components/fx';

// Overlays are only needed on demand — split them out of the first load.
const PlayIntro = lazy(() => import('./components/PlayIntro'));
const ProjectModal = lazy(() => import('./components/ProjectModal'));
const ResumeModal = lazy(() => import('./components/ResumeModal'));

type Stage = 'opening' | 'profiles' | 'home';

const STORAGE_KEY = 'govind-khandelwal-series-profile';

function readStoredProfile(): ProfileId | null {
  try {
    const v = sessionStorage.getItem(STORAGE_KEY);
    return viewerProfiles.some((p) => p.id === v) ? (v as ProfileId) : null;
  } catch {
    return null;
  }
}

export default function App() {
  if (window.location.pathname !== '/' && window.location.pathname !== '/index.html') {
    return <NotFound />;
  }

  return (
    <SmoothScrollProvider>
      <Series />
    </SmoothScrollProvider>
  );
}

function NotFound() {
  useEffect(() => {
    document.title = 'Page Not Found | Govind Khandelwal';
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    description?.setAttribute('content', 'The page you requested could not be found. Return to Govind Khandelwal’s portfolio.');
  }, []);

  return (
    <main className="flex min-h-[100svh] flex-col items-center justify-center px-6 text-center">
      <p className="font-display text-8xl text-crimson-2">404</p>
      <h1 className="mt-3 font-display text-4xl text-bone">This episode is missing</h1>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-mist">The address may be outdated or the page may have moved.</p>
      <a href="/" className="mt-8 rounded-full bg-bone px-6 py-3 text-sm font-semibold text-ink transition hover:bg-white">Return to home</a>
    </main>
  );
}

function Series() {
  const stored = readStoredProfile();
  const [stage, setStage] = useState<Stage>(stored ? 'home' : 'opening');
  const [profileId, setProfileId] = useState<ProfileId>(stored ?? 'govind');
  const [playing, setPlaying] = useState(false);
  const [project, setProject] = useState<Project | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const { scrollTo, lock, unlock } = useSmoothScroll();

  const order = viewerProfiles.find((p) => p.id === profileId)!.order;

  useEffect(() => {
    if (stage === 'home') return;
    lock();
    return unlock;
  }, [stage, lock, unlock]);

  const pickProfile = useCallback(
    (id: ProfileId) => {
      setProfileId(id);
      try {
        sessionStorage.setItem(STORAGE_KEY, id);
      } catch {
        /* storage unavailable — profile simply won't persist */
      }
      if (stage !== 'home') {
        window.scrollTo(0, 0);
        setStage('home');
      } else {
        const p = viewerProfiles.find((v) => v.id === id)!;
        setToast(`Now watching as ${p.name} — ${p.blurb.toLowerCase()}`);
        scrollTo(0, { offset: 0 });
      }
    },
    [stage, scrollTo],
  );

  useEffect(() => {
    if (!toast) return;
    const t = window.setTimeout(() => setToast(null), 3200);
    return () => clearTimeout(t);
  }, [toast]);

  const closeIntro = useCallback(() => setPlaying(false), []);
  const closeProject = useCallback(() => setProject(null), []);
  const closeResume = useCallback(() => setResumeOpen(false), []);

  const sections: Record<SectionId, ReactNode> = {
    journey: <Seasons />,
    originals: <Originals onOpen={setProject} />,
    skills: <Skills />,
    certifications: <Certifications />,
    picks: <TopPicks />,
  };

  return (
    <LayoutGroup>
      <div className={stage === 'opening' ? undefined : 'graphite-theme min-h-screen bg-ink text-bone'}>
      <div className="grain" aria-hidden />
      <CustomCursor />

      <AnimatePresence>
        {stage === 'opening' && <OpeningSequence key="opening" onDone={() => setStage('profiles')} />}
        {stage === 'profiles' && <ProfileSelector key="profiles" onPick={pickProfile} />}
      </AnimatePresence>

      {stage === 'home' && (
        <motion.div initial={{ opacity: 0, scale: 1.03, filter: 'blur(10px)' }} animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }} transition={{ duration: 1, ease: EASE }}>
          <Navbar order={order} profileId={profileId} onSwitch={pickProfile} />
          <main>
            <Hero key={`hero-${profileId}`} onPlay={() => setPlaying(true)} onResume={() => setResumeOpen(true)} profileId={profileId} />
            {order.map((id) => (
              <Scene key={id} id={id} className={id === 'originals' ? '!py-0 sm:!py-0' : ''}>
                {sections[id]}
              </Scene>
            ))}
            <FinalCTA />
          </main>
        </motion.div>
      )}

      <Suspense fallback={null}>
        <AnimatePresence>{playing && <PlayIntro key="intro" onClose={closeIntro} />}</AnimatePresence>
        <AnimatePresence>{project && <ProjectModal key="project" project={project} onClose={closeProject} onSwitch={setProject} />}</AnimatePresence>
        <AnimatePresence>{resumeOpen && <ResumeModal key="resume" onClose={closeResume} />}</AnimatePresence>
      </Suspense>

      <AnimatePresence>
        {toast && (
          <motion.div
            role="status"
            className="glass fixed bottom-6 left-1/2 z-[150] w-[min(92vw,420px)] -translate-x-1/2 rounded-xl px-5 py-3 text-center text-sm text-bone"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </LayoutGroup>
  );
}
