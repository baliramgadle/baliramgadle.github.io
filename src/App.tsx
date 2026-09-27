import {
  ArrowDown,
  ArrowUpRight,
  Award,
  BadgeCheck,
  BrainCircuit,
  Building2,
  ChevronDown,
  Code2,
  Database,
  DatabaseZap,
  ExternalLink,
  Github,
  GraduationCap,
  Mail,
  Menu,
  Network,
  PanelsTopLeft,
  Server,
  Sparkles,
  Trophy,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

import site from "./data/site.json";
import navigation from "./data/navigation.json";
import experienceData from "./data/experience.json";
import projectsData from "./data/projects.json";
import skillsData from "./data/skills.json";
import achievementsData from "./data/achievements.json";
import certificationsData from "./data/certifications.json";
import educationData from "./data/education.json";

const iconMap: Record<string, React.ElementType> = {
  BrainCircuit,
  Database,
  DatabaseZap,
  Server,
  PanelsTopLeft,
  Building2,
  Trophy,
  Award,
  GraduationCap,
  Medal: Award,
  TrendingUp: ArrowUpRight,
  BadgeCheck,
  Code2,
  BookOpen: GraduationCap,
  Sparkles,
  Network,
};

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigation.items
        .map((item) => item.target.replace("#", ""))
        .map((id) => document.getElementById(id))
        .filter(Boolean) as HTMLElement[];

      const current = sections.find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= 140 && rect.bottom >= 140;
      });

      if (current) {
        setActiveSection(current.id);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (target: string) => {
    document.querySelector(target)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setMobileMenuOpen(false);
  };

  return (
    <div className="app-background">
      <div className="content-layer">
        <Navbar
          activeSection={activeSection}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          scrollTo={scrollTo}
        />

        <main>
          <Hero scrollTo={scrollTo} />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Achievements />
          <Certifications />
          <Education />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}

/* =========================================================
   NAVBAR
========================================================= */

function Navbar({
  activeSection,
  mobileMenuOpen,
  setMobileMenuOpen,
  scrollTo,
}: {
  activeSection: string;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (value: boolean) => void;
  scrollTo: (target: string) => void;
}) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <nav className="section-container">
        <div className="glass-strong rounded-2xl px-4 py-3">
          <div className="flex items-center justify-between">
            <button
              onClick={() => scrollTo("#home")}
              className="flex items-center gap-3"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 text-sm font-bold text-white shadow-lg shadow-indigo-500/20">
                BG
              </div>

              <div className="hidden sm:block text-left">
                <p className="font-display text-sm font-semibold text-white">
                  Baliram Gadle
                </p>
                <p className="font-mono text-[10px] text-slate-500">
                  AI ENGINEER
                </p>
              </div>
            </button>

            <div className="hidden lg:flex items-center gap-1">
              {navigation.items.map((item) => {
                const id = item.target.replace("#", "");
                const active = activeSection === id;

                return (
                  <button
                    key={item.target}
                    onClick={() => scrollTo(item.target)}
                    className={`rounded-lg px-3 py-2 text-xs transition ${
                      active
                        ? "bg-indigo-500/10 text-indigo-300"
                        : "text-slate-400 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            <div className="hidden lg:block">
              <a
                href={navigation.actions.resume.url}
                target="_blank"
                rel="noreferrer"
                className="btn-primary text-xs"
              >
                {navigation.actions.resume.label}
                <ArrowUpRight size={14} />
              </a>
            </div>

            <button
              className="lg:hidden rounded-lg p-2 text-slate-300 hover:bg-white/5"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="lg:hidden mt-3 border-t border-white/10 pt-3">
              <div className="flex flex-col gap-1">
                {navigation.items.map((item) => (
                  <button
                    key={item.target}
                    onClick={() => scrollTo(item.target)}
                    className="rounded-lg px-3 py-2.5 text-left text-sm text-slate-300 hover:bg-white/5 hover:text-white"
                  >
                    {item.label}
                  </button>
                ))}

                <a
                  href={navigation.actions.resume.url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary mt-2 text-sm"
                >
                  {navigation.actions.resume.label}
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

/* =========================================================
   HERO
========================================================= */

function Hero({ scrollTo }: { scrollTo: (target: string) => void }) {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-4 pt-28"
    >
      <div className="orb orb-indigo float-slow left-[8%] top-[18%] h-64 w-64" />
      <div className="orb orb-cyan float-medium right-[5%] top-[35%] h-72 w-72" />
      <div className="orb orb-purple float-slow bottom-[8%] left-[45%] h-48 w-48" />

      <div className="section-container relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.25fr_0.75fr]">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-gradient-to-r from-indigo-500 to-cyan-400" />

              <span className="font-mono text-xs tracking-[0.16em] text-indigo-300">
                {site.hero.eyebrow}
              </span>
            </div>

            <h1 className="font-display max-w-4xl text-5xl font-bold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-8xl">
              {site.hero.title}
              <br />
              <span className="gradient-text">{site.hero.highlight}</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              {site.hero.description}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <button
                onClick={() => scrollTo(site.hero.primaryCta.target)}
                className="btn-primary"
              >
                {site.hero.primaryCta.label}
                <ArrowDown size={16} />
              </button>

              <button
                onClick={() => scrollTo(site.hero.secondaryCta.target)}
                className="btn-secondary"
              >
                {site.hero.secondaryCta.label}
                <Mail size={16} />
              </button>
            </div>

            <div className="mt-10 flex flex-wrap gap-2">
              {site.about.focus.map((item) => (
                <span key={item} className="tech-tag">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="ai-card mx-auto aspect-square max-w-[430px] p-6">
              <div className="absolute inset-5 rounded-3xl border border-indigo-400/10" />

              <div className="relative flex h-full flex-col justify-between rounded-2xl bg-slate-950/40 p-6">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-slate-500">
                    AI_ENGINEER.exe
                  </span>

                  <span className="flex items-center gap-2 font-mono text-[10px] text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
                    ONLINE
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-2xl bg-indigo-500/10 p-3 text-indigo-300">
                      <BrainCircuit size={26} />
                    </div>

                    <div>
                      <p className="font-display font-semibold text-white">
                        Intelligent Systems
                      </p>
                      <p className="text-xs text-slate-500">
                        Build • Retrieve • Reason • Act
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {[
                      "RAG",
                      "Agentic AI",
                      "Multi-Agent",
                      "LLM Applications",
                    ].map((item, index) => (
                      <div
                        key={item}
                        className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.025] px-3 py-2"
                      >
                        <span className="font-mono text-xs text-slate-400">
                          {item}
                        </span>

                        <span className="font-mono text-[10px] text-indigo-400">
                          0{index + 1}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="font-mono text-[10px] text-slate-600">
                  Python • LangGraph • FastAPI • PostgreSQL
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {site.stats.map((stat) => (
            <div
              key={stat.label}
              className="glass rounded-xl p-4 text-center sm:p-5"
            >
              <p className="font-display text-2xl font-bold text-white sm:text-3xl">
                {stat.value}
              </p>

              <p className="mt-1 text-[10px] uppercase tracking-wider text-slate-500 sm:text-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   ABOUT
========================================================= */

function About() {
  return (
    <section id="about" className="scroll-mt-28 px-4 py-28">
      <div className="section-container">
        <SectionHeading
          eyebrow={site.about.title}
          title="Engineering beyond the model"
          description={site.about.description}
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {site.about.focus.map((item, index) => (
            <div key={item} className="ai-card p-6">
              <span className="font-mono text-xs text-indigo-400">
                0{index + 1}
              </span>

              <h3 className="mt-5 font-display text-lg font-semibold text-white">
                {item}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   EXPERIENCE
========================================================= */

function Experience() {
  const experience = experienceData.experience[0];

  return (
    <section id="experience" className="scroll-mt-28 px-4 py-28">
      <div className="section-container">
        <SectionHeading
          eyebrow={experienceData.section.eyebrow}
          title={experienceData.section.title}
          description={experienceData.section.description}
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.35fr_1fr]">
          <div>
            <div className="sticky top-28">
              <p className="font-display text-2xl font-bold text-white">
                {experience.company}
              </p>

              <p className="mt-2 text-sm text-indigo-300">
                {experience.startDate} — {experience.endDate}
              </p>

              <p className="mt-1 text-sm text-slate-500">
                {experience.location}
              </p>
            </div>
          </div>

          <div>
            <div className="relative pl-8">
              <div className="timeline-line" />

              <div className="timeline-dot top-1" />

              <div className="ai-card p-6 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="font-display text-xl font-semibold text-white">
                      {experience.role}
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      {experience.employmentType}
                    </p>
                  </div>

                  <span className="rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1 font-mono text-[10px] text-emerald-400">
                    CURRENT
                  </span>
                </div>

                <p className="mt-6 leading-7 text-slate-400">
                  {experience.summary}
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {experience.highlights.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-xl border border-white/5 bg-white/[0.025] p-4"
                    >
                      <p className="font-display text-sm font-semibold text-white">
                        {item.title}
                      </p>

                      <p className="mt-2 text-xs leading-6 text-slate-500">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap gap-2">
                  {experience.technology.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pl-8">
              <p className="font-mono text-xs uppercase tracking-wider text-indigo-300">
                AI Workstreams
              </p>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {experience.workstreams.map((workstream) => (
                  <div
                    key={workstream.name}
                    className="rounded-xl border border-white/5 bg-white/[0.02] p-4"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-sm font-medium text-slate-200">
                        {workstream.name}
                      </p>

                      <span className="font-mono text-[9px] text-indigo-400">
                        {workstream.type}
                      </span>
                    </div>

                    <p className="mt-2 text-xs leading-5 text-slate-500">
                      {workstream.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   PROJECTS
========================================================= */

function Projects() {
  const featured = projectsData.featuredProject;
  const projects = projectsData.projects;

  return (
    <section id="projects" className="scroll-mt-28 px-4 py-28">
      <div className="section-container">
        <SectionHeading
          eyebrow={projectsData.section.eyebrow}
          title={projectsData.section.title}
          description={projectsData.section.description}
        />

        <div className="mt-12">
          <div className="ai-card overflow-hidden border-indigo-400/20">
            <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
              <div className="p-7 sm:p-10">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-indigo-500/10 px-3 py-1 font-mono text-[10px] text-indigo-300">
                    {featured.badge}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-3xl font-bold text-white sm:text-4xl">
                  {featured.title}
                </h3>

                <p className="mt-2 text-lg text-indigo-200">
                  {featured.subtitle}
                </p>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400">
                  {featured.description}
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {featured.impact.map((item) => (
                    <div
                      key={item}
                      className="rounded-lg border border-white/5 bg-white/[0.025] px-3 py-3 text-xs text-slate-300"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap gap-2">
                  {featured.tags.map((tag) => (
                    <span key={tag} className="tech-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-white/5 bg-slate-950/30 p-7 lg:border-l lg:border-t-0 sm:p-10">
                <p className="font-mono text-xs uppercase tracking-wider text-indigo-300">
                  Architecture
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {featured.architecture.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-white/5 bg-white/[0.025] px-2.5 py-1.5 text-[10px] text-slate-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-8">
                  <p className="font-mono text-xs uppercase tracking-wider text-indigo-300">
                    Modules
                  </p>

                  <div className="mt-4 space-y-3">
                    {featured.modules.map((module) => (
                      <div
                        key={module.name}
                        className="rounded-xl border border-white/5 bg-white/[0.02] p-4"
                      >
                        <p className="text-sm font-medium text-white">
                          {module.name}
                        </p>

                        <p className="mt-1 text-xs leading-5 text-slate-500">
                          {module.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: (typeof projectsData.projects)[number] }) {
  return (
    <article className="ai-card flex h-full flex-col p-6">
      <div className="flex items-center justify-between gap-3">
        <span className="font-mono text-[10px] uppercase tracking-wider text-indigo-300">
          {project.category}
        </span>

        <span className="text-[10px] text-slate-600">
          {project.recognition}
        </span>
      </div>

      <h3 className="mt-5 font-display text-xl font-semibold text-white">
        {project.title}
      </h3>

      <p className="mt-1 text-sm text-slate-400">{project.subtitle}</p>

      <p className="mt-4 flex-1 text-sm leading-6 text-slate-500">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="tech-tag">
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-2 text-xs text-indigo-300">
        View project
        <ArrowUpRight size={14} />
      </div>
    </article>
  );
}

/* =========================================================
   SKILLS
========================================================= */

function Skills() {
  return (
    <section id="skills" className="scroll-mt-28 px-4 py-28">
      <div className="section-container">
        <SectionHeading
          eyebrow={skillsData.section.eyebrow}
          title={skillsData.section.title}
          description={skillsData.section.description}
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillsData.categories.map((category) => {
            const Icon = iconMap[category.icon] || BrainCircuit;

            return (
              <div key={category.id} className="ai-card p-6">
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-300">
                    <Icon size={21} />
                  </div>

                  <span className="font-mono text-[9px] uppercase tracking-wider text-slate-600">
                    {category.skills.length} skills
                  </span>
                </div>

                <h3 className="mt-5 font-display text-lg font-semibold text-white">
                  {category.title}
                </h3>

                <p className="mt-2 text-xs leading-5 text-slate-500">
                  {category.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill.name} className="tech-tag">
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 ai-card p-6 sm:p-8">
          <p className="font-mono text-xs uppercase tracking-wider text-indigo-300">
            Engineering capabilities
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {skillsData.engineeringCapabilities.map((item) => (
              <span key={item} className="tech-tag">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   ACHIEVEMENTS
========================================================= */

function Achievements() {
  const featured = achievementsData.achievements.filter(
    (item) => item.featured
  );

  return (
    <section id="achievements" className="scroll-mt-28 px-4 py-28">
      <div className="section-container">
        <SectionHeading
          eyebrow={achievementsData.section.eyebrow}
          title={achievementsData.section.title}
          description={achievementsData.section.description}
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {achievementsData.highlights.map((item) => (
            <div key={item.label} className="glass rounded-xl p-5">
              <p className="font-display text-3xl font-bold text-white">
                {item.value}
              </p>

              <p className="mt-1 text-xs text-slate-500">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {featured.map((achievement) => {
            const Icon = iconMap[achievement.icon] || Award;

            return (
              <div key={achievement.id} className="ai-card p-6 sm:p-7">
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-300">
                    <Icon size={21} />
                  </div>

                  <span className="font-mono text-[10px] text-slate-600">
                    {achievement.date}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-xl font-semibold text-white">
                  {achievement.title}
                </h3>

                <p className="mt-1 text-sm text-indigo-300">
                  {achievement.organization}
                </p>

                <p className="mt-4 text-sm leading-6 text-slate-500">
                  {achievement.description}
                </p>

                {achievement.highlights && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {achievement.highlights.map((item) => (
                      <span key={item} className="tech-tag">
                        {item}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   CERTIFICATIONS
========================================================= */

function Certifications() {
  return (
    <section id="certifications" className="scroll-mt-28 px-4 py-28">
      <div className="section-container">
        <SectionHeading
          eyebrow={certificationsData.section.eyebrow}
          title={certificationsData.section.title}
          description={certificationsData.section.description}
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {certificationsData.certifications.map((certification) => {
            const Icon = iconMap[certification.icon] || BadgeCheck;

            return (
              <div key={certification.id} className="ai-card p-6">
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-300">
                    <Icon size={21} />
                  </div>

                  <span className="font-mono text-[9px] uppercase tracking-wider text-slate-600">
                    {certification.type}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-lg font-semibold text-white">
                  {certification.title}
                </h3>

                <p className="mt-1 text-sm text-cyan-300">
                  {certification.issuer}
                </p>

                <p className="mt-4 text-xs leading-6 text-slate-500">
                  {certification.description}
                </p>

                {certification.credentialUrl && (
                  <a
                    href={certification.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-xs text-indigo-300 hover:text-indigo-200"
                  >
                    View credential
                    <ExternalLink size={13} />
                  </a>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {certificationsData.developmentPrograms.map((program) => (
            <div key={program.title} className="glass rounded-xl p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-display font-semibold text-white">
                    {program.title}
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    {program.organization}
                  </p>
                </div>

                <span className="font-mono text-[10px] text-indigo-300">
                  {program.duration}
                </span>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {program.focus.map((item) => (
                  <span key={item} className="tech-tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   EDUCATION
========================================================= */

function Education() {
  return (
    <section id="education" className="scroll-mt-28 px-4 py-28">
      <div className="section-container">
        <SectionHeading
          eyebrow={educationData.section.eyebrow}
          title={educationData.section.title}
          description={educationData.section.description}
        />

        <div className="mt-10 space-y-4">
          {educationData.education.map((item, index) => (
            <div
              key={item.id}
              className={`ai-card p-6 ${
                index < 2 ? "border-indigo-400/15" : ""
              }`}
            >
              <div className="grid gap-5 md:grid-cols-[auto_1fr_auto] md:items-center">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-300">
                  <GraduationCap size={22} />
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-display text-lg font-semibold text-white">
                      {item.degree}
                    </h3>

                    {item.specialization && (
                      <>
                        <span className="text-slate-700">•</span>

                        <span className="text-sm text-indigo-300">
                          {item.specialization}
                        </span>
                      </>
                    )}
                  </div>

                  <p className="mt-1 text-sm text-slate-400">
                    {item.institution}
                  </p>

                  <p className="mt-1 text-xs text-slate-600">
                    {item.startDate} — {item.endDate}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 md:justify-end">
                  {item.percentage && (
                    <span className="tech-tag">{item.percentage}</span>
                  )}

                  {item.cgpa && (
                    <span className="tech-tag">{item.cgpa} CGPA</span>
                  )}

                  {item.grade && (
                    <span className="tech-tag">{item.grade}</span>
                  )}

                  {item.status === "In Progress" && (
                    <span className="rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1 font-mono text-[9px] text-emerald-400">
                      IN PROGRESS
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   CONTACT
========================================================= */

function Contact() {
  return (
    <section id="contact" className="scroll-mt-28 px-4 py-28">
      <div className="section-container">
        <div className="relative overflow-hidden rounded-3xl border border-indigo-400/15 bg-gradient-to-br from-indigo-500/[0.08] via-slate-900/70 to-cyan-500/[0.06] p-8 sm:p-12 lg:p-16">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />

          <div className="relative max-w-3xl">
            <span className="section-label">CONTACT</span>

            <h2 className="mt-5 font-display text-4xl font-bold text-white sm:text-5xl">
              {site.contact.title}
              <br />
              <span className="gradient-text">
                {site.contact.subtitle}
              </span>
            </h2>

            <p className="mt-5 max-w-2xl leading-7 text-slate-400">
              {site.contact.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`mailto:${site.email}`} className="btn-primary">
                <Mail size={16} />
                {site.contact.emailLabel}
              </a>

              <a
                href={site.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                Connect on LinkedIn
                <ArrowUpRight size={16} />
              </a>

              <a
                href={site.socials.github}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                <Github size={16} />
                {site.contact.githubLabel}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   FOOTER
========================================================= */

function Footer() {
  return (
    <footer className="border-t border-white/5 px-4 py-8">
      <div className="section-container flex flex-col gap-3 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <div>
          <p className="font-display text-sm font-medium text-slate-300">
            {site.footer.text}
          </p>

          <p className="mt-1 text-xs text-slate-600">
            {site.footer.tagline}
          </p>
        </div>

        <div className="flex justify-center gap-4 sm:justify-end">
          <a
            href={site.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-slate-500 transition hover:text-indigo-300"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>

          <a
            href={site.socials.github}
            target="_blank"
            rel="noreferrer"
            className="text-slate-500 transition hover:text-indigo-300"
            aria-label="GitHub"
          >
            GitHub
          </a>

          <a
            href={site.socials.leetcode}
            target="_blank"
            rel="noreferrer"
            className="text-slate-500 transition hover:text-indigo-300"
            aria-label="LeetCode"
          >
            LeetCode
          </a>
        </div>
      </div>
    </footer>
  );
}

/* =========================================================
   REUSABLE SECTION HEADING
========================================================= */

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl">
      <span className="section-label">{eyebrow}</span>

      <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>

      <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">
        {description}
      </p>
    </div>
  );
}

export default App;