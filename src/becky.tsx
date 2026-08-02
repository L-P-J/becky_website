import githubIcon from "./assets/github.png";
import linkedinIcon from "./assets/linkedin.png";
import travelItineraryPlanner from "./assets/TravelItineraryPlanner.png";
import japanItinerary from "./assets/japanItinerary.png";
import ownReact from "./assets/ownReact.png";
import pictureWeb from "./assets/pictureWeb.png";
import mediaTek from "./assets/mediaTekLogo.png";
import type { ReactNode } from "react";

function SectionHeading({
  number,
  children,
}: {
  number: string;
  children: ReactNode;
}) {
  return (
    <div className="mb-8 flex items-center gap-4">
      <span className="font-mono text-xs font-semibold tracking-[0.2em] text-blue-700">
        {number}
      </span>
      <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">
        {children}
      </h2>
      <span className="h-px flex-1 bg-zinc-200" aria-hidden="true" />
    </div>
  );
}

function App() {
  const contactLinks = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/becky-liu-831234201",
      icon: linkedinIcon,
    },
    { label: "GitHub", href: "https://github.com/L-P-J", icon: githubIcon },
  ];

  const skills = [
    {
      category: "Programming",
      items: ["JavaScript", "TypeScript", "HTML & CSS"],
    },
    { category: "Frameworks", items: ["React", "Next.js", "Node.js"] },
    {
      category: "Tools & Data",
      items: ["Git", "Cloudflare", "PostgreSQL", "SQL"],
    },
  ];

  const experiences = [
    {
      title: "Software Engineer",
      picture: mediaTek,
      company: "MediaTek",
      description: [
        "Participated in the development of a Generative AI Chat Platform, building the front-end interface with Next.js and React. Optimized page loading and interactivity, improving response speed by 15%.",
        "Developed the Login component and implemented API integration with token-based authentication, increasing login success rate to 99%.",
        "Implemented content-sharing features and permission validation mechanisms, enhancing operational security and user experience with a 98% success rate in permission checks.",
        "Responsible for bug fixing and QA testing, resolving 5+ frontend issues per week and reducing user error reports by 40%.",
        "Built an Admin Management System using Refine, Next.js, and PostgreSQL, including frontend UI, API integration, database schema, backend endpoints, JWT authentication, and model sorting features.",
      ],
    },
  ];

  const education = [
    {
      degree: "Master of Information Management",
      school: "National Changhua University of Education",
      period: "2022 — 2024",
    },
    {
      degree: "Bachelor’s Degree in Digital Marketing",
      school: "National Taipei University",
      period: "2018 — 2022",
    },
  ];

  const projects = [
    {
      title: "Japan Travel Itinerary Website",
      description:
        "Created a trip planner for Japan with daily routes, transport, and lodging information, optimized for mobile viewing.",
      image: japanItinerary,
      repo: "https://github.com/L-P-J/japan",
      skills: ["React", "JavaScript", "Tailwind", "Cloudflare"],
    },
    {
      title: "Travel Itinerary Planner",
      description:
        "Built an interactive planner with timeline, category filters, and cost tracking, featuring responsive design and reusable components.",
      image: travelItineraryPlanner,
      repo: "https://github.com/L-P-J",
      skills: ["React", "TypeScript", "HTML & CSS"],
    },
    {
      title: "Custom React Practice Project",
      description:
        "Developed a self-built React project to explore routing, state management, and component reuse.",
      image: ownReact,
      repo: "https://github.com/L-P-J/own-react",
      skills: ["React"],
    },
    {
      title: "Restaurant Recommendation System",
      description:
        "Built a content-based restaurant recommender with front-end UI and database integration for master’s research.",
      image:
        "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80",
      repo: "https://github.com/L-P-J",
      skills: ["React", "Node.js", "PostgreSQL"],
    },
    {
      title: "Picture Search Website",
      description:
        "Developed an image search app by integrating the Pexels API, with pagination, responsive layout, and loading optimization.",
      image: pictureWeb,
      repo: "https://github.com/L-P-J/pictureweb",
      skills: ["React", "JavaScript", "Git"],
    },
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] text-zinc-900">
      <header className="border-b border-zinc-200 bg-[#fafafa]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
          <a
            href="#top"
            className="font-display text-lg font-semibold tracking-tight text-zinc-950"
          >
            BL.
          </a>
          <nav
            aria-label="Primary navigation"
            className="flex items-center gap-5 text-xs font-semibold uppercase tracking-[0.12em] text-zinc-600 sm:gap-7"
          >
            <a
              className="transition-colors hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700"
              href="#experience"
            >
              Experience
            </a>
            <a
              className="transition-colors hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700"
              href="#projects"
            >
              Projects
            </a>
            <a
              className="hidden transition-colors hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700 sm:inline"
              href="#education"
            >
              Education
            </a>
          </nav>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-6xl px-6 pb-20 lg:px-8">
        <section className="grid gap-10 border-b border-zinc-200 py-16 md:grid-cols-[minmax(0,1fr)_220px] md:items-end md:py-24">
          <div>
            <p className="mb-5 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
              Software Engineer · Taipei, Taiwan
            </p>
            <h1 className="font-display max-w-4xl text-5xl font-semibold leading-[0.94] tracking-[-0.055em] text-zinc-950 sm:text-6xl lg:text-8xl">
              Liu Pei-Chieh <span className="text-zinc-400">(Becky)</span>
            </h1>
          </div>
          <p className="max-w-xs text-base leading-7 text-zinc-600 md:mb-1">
            Frontend engineer focused on thoughtful product experiences,
            efficient workflows, and practical applications of AI.
          </p>
        </section>

        <section className="grid gap-10 border-b border-zinc-200 py-12 md:grid-cols-[minmax(0,1fr)_220px] md:py-16">
          <p className="max-w-2xl text-lg leading-8 text-zinc-700">
            I enjoy exploring new technologies and making complex work feel
            clear and useful. I bring a structured approach to delivery,
            actively seek better tools and processes, and care about the details
            that make a product dependable.
          </p>
          <div className="flex flex-wrap gap-3 md:flex-col md:items-start">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                className="inline-flex min-h-11 items-center gap-2 border-b border-zinc-300 py-1 text-sm font-semibold text-zinc-900 transition-colors hover:border-blue-700 hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700"
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt=""
                  aria-hidden="true"
                  className="h-4 w-4 object-contain grayscale"
                  src={link.icon}
                />
                {link.label}
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </section>

        <section id="experience" className="border-b border-zinc-200 py-16">
          <SectionHeading number="01">Experience</SectionHeading>
          {experiences.map((experience) => (
            <article
              key={experience.title}
              className="grid gap-7 md:grid-cols-[220px_minmax(0,1fr)]"
            >
              <div className="flex items-center gap-3 md:items-start">
                <img
                  src={experience.picture}
                  alt={`${experience.company} logo`}
                  className="h-10 w-10 rounded border border-zinc-200 object-contain p-1"
                />
                <div>
                  <p className="font-semibold text-zinc-950">
                    {experience.company}
                  </p>
                  <p className="text-sm text-zinc-500">Software Engineering</p>
                </div>
              </div>
              <div>
                <h3 className="font-display text-3xl font-semibold tracking-tight text-zinc-950">
                  {experience.title}
                </h3>
                <ul className="mt-6 max-w-3xl space-y-3 text-[15px] leading-7 text-zinc-700">
                  {experience.description.map((item) => (
                    <li key={item} className="grid grid-cols-[10px_1fr] gap-3">
                      <span
                        className="mt-3 h-1.5 w-1.5 rounded-full bg-blue-700"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </section>

        <section id="projects" className="border-b border-zinc-200 py-16">
          <SectionHeading number="02">Selected Projects</SectionHeading>
          <div className="grid gap-x-7 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="group flex flex-col border-t border-zinc-300 pt-4"
              >
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block overflow-hidden bg-zinc-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700"
                >
                  <img
                    src={project.image}
                    alt={`Preview of ${project.title}`}
                    className="aspect-[16/10] w-full object-cover transition duration-300 motion-reduce:transition-none group-hover:scale-[1.02]"
                  />
                </a>
                <div className="flex flex-1 flex-col pt-5">
                  <p className="font-mono text-xs text-blue-700">
                    0{index + 1}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold leading-snug text-zinc-950">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-600">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-x-3 gap-y-2 text-xs font-medium uppercase tracking-wide text-zinc-500">
                    {project.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex w-fit items-center gap-1 text-sm font-semibold text-zinc-950 transition-colors hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700"
                  >
                    View project <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="grid gap-14 py-16 md:grid-cols-2">
          <div>
            <SectionHeading number="03">Education</SectionHeading>
            <div className="space-y-7">
              {education.map((item) => (
                <article
                  key={item.degree}
                  className="border-l-2 border-zinc-200 pl-5"
                >
                  <p className="font-mono text-xs font-semibold tracking-wide text-blue-700">
                    {item.period}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-zinc-950">
                    {item.degree}
                  </h3>
                  <p className="mt-1 text-sm text-zinc-600">{item.school}</p>
                </article>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading number="04">Skills</SectionHeading>
            <div className="space-y-5">
              {skills.map((group) => (
                <div
                  key={group.category}
                  className="border-b border-zinc-200 pb-5"
                >
                  <h3 className="text-sm font-semibold text-zinc-950">
                    {group.category}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">
                    {group.items.join(" · ")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-zinc-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 text-xs text-zinc-500 lg:px-8">
          <span>© {new Date().getFullYear()} Liu Pei-Chieh</span>
          <a
            href="#top"
            className="font-semibold uppercase tracking-[0.12em] text-zinc-700 transition-colors hover:text-blue-700"
          >
            Back to top ↑
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
