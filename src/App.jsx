import { useEffect, useMemo, useState } from "react";
import { ArrowRight, Send } from "lucide-react";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card";

const ROUTES = {
  home: "/",
  career: "/career",
  projects: "/projects",
};

const KNOWN_PATHS = new Set(Object.values(ROUTES));

const CAREER_COLUMNS = [
  {
    title: "Experience",
    points: [
      "Owned pipeline, onboarding, and expansion execution in SaaS and technical sales contexts.",
      "Delivered cross-functional work with product, technical, and customer-facing teams.",
      "Built repeatable operating systems from ambiguous goals and shifting constraints.",
    ],
  },
  {
    title: "Target Roles",
    points: [
      "1) Business Development Manager",
      "2) Customer Success Manager",
      "3) Account Manager",
      "4) Program Manager",
    ],
  },
  {
    title: "Why I Fit",
    points: [
      "Combines commercial judgment with hands-on agentic workflow implementation.",
      "Balances speed with reliability through explicit checkpoints and ownership.",
      "Communicates effectively in high-trust customer and cross-functional environments.",
    ],
  },
];

const APP_PROJECTS = [
  {
    title: "Workout Pyramid",
    description:
      "Production app proving end-to-end delivery: auth/sync flows, installable mobile UX, admin metrics, CI checks, and deployment reliability.",
    links: [
      { label: "GitHub", href: "https://github.com/tqny/workout-pyramid" },
      { label: "Live URL available in application packet" },
    ],
  },
];

const HYBRID_WORKFLOWS = [
  {
    title: "Lead Qualification + CRM Update",
    context: "BDM / AM",
    detail:
      "Agent-assisted enrichment, qualification, and routing with human checkpoints before outbound or account action.",
    playbook: "Signal intake -> enrichment -> score -> human approval -> CRM update",
  },
  {
    title: "Onboarding Sequence + Escalation",
    context: "CSM",
    detail:
      "Onboarding preparation, health checks, and guided escalation support with human ownership of customer-critical decisions.",
    playbook: "Kickoff prep -> progress tracking -> risk detection -> escalation handoff",
  },
  {
    title: "Program Risk Dashboard",
    context: "Program Manager",
    detail:
      "Agent-generated status synthesis and risk flags with transparent traceability for cross-functional reviews and decisions.",
    playbook: "Data intake -> risk tagging -> weekly summary -> corrective action register",
  },
];

const METRICS = [
  {
    label: "Workflow tracks",
    value: "3 active",
    note: "Lead qualification, onboarding escalation, and program risk visibility.",
  },
  {
    label: "Documentation discipline",
    value: "Evidence-first",
    note: "ADRs, changelog, and demo logs are maintained for every material change.",
  },
  {
    label: "Outcome target",
    value: "Interview conversion lift",
    note: "Turn recruiter reviews into concrete next-step conversations.",
  },
];

const POE_ACTIONS = [
  {
    id: "career",
    label: "Review your background",
    response: "Great. I will take you to the Career page for role fit, experience, and target role clarity.",
    path: ROUTES.career,
  },
  {
    id: "projects",
    label: "Explore your projects",
    response:
      "Perfect. I will take you to Agentic Projects so you can review app builds, workflows, metrics, and playbooks.",
    path: ROUTES.projects,
  },
  {
    id: "about",
    label: "What is this site?",
    response:
      "This site is Tony Mikityuk's execution profile. It shows current career focus plus live proof of AI-enabled GTM and program workflows.",
  },
  {
    id: "contact",
    label: "How can I contact you?",
    response:
      "Email: mikityuk.tony@gmail.com. LinkedIn: linkedin.com/in/tonymikityuk. If useful, mention role scope and timing and I will respond quickly.",
  },
];

function normalizePath(pathname) {
  if (!pathname) return ROUTES.home;
  const trimmed = pathname.length > 1 && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
  return KNOWN_PATHS.has(trimmed) ? trimmed : ROUTES.home;
}

