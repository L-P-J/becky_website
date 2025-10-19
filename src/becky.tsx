import githubIcon from './assets/github.png'
import linkedinIcon from './assets/linkedin.png'

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
    'React',
    'Node.js',
    'Next.js',
    'HTML & CSS',
    'JavaScript',
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
      degree: '資訊工程碩士',
      school: '國立大學 | 2016 - 2018',
    },
    {
      degree: '資訊管理學士',
      school: '私立大學 | 2012 - 2016',
    },
  ]
  const projects = [
    {
      title: '專案 A - 行動銀行應用程式',
      description: '設計了以行動設備為優先的銀行體驗，建立整合使用者任務和投資管理。',
      image:
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: '專案 B - 電商網站',
      description: '為一家專業設計品牌推出了一個直覺好用的官方電商平台。',
      image:
        'https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: '專案 C - 資料儀表板',
      description: '為一家 SaaS 公司打造了一個即時視覺化的資料儀表板。',
      image:
        'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80',
    },
  ]

  return (
    <div className="min-h-screen bg-surface-muted pb-20">
      <header className="border-b border-[#f2d7a5]/60 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <nav className="hidden items-center gap-8 text-sm font-semibold text-ink-muted md:flex">
            <a className="transition-colors hover:text-primary" href="#education">
              教育與技能
            </a>
            <a className="transition-colors hover:text-primary" href="#experience">
              工作經歷
            </a>
            <a className="transition-colors hover:text-primary" href="#projects">
              專案作品
            </a>
          </nav>
          <a
            className="hidden rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(242,139,12,0.35)] transition hover:-translate-y-[1px] md:inline-flex"
            href="mailto:john.doe@email.com"
          >
            聯絡我
          </a>
        </div>
      </header>

      <main className="mx-auto mt-16 flex max-w-6xl flex-col gap-20 px-6" id="top">
        <section className="grid gap-12 rounded-[36px] bg-white px-10 py-14 shadow-[0_24px_60px_rgba(242,175,77,0.18)] md:grid-cols-[1.1fr,0.9fr] md:items-center">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1 text-sm font-semibold text-primary">
              John Doe, 產品設計師
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-ink md:text-[44px]">
              我是專注於打造直覺與美感兼具的使用者體驗設計師，擅長解決複雜問題並轉化為清晰、以使用者為中心的設計。
            </h1>
            <p className="text-lg leading-relaxed text-ink-soft">
              擁有產品策略與研究背景，能夠與跨部門團隊緊密合作。熟悉使用者研究、資訊架構與 UI 視覺設計流程，期望透過設計創造更具影響力的產品。
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
              <a
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-base font-semibold text-white shadow-[0_14px_28px_rgba(242,139,12,0.3)] transition hover:-translate-y-[1px]"
                href="#"
              >
                下載履歷
              </a>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="relative inline-flex h-[300px] w-[300px] items-center justify-center rounded-full bg-gradient-to-br from-[#ffe4bf] via-[#ffd49a] to-[#f2b25f] p-[10px] shadow-[0_22px_50px_rgba(242,175,77,0.2)]">
              <img
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=640&q=80"
                alt="專業著裝的設計師肖像"
                className="h-full w-full rounded-full object-cover shadow-[0_18px_36px_rgba(0,0,0,0.12)]"
              />
            </div>
          </div>
        </section>

        <section
          className="grid gap-12 rounded-[32px] bg-white px-10 py-14 shadow-[0_20px_48px_rgba(242,175,77,0.14)] md:grid-cols-2"
          id="education"
        >
          <div>
            <h2 className="text-2xl font-bold text-ink">教育背景</h2>
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
            <h2 className="text-2xl font-bold text-ink">重點技能</h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-primary shadow-[0_1px_0_rgba(242,169,65,0.35)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section
          className="rounded-[32px] bg-white px-10 py-14 text-center shadow-[0_20px_48px_rgba(242,175,77,0.14)]"
          id="experience"
        >
          <h2 className="text-2xl font-bold text-ink">工作經歷</h2>
          <div className="mt-12 space-y-10 text-left">
            <div className="relative border-l-2 border-[#f2d7a5] pl-10">
              {experiences.map((experience) => (
                <div key={experience.title} className="relative pb-10 last:pb-0">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[32px] top-1 inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent text-xl shadow-[0_10px_18px_rgba(242,175,77,0.25)]"
                  >
                    💼
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-ink">{experience.title}</h3>
                    <p className="text-sm font-semibold text-ink-light">
                      {experience.company}
                    </p>
                    {Array.isArray(experience.description) ? (
                      <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink-soft">
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
          <h2 className="text-2xl font-bold text-center text-ink">專案作品</h2>
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
                    了解更多<span aria-hidden="true">›</span>
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
