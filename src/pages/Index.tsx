import React from "react";
import Icon from "@/components/ui/icon";

const HERO_BG = "https://cdn.poehali.dev/projects/a07f6b93-f9cc-4816-95f5-235cc9f24dcc/files/42655019-6d66-44c9-a69d-d71f0dac1518.jpg";
const IMG_INTERIOR = "https://cdn.poehali.dev/projects/a07f6b93-f9cc-4816-95f5-235cc9f24dcc/bucket/b9a82502-3357-450e-8d6b-578594e658fd.jpg";
const IMG_CAR = "https://cdn.poehali.dev/projects/a07f6b93-f9cc-4816-95f5-235cc9f24dcc/bucket/e597ff3c-d23b-4e4f-9654-11c67ec8ec37.jpg";
const IMG_CHARS = "https://cdn.poehali.dev/projects/a07f6b93-f9cc-4816-95f5-235cc9f24dcc/bucket/8af6f567-daa3-4d4a-afba-b5db6aeb83f5.jpg";

const NAV_LINKS = [
  { label: "Главная", href: "#hero" },
  { label: "Донат", href: "#features" },
  { label: "Играть", href: "#play" },
  { label: "Форум", href: "#about" },
];

const SOCIAL_LINKS = [
  { icon: "Users", href: "https://vk.me/join/I9LM97l0OGKJaRlBqOXo1", title: "ВК" },
  { icon: "Send", href: "https://t.me/duybarussiagamee", title: "TG" },
];

const FEATURES = [
  {
    title: "Лучшие интерьеры",
    titleAccent: "и наружный маппинг",
    text: "Каждый интерьер выполнен эксклюзивно для нашего проекта и отлично оптимизирован под мобильные устройства. Мы стараемся сохранять баланс между качеством и производительностью, для нас это действительно важно.",
    img: IMG_INTERIOR,
    imgLeft: true,
  },
  {
    title: "Выбор авто",
    titleAccent: "и тюнинга на любой вкус",
    text: "На нашем проекте ты не только сможешь приобрести любой автомобиль на свой вкус, но и затюнинговать его просто до неузнаваемости. Тонировка, неоновая подсветка, винилы, цвет фар, размер дисков и даже уровень занижения подвески — всё это есть на DARK RUSSIA и доступно каждому.",
    img: IMG_CAR,
    imgLeft: false,
  },
  {
    title: "Собственные скины",
    titleAccent: "на персонажей",
    text: "Большой выбор уникальных скинов для твоего персонажа. Выгляди так, как хочешь — от уличного бойца до делового человека. Коллекция постоянно пополняется.",
    img: IMG_CHARS,
    imgLeft: true,
  },
];

