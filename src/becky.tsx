import ContactSection from './components/ContactSection'

function App() {
  const skills = ['React', 'Vue.js', 'Node.js', 'Python', 'Figma', 'UI/UX Design']

  const experiences = [
    {
      title: '資深前端工程師',
      company: '科技公司 A | 2020 - 至今',
      description: '負責前端與設計團隊建立產品設計系統，提升了 20% 的轉換人次。',
    },
    {
      title: 'UI/UX 設計師',
      company: '設計工作室 B | 2018 - 2020',
      description: '為多個產品進行使用者訪談與界面優化，專注於提高研究與實驗效率。',
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
      title: '專案一 - 電商平台',
      description: '一個開箱即用的線上購物體驗，提供流暢的購物整體流程。',
    },
    {
      title: '專案二 - 票券管理工具',
      description: '協助票務作業與資料整合的 SaaS 雲端應用程式。',
    },
    {
      title: '專案三 - 個人部落格',
      description: '以最新 Jamstack 技術打造的快速、現代化部落格平台。',
    },
  ]

  return (
    <div className="flex min-h-screen flex-col gap-20 pb-16">
      <header className="flex items-center justify-between border-b border-black/5 bg-surface-card px-6 py-5 md:px-[72px]">
        <div className="flex items-center gap-3 font-semibold text-ink">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-base font-bold text-white">
            劉珮潔
          </span>
          <span className="text-lg">劉珮潔</span>
        </div>
        <nav className="hidden items-center gap-8 text-sm font-semibold text-ink-muted md:flex">
          <a className="transition-colors hover:text-primary" href="#about">
            關於我
          </a>
          <a className="transition-colors hover:text-primary" href="#projects">
            作品集
          </a>
          <a className="transition-colors hover:text-primary" href="#contact">
            聯絡方式
          </a>
        </nav>
      </header>

      <section className="mx-6 flex flex-col-reverse items-center justify-between gap-10 rounded-[28px] bg-gradient-to-br from-[#f0f2f8] to-[#f7f8fc] px-8 py-16 text-center md:mx-[72px] md:flex-row md:gap-12 md:rounded-[36px] md:px-20 md:py-20 md:text-left">
        <div className="max-w-[480px] space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            軟體工程師 &amp; UI/UX 設計師
          </p>
          <h1 className="text-4xl font-bold leading-tight text-ink md:text-5xl">
            我們打造兼具美感與實用性的網頁應用程式。
          </h1>
          <p className="text-lg text-ink-soft">
            擁有跨領域的視角與扎實的前端技術，協助企業打造易用與有溫度的數位體驗。
          </p>
          <a
            className="inline-flex items-center justify-center rounded-xl bg-primary px-7 py-3 text-base font-semibold text-white shadow-sm transition duration-200 hover:-translate-y-px hover:shadow-lg"
            href="#contact"
          >
            與我聯繫
          </a>
        </div>
        <div
          className="flex flex-1 items-center justify-center"
          aria-hidden="true"
        >
          <img
            src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?auto=format&fit=crop&w=640&q=80"
            alt="極簡風格的涼鞋"
            className="h-80 w-80 rounded-full object-cover shadow-[0_16px_40px_rgba(32,42,66,0.12)]"
          />
        </div>
      </section>

      <section
        className="mx-6 rounded-[28px] bg-white px-8 py-14 shadow-soft-lg md:mx-[72px] md:rounded-[32px] md:px-[72px] md:py-16"
        id="about"
      >
        <div className="text-3xl font-bold text-ink">關於我</div>

        <div className="mt-12 grid gap-16 md:grid-cols-2">
          <div className="space-y-8">
            <div>
              <h2 className="mb-4 text-2xl font-semibold text-ink">簡介</h2>
              <p className="text-ink-soft">
                我是一位結合設計思維的資深軟體工程師，善於將複雜的需求與數據轉換為直覺好用的產品體驗。我致力於打造兼顧效率與易用性的界面，專長於 React 與 Vue
                等前端框架，也擁有 Node.js 和 Python 的後端經驗。
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold text-ink">技能</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-[#eef2fb] px-4 py-2 text-sm font-semibold text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-10">
            <div>
              <h3 className="mb-4 text-lg font-semibold text-ink">經歷</h3>
              <ul className="space-y-6">
                {experiences.map((experience) => (
                  <li key={experience.title} className="space-y-3">
                    <h4 className="text-lg font-semibold text-ink">
                      {experience.title}
                    </h4>
                    <span className="text-sm font-semibold text-ink-light">
                      {experience.company}
                    </span>
                    <p className="text-ink-soft">{experience.description}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold text-ink">教育</h3>
              <ul className="space-y-4">
                {education.map((item) => (
                  <li key={item.degree} className="space-y-1">
                    <h4 className="text-lg font-semibold text-ink">
                      {item.degree}
                    </h4>
                    <span className="text-sm font-semibold text-ink-light">
                      {item.school}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-6 md:mx-[72px]" id="projects">
        <div className="text-3xl font-bold text-ink">作品集</div>
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex min-h-[260px] flex-col gap-4 rounded-3xl bg-white p-8 shadow-soft"
            >
              <div
                className="flex h-36 items-center justify-center rounded-2xl bg-[#f0f2f7] text-4xl text-[#a2abc9]"
                aria-hidden="true"
              >
                <span role="img" aria-label="project placeholder">
                  🖼️
                </span>
              </div>
              <h3 className="text-xl font-semibold text-ink">{project.title}</h3>
              <p className="text-ink-soft">{project.description}</p>
            </article>
          ))}
        </div>
      </section>

      <ContactSection id="contact" />

      <footer className="flex flex-col items-center gap-4 px-6 pt-12 text-sm text-ink-light md:px-[72px]">
        <div className="flex gap-8 text-center font-semibold text-ink-muted">
          <a className="transition-colors hover:text-primary" href="https://www.linkedin.com/feed/">
            LinkedIn
          </a>
          <a className="transition-colors hover:text-primary" href="https://github.com/dashboard">
            GitHub
          </a>
        </div>
        <p className="text-xs">© 2024 becky. All Rights Reserved.</p>
      </footer>
    </div>
  )
}

export default App
