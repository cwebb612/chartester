import Typewriter from "@/components/Typewriter";

const TYPEWRITER_PHRASES = [
  "full-stack web applications.",
  "elegant user interfaces.",
  "scalable APIs.",
  "things people love to use.",
];

const PROJECTS = [
  {
    title: "Project One",
    year: "2025",
    description:
      "A brief description of this project and the problem it solves. What did you build, and why does it matter?",
    tags: ["Next.js", "TypeScript", "Postgres"],
    href: "#",
  },
  {
    title: "Project Two",
    year: "2024",
    description:
      "Another project description. Focus on impact — what did users gain, what scale did it reach?",
    tags: ["React", "Node.js", "Redis"],
    href: "#",
  },
  {
    title: "Project Three",
    year: "2024",
    description:
      "Keep descriptions concise. Recruiters and collaborators skim — lead with what makes this interesting.",
    tags: ["Python", "FastAPI", "Docker"],
    href: "#",
  },
  {
    title: "Project Four",
    year: "2023",
    description:
      "An open-source tool, side project, or experiment. Showing range is good.",
    tags: ["TypeScript", "CLI", "Bash"],
    href: "#",
  },
];

const STACK = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Postgres",
  "Tailwind CSS",
  "AWS",
  "Docker",
];

function TerminalLine({ prompt, output }: { prompt: string; output: string }) {
  return (
    <div className="space-y-0.5">
      <div className="flex gap-2 text-muted">
        <span className="text-accent">~</span>
        <span>$</span>
        <span className="text-neutral-200">{prompt}</span>
      </div>
      <div className="pl-6 text-neutral-500">{output}</div>
    </div>
  );
}

function TerminalWindow() {
  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden shadow-2xl font-mono text-sm">
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border">
        <span className="w-3 h-3 rounded-full bg-red-500/60" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
        <span className="w-3 h-3 rounded-full bg-green-500/60" />
        <span className="ml-2 text-xs text-muted">~/portfolio</span>
      </div>
      <div className="p-5 space-y-3 text-neutral-300">
        <TerminalLine prompt="whoami" output="charlie_webb" />
        <TerminalLine
          prompt="cat roles.txt"
          output="Software Engineer · Builder · Tinkerer"
        />
        <TerminalLine
          prompt="ls projects/"
          output="web-apps/  apis/  tools/  experiments/"
        />
        <TerminalLine prompt="echo $LOCATION" output="San Francisco, CA" />
        <div className="flex gap-2 items-center text-muted">
          <span className="text-accent">~</span>
          <span>$</span>
          <span className="inline-block w-2 h-4 bg-accent/80 animate-blink" />
        </div>
      </div>
    </div>
  );
}

function ProjectCard({
  title,
  year,
  description,
  tags,
  href,
}: (typeof PROJECTS)[0]) {
  return (
    <a
      href={href}
      className="group block p-6 rounded-xl border border-border bg-card hover:border-foreground/15 hover:bg-foreground/[0.02] transition-all duration-200"
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="font-semibold group-hover:text-accent transition-colors duration-200">
            {title}
          </h3>
          <p className="text-xs text-muted mt-0.5 font-mono">{year}</p>
        </div>
        <span className="text-muted group-hover:text-foreground transition-colors duration-200 text-lg leading-none mt-0.5">
          ↗
        </span>
      </div>
      <p className="text-muted text-sm leading-relaxed mb-4">{description}</p>
      <div className="flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-0.5 rounded-full border border-border text-muted font-mono"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <a href="/" className="font-mono text-sm text-accent tracking-tight">
          charlie.webb
        </a>
        <div className="flex items-center gap-6 text-sm text-muted">
          <a
            href="#about"
            className="hover:text-foreground transition-colors duration-200"
          >
            About
          </a>
          <a
            href="#work"
            className="hover:text-foreground transition-colors duration-200"
          >
            Work
          </a>
          <a
            href="#contact"
            className="hover:text-foreground transition-colors duration-200"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="dot-grid absolute inset-0 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-accent border border-accent/25 bg-accent/5 px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-slow" />
              Available for work
            </div>

            <h1 className="text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1]">
              Hi, I'm Charlie.
            </h1>

            <p className="text-2xl text-muted font-light">
              I build <Typewriter phrases={TYPEWRITER_PHRASES} />
            </p>

            <p className="text-muted max-w-md leading-relaxed">
              Software engineer focused on crafting clean, performant web
              experiences. I care about the details — good code is just the
              start.
            </p>

            <div className="flex gap-3 pt-2">
              <a
                href="#work"
                className="px-5 py-2.5 bg-foreground text-background text-sm font-medium rounded-lg hover:bg-foreground/85 transition-colors duration-200"
              >
                See my work
              </a>
              <a
                href="#contact"
                className="px-5 py-2.5 border border-border text-sm font-medium rounded-lg hover:border-foreground/25 hover:bg-foreground/5 transition-all duration-200"
              >
                Get in touch
              </a>
            </div>
          </div>

          {/* Right: Terminal */}
          <div className="hidden lg:block animate-fade-in-up">
            <TerminalWindow />
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="py-28 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="font-mono text-xs text-accent tracking-widest uppercase mb-2">
              Work
            </p>
            <h2 className="text-3xl font-semibold">Selected projects</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-28 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div>
              <p className="font-mono text-xs text-accent tracking-widest uppercase mb-2">
                About
              </p>
              <h2 className="text-3xl font-semibold mb-6">A bit about me</h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  I'm a software engineer who enjoys building things from the
                  ground up. From architecting backend systems to polishing
                  frontend interactions, I care about the whole product.
                </p>
                <p>
                  I believe the best software comes from engineers who are
                  genuinely curious — not just about code, but about the people
                  using it. I like working on small, focused teams where
                  everyone owns what they build.
                </p>
                <p>
                  When I'm not at a keyboard you'll find me [hobby], [hobby], or
                  somewhere with bad cell service.
                </p>
              </div>
            </div>

            <div className="space-y-10">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-muted mb-4">
                  Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {STACK.map((tech) => (
                    <span
                      key={tech}
                      className="text-sm px-3 py-1 rounded-full border border-border text-muted hover:border-foreground/25 hover:text-foreground transition-all duration-200 cursor-default font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-muted mb-4">
                  Currently
                </h3>
                <p className="text-muted text-sm">
                  Building something cool. Open to new opportunities.
                </p>
              </div>

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-muted mb-4">
                  Location
                </h3>
                <p className="text-muted text-sm">San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-28 border-t border-border">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-4">
            Contact
          </p>
          <h2 className="text-4xl font-semibold mb-4">
            Let's build something.
          </h2>
          <p className="text-muted max-w-sm mx-auto mb-10 leading-relaxed">
            Have a project in mind or just want to say hi? My inbox is always
            open.
          </p>
          <a
            href="mailto:hello@charliewebb.dev"
            className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-medium rounded-lg hover:bg-foreground/85 transition-colors duration-200 font-mono text-sm"
          >
            hello@charliewebb.dev
          </a>

          <div className="flex justify-center gap-8 mt-12">
            {[
              { label: "GitHub", href: "#" },
              { label: "LinkedIn", href: "#" },
              { label: "Twitter / X", href: "#" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-sm text-muted hover:text-foreground transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between text-xs text-muted">
          <span className="font-mono">charlie.webb</span>
          <span>© 2025 — Built with Next.js</span>
        </div>
      </footer>
    </div>
  );
}