export default function Index() {
  return (
    <div
      className="min-h-screen text-white overflow-x-hidden"
      style={{ fontFamily: "'Roboto', sans-serif", background: "#0d0203" }}
    >
      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5"
        style={{ background: "rgba(10,2,2,0.92)", backdropFilter: "blur(8px)", borderBottom: "1px solid rgba(180,0,0,0.15)" }}
      >
        {/* LOGO */}
        <div className="flex flex-col leading-none">
          <span className="text-white font-bold text-sm tracking-wider" style={{ fontFamily: "'Oswald', sans-serif" }}>DARK</span>
          <span className="font-black text-xl tracking-wider" style={{ fontFamily: "'Oswald', sans-serif", color: "#e02020" }}>RUSSIA</span>
        </div>

        {/* LINKS */}
        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-widest text-gray-300 hover:text-white transition-colors duration-200 uppercase"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* SOCIAL */}
        <div className="flex items-center gap-3">
          {SOCIAL_LINKS.map((s) => (
            <a
              key={s.href}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded transition-all duration-200 hover:opacity-80"
              style={{ background: "rgba(180,0,0,0.25)", border: "1px solid rgba(180,0,0,0.4)" }}
              title={s.title}
            >
              <Icon name={s.icon} fallback="Link" size={16} className="text-[#e02020]" />
            </a>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ paddingTop: "80px" }}
      >
        {/* фоновое изображение */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_BG})`, filter: "brightness(0.25) saturate(0.5)" }}
        />
        {/* красный радиальный свет сверху-слева */}
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 20% 40%, rgba(160,0,0,0.55) 0%, transparent 60%)" }} />
        {/* затемнение снизу */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 50%, rgba(10,2,2,0.95) 100%)" }} />
        {/* тёмные волны (декор) */}
        <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none" style={{ background: "linear-gradient(to top, #0d0203, transparent)" }} />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 flex items-center justify-between gap-8">
          {/* LEFT TEXT */}
          <div className="max-w-xl">
            <h1 className="font-black leading-tight mb-6" style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(2.4rem, 5vw, 3.8rem)" }}>
              Играй в Россию на своём<br />смартфоне на проекте{" "}
              <span style={{ color: "#e02020" }}>DARK<br />RUSSIA</span>
            </h1>
            <p className="text-gray-400 text-sm leading-relaxed mb-10 max-w-sm">
              Мечтаешь сыграть в CRMP на своём телефоне?<br />
              Это возможно на нашем проекте: полная карта, продуманный игровой мод, уникальный модпак с русскими и зарубежными авто, и многое другое ждёт тебя на нашем проекте.
            </p>
            <div className="flex items-center gap-5">
              <a
                href="https://t.me/Vv54VvV"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 font-bold uppercase tracking-widest text-sm transition-all duration-200 hover:brightness-110 hover:scale-105"
                style={{ background: "#e02020", color: "#fff", fontFamily: "'Oswald', sans-serif", boxShadow: "0 0 24px rgba(200,0,0,0.5)" }}
              >
                Начать играть
              </a>
              <a
                href="https://disk.yandex.ru/d/6FLXTZ6TzStNFQ"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold uppercase tracking-widest transition-colors duration-200 hover:text-white"
                style={{ color: "#e02020", fontFamily: "'Oswald', sans-serif" }}
              >
                Скачать игру →
              </a>
            </div>
          </div>

          {/* RIGHT — hero image decorative */}
          <div className="hidden lg:block relative w-[480px] h-[520px] flex-shrink-0">
            <div
              className="absolute inset-0 rounded-sm bg-cover bg-center bg-top"
              style={{
                backgroundImage: `url(${IMG_CHARS})`,
                maskImage: "linear-gradient(to left, rgba(0,0,0,1) 40%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,1) 40%, transparent 100%)",
              }}
            />
            <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 80% 50%, rgba(160,0,0,0.2) 0%, transparent 70%)" }} />
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={22} className="text-[#e02020]" />
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="relative py-8" style={{ background: "#0d0203" }}>
        {/* секционный заголовок */}
        <div className="text-center py-16 px-8">
          <h2 className="font-black text-4xl md:text-5xl uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>
            Что тебя ждёт на{" "}
            <span style={{ color: "#e02020" }}>DARK RUSSIA</span>
          </h2>
        </div>

        {FEATURES.map((f, i) => (
          <div
            key={i}
            className="relative py-16 px-8"
            style={{
              background: i % 2 === 0
                ? "linear-gradient(135deg, #110203 0%, #0d0203 100%)"
                : "linear-gradient(135deg, #0d0203 0%, #110203 100%)",
            }}
          >
            {/* декор угол */}
            <div
              className="absolute top-0 right-0 w-24 h-24 opacity-60"
              style={{
                background: f.imgLeft ? "none" : "linear-gradient(225deg, rgba(180,0,0,0.4) 0%, transparent 60%)",
              }}
            />
            <div
              className="absolute bottom-0 left-0 w-24 h-24 opacity-60"
              style={{
                background: f.imgLeft ? "linear-gradient(45deg, rgba(180,0,0,0.4) 0%, transparent 60%)" : "none",
              }}
            />

            <div className={`max-w-6xl mx-auto flex flex-col ${f.imgLeft ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-12`}>
              {/* IMAGE */}
              <div className="relative w-full md:w-1/2 flex-shrink-0">
                <div
                  className="absolute -top-2 -left-2 w-10 h-10 opacity-80"
                  style={{ background: "#e02020", clipPath: "polygon(0 0, 100% 0, 100% 30%, 30% 30%, 30% 100%, 0 100%)" }}
                />
                <div
                  className="absolute -bottom-2 -right-2 w-10 h-10 opacity-80"
                  style={{ background: "#e02020", clipPath: "polygon(70% 0, 100% 0, 100% 100%, 0 100%, 0 70%, 70% 70%)" }}
                />
                <img
                  src={f.img}
                  alt={f.title}
                  className="w-full rounded-sm object-cover"
                  style={{ maxHeight: "300px", border: "1px solid rgba(180,0,0,0.3)", boxShadow: "0 0 40px rgba(140,0,0,0.2)" }}
                />
              </div>

              {/* TEXT */}
              <div className="w-full md:w-1/2">
                <h3 className="font-black text-2xl md:text-3xl leading-tight mb-4" style={{ fontFamily: "'Oswald', sans-serif" }}>
                  <span style={{ color: "#e02020" }}>{f.title}</span>{" "}
                  <span className="text-white">{f.titleAccent}</span>
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.text}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* PLAY SECTION */}
      <section id="play" className="relative py-32 px-8 overflow-hidden" style={{ background: "#0d0203" }}>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(140,0,0,0.2) 0%, transparent 65%)" }} />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="font-black text-4xl md:text-6xl uppercase mb-6" style={{ fontFamily: "'Oswald', sans-serif" }}>
            Начни играть<br />
            <span style={{ color: "#e02020" }}>прямо сейчас</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10">
            Бесплатно. Без регистрации. Скачай и погрузись в тёмную Россию.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://disk.yandex.ru/d/6FLXTZ6TzStNFQ"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-10 py-4 font-bold uppercase tracking-widest text-lg transition-all duration-200 hover:scale-105"
              style={{ background: "#e02020", color: "#fff", fontFamily: "'Oswald', sans-serif", boxShadow: "0 0 40px rgba(200,0,0,0.5)" }}
            >
              <Icon name="Download" size={22} />
              Скачать с Яндекс Диска
            </a>
            <a
              href="https://t.me/Vv54VvV"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-10 py-4 font-bold uppercase tracking-widest text-lg border transition-all duration-200 hover:border-[#e02020] hover:text-[#e02020]"
              style={{ borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.7)", fontFamily: "'Oswald', sans-serif" }}
            >
              <Icon name="Send" size={20} />
              Telegram
            </a>
          </div>
          <div className="flex items-center justify-center gap-8 mt-10 text-gray-500 text-sm">
            <span className="flex items-center gap-2"><Icon name="Shield" size={14} className="text-[#e02020]" /> Безопасно</span>
            <span className="flex items-center gap-2"><Icon name="Zap" size={14} className="text-[#e02020]" /> Быстро</span>
            <span className="flex items-center gap-2"><Icon name="RefreshCw" size={14} className="text-[#e02020]" /> Авто-обновление</span>
          </div>
        </div>
      </section>

      {/* ABOUT / LINKS */}
      <section id="about" className="py-20 px-8 relative" style={{ background: "#0a0202", borderTop: "1px solid rgba(180,0,0,0.15)" }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <div className="text-xs tracking-[0.4em] text-[#e02020] uppercase mb-3" style={{ fontFamily: "'Oswald', sans-serif" }}>Сообщество</div>
            <h3 className="font-black text-3xl uppercase mb-6" style={{ fontFamily: "'Oswald', sans-serif" }}>Наши каналы</h3>
            <div className="space-y-3">
              {[
                { icon: "Send", label: "Telegram-канал", sub: "@duybarussiagamee", href: "https://t.me/duybarussiagamee" },
                { icon: "Users", label: "ВКонтакте — чат", sub: "Вступить", href: "https://vk.me/join/I9LM97l0OGKJaRlBqOXo1" },
              ].map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 px-5 py-3 rounded-sm group transition-all duration-200 hover:border-[#e02020]"
                  style={{ background: "rgba(180,0,0,0.08)", border: "1px solid rgba(180,0,0,0.2)" }}
                >
                  <Icon name={l.icon} fallback="Link" size={16} className="text-[#e02020]" />
                  <div>
                    <div className="text-white text-sm font-semibold group-hover:text-[#e02020] transition-colors">{l.label}</div>
                    <div className="text-gray-500 text-xs">{l.sub}</div>
                  </div>
                  <Icon name="ExternalLink" size={12} className="ml-auto text-gray-600 group-hover:text-[#e02020] transition-colors" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="text-xs tracking-[0.4em] text-[#e02020] uppercase mb-3" style={{ fontFamily: "'Oswald', sans-serif" }}>Контакты</div>
            <h3 className="font-black text-3xl uppercase mb-6" style={{ fontFamily: "'Oswald', sans-serif" }}>Владелец</h3>
            <div className="space-y-3">
              {[
                { icon: "Send", label: "Telegram", sub: "@Vv54VvV", href: "https://t.me/Vv54VvV" },
                { icon: "Users", label: "ВКонтакте", sub: "@id1083357374", href: "https://vk.com/id1083357374" },
              ].map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 px-5 py-3 rounded-sm group transition-all duration-200 hover:border-[#e02020]"
                  style={{ background: "rgba(180,0,0,0.08)", border: "1px solid rgba(180,0,0,0.2)" }}
                >
                  <Icon name={l.icon} fallback="Link" size={16} className="text-[#e02020]" />
                  <div>
                    <div className="text-white text-sm font-semibold group-hover:text-[#e02020] transition-colors">{l.label}</div>
                    <div className="text-gray-500 text-xs">{l.sub}</div>
                  </div>
                  <Icon name="ExternalLink" size={12} className="ml-auto text-gray-600 group-hover:text-[#e02020] transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-8" style={{ background: "#080101", borderTop: "1px solid rgba(180,0,0,0.12)" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col leading-none">
            <span className="text-white font-bold text-xs tracking-wider" style={{ fontFamily: "'Oswald', sans-serif" }}>DARK</span>
            <span className="font-black text-base tracking-wider" style={{ fontFamily: "'Oswald', sans-serif", color: "#e02020" }}>RUSSIA</span>
          </div>
          <div className="flex gap-6">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-xs tracking-widest text-gray-600 hover:text-[#e02020] transition-colors uppercase"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                {l.label}
              </a>
            ))}
          </div>
          <p className="text-gray-700 text-xs">© 2024 Dark Russia. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}
