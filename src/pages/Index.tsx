import React from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/a07f6b93-f9cc-4816-95f5-235cc9f24dcc/files/42655019-6d66-44c9-a69d-d71f0dac1518.jpg";

const NAV_LINKS = [
  { label: "Главная", href: "#hero" },
  { label: "О игре", href: "#about" },
  { label: "Скачать", href: "#download" },
];

const FEATURES = [
  {
    icon: "Map",
    title: "Открытый мир",
    desc: "Огромные территории постсоветской России — от сгоревших деревень до радиоактивных мегаполисов.",
  },
  {
    icon: "Sword",
    title: "Выживание",
    desc: "Голод, холод, радиация и враги. Каждый день — борьба за жизнь в жестоком мире.",
  },
  {
    icon: "Users",
    title: "Кланы",
    desc: "Объединяйся с другими выжившими, создавай кланы, захватывай территории.",
  },
  {
    icon: "Skull",
    title: "PvP-зоны",
    desc: "Зоны повышенной опасности с лучшим лутом. Выживет сильнейший.",
  },
];



export default function Index() {


  return (
    <div className="min-h-screen bg-[#0d0a08] text-gray-100 overflow-x-hidden" style={{ fontFamily: "'Roboto', sans-serif" }}>

      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4"
        style={{ background: "linear-gradient(to bottom, rgba(13,10,8,0.95) 0%, transparent 100%)" }}
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-sm flex items-center justify-center" style={{ background: "#FF6B1A" }}>
            <span className="text-black font-bold text-sm" style={{ fontFamily: "'Oswald', sans-serif" }}>DR</span>
          </div>
          <span className="font-bold text-white text-xl tracking-widest" style={{ fontFamily: "'Oswald', sans-serif" }}>DARK RUSSIA</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm tracking-widest text-gray-400 hover:text-[#FF6B1A] transition-colors duration-300 uppercase"
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
          style={{ background: "#FF6B1A", color: "#000", fontFamily: "'Oswald', sans-serif" }}
        >
          <Icon name="Send" size={14} />
          Играть
        </a>
      </nav>

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(13,10,8,0.85) 0%, rgba(13,10,8,0.4) 50%, rgba(13,10,8,0.92) 100%)" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at bottom, rgba(255,107,26,0.15) 0%, transparent 60%)" }} />
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,107,26,0.3) 2px, rgba(255,107,26,0.3) 4px)" }}
        />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="animate-fade-in opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            <div className="inline-block mb-6 px-4 py-1 border border-[#FF6B1A]/50 text-xs tracking-[0.4em] text-[#FF6B1A] uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>
              ☢ Пост-апокалипсис · Выживание · Открытый мир
            </div>
          </div>

          <h1
            className="font-bold uppercase leading-none mb-6 animate-fade-in opacity-0"
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "clamp(4rem, 12vw, 10rem)",
              letterSpacing: "-0.02em",
              animationDelay: "0.4s",
              animationFillMode: "forwards",
              background: "linear-gradient(180deg, #ffffff 0%, #FF6B1A 60%, #cc4a00 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 40px rgba(255,107,26,0.4))",
            }}
          >
            DARK<br />RUSSIA
          </h1>

          <p
            className="text-gray-300 text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in opacity-0"
            style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}
          >
            Россия пала. Выжили немногие. <br />
            <span style={{ color: "#FF6B1A" }}>Ты — один из них.</span>
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
              style={{ background: "#FF6B1A", color: "#000", fontFamily: "'Oswald', sans-serif", boxShadow: "0 0 30px rgba(255,107,26,0.5)" }}
            >
              <Icon name="Send" size={20} />
              Играть в Telegram
            </a>
            <a
              href="#about"
              className="text-lg tracking-widest px-10 py-4 uppercase border transition-all duration-300 hover:border-[#FF6B1A] hover:text-[#FF6B1A]"
              style={{ borderColor: "rgba(255,255,255,0.3)", color: "rgba(255,255,255,0.8)", fontFamily: "'Oswald', sans-serif" }}
            >
              Узнать больше
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs tracking-widest text-gray-500 uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>Прокрути</span>
          <Icon name="ChevronDown" size={20} className="text-[#FF6B1A]" />
        </div>
      </section>

      {/* STATS BAR */}
      <div style={{ background: "#FF6B1A" }} className="py-4 px-8">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-around gap-4">
          {[
            { value: "250K+", label: "Игроков" },
            { value: "4.8★", label: "Рейтинг" },
            { value: "180+", label: "Локаций" },
            { value: "Free", label: "Скачивание" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-bold text-2xl text-black" style={{ fontFamily: "'Oswald', sans-serif" }}>{s.value}</div>
              <div className="text-xs text-black/70 uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="py-32 px-8 relative">
        <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(ellipse at top right, rgba(255,107,26,0.1) 0%, transparent 60%)" }} />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-xs tracking-[0.4em] text-[#FF6B1A] uppercase mb-4" style={{ fontFamily: "'Oswald', sans-serif" }}>— О игре</div>
              <h2 className="font-bold text-5xl md:text-6xl uppercase leading-tight text-white mb-8" style={{ fontFamily: "'Oswald', sans-serif" }}>
                Тьма<br />поглотила<br />всё
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6 text-lg">
                DARK RUSSIA — это мир разборок. Дерись, зарабатывай, побеждай.
                Игра находится в Telegram — заходи и начинай прямо сейчас.
              </p>

              {/* Ссылки проекта */}
              <div className="mb-6 space-y-2">
                <div className="text-xs tracking-[0.3em] text-[#FF6B1A] uppercase mb-3" style={{ fontFamily: "'Oswald', sans-serif" }}>Связи проекта</div>
                {[
                  { icon: "Send", label: "Telegram-канал", href: "https://t.me/duybarussiagamee" },
                  { icon: "Users", label: "ВК чат", href: "https://vk.me/join/I9LM97l0OGKJaRlBqOXo1" },
                ].map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rainbow-border flex items-center gap-3 px-4 py-2.5 rounded-sm transition-all duration-300 hover:text-[#FF6B1A] group"
                    style={{ color: "#9ca3af" }}
                  >
                    <Icon name={l.icon} fallback="Link" size={15} className="text-[#FF6B1A] flex-shrink-0" />
                    <span className="text-sm">{l.label}</span>
                    <Icon name="ExternalLink" size={12} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>

              {/* Связи с владельцем */}
              <div className="mb-8 space-y-2">
                <div className="text-xs tracking-[0.3em] text-[#FF6B1A] uppercase mb-3" style={{ fontFamily: "'Oswald', sans-serif" }}>Связь с владельцем</div>
                {[
                  { icon: "Send", label: "Telegram", href: "https://t.me/Vv54VvV", sub: "@Vv54VvV" },
                  { icon: "Users", label: "ВКонтакте", href: "https://vk.com/id1083357374", sub: "@id1083357374" },
                ].map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rainbow-border flex items-center gap-3 px-4 py-2.5 rounded-sm transition-all duration-300 hover:text-[#FF6B1A] group"
                    style={{ color: "#9ca3af" }}
                  >
                    <Icon name={l.icon} fallback="Link" size={15} className="text-[#FF6B1A] flex-shrink-0" />
                    <span className="text-sm">{l.label}</span>
                    <span className="text-xs text-gray-600 ml-1">{l.sub}</span>
                    <Icon name="ExternalLink" size={12} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <div className="h-px flex-1" style={{ background: "linear-gradient(to right, #FF6B1A, transparent)" }} />
                <span className="text-xs tracking-widest text-[#FF6B1A] uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>В Telegram</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {FEATURES.map((f) => (
                <div
                  key={f.title}
                  className="p-6 rounded-sm border transition-all duration-300 hover:border-[#FF6B1A]/50 hover:scale-105 cursor-default group"
                  style={{ background: "#1a1208", borderColor: "#3d2810" }}
                >
                  <Icon name={f.icon} fallback="Star" size={28} className="text-[#FF6B1A] mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-white text-lg mb-2 uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>{f.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DOWNLOAD */}
      <section id="download" className="py-32 px-8 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #1a0c04 0%, #0d0a08 50%, #150a00 100%)" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(255,107,26,0.15) 0%, transparent 70%)" }} />
        <div
          className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "repeating-linear-gradient(45deg, #FF6B1A 0px, transparent 1px, transparent 40px, #FF6B1A 41px)" }}
        />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="text-xs tracking-[0.4em] text-[#FF6B1A] uppercase mb-4" style={{ fontFamily: "'Oswald', sans-serif" }}>— Скачать</div>
          <h2 className="font-bold text-5xl md:text-7xl uppercase leading-tight text-white mb-6" style={{ fontFamily: "'Oswald', sans-serif" }}>
            Начни<br />выживать
          </h2>
          <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto">
            Бесплатно. Без регистрации. Просто скачай и погрузись в тьму.
          </p>

          <div className="flex justify-center mb-12">
            <a
              href="https://disk.yandex.ru/d/SDUyBQ9UqJhC7Q"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-xl tracking-widest px-12 py-5 uppercase font-semibold transition-all duration-300 hover:scale-105"
              style={{ background: "#FF6B1A", color: "#000", fontFamily: "'Oswald', sans-serif", boxShadow: "0 0 40px rgba(255,107,26,0.5)" }}
            >
              <Icon name="Download" size={24} />
              Скачать с Яндекс Диска
            </a>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-6 text-gray-500 text-sm">
              <span className="flex items-center gap-2">
                <Icon name="Shield" size={14} className="text-[#FF6B1A]" />
                Безопасно
              </span>
              <span className="flex items-center gap-2">
                <Icon name="Zap" size={14} className="text-[#FF6B1A]" />
                Быстрая загрузка
              </span>
              <span className="flex items-center gap-2">
                <Icon name="RefreshCw" size={14} className="text-[#FF6B1A]" />
                Авто-обновление
              </span>
            </div>
            <p className="text-gray-600 text-xs mt-2">Размер: 4.2 ГБ · Версия 2.4.1</p>
          </div>
        </div>
      </section>



      {/* FOOTER */}
      <footer className="py-12 px-8 border-t" style={{ borderColor: "#1f1208", background: "#0a0704" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-sm flex items-center justify-center" style={{ background: "#FF6B1A" }}>
              <span className="text-black font-bold text-xs" style={{ fontFamily: "'Oswald', sans-serif" }}>DR</span>
            </div>
            <span className="font-bold text-white tracking-widest" style={{ fontFamily: "'Oswald', sans-serif" }}>DARK RUSSIA</span>
          </div>
          <div className="flex gap-6">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-xs tracking-widest text-gray-600 hover:text-[#FF6B1A] transition-colors uppercase"
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