function inferPoeReply(input) {
  const text = input.toLowerCase();

  if (/(career|resume|background|experience|fit|hire|hiring|role)/.test(text)) {
    return {
      reply: "The Career page is best for that. It summarizes experience, target roles, and why I am a strong fit.",
      path: ROUTES.career,
    };
  }

  if (/(project|workflow|playbook|build|code|metrics|portfolio)/.test(text)) {
    return {
      reply: "The Agentic Projects page is the right view. It includes app projects plus hybrid BDM/CSM/AM/PM workflows.",
      path: ROUTES.projects,
    };
  }

  if (/(contact|email|linkedin|reach|talk)/.test(text)) {
    return {
      reply:
        "You can reach Tony at mikityuk.tony@gmail.com or linkedin.com/in/tonymikityuk. Include role scope and timeline and he will respond quickly.",
    };
  }

  if (/(what|about|site|why)/.test(text)) {
    return {
      reply:
        "This is a focused personal site: clear career direction plus proof of current AI-enabled execution through agentic workflows and production projects.",
    };
  }

  if (/(hello|hi|hey)/.test(text)) {
    return { reply: "Hi. What brings you here today: career review, project proof, or a general question?" };
  }

  return {
    reply:
      "I can route you to Career or Agentic Projects, or answer questions about scope, fit, and contact details.",
  };
}

function AppHeader({ currentPath, onNavigate }) {
  const navItems = [
    { href: ROUTES.home, label: "Home" },
    { href: ROUTES.career, label: "Career" },
    { href: ROUTES.projects, label: "Agentic Projects" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-border/50 bg-background/82 backdrop-blur-md">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-4 sm:h-16 sm:px-8">
        <button
          type="button"
          onClick={() => onNavigate(ROUTES.home)}
          className="font-mono text-[13px] font-semibold tracking-tight text-foreground"
        >
          tonymikityuk
        </button>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navItems.map((item) => {
            const active = currentPath === item.href;
            return (
              <Button
                key={item.href}
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => onNavigate(item.href)}
                className={active ? "bg-accent/70 text-accent-foreground" : "text-muted-foreground"}
              >
                {item.label}
              </Button>
            );
          })}
        </nav>

        <Button asChild size="sm" className="h-8 rounded-md px-3">
          <a href="mailto:mikityuk.tony@gmail.com">Contact</a>
        </Button>
      </div>

      <nav className="border-t border-border/50 px-2 py-2 md:hidden" aria-label="Mobile primary">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-3 gap-1">
          {navItems.map((item) => {
            const active = currentPath === item.href;
            return (
              <Button
                key={item.href}
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => onNavigate(item.href)}
                className={
                  active
                    ? "h-8 rounded-md bg-accent/70 text-accent-foreground"
                    : "h-8 rounded-md text-muted-foreground"
                }
              >
                {item.label === "Agentic Projects" ? "Projects" : item.label}
              </Button>
            );
          })}
        </div>
      </nav>
    </header>
  );
}

