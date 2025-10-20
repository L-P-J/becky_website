import githubIcon from './assets/github.png'
import linkedinIcon from './assets/linkedin.png'
import beckyPicture from './assets/becky-2.jpg'
import travelItineraryPlanner from './assets/TravelItineraryPlanner.png'
import japanItinerary from './assets/japanItinerary.png'
import ownReact from './assets/ownReact.png'
import pictureWeb from './assets/pictureWeb.png'

type BeckyPictureProps = {
  className?: string
}

const BeckyPicture = ({ className = 'h-full w-full rounded-full object-cover shadow-[0_18px_36px_rgba(0,0,0,0.12)]' }: BeckyPictureProps) => (
  <img src={beckyPicture} alt="becky" className={className} />
)

function App() {
  const contactLinks = [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/becky-liu-831234201',
      icon: linkedinIcon,
    },
    {
      label: 'GitHub',
      href: 'https://github.com/L-P-J',
      icon: githubIcon,
    },
  ]

  const skills = [
    {
      category: 'Programming Languages',
      items: ['JavaScript', 'TypeScript', 'HTML & CSS'],
    },
    {
      category: 'Deployment & Database',
      items: ['Git', 'Cloudflare', 'PostgreSQL', 'SQL'],
    },
    {
      category: 'Frameworks',
      items: ['React', 'Next.js', 'Node.js'],
    },
  ]

  const experiences = [
    {
      title: 'Software Engineer',
      picture: '',
      company: 'Mediatek',
      description: [
        'Participated in the development of a Generative AI Chat Platform, building the front-end interface with Next.js and React. Optimized page loading and interactivity, improving response speed by 15%.',
        'Developed the Login component and implemented API integration with token-based authentication, increasing login success rate to 99%.',
        'Implemented content-sharing features and permission validation mechanisms, enhancing operational security and user experience with a 98% success rate in permission checks, ensuring smooth feature deployment.',
        'Responsible for bug fixing and QA testing, resolving 5+ frontend issues per week, improving platform stability and reducing user error reports by 40%.',
        'Built an Admin Management System using Refine, Next.js, and PostgreSQL. Designed and developed frontend UI, API integration, database schema, and backend endpoints, implementing JWT authentication and model sorting features, enabling administrators to visually manage model configurations and improving maintenance efficiency by 50% while reducing development effort by 30%.',
      ],
    },
  ]
