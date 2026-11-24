import { profile } from '../data/portfolio';

export default function FinalCTA() {

  const ctas = [
    { label: "Let's Build", href: `mailto:${profile.email}?subject=${encodeURIComponent("Let's build something")}`, primary: true, cursor: 'play' },
    { label: 'LinkedIn', href: profile.links.linkedin, cursor: 'link' },
    { label: 'GitHub', href: profile.links.github, cursor: 'link' },
    { label: 'LeetCode', href: profile.links.leetcode, cursor: 'link' },
    { label: 'Email', href: `mailto:${profile.email}`, cursor: 'link' },
    { label: 'Call', href: `tel:${profile.phone}`, cursor: 'link' },
  ];

  return (
    <>
    <section id="contact" aria-labelledby="contact-heading" className="relative isolate flex min-h-[100svh] flex-col justify-center overflow-hidden px-4 py-12 sm:px-6 lg:py-8">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_55%_at_50%_35%,rgba(255,201,40,0.1),transparent_72%)]" />
      <div className="gutter relative mx-auto max-w-7xl">
        <header className="text-center">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.28em] text-crimson-2">The Next Episode</p>
          <h2 id="contact-heading" className="mt-3 font-display text-5xl leading-none text-bone sm:text-6xl lg:mt-2 lg:text-6xl">To Be Continued</h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-mist sm:text-base lg:mt-2">Have a project idea, AI opportunity, or collaboration inquiry? Feel free to reach out directly.</p>
        </header>

        <div className="mt-7 grid gap-5 lg:mt-5 lg:grid-cols-[0.8fr_1.65fr] lg:gap-5">
          <aside className="flex flex-col rounded-3xl border border-[#FFC928]/25 bg-white/[0.035] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.18)] sm:p-8 lg:p-5">
            <h3 className="font-mono text-lg font-bold uppercase tracking-wide text-bone">Contact Information</h3>
            <p className="mt-3 text-sm leading-relaxed text-mist">Open to full-time roles, freelance projects, AI consulting, and research collaborations.</p>

            <div className="mt-5 space-y-3">
              <a href={`mailto:${profile.email}`} className="group flex min-w-0 items-center gap-3" data-cursor="link">
                <span aria-hidden="true" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#FFC928]/30 bg-[#FFC928]/10 text-[#FFC928]">@</span>
                <span className="min-w-0"><span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-smoke">Email</span><span className="block break-all text-sm font-medium text-bone transition group-hover:text-[#FFC928]">{profile.email}</span></span>
              </a>
              <a href={`tel:${profile.phone}`} className="group flex items-center gap-3" data-cursor="link">
                <span aria-hidden="true" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#FFC928]/30 bg-[#FFC928]/10 text-[#FFC928]">☎</span>
                <span><span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-smoke">Phone</span><span className="block text-sm font-medium text-bone transition group-hover:text-[#FFC928]">{profile.phone}</span></span>
              </a>
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#FFC928]/30 bg-[#FFC928]/10 text-[#FFC928]">⌖</span>
                <span><span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-smoke">Location</span><span className="block text-sm font-medium text-bone">{profile.location}</span></span>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-2 border-t border-white/10 pt-4 lg:grid-cols-3">
              {ctas.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel={c.href.startsWith('http') ? 'noreferrer' : undefined}
                  data-cursor={c.cursor}
                  className={`flex min-h-9 items-center justify-center gap-1 rounded-xl border px-2 text-center text-[10px] font-bold tracking-wide transition sm:text-xs ${c.primary ? 'border-[#FFC928] bg-[#FFC928] text-[#1C1D20] hover:brightness-110' : 'border-white/15 text-bone hover:border-[#FFC928]/60 hover:bg-white/[0.06]'}`}
                >
                  <span>{c.label}</span><span aria-hidden="true" className={c.primary ? '' : 'text-mist'}>↗</span>
                </a>
              ))}
            </div>
          </aside>

          <form
            className="rounded-3xl border border-[#FFC928]/25 bg-white/[0.04] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.18)] sm:p-8 lg:p-5"
            onSubmit={(event) => {
              event.preventDefault();
              const values = new FormData(event.currentTarget);
              const name = String(values.get('name') ?? '');
              const email = String(values.get('email') ?? '');
              const message = String(values.get('message') ?? '');
              const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
              const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
              window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
            }}
          >
            <div className="space-y-3">
              <label className="block text-sm font-semibold text-bone">
                Your Name
                <input name="name" type="text" autoComplete="name" required placeholder="e.g. John Doe" className="mt-2 min-h-12 w-full rounded-xl border border-white/10 bg-black/20 px-4 text-sm font-normal text-bone outline-none transition placeholder:text-smoke focus:border-[#FFC928]/70 focus:ring-2 focus:ring-[#FFC928]/15 lg:mt-1 lg:min-h-10" />
              </label>
              <label className="block text-sm font-semibold text-bone">
                Email Address
                <input name="email" type="email" autoComplete="email" required placeholder="e.g. john@example.com" className="mt-2 min-h-12 w-full rounded-xl border border-white/10 bg-black/20 px-4 text-sm font-normal text-bone outline-none transition placeholder:text-smoke focus:border-[#FFC928]/70 focus:ring-2 focus:ring-[#FFC928]/15 lg:mt-1 lg:min-h-10" />
              </label>
              <label className="block text-sm font-semibold text-bone">
                Message
                <textarea name="message" required rows={3} placeholder="Write your message here..." className="mt-2 w-full resize-y rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm font-normal text-bone outline-none transition placeholder:text-smoke focus:border-[#FFC928]/70 focus:ring-2 focus:ring-[#FFC928]/15 lg:mt-1 lg:py-2" />
              </label>
            </div>
            <button type="submit" className="mt-4 flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#FFC928] to-[#F2B91F] px-5 text-sm font-bold text-[#1C1D20] shadow-[0_0_32px_rgba(255,201,40,0.18)] transition hover:brightness-110">
              Send Message <span aria-hidden="true">↗</span>
            </button>
            <p className="mt-2 text-center text-xs text-smoke">Submitting opens a message in your email app.</p>
          </form>
        </div>
      </div>
      <footer className="relative mt-8 pb-2 text-center">
        <p className="flex items-center justify-center gap-2 text-sm font-extrabold tracking-[0.32em]">
          <span className="text-[#FFC928]">G</span><span className="text-bone/75">SERIES</span>
        </p>
        <p className="mt-3 text-sm text-smoke">&copy; {new Date().getFullYear()} {profile.fullName}. Personal portfolio.</p>
      </footer>
    </section>
    </>
  );
}
