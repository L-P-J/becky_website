type ContactSectionProps = {
  id?: string
}

export default function ContactSection({ id = 'contact' }: ContactSectionProps) {
  return (
    <section
      className="mx-6 rounded-[28px] bg-white px-8 py-14 text-center shadow-soft-lg md:mx-[72px] md:rounded-[32px] md:px-[72px] md:py-16"
      id={id}
    >
      <div className="text-3xl font-bold text-ink">我的聯絡方式</div>
      <p className="mx-auto mt-4 max-w-xl text-ink-soft">
        期待與您合作！歡迎透過填寫以下方式與我聯繫。
      </p>
      <form className="mx-auto mt-10 grid max-w-xl gap-5 text-left">
        <label className="flex flex-col gap-2 text-sm font-semibold text-ink">
          您的姓名
          <input
            className="rounded-xl border border-slate-300/60 bg-[#f8f9fd] px-4 py-3 text-base font-normal text-ink-soft transition focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/15"
            type="text"
            name="name"
            placeholder="您的姓名"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm font-semibold text-ink">
          您的 Email
          <input
            className="rounded-xl border border-slate-300/60 bg-[#f8f9fd] px-4 py-3 text-base font-normal text-ink-soft transition focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/15"
            type="email"
            name="email"
            placeholder="您的 Email"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm font-semibold text-ink">
          您的訊息
          <textarea
            className="min-h-[140px] rounded-xl border border-slate-300/60 bg-[#f8f9fd] px-4 py-3 text-base font-normal text-ink-soft transition focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/15"
            name="message"
            placeholder="想合作的內容或問題"
          ></textarea>
        </label>
        <button
          className="rounded-xl bg-primary px-8 py-4 text-base font-semibold text-white transition duration-200 hover:-translate-y-px hover:shadow-lg"
          type="submit"
        >
          傳送訊息
        </button>
      </form>
    </section>
  )
}