function PoeWidget({ onNavigate }) {
  const [messages, setMessages] = useState([
    {
      role: "poe",
      text: "Hi, what brings you here?",
    },
  ]);
  const [input, setInput] = useState("");

  function pushMessage(role, text) {
    setMessages((prev) => [...prev, { role, text }]);
  }

  function handleAction(action) {
    pushMessage("user", action.label);
    pushMessage("poe", action.response);
    if (action.path) onNavigate(action.path);
  }

  function handleSend() {
    const text = input.trim();
    if (!text) return;

    setInput("");
    pushMessage("user", text);

    const result = inferPoeReply(text);
    pushMessage("poe", result.reply);
    if (result.path) onNavigate(result.path);
  }

  return (
    <Card className="mx-auto w-full max-w-lg border-border/70 bg-card/65 py-3 shadow-panel backdrop-blur-sm">
      <CardHeader className="gap-1 px-4">
        <CardTitle className="text-sm font-semibold uppercase tracking-[0.16em] text-white">Poe</CardTitle>
        <CardDescription>Hi, what brings you here?</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3 px-4">
        <div className="grid gap-2 sm:grid-cols-2">
          {POE_ACTIONS.map((action) => (
            <Button
              key={action.id}
              type="button"
              variant="outline"
              size="sm"
              onClick={() => handleAction(action)}
              className="h-auto min-h-8 justify-start whitespace-normal border-border/80 py-2 text-left text-xs"
            >
              {action.label}
            </Button>
          ))}
        </div>

        <div
          className="max-h-32 space-y-2 overflow-y-auto rounded-md border border-border/90 bg-background/80 p-3"
          aria-live="polite"
          aria-label="Poe conversation"
        >
          {messages.map((message, index) => (
            <div
              key={`${message.role}-${index}`}
              className={`max-w-[95%] rounded-md border px-3 py-2 text-sm ${
                message.role === "user"
                  ? "ml-auto border-border bg-secondary text-secondary-foreground"
                  : "border-border/70 bg-background text-muted-foreground"
              }`}
            >
              {message.text}
            </div>
          ))}
        </div>

        <div className="grid gap-2 sm:grid-cols-[1fr_auto]">
          <input
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={(event) => {
            if (event.key === "Enter") handleSend();
            }}
            placeholder="Ask Poe a question..."
            aria-label="Ask Poe"
            className="h-9 rounded-md border border-input bg-background px-3 text-sm text-foreground outline-none transition focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
          />
          <Button type="button" onClick={handleSend} className="h-9 rounded-md">
            <Send className="h-4 w-4" />
            Send
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

function LandingPage({ onNavigate }) {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-5 pb-16 pt-12 sm:px-8 sm:pb-20 sm:pt-24">
      <section className="mx-auto flex min-h-[48vh] w-full max-w-4xl flex-col items-center justify-center text-center sm:min-h-[56vh]">
        <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">Tony Mikityuk</p>
        <h1 className="text-balance text-3xl font-semibold leading-[1.06] tracking-tight text-white sm:text-6xl lg:text-7xl">
          AI-Enabled GTM and Program Execution
        </h1>
        <p className="mt-6 max-w-xl text-balance text-sm text-muted-foreground sm:max-w-2xl sm:text-lg">
          Focused career profile with proof of current operator capability: product builds, hybrid agentic
          workflows, and clear role alignment.
        </p>
        <div className="landing-divider mt-9" />
        <div className="mt-8 grid w-full max-w-sm gap-2 sm:flex sm:max-w-none sm:flex-wrap sm:items-center sm:justify-center sm:gap-3">
          <Button
            type="button"
            size="sm"
            className="h-9 w-full rounded-md px-4 sm:w-auto"
            onClick={() => onNavigate(ROUTES.career)}
          >
            View Career
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="h-9 w-full rounded-md px-4 sm:w-auto"
            onClick={() => onNavigate(ROUTES.projects)}
          >
            View Agentic Projects
          </Button>
        </div>
      </section>

      <section className="mt-1 sm:mt-4">
        <PoeWidget onNavigate={onNavigate} />
      </section>
    </main>
  );
}

function CareerPage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-6 px-5 pb-16 pt-8 sm:px-8 sm:pt-14">
      <section className="max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">Career</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-5xl">Career Fit Snapshot</h1>
        <p className="mt-3 text-sm text-muted-foreground sm:text-lg">
          Targeting BDM, CSM, AM, and Program Manager roles where relationship strength and AI-enabled
          operational execution are both essential.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {CAREER_COLUMNS.map((column) => (
          <Card key={column.title} className="gap-3 border-border/70 bg-card/70 py-4">
            <CardHeader className="px-4">
              <CardTitle>{column.title}</CardTitle>
            </CardHeader>
            <CardContent className="px-4">
              <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                {column.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="rounded-xl border border-border/70 bg-card/70 p-6">
        <h2 className="text-xl font-semibold text-white">Contact</h2>
        <p className="mt-2 text-sm text-muted-foreground">Email: mikityuk.tony@gmail.com</p>
        <p className="text-sm text-muted-foreground">LinkedIn: linkedin.com/in/tonymikityuk</p>
      </section>
    </main>
  );
}

function ProjectsPage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-6 px-5 pb-16 pt-8 sm:px-8 sm:pt-14">
      <section className="max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">Projects</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-5xl">Agentic Projects</h1>
        <p className="mt-3 text-sm text-muted-foreground sm:text-lg">
          Working record of app shipping and hybrid workflows built for BDM, CSM, AM, and PM contexts.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-white">App Coding Projects</h2>
        <div className="grid gap-4 md:grid-cols-1">
          {APP_PROJECTS.map((project) => (
            <Card key={project.title} className="gap-3 border-border/70 bg-card/70 py-4">
              <CardHeader className="px-4">
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="px-4">
                <div className="flex flex-wrap gap-3 text-sm">
                  {project.links.map((link) =>
                    link.href ? (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="underline underline-offset-4 hover:text-muted-foreground"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <span key={link.label} className="text-muted-foreground">
                        {link.label}
                      </span>
                    )
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-white">Hybrid Agentic Workflows</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {HYBRID_WORKFLOWS.map((workflow) => (
            <Card key={workflow.title} className="gap-3 border-border/70 bg-card/70 py-4">
              <CardHeader className="px-4">
                <p className="font-mono text-[11px] uppercase tracking-wide text-muted-foreground">
                  {workflow.context}
                </p>
                <CardTitle className="leading-tight">{workflow.title}</CardTitle>
                <CardDescription>{workflow.detail}</CardDescription>
              </CardHeader>
              <CardContent className="px-4">
                <p className="text-sm text-muted-foreground">Playbook: {workflow.playbook}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-white">Live Metrics (V1)</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {METRICS.map((metric) => (
            <Card key={metric.label} className="gap-2 border-border/70 bg-card/70 py-4">
              <CardHeader className="px-4">
                <p className="font-mono text-[11px] uppercase tracking-wide text-muted-foreground">{metric.label}</p>
                <CardTitle>{metric.value}</CardTitle>
              </CardHeader>
              <CardContent className="px-4">
                <CardDescription>{metric.note}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="rounded-xl border border-border/70 bg-card/70 p-6">
        <h2 className="text-xl font-semibold text-white">V1 Skeleton Scope</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          This release establishes structure, narrative clarity, and proof framing. Next iterations will add
          deeper project artifacts, richer metrics, and expanded recruiter-facing evidence.
        </p>
      </section>
    </main>
  );
}

function renderPage(path, onNavigate) {
  if (path === ROUTES.career) return <CareerPage />;
  if (path === ROUTES.projects) return <ProjectsPage />;
  return <LandingPage onNavigate={onNavigate} />;
}

export default function App() {
  const [path, setPath] = useState(() => normalizePath(window.location.pathname));

  useEffect(() => {
    const onPopState = () => setPath(normalizePath(window.location.pathname));
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const pageTitle = useMemo(() => {
    if (path === ROUTES.career) return "Career";
    if (path === ROUTES.projects) return "Agentic Projects";
    return "Home";
  }, [path]);

  useEffect(() => {
    document.title = `tonymikityuk | ${pageTitle}`;
  }, [pageTitle]);

  function navigate(to) {
    const next = normalizePath(to);
    if (next === path) return;
    window.history.pushState({}, "", next);
    setPath(next);
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  return (
    <div className="relative z-10 flex min-h-svh flex-col bg-background text-foreground">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <AppHeader currentPath={path} onNavigate={navigate} />

      <div id="main-content" className="flex flex-1 flex-col">
        {renderPage(path, navigate)}
      </div>

      <footer className="border-t border-border/60 py-5">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-center px-5 text-center font-mono text-xs text-muted-foreground sm:px-8">
          tonymikityuk | Seattle area | v1 skeleton | Updated 2026-02-28
        </div>
      </footer>
    </div>
  );
}
