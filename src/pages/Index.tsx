import React from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/a07f6b93-f9cc-4816-95f5-235cc9f24dcc/files/42655019-6d66-44c9-a69d-d71f0dac1518.jpg";

const NAV_LINKS = [
  { label: "Главная", href: "#hero" },
  { label: "О игре", href: "#about" },
  { label: "Скачать", href: "#download" },
];

export default function Index() {
  return (
    <div className="min-h-screen text-gray-100 overflow-x-hidden" style={{ fontFamily: "'Roboto', sans-serif", background: "#050508" }}>

      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4"
        style={{ background: "linear-gradient(to bottom, rgba(5,5,8,0.98) 0%, transparent 100%)", borderBottom: "1px solid rgba(180,0,0,0.1)" }}
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-sm flex items-center justify-center" style={{ background: "#cc0000", boxShadow: "0 0 12px rgba(180,0,0,0.6)" }}>
            <span className="text-white font-bold text-sm" style={{ fontFamily: "'Oswald', sans-serif" }}>DR</span>
          </div>
          <span className="font-bold text-white text-xl tracking-widest" style={{ fontFamily: "'Oswald', sans-serif" }}>DARK RUSSIA</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm tracking-widest text-gray-400 hover:text-[#cc0000] transition-colors duration-300 uppercase"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="https://t.me/Vv54VvV"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 text-sm tracking-widest px-5 py-2 uppercase font-semibold transition-all duration-300 hover:scale-105"
          style={{ background: "#cc0000", color: "#fff", fontFamily: "'Oswald', sans-serif", boxShadow: "0 0 16px rgba(180,0,0,0.5)" }}
        >
          <Icon name="Send" size={14} />
          Играть
        </a>
      </nav>

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_IMAGE})`, filter: "brightness(0.35) saturate(0.6)" }}
        />
        {/* тёмный городской оверлей */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(5,5,8,0.7) 0%, rgba(5,5,8,0.2) 40%, rgba(5,5,8,0.85) 100%)" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at bottom center, rgba(140,0,0,0.25) 0%, transparent 65%)" }} />
        {/* горизонтальные линии — эффект монитора */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(200,0,0,0.4) 3px, rgba(200,0,0,0.4) 4px)" }}
        />
        {/* вертикальный виньет */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(5,5,8,0.6) 0%, transparent 30%, transparent 70%, rgba(5,5,8,0.6) 100%)" }} />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1
            className="font-bold uppercase leading-none mb-6"
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "clamp(4rem, 12vw, 10rem)",
              letterSpacing: "-0.02em",
              background: "linear-gradient(90deg, #ffffff 0%, #cc0000 20%, #ff4444 35%, #880000 50%, #cc0000 65%, #ffffff 80%, #cc0000 100%)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "shimmer-text 3s linear infinite",
              filter: "drop-shadow(0 0 50px rgba(180,0,0,0.7))",
            }}
          >
            DARK<br />RUSSIA
          </h1>

          <p
            className="text-gray-300 text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in opacity-0"
            style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}
          >
            Россия пала. Выжили немногие. <br />
            <span style={{ color: "#cc0000" }}>Ты — один из них.</span>
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in opacity-0"
            style={{ animationDelay: "1s", animationFillMode: "forwards" }}
          >
            <a
              href="https://t.me/Vv54VvV"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-lg tracking-widest px-10 py-4 uppercase font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{ background: "#cc0000", color: "#fff", fontFamily: "'Oswald', sans-serif", boxShadow: "0 0 30px rgba(180,0,0,0.6)" }}
            >
              <Icon name="Send" size={20} />
              Играть в Telegram
            </a>
            <a
              href="#about"
              className="text-lg tracking-widest px-10 py-4 uppercase border transition-all duration-300 hover:border-[#cc0000] hover:text-[#cc0000]"
              style={{ borderColor: "rgba(255,255,255,0.25)", color: "rgba(255,255,255,0.7)", fontFamily: "'Oswald', sans-serif" }}
            >
              Узнать больше
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs tracking-widest text-gray-600 uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>Прокрути</span>
          <Icon name="ChevronDown" size={20} className="text-[#cc0000]" />
        </div>
      </section>

      {/* STATS BAR */}
      <div style={{ background: "linear-gradient(90deg, #0e0e14 0%, #1a0005 50%, #0e0e14 100%)", borderTop: "1px solid rgba(180,0,0,0.3)", borderBottom: "1px solid rgba(180,0,0,0.3)" }} className="py-4 px-8">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-around gap-4">
          {[
            { value: "25+", label: "Онлайн" },
            { value: "Free", label: "Скачивание" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-bold text-2xl text-[#cc0000]" style={{ fontFamily: "'Oswald', sans-serif", textShadow: "0 0 20px rgba(180,0,0,0.7)" }}>{s.value}</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="py-32 px-8 relative">
        {/* городская текстура фона */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, #050508 0%, #0b0008 40%, #050508 100%)" }} />
        <div className="absolute inset-0 opacity-40" style={{ background: "radial-gradient(ellipse at top right, rgba(140,0,0,0.12) 0%, transparent 60%)" }} />
        {/* диагональная сетка */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "repeating-linear-gradient(45deg, #cc0000 0px, transparent 1px, transparent 60px, #cc0000 61px), repeating-linear-gradient(-45deg, #cc0000 0px, transparent 1px, transparent 60px, #cc0000 61px)" }}
        />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-xs tracking-[0.4em] text-[#cc0000] uppercase mb-4" style={{ fontFamily: "'Oswald', sans-serif" }}>— О игре</div>
              <h2 className="font-bold text-5xl md:text-6xl uppercase leading-tight text-white mb-8" style={{ fontFamily: "'Oswald', sans-serif" }}>
                Тьма<br />поглотила<br />всё
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6 text-lg">
                DARK RUSSIA — это мир разборок. Дерись, зарабатывай, побеждай.
                Игра находится в Telegram — заходи и начинай прямо сейчас.
              </p>

              {/* Ссылки проекта */}
              <div className="mb-6 space-y-2">
                <div className="text-xs tracking-[0.3em] text-[#cc0000] uppercase mb-3" style={{ fontFamily: "'Oswald', sans-serif" }}>Связи проекта</div>
                {[
                  { icon: "Send", label: "Telegram-канал", href: "https://t.me/duybarussiagamee" },
                  { icon: "Users", label: "ВК чат", href: "https://vk.me/join/I9LM97l0OGKJaRlBqOXo1" },
                ].map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rainbow-border flex items-center gap-3 px-4 py-2.5 rounded-sm transition-all duration-300 hover:text-[#cc0000] group"
                    style={{ color: "#9ca3af" }}
                  >
                    <Icon name={l.icon} fallback="Link" size={15} className="text-[#cc0000] flex-shrink-0" />
                    <span className="text-sm">{l.label}</span>
                    <Icon name="ExternalLink" size={12} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>

              {/* Связи с владельцем */}
              <div className="mb-8 space-y-2">
                <div className="text-xs tracking-[0.3em] text-[#cc0000] uppercase mb-3" style={{ fontFamily: "'Oswald', sans-serif" }}>Связь с владельцем</div>
                {[
                  { icon: "Send", label: "Telegram", href: "https://t.me/Vv54VvV", sub: "@Vv54VvV" },
                  { icon: "Users", label: "ВКонтакте", href: "https://vk.com/id1083357374", sub: "@id1083357374" },
                ].map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rainbow-border flex items-center gap-3 px-4 py-2.5 rounded-sm transition-all duration-300 hover:text-[#cc0000] group"
                    style={{ color: "#9ca3af" }}
                  >
                    <Icon name={l.icon} fallback="Link" size={15} className="text-[#cc0000] flex-shrink-0" />
                    <span className="text-sm">{l.label}</span>
                    <span className="text-xs text-gray-600 ml-1">{l.sub}</span>
                    <Icon name="ExternalLink" size={12} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <div className="h-px flex-1" style={{ background: "linear-gradient(to right, #cc0000, transparent)" }} />
                <span className="text-xs tracking-widest text-[#cc0000] uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>В Telegram</span>
              </div>
            </div>

            <div className="flex flex-col items-center gap-6">
              <img
                src="https://cdn.poehali.dev/projects/a07f6b93-f9cc-4816-95f5-235cc9f24dcc/bucket/e597ff3c-d23b-4e4f-9654-11c67ec8ec37.jpg"
                alt="Dark Russia"
                className="w-full max-w-md rounded-full"
                style={{ boxShadow: "0 0 60px rgba(180,0,0,0.4), 0 0 120px rgba(180,0,0,0.15)" }}
              />
              <img
                src="https://cdn.poehali.dev/projects/a07f6b93-f9cc-4816-95f5-235cc9f24dcc/bucket/8af6f567-daa3-4d4a-afba-b5db6aeb83f5.jpg"
                alt="Dark Russia Gameplay"
                className="w-full max-w-md rounded-sm"
                style={{ boxShadow: "0 0 40px rgba(180,0,0,0.3)", border: "1px solid rgba(180,0,0,0.25)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* DOWNLOAD */}
      <section id="download" className="py-32 px-8 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #0a0010 0%, #050508 50%, #100005 100%)" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(140,0,0,0.2) 0%, transparent 65%)" }} />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "repeating-linear-gradient(45deg, #cc0000 0px, transparent 1px, transparent 40px, #cc0000 41px)" }}
        />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="text-xs tracking-[0.4em] text-[#cc0000] uppercase mb-4" style={{ fontFamily: "'Oswald', sans-serif" }}>— Скачать</div>
          <h2
            className="font-bold text-5xl md:text-7xl uppercase leading-tight mb-6"
            style={{
              fontFamily: "'Oswald', sans-serif",
              background: "linear-gradient(90deg, #ffffff 0%, #cc0000 20%, #ff4444 35%, #880000 50%, #cc0000 65%, #ffffff 80%, #cc0000 100%)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "shimmer-text 3s linear infinite",
            }}
          >
            Начни развиваться<br />на DARK RUSSIA
          </h2>
          <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto">
            Бесплатно. Без регистрации. Просто скачай и погрузись в тьму.
          </p>

          <div className="flex justify-center mb-12">
            <a
              href="https://disk.yandex.ru/d/6FLXTZ6TzStNFQ"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-xl tracking-widest px-12 py-5 uppercase font-semibold transition-all duration-300 hover:scale-105"
              style={{ background: "#cc0000", color: "#fff", fontFamily: "'Oswald', sans-serif", boxShadow: "0 0 40px rgba(180,0,0,0.6)" }}
            >
              <Icon name="Download" size={24} />
              Скачать с Яндекс Диска
            </a>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-6 text-gray-500 text-sm">
              <span className="flex items-center gap-2">
                <Icon name="Shield" size={14} className="text-[#cc0000]" />
                Безопасно
              </span>
              <span className="flex items-center gap-2">
                <Icon name="Zap" size={14} className="text-[#cc0000]" />
                Быстрая загрузка
              </span>
              <span className="flex items-center gap-2">
                <Icon name="RefreshCw" size={14} className="text-[#cc0000]" />
                Авто-обновление
              </span>
            </div>
            <p className="text-gray-600 text-xs mt-2">Размер: 4.2 ГБ · Версия 2.4.1</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-8 border-t" style={{ borderColor: "rgba(180,0,0,0.15)", background: "#030305" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-sm flex items-center justify-center" style={{ background: "#cc0000", boxShadow: "0 0 10px rgba(180,0,0,0.5)" }}>
              <span className="text-white font-bold text-xs" style={{ fontFamily: "'Oswald', sans-serif" }}>DR</span>
            </div>
            <span className="font-bold text-white tracking-widest" style={{ fontFamily: "'Oswald', sans-serif" }}>DARK RUSSIA</span>
          </div>
          <div className="flex gap-6">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-xs tracking-widest text-gray-600 hover:text-[#cc0000] transition-colors uppercase"
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