const education = [
    {
      degree: 'Master of Information Management',
      school: 'NCUE | 2022 - 2024',
    },
    {
      degree: 'Bachelor’s Degree in Digital Marketing',
      school: 'NTPU | 2018 - 2022',
    },
  ]
  const projects = [
    {
      title: 'Travel Itinerary Planner',
      description: 'Built an interactive planner with timeline, category filters, and cost tracking, featuring responsive design and reusable components.',
      image: travelItineraryPlanner,
    },
    {
      title: 'Japan Travel Itinerary Website (Personal Project)',
      description: 'Created a trip planner for Japan with daily routes, transport, and lodging info, optimized for mobile viewing.',
      image:japanItinerary
    },
    {
      title: 'Custom React Practice Project',
      description: 'Developed a self-built React project to explore routing, state management, and component reuse.',
      image: ownReact
    },
    {
      title: 'Restaurant Recommendation System (Master’s Thesis)',
      description: 'Built a content-based restaurant recommender with front-end UI and database integration for master’s research.',
      image:
        'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Restaurant Recommendation System (Master’s Thesis)',
      description: 'Built a content-based restaurant recommender with front-end UI and database integration for master’s research.',
      image: pictureWeb
    },
  ]

  return (
    <div className="min-h-screen bg-surface-muted pb-20">
      <header className="border-b border-[#f2d7a5]/60 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <nav className="hidden items-center gap-8 text-sm font-semibold text-ink-muted md:flex">
            <a className="transition-colors hover:bg-amber-200 rounded-full px-2 py-2" href="#education">
              Education & Skills
            </a>
            <a className="transition-colors hover:bg-amber-200 rounded-full px-2 py-2" href="#experience">
              Experience
            </a>
            <a className="transition-colors hover:bg-amber-200 rounded-full px-2 py-2" href="#projects">
              Projects
            </a>
          </nav>
          {/* <a
            className="rounded-full px-5 py-2 text-sm font-semibold text-white board-amber-100 transition hover:bg-amber-200 md:inline-flex"
            href="mailto:john.doe@email.com"
          >
            Download Pdf
          </a> */}
        </div>
      </header>

      <main className="mx-auto mt-16 flex max-w-6xl flex-col gap-20 px-6" id="top">
        <section className="flex flex-col gap-12 rounded-[36px] bg-white px-10 py-14 shadow-[0_24px_60px_rgba(242,175,77,0.18)]">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-12">
            <div className="relative inline-flex h-[220px] w-[220px] shrink-0 items-center justify-center rounded-full md:h-[200px] md:w-[200px]">
              <BeckyPicture className="h-full w-full rounded-full object-cover shadow-[0_18px_36px_rgba(0,0,0,0.12)]" />
            </div>
            <div className="flex flex-col gap-6">
              <div className="space-y-2">
                <h2 className="text-4xl font-semibold leading-tight text-ink md:text-[44px]">
                  LIU,PEI-CHIEH
                </h2>
              </div>
              <p className="text-lg leading-relaxed text-ink-soft">
                Hi! I'm Becky, a developer who enjoys exploring new technologies and values efficiency.
                I excel at planning project workflows and actively look for tools or methods that improve team productivity. Recently, I’ve been focusing on leveraging AI to make development more creative and efficient.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-ink-soft">
                  {contactLinks.map((link) => (
                    <a
                      key={link.label}
                      className="inline-flex items-center gap-2 rounded-full border border-[#f2d7a5] px-4 py-2 transition hover:border-primary hover:bg-accent hover:text-primary"
                      href={link.href}
                    >
                      <img
                        alt=""
                        aria-hidden="true"
                        className="h-4 w-4 object-contain"
                        src={link.icon}
                      />
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="grid gap-12 rounded-[32px] bg-white px-10 py-14 shadow-[0_20px_48px_rgba(242,175,77,0.14)] md:grid-cols-2"
          id="education"
        >
          <div>
            <h2 className="text-2xl font-bold text-ink">Education</h2>
            <ul className="mt-8 space-y-8">
              {education.map((item) => (
                <li key={item.degree} className="flex gap-4">
                  <span
                    aria-hidden="true"
                    className="mt-1 inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent text-lg font-semibold text-primary shadow-[0_10px_20px_rgba(242,175,77,0.25)]"
                  >
                    🎓
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-ink">{item.degree}</h3>
                    <p className="text-sm font-semibold text-ink-light">{item.school}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-ink">Key Skills</h2>
            <div className="mt-8 space-y-6">
              {skills.map((group) => (
                <div key={group.category} className="flex flex-col gap-2 rounded-3xl border border-[#f7e1bd] bg-[#fff9f0] px-6 py-3 shadow-sm md:flex-row md:items-center md:gap-6">
                  <h3 className="w-full text-base font-semibold text-primary md:w-48">{group.category}</h3>
                  <div className="flex flex-wrap gap-3">
                    {group.items.map((item) => (
                      <span key={item} className="rounded-full bg-white px-3 py-1 text-sm font-semibold text-primary shadow-[0_6px_14px_rgba(242,175,77,0.18)]">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className="rounded-[32px] bg-white px-10 py-14 text-center shadow-[0_20px_48px_rgba(242,175,77,0.14)]"
          id="experience"
        >
          <h2 className="text-2xl font-bold text-ink">Experience</h2>
          <div className="mt-12 space-y-10 text-left">
            <div className="relative border-l-2 border-[#f2d7a5] pl-10">
              {experiences.map((experience) => (
                <div key={experience.title} className="relative pb-10 last:pb-0">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-semibold text-ink">{experience.title}</h3>
                    <p className="text-xl font-semibold text-ink-light">
                      {experience.company}
                    </p>
                    {Array.isArray(experience.description) ? (
                      <ul className="list-disc space-y-2 pl-5 text-l leading-relaxed text-ink-soft">
                        {experience.description.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm leading-relaxed text-ink-soft">
                        {experience.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className="rounded-[32px] bg-white px-10 py-14 shadow-[0_20px_48px_rgba(242,175,77,0.14)]"
          id="projects"
        >
          <h2 className="text-2xl font-bold text-center text-ink">Projects</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="flex h-full flex-col overflow-hidden rounded-[28px] border border-[#f7e1bd] bg-white transition hover:-translate-y-[2px] hover:shadow-[0_18px_36px_rgba(242,175,77,0.16)]"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-40 w-full object-cover"
                />
                <div className="flex flex-1 flex-col gap-3 px-6 py-6">
                  <h3 className="text-lg font-semibold text-ink">{project.title}</h3>
                  <p className="text-sm leading-relaxed text-ink-soft">
                    {project.description}
                  </p>
                  <a
                    className="mt-auto inline-flex w-fit items-center gap-1 text-sm font-semibold text-primary"
                    href="#"
                  >
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
