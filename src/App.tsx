import { useState, useEffect, useRef, type ReactNode } from 'react'
import {
  Menu, X, ArrowRight, ChevronUp,
  Mail, Globe, ArrowUpRight, Play, Check, Cpu, Award, Sparkle, Phone,
  Search, TrendingUp, PieChart, Bot
} from 'lucide-react'

// ─── Precision Brand & Tech SVG Icons ─────────────────────────────────────────
function TechLogo({ name, size = 16 }: { name: string; size?: number }) {
  const lowercase = name.toLowerCase()

  if (lowercase.includes('n8n')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className="inline-block flex-shrink-0">
        <path d="M4 12a4 4 0 118 0 4 4 0 01-8 0z" fill="#EA4B71" />
        <path d="M12 6a4 4 0 118 0 4 4 0 01-8 0z" fill="#FF6D5A" />
        <path d="M12 18a4 4 0 118 0 4 4 0 01-8 0z" fill="#FF9D00" />
      </svg>
    )
  }
  if (lowercase.includes('wordpress')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className="inline-block flex-shrink-0">
        <circle cx="12" cy="12" r="12" fill="#21759B" />
        <path fill="#FFFFFF" d="M12 2.25a9.75 9.75 0 0 0-6.67 2.63l4.18 11.46 2.92-8.52-1.31-3.64h2.15l1.31 3.64 3.27 9.07A9.75 9.75 0 0 0 12 2.25zm6.17 4.14l-2.44 7.33 1.97-5.36a9.75 9.75 0 0 0 .47-1.97zm-14.3 2.65l3.87 10.6a9.75 9.75 0 0 1-3.87-10.6zm8.13 12.71c-1.79 0-3.46-.48-4.91-1.33l4.57-12.52 4.58 12.53a9.7 9.7 0 0 1-4.24 1.32z" />
      </svg>
    )
  }
  if (lowercase.includes('cloudflare')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="#F38020" className="inline-block flex-shrink-0">
        <path d="M17.5 11.5c.2 0 .5 0 .7.1A4.5 4.5 0 009.5 8a5.5 5.5 0 00-5.3 4.1A4.5 4.5 0 005 21h12.5a3.5 3.5 0 000-7c0-.2-.1-.3-.1-.5z" />
      </svg>
    )
  }
  if (lowercase.includes('figma')) {
    return (
      <svg width={size} height={size} viewBox="0 0 38 57" fill="none" className="inline-block flex-shrink-0">
        <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1ABCFE" />
        <path d="M0 47.5a9.5 9.5 0 0 1 9.5-9.5H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0ACF83" />
        <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#FF7262" />
        <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E" />
        <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF" />
      </svg>
    )
  }
  if (lowercase.includes('ga4') || lowercase.includes('analytics')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className="inline-block flex-shrink-0">
        <rect x="3" y="13" width="4.5" height="8" rx="1.5" fill="#E37400" />
        <rect x="9.75" y="8" width="4.5" height="13" rx="1.5" fill="#F9AB00" />
        <rect x="16.5" y="3" width="4.5" height="18" rx="1.5" fill="#F9AB00" />
      </svg>
    )
  }
  if (lowercase.includes('looker')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className="inline-block flex-shrink-0">
        <rect width="24" height="24" rx="5" fill="#4285F4" />
        <circle cx="8" cy="14" r="3" fill="#34A853" />
        <path d="M13 8l4 4-4 4" stroke="#FFF" strokeWidth="2" strokeLinecap="round" />
      </svg>
    )
  }
  if (lowercase.includes('openai') || lowercase.includes('chatgpt')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="#10A37F" className="inline-block flex-shrink-0">
        <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0814 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.5045 4.5045 0 0 1-4.4945 4.4954zm-8.8593-4.2185a4.4755 4.4755 0 0 1-.5358-3.0037l.142.083 4.7782 2.7582a.7948.7948 0 0 0 .7854 0l5.8342-3.3685v2.3324a.0807.0807 0 0 1-.0332.0615l-4.8329 2.7915a4.5045 4.5045 0 0 1-6.1379-1.6544zM2.839 8.2432a4.4755 4.4755 0 0 1 2.3406-1.963l-.001.1643v5.5164a.7948.7948 0 0 0 .3927.6813l5.8342 3.3685-2.02 1.1686a.071.071 0 0 1-.0712 0l-4.833-2.7915A4.5045 4.5045 0 0 1 2.839 8.2432zm16.5963 3.8558l-5.8342-3.3685 2.02-1.1686a.071.071 0 0 1 .0712 0l4.833 2.7915a4.5093 4.5093 0 0 1-.6065 8.1345v-5.7076a.7948.7948 0 0 0-.4835-.6813zm2.0104-3.0483l-.1419-.083-4.7783-2.7582a.7948.7948 0 0 0-.7854 0L9.9059 9.578V7.2456a.0807.0807 0 0 1 .0332-.0615l4.8329-2.7915a4.5045 4.5045 0 0 1 6.6737 4.6591zm-10.985-3.313a4.4755 4.4755 0 0 1 2.8764 1.0408l-.1419.0814-4.7783 2.7582a.7948.7948 0 0 0-.3927.6813v6.7369l-2.02-1.1686a.071.071 0 0 1-.038-.052V9.9705a4.5045 4.5045 0 0 1 4.4945-4.4954zm-1.1444 8.7887l2.8764-1.6608 2.8764 1.6608v3.3216l-2.8764 1.6608-2.8764-1.6608z" />
      </svg>
    )
  }
  if (lowercase.includes('gemini')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className="inline-block flex-shrink-0">
        <path d="M12 0C12 6.627 6.627 12 0 12c6.627 0 12 5.373 12 12 0-6.627 5.373-12 12-12-6.627 0-12-5.373-12-12z" fill="url(#gemini-grad-main)" />
        <defs>
          <linearGradient id="gemini-grad-main" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1A73E8" />
            <stop offset="0.5" stopColor="#8AB4F8" />
            <stop offset="1" stopColor="#D93025" />
          </linearGradient>
        </defs>
      </svg>
    )
  }
  if (lowercase.includes('telegram')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="#29B6F6" className="inline-block flex-shrink-0">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
      </svg>
    )
  }
  if (lowercase.includes('appsheet')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className="inline-block flex-shrink-0">
        <rect x="2" y="2" width="9" height="9" rx="2" fill="#1A73E8" />
        <rect x="13" y="2" width="9" height="9" rx="2" fill="#34A853" />
        <rect x="2" y="13" width="9" height="9" rx="2" fill="#FBBC04" />
        <rect x="13" y="13" width="9" height="9" rx="2" fill="#EA4335" />
      </svg>
    )
  }
  if (lowercase.includes('zalo')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="#0068FF" className="inline-block flex-shrink-0">
        <path d="M12 2C6.48 2 2 6.48 2 12c0 1.82.49 3.53 1.35 5L2 22l5.18-1.31C8.6 21.53 10.25 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" />
      </svg>
    )
  }

  return <Sparkle size={size} className="text-blue-500 inline-block flex-shrink-0" />
}

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  )
}

// ─── Custom Hooks ──────────────────────────────────────────────────────────────
function useFadeUp() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add('visible')
        else el.classList.remove('visible')
      },
      { threshold: 0.1, rootMargin: '-20px 0px -20px 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

function useScrollTop(threshold = 400) {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const h = () => setShow(window.scrollY > threshold)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [threshold])
  return show
}

// ─── Reusable Components ──────────────────────────────────────────────────────
function FadeUp({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useFadeUp()
  return (
    <div ref={ref} className={`fade-up ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

function SectionHeading({ title, sub }: { title: string; sub?: string }) {
  return (
    <div className="max-w-3xl mb-12 sm:mb-20">
      <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-4 text-slate-900">
        {title}
      </h2>
      {sub && (
        <p className="text-base sm:text-xl font-normal leading-relaxed text-slate-500">
          {sub}
        </p>
      )}
    </div>
  )
}

// ─── Header / Navigation ──────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    ['Trang chủ', '#hero'],
    ['Vì sao chọn tôi', '#why-choose-me'],
    ['Năng lực', '#offerings'],
    ['Kiến trúc SEO', '#seo-architecture'],
    ['n8n Workflows', '#n8n-canvas'],
    ['Case Study', '#casestudy'],
    ['Kinh nghiệm', '#experience'],
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3 sm:py-4 border-b border-slate-200/60 backdrop-blur-xl bg-white/90' : 'py-4 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <a href="#hero" className="font-extrabold text-base sm:text-xl tracking-tight text-slate-900">
          Đinh Thanh Tùng <span className="font-semibold text-slate-400">Portfolio</span><span className="text-blue-500">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 bg-white/90 backdrop-blur-md px-7 py-2.5 rounded-full border border-slate-200 shadow-sm">
          {navItems.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-sm font-semibold text-slate-600 hover:text-blue-500 transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-all shadow-md shadow-blue-600/20"
          >
            Kết nối ngay <ArrowRight size={15} />
          </a>

          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="md:hidden p-2 text-slate-700"
          >
            {mobileMenu ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileMenu && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 py-4 flex flex-col gap-3 shadow-xl">
          {navItems.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setMobileMenu(false)}
              className="text-sm font-semibold py-2 text-slate-700"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenu(false)}
            className="mt-2 bg-blue-600 text-white text-center text-sm font-semibold py-3 rounded-full"
          >
            Kết nối ngay
          </a>
        </div>
      )}
    </header>
  )
}

// ─── Hero Graphic Visual ──────────────────────────────────────────────────────
function HeroVisual() {
  return (
    <div className="relative w-full max-w-[520px] aspect-square mx-auto flex items-center justify-center select-none">
      
      {/* ── Background SVG Accents & Decorative Curves ── */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 500 500" fill="none">
        {/* Top-Left Arc */}
        <path d="M 80 120 A 210 210 0 0 1 340 30" stroke="#2563EB" strokeWidth="2" opacity="0.8" />
        
        {/* Bottom-Right Outer Arc */}
        <path d="M 470 240 A 210 210 0 0 1 410 420" stroke="#2563EB" strokeWidth="2" opacity="0.8" />

        {/* Top-Right Decorative Circle */}
        <circle cx="430" cy="50" r="18" stroke="#2563EB" strokeWidth="2" fill="none" opacity="0.8" />

        {/* Right Dot Grid */}
        <g fill="#3B82F6" opacity="0.4">
          {Array.from({ length: 4 }).map((_, col) =>
            Array.from({ length: 5 }).map((_, row) => (
              <circle key={`${col}-${row}`} cx={410 + col * 12} cy={170 + row * 12} r="2" />
            ))
          )}
        </g>
      </svg>

      {/* ── Soft Light Blue Blob (Bottom Left) ── */}
      <div className="absolute left-[0%] bottom-[10%] w-[50%] h-[40%] rounded-full bg-blue-100/80 blur-xl pointer-events-none z-0" />

      {/* ── Central Vibrant Blue Circle ── */}
      <div className="absolute w-[72%] h-[72%] rounded-full bg-gradient-to-tr from-[#1D4ED8] to-[#2563EB] shadow-2xl shadow-blue-600/30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0" />

      {/* ── Transparent Cutout Person Image ── */}
      <img
        src="/hero-person-cutout-clean.png"
        alt="Đinh Thanh Tùng - Marketing Systems Architect"
        className="relative z-10 w-[88%] h-auto object-contain mx-auto transition-transform duration-500 hover:scale-[1.02] drop-shadow-xl"
      />

      {/* ── 4 Floating Badges ── */}
      {/* 1. Top Right: AI Automation */}
      <div className="absolute top-[16%] right-[2%] z-20 apple-float" style={{ animationDelay: '0s' }}>
        <div className="bg-white/95 backdrop-blur-md border border-slate-100 shadow-[0_12px_30px_rgba(0,0,0,0.1)] px-4 py-2.5 sm:px-5 sm:py-3 rounded-2xl flex items-center gap-3 font-bold text-xs sm:text-sm text-slate-800 tracking-tight hover:scale-105 transition-transform">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-blue-600 flex items-center justify-center text-white flex-shrink-0 shadow-md shadow-blue-600/30">
            <Bot size={18} />
          </div>
          <span>AI Automation</span>
        </div>
      </div>

      {/* 2. Middle Right: Growth Architect */}
      <div className="absolute top-[52%] right-[-2%] z-20 apple-float" style={{ animationDelay: '1.5s' }}>
        <div className="bg-white/95 backdrop-blur-md border border-slate-100 shadow-[0_12px_30px_rgba(0,0,0,0.1)] px-4 py-2.5 sm:px-5 sm:py-3 rounded-2xl flex items-center gap-3 font-bold text-xs sm:text-sm text-slate-800 tracking-tight hover:scale-105 transition-transform">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-blue-600 flex items-center justify-center text-white flex-shrink-0 shadow-md shadow-blue-600/30">
            <TrendingUp size={18} />
          </div>
          <span>Growth Architect</span>
        </div>
      </div>

      {/* 3. Middle Left: Technical SEO */}
      <div className="absolute top-[64%] left-[-2%] z-20 apple-float" style={{ animationDelay: '1s' }}>
        <div className="bg-white/95 backdrop-blur-md border border-slate-100 shadow-[0_12px_30px_rgba(0,0,0,0.1)] px-4 py-2.5 sm:px-5 sm:py-3 rounded-2xl flex items-center gap-3 font-bold text-xs sm:text-sm text-slate-800 tracking-tight hover:scale-105 transition-transform">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-600 flex items-center justify-center text-white flex-shrink-0 shadow-md shadow-blue-600/30">
            <Search size={16} />
          </div>
          <span>Technical SEO</span>
        </div>
      </div>

      {/* 4. Bottom Left: Data Analytics */}
      <div className="absolute bottom-[6%] left-[4%] z-20 apple-float" style={{ animationDelay: '2s' }}>
        <div className="bg-white/95 backdrop-blur-md border border-slate-100 shadow-[0_12px_30px_rgba(0,0,0,0.1)] px-4 py-2.5 sm:px-5 sm:py-3 rounded-2xl flex items-center gap-3 font-bold text-xs sm:text-sm text-slate-800 tracking-tight hover:scale-105 transition-transform">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-600 flex items-center justify-center text-white flex-shrink-0 shadow-md shadow-blue-600/30">
            <PieChart size={16} />
          </div>
          <span>Data Analytics</span>
        </div>
      </div>

    </div>
  )
}

// ─── Hero Section ─────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section id="hero" className="pt-28 sm:pt-44 pb-20 sm:pb-32 relative overflow-hidden scroll-mt-28">
      <div className="ambient-glow-blue -top-24 -left-24" />
      <div className="ambient-glow-purple top-1/3 -right-24" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            <FadeUp delay={0}>
              <h1 className="text-3xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.12] text-slate-900">
                Tôi xây dựng <br className="hidden sm:block" />
                <span className="text-blue-600">hệ thống Marketing</span> <br className="hidden sm:block" />
                vận hành bằng dữ liệu.
              </h1>
            </FadeUp>

            <FadeUp delay={100}>
              <p className="text-base sm:text-xl font-normal leading-relaxed max-w-xl mx-auto lg:mx-0 text-slate-500">
                Tôi kết hợp SEO, AI Workflow, CRO và Automation để xây dựng các kiến trúc Marketing giúp doanh nghiệp tăng trưởng bền vững — đo lường được và tự động hoá 70%.
              </p>
            </FadeUp>

            <FadeUp delay={200}>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
                <a
                  href="#casestudy"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm sm:text-base px-8 py-3.5 sm:py-4 rounded-full shadow-lg shadow-blue-600/25 transition-all"
                >
                  Xem Case Study Thực Tế <ArrowRight size={18} />
                </a>
                <a
                  href="#n8n-canvas"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-700 font-bold text-sm sm:text-base px-8 py-3.5 sm:py-4 rounded-full hover:bg-slate-50 transition-all shadow-sm"
                >
                  Xem Sơ đồ n8n Canvas
                </a>
              </div>
            </FadeUp>

            <FadeUp delay={300}>
              <div className="pt-6 sm:pt-8 border-t border-slate-200 space-y-6">
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
                  <span className="bg-blue-50 text-blue-700 border border-blue-200 text-xs font-semibold px-4 py-1.5 rounded-full flex items-center gap-2">
                    <Award size={15} className="text-blue-500" /> IELTS 7.0 (English)
                  </span>
                  <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold px-4 py-1.5 rounded-full flex items-center gap-2">
                    <Globe size={15} className="text-emerald-500" /> HSK3 (Chinese / 中文)
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-4 sm:gap-6 max-w-md mx-auto lg:mx-0">
                  <div>
                    <p className="text-2xl sm:text-4xl font-extrabold text-blue-600">+238%</p>
                    <p className="text-xs font-medium mt-1 text-slate-500">Organic Traffic</p>
                  </div>
                  <div>
                    <p className="text-2xl sm:text-4xl font-extrabold text-emerald-500">70%</p>
                    <p className="text-xs font-medium mt-1 text-slate-500">Lead Auto</p>
                  </div>
                  <div>
                    <p className="text-2xl sm:text-4xl font-extrabold text-amber-500">&lt; 5s</p>
                    <p className="text-xs font-semibold mt-1 text-slate-500">SLA Phản hồi</p>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <FadeUp delay={150} className="w-full">
              <HeroVisual />
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Section: Why Choose Me (Apple 3D Spatial Depth Typography) ──────────────
function WhyChooseMe() {
  const spatialThoughts = [
    // ── GẦN QUOTE (Foreground Layer: Everyday Marketer Actions, Bold & Crisp)
    { text: 'Khách hỏi là phản hồi ngay lập tức', pos: 'top-[36%] left-[3%] sm:left-[7%]', style: 'text-sm sm:text-base font-extrabold text-blue-600/75', anim: 'apple-float 14s ease-in-out infinite' },
    { text: 'Biến người xem thành người mua', pos: 'top-[32%] right-[3%] sm:right-[8%]', style: 'text-sm sm:text-base font-extrabold text-slate-900/75', anim: 'apple-float 12s ease-in-out infinite 1s' },
    { text: 'Chăm sóc lại khách hàng cũ', pos: 'bottom-[22%] left-[4%] sm:left-[9%]', style: 'text-sm sm:text-base font-extrabold text-blue-600/80', anim: 'apple-float 16s ease-in-out infinite 0.5s' },
    { text: 'Mọi ngân sách đều phải ra doanh số', pos: 'bottom-[24%] right-[3%] sm:right-[8%]', style: 'text-xs sm:text-base font-bold text-slate-900/70', anim: 'apple-float 13s ease-in-out infinite 2s' },

    // ── TRUNG TẦNG (Midground Layer: Everyday Attraction & Engagement)
    { text: 'Làm SEO để khách tự tìm đến', pos: 'top-[10%] left-[5%] sm:left-[10%]', style: 'text-xs sm:text-sm font-bold text-slate-800/50', anim: 'apple-float 15s ease-in-out infinite 1.5s' },
    { text: 'Nội dung chạm đúng nhu cầu', pos: 'top-[12%] right-[4%] sm:right-[11%]', style: 'text-xs sm:text-sm font-semibold text-slate-800/55', anim: 'apple-float 17s ease-in-out infinite 2.5s' },
    { text: 'Marketing và Sales phải hiểu nhau', pos: 'top-[6%] left-[28%] sm:left-[34%]', style: 'text-xs sm:text-sm font-bold text-blue-600/55', anim: 'apple-float 11s ease-in-out infinite 0.8s' },
    { text: 'Nhìn số liệu để sửa chiến dịch', pos: 'bottom-[6%] left-[26%] sm:left-[32%]', style: 'text-xs sm:text-sm font-bold text-slate-800/50', anim: 'apple-float 13s ease-in-out infinite 3s' },

    // ── XA QUOTE (Background Layer: Operational Friction Reduction)
    { text: 'Tự động hóa bớt việc chân tay', pos: 'bottom-[12%] left-[2%] sm:left-[5%]', style: 'text-[11px] sm:text-xs font-medium text-slate-600/35 blur-[0.5px]', anim: 'apple-float 20s ease-in-out infinite 3.5s' },
    { text: 'Đừng để rơi mất tin nhắn của khách', pos: 'bottom-[12%] right-[2%] sm:right-[5%]', style: 'text-[11px] sm:text-xs font-semibold text-slate-600/35 blur-[0.5px]', anim: 'apple-float 18s ease-in-out infinite 4s' },
    { text: 'Hình ảnh đẹp giữ chân người xem', pos: 'top-[5%] left-[8%] sm:left-[14%]', style: 'text-[11px] sm:text-xs font-semibold text-slate-600/40 blur-[0.4px]', anim: 'apple-float 16s ease-in-out infinite 2s' },
    { text: 'Kéo đúng người vào xem bài', pos: 'bottom-[4%] right-[18%] sm:right-[26%]', style: 'text-[11px] sm:text-xs font-medium text-slate-600/35 blur-[0.5px]', anim: 'apple-float 15s ease-in-out infinite 1.2s' },
  ]

  return (
    <section id="why-choose-me" className="py-24 sm:py-32 min-h-[580px] sm:min-h-[660px] relative scroll-mt-28 border-t border-slate-200/50 overflow-hidden bg-[#FAFAF8] flex flex-col justify-center select-none">
      
      {/* ── Background 3D Spatial Depth Typography (Straight Focus, Depth Layers) ── */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {spatialThoughts.map((thought, i) => (
          <div
            key={i}
            className={`absolute ${thought.pos} hidden sm:block`}
            style={{ animation: thought.anim }}
          >
            <span className={`inline-block tracking-tight ${thought.style} cursor-default transition-all duration-500 hover:opacity-100 hover:scale-105`}>
              {thought.text}
            </span>
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-20 text-center">
        
        {/* Apple Accent Title in Vibrant Blue */}
        <FadeUp>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-blue-600 mb-8 sm:mb-12">
            Vì sao chọn tôi?
          </h2>
        </FadeUp>

        {/* Centered Refined Quote Typography */}
        <FadeUp delay={100}>
          <blockquote className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] leading-tight sm:leading-[1.25] tracking-tight max-w-3xl mx-auto drop-shadow-sm">
            “Marketing không thất bại vì thiếu công cụ.<br className="hidden sm:inline" />
            Marketing thất bại khi mọi thứ không kết nối với nhau.”
          </blockquote>
        </FadeUp>

        {/* Mobile Philosophy Tags */}
        <FadeUp delay={200} className="sm:hidden mt-10">
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs font-semibold text-slate-500">
            {spatialThoughts.slice(0, 8).map((b, i) => (
              <span key={i}>{b.text}</span>
            ))}
          </div>
        </FadeUp>

      </div>
    </section>
  )
}

// ─── Section 2: Offerings ─────────────────────────────────────────────────────
function Offerings() {
  const offerings = [
    {
      title: 'Marketing Automation',
      desc: 'Thiết kế & triển khai hệ thống tự động hoá nuôi dưỡng lead, CRM và đồng bộ dữ liệu qua API/Webhook.',
      icon: <TechLogo name="n8n" size={24} />,
      tags: ['n8n', 'AppSheet', 'REST API', 'CRM SOP'],
    },
    {
      title: 'Technical SEO & Architecture',
      desc: 'Tối ưu kiến trúc website, Core Web Vitals (95+), Topic Cluster và Local SEO giúp tăng thứ hạng bền vững.',
      icon: <TechLogo name="wordpress" size={24} />,
      tags: ['WordPress', 'RankMath', 'Cloudflare', 'Ahrefs'],
    },
    {
      title: 'UI/UX & CRO Strategy',
      desc: 'Nghiên cứu Customer Journey và thiết kế giao diện hướng đến tỷ lệ chuyển đổi cao (Conversion Rate).',
      icon: <TechLogo name="figma" size={24} />,
      tags: ['Figma', 'Mobile First', 'A/B Test', 'Heatmap'],
    },
    {
      title: 'Data Analytics & Reporting',
      desc: 'Xây dựng dashboard tập trung real-time trên Looker Studio & GA4 để theo dõi chỉ số hiệu năng thực.',
      icon: <TechLogo name="ga4" size={24} />,
      tags: ['GA4', 'Looker Studio', 'BigQuery', 'GTM'],
    },
    {
      title: 'AI Content Pipeline',
      desc: 'Xây dựng AI Content Factory tự động hóa quy trình sản xuất bài viết, kịch bản video và tạo ảnh AI.',
      icon: <TechLogo name="gemini" size={24} />,
      tags: ['OpenAI', 'Gemini', 'Stable Diffusion', 'Telegram Bot'],
    },
    {
      title: 'Chứng chỉ & Ngoại ngữ Global',
      desc: 'Sở hữu năng lực ngoại ngữ và chứng chỉ quốc tế phục vụ giao tiếp, làm việc toàn cầu và nghiên cứu tài liệu.',
      icon: <Award className="text-amber-500 inline-block flex-shrink-0" size={24} />,
      tags: ['IELTS 7.0 (English)', 'HSK3 (Chinese / 中文)', 'Global Communication'],
    },
  ]

  return (
    <section id="offerings" className="py-24 sm:py-36 bg-slate-50/70 border-y border-slate-200 relative scroll-mt-28">
      <div className="ambient-glow-emerald top-1/4 -left-32" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeading
          title="Năng lực cốt lõi hệ thống"
          sub="Bộ giải pháp tổng thể kết hợp giữa công nghệ, dữ liệu và tư duy Marketing hệ thống."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {offerings.map((item, idx) => (
            <FadeUp key={item.title} delay={idx * 80}>
              <div className="py-6 border-b border-slate-200 flex flex-col justify-between h-full group hover:border-blue-500 transition-colors">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-50 transition-transform shadow-sm">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-base leading-relaxed mb-6 font-normal text-slate-500">
                    {item.desc}
                  </p>
                </div>
                <div className="text-xs font-semibold text-slate-400 pt-4 border-t border-slate-100">
                  {item.tags.join('  ·  ')}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Section 3: SEO Architecture ─────────────────────────────────────────────
function SeoArchitecture() {
  const seoEditorialRows = [
    {
      num: '01',
      title: 'Hạ tầng & Chuẩn hóa Kỹ thuật',
      techStack: [
        { name: 'Cloudflare', logo: 'Cloudflare' },
        { name: 'WordPress', logo: 'WordPress' },
        { name: 'Schema JSON-LD', logo: '' },
        { name: 'Crawl Budget', logo: '' },
      ],
      metric: 'PageSpeed 99/100',
      desc: 'Tối ưu Crawl Budget, cấu trúc Server, Caching Cloudflare và mã hóa Schema Entity JSON-LD chuẩn Google Knowledge Graph.',
    },
    {
      num: '02',
      title: 'Kiến trúc Cụm chủ đề Ngữ nghĩa (Topic Cluster)',
      techStack: [
        { name: 'Topic Cluster Matrix', logo: '' },
        { name: 'RankMath', logo: 'WordPress' },
        { name: 'Link Juice Flow', logo: '' },
        { name: 'Search Intent', logo: '' },
      ],
      metric: 'Topical Authority',
      desc: 'Nghiên cứu Search Intent, quy hoạch ma trận bài Trụ cột (Pillar) & Vệ tinh (Cluster) tối ưu dòng chảy liên kết (Link Juice).',
    },
    {
      num: '03',
      title: 'Local SEO B2B Entity',
      techStack: [
        { name: 'Google Business Profile', logo: '' },
        { name: 'Schema Local Business', logo: '' },
        { name: 'Local Intent B2B', logo: '' },
      ],
      metric: 'Rank #1 Local B2B',
      desc: 'Phủ sóng từ khóa thương hiệu & địa phương (Đà Nẵng / Miền Trung), đồng bộ Google Business Profile & Schema Local Business.',
    },
    {
      num: '04',
      title: 'Đo lường & Tracking Real-time',
      techStack: [
        { name: 'GA4', logo: 'GA4' },
        { name: 'Looker Studio', logo: 'Looker' },
        { name: 'Search Console API', logo: '' },
        { name: 'BigQuery', logo: '' },
      ],
      metric: 'Core Web Vitals PASS',
      desc: 'Kết nối Google Search Console API + GA4 + Looker Studio theo dõi thứ hạng từ khóa và luồng chuyển đổi tự động hằng ngày.',
    },
  ]

  return (
    <section id="seo-architecture" className="py-24 sm:py-36 relative scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 sm:mb-24 pb-8 border-b border-slate-200">
          <div className="lg:col-span-8">
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-3 block">
              • TECHNICAL SEO BLUEPRINT
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight text-slate-900">
              Kiến trúc SEO Website & Tăng trưởng Organic Bền vững
            </h2>
          </div>
          <div className="lg:col-span-4 flex items-center justify-start lg:justify-end gap-6 sm:gap-8 pb-2">
            <div>
              <p className="text-3xl sm:text-5xl font-extrabold text-emerald-500">99/100</p>
              <p className="text-xs font-semibold mt-1 text-slate-500">PageSpeed Mobile</p>
            </div>
            <div className="w-px h-10 sm:h-12 bg-slate-200" />
            <div>
              <p className="text-3xl sm:text-5xl font-extrabold text-blue-600">PASS</p>
              <p className="text-xs font-semibold mt-1 text-slate-500">Core Web Vitals</p>
            </div>
          </div>
        </div>

        <div className="space-y-12 sm:space-y-16">
          {seoEditorialRows.map((row, idx) => (
            <FadeUp key={row.num} delay={idx * 100}>
              <div className="py-6 sm:py-8 border-b border-slate-200 space-y-4 group">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <div className="flex items-baseline gap-4">
                    <span className="text-2xl sm:text-4xl font-extrabold text-slate-300 group-hover:text-blue-600 transition-colors">
                      {row.num}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:translate-x-1 transition-transform">
                      {row.title}
                    </h3>
                  </div>
                  <span className="text-xs font-semibold text-emerald-600">★ {row.metric}</span>
                </div>
                <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-500 pl-0 sm:pl-10">
                  {row.techStack.map((tech, tIdx) => (
                    <span key={tech.name} className="inline-flex items-center gap-1.5 hover:text-blue-500 transition-colors cursor-default">
                      {tech.logo && <TechLogo name={tech.logo} size={15} />}
                      <span>{tech.name}</span>
                      {tIdx < row.techStack.length - 1 && <span className="text-slate-300 ml-1.5">·</span>}
                    </span>
                  ))}
                </div>
                <p className="text-sm sm:text-base leading-relaxed text-slate-500 font-normal pl-0 sm:pl-10">
                  {row.desc}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Section 4: n8n Canvas UI ─────────────────────────────────────────────────
function N8nCanvasUI() {
  const [activeTab, setActiveTab] = useState(0)

  const workflows = [
    {
      id: 'fb-ai-crm',
      title: 'Facebook AI Sales CRM V3 (Thành Tín)',
      shortTitle: 'Sales CRM AI',
      nodes: [
        { id: 1, name: 'Facebook Webhook', type: 'Trigger', color: 'bg-amber-500', desc: 'Lắng nghe tin nhắn mới' },
        { id: 2, name: 'Gemini AI Agent', type: 'AI Intent', color: 'bg-purple-600', desc: 'Phân loại nhu cầu báo giá đồng phục' },
        { id: 3, name: 'AppSheet CRM', type: 'Database', color: 'bg-emerald-600', desc: 'Tạo Lead & phân công Saler' },
        { id: 4, name: 'Telegram Priority', type: 'Alert SLA', color: 'bg-blue-600', desc: 'Báo động Sale < 5 giây' },
      ]
    },
    {
      id: 'ai-image-factory',
      title: 'AI Content & Image Factory (Stable Diffusion)',
      shortTitle: 'AI Content Factory',
      nodes: [
        { id: 1, name: 'Cron Schedule', type: 'Trigger', color: 'bg-amber-500', desc: 'Chạy theo lịch 4h sáng' },
        { id: 2, name: 'Gemini Writer', type: 'AI Text', color: 'bg-purple-600', desc: 'Viết bài & sinh Prompt mẫu áo' },
        { id: 3, name: 'Stable Diffusion', type: 'AI Image', color: 'bg-indigo-600', desc: 'Sinh ảnh mẫu đồng phục đẹp' },
        { id: 4, name: 'Telegram Approval', type: 'Callback Bot', color: 'bg-blue-600', desc: 'Nút Duyệt / Sửa trực tiếp' },
      ]
    },
    {
      id: 'competitor-scraper',
      title: 'Research Content Facebook (Organic + Ads)',
      shortTitle: 'Research Đối Thủ',
      nodes: [
        { id: 1, name: 'Apify Scraper', type: 'Scraper', color: 'bg-amber-500', desc: 'Cào bài viết đối thủ B2B' },
        { id: 2, name: 'Gemini Analysis', type: 'AI Insight', color: 'bg-purple-600', desc: 'Bóc tách góc nhìn & Hook' },
        { id: 3, name: 'Google Sheets', type: 'Archive', color: 'bg-emerald-600', desc: 'Lưu trữ thư viện ý tưởng' },
        { id: 4, name: 'Telegram Brief', type: 'Daily Report', color: 'bg-blue-600', desc: 'Báo cáo xu hướng 8h sáng' },
      ]
    }
  ]

  const activeFlow = workflows[activeTab]

  return (
    <section id="n8n-canvas" className="py-24 sm:py-36 bg-slate-50/70 border-y border-slate-200 relative scroll-mt-28">
      <div className="ambient-glow-blue top-1/3 -left-32" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeading
          title="Trực quan hoá n8n Workflows Thực tế"
          sub="Giao diện mô phỏng 100% Canvas n8n thực tế đang tự động hoá cho Đồng phục Thành Tín."
        />

        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-6 sm:mb-10 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
          {workflows.map((wf, i) => (
            <button
              key={wf.id}
              onClick={() => setActiveTab(i)}
              className={`flex-shrink-0 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs font-bold transition-all ${
                activeTab === i
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              <span className="sm:hidden">{wf.shortTitle}</span>
              <span className="hidden sm:inline">{wf.title}</span>
            </button>
          ))}
        </div>

        <div className="rounded-3xl border border-slate-800 shadow-2xl overflow-hidden">
          <div className="bg-[#151C2C] border-b border-slate-800 px-4 sm:px-6 py-4 flex items-center justify-between text-white text-xs">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-slate-400 hidden sm:inline">Personal /</span>
              <span className="font-bold text-white truncate max-w-[170px] sm:max-w-none">{activeFlow.title}</span>
            </div>
            <span className="bg-emerald-950 border border-emerald-700 text-emerald-400 px-3 py-0.5 rounded-full text-[11px] font-bold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Active
            </span>
          </div>

          <div className="n8n-canvas-bg p-4 sm:p-14 min-h-[380px] flex flex-col justify-between relative">
            <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block" style={{ zIndex: 1 }}>
              <path d="M 220 180 C 300 180, 320 180, 400 180" stroke="#3B82F6" strokeWidth="2" fill="none" className="wire-animated" />
              <path d="M 490 180 C 570 180, 590 180, 670 180" stroke="#3B82F6" strokeWidth="2" fill="none" className="wire-animated" />
              <path d="M 760 180 C 840 180, 860 180, 940 180" stroke="#3B82F6" strokeWidth="2" fill="none" className="wire-animated" />
            </svg>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6 relative z-10 my-auto">
              {activeFlow.nodes.map((node) => (
                <div key={node.id} className="bg-[#172033] border border-slate-700/80 rounded-2xl overflow-hidden shadow-xl hover:border-blue-500 hover:-translate-y-1 transition-all">
                  <div className={`${node.color} px-4 py-1.5 text-[11px] font-bold text-white flex items-center justify-between`}>
                    <span>{node.type}</span>
                    <span className="text-[9px] opacity-80">n8n Node</span>
                  </div>
                  <div className="p-4 sm:p-6">
                    <h4 className="font-bold text-white text-sm mb-1.5">{node.name}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">{node.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6 flex flex-wrap items-center justify-between gap-4 border-t border-slate-800/80 relative z-10 text-xs">
              <div className="flex items-center gap-2 text-slate-400">
                <Cpu size={15} className="text-blue-400" />
                <span>Trigger: Automated Callback Webhook Event</span>
              </div>
              <div className="bg-rose-600 hover:bg-rose-700 text-white font-bold px-5 py-2 rounded-xl flex items-center gap-2 cursor-pointer shadow-lg shadow-rose-600/30 transition-all text-xs">
                <Play size={13} fill="currentColor" /> Execute Workflow
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Section 5: Case Study ────────────────────────────────────────────────────
function CaseStudy() {
  return (
    <section id="casestudy" className="py-24 sm:py-32 scroll-mt-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          title="Dự án Case Study nổi bật"
          sub="Minh chứng từ hệ thống Marketing Automation B2B đã được vận hành thực tế tại Đồng phục Thành Tín."
        />

        <FadeUp>
          <div className="card-clean overflow-hidden flex flex-col lg:flex-row items-stretch">

            {/* ── Ảnh: trên cùng (mobile), bên phải (desktop) ── */}
            <div className="order-first lg:order-last lg:w-[45%] flex-shrink-0 flex items-center justify-center overflow-hidden">
              <img
                src="/build-systems-casestudy.png"
                alt="Build Systems Not More Work - AI Growth System for Modern Marketers"
                className="w-full aspect-square object-contain rounded-2xl transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* ── Text: dưới (mobile), bên trái (desktop) ── */}
            <div className="order-last lg:order-first lg:w-[55%] p-6 sm:p-10 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-blue-600 border-b border-blue-500 pb-0.5 mb-5 block w-fit">
                  Chuyển đổi số B2B · Đồng phục Thành Tín
                </span>
                <h3 className="text-xl sm:text-3xl font-extrabold mb-3 leading-tight text-slate-900">
                  Hệ thống Marketing Automation &amp; CRM Tự động 70% Lead B2B
                </h3>
                <p className="text-sm leading-relaxed mb-6 font-normal text-slate-500">
                  Tái kiến trúc lại toàn bộ trải nghiệm số cho thương hiệu may mặc B2B 15 năm tuổi: Tối ưu SEO Topic Cluster, tích hợp Zalo OA tự động phản hồi SLA &lt;5s, CRM AppSheet và 18 luồng n8n tự động viết bài, sinh ảnh AI.
                </p>
                <div className="grid grid-cols-3 gap-3 sm:gap-5 mb-6">
                  <div>
                    <p className="text-xl sm:text-3xl font-extrabold text-blue-600">+238%</p>
                    <p className="text-xs font-medium mt-1 text-slate-500">Organic Traffic</p>
                  </div>
                  <div>
                    <p className="text-xl sm:text-3xl font-extrabold text-emerald-500">70%</p>
                    <p className="text-xs font-medium mt-1 text-slate-500">Lead Tự động</p>
                  </div>
                  <div>
                    <p className="text-xl sm:text-3xl font-extrabold text-amber-500">&lt; 5s</p>
                    <p className="text-xs font-medium mt-1 text-slate-500">SLA Zalo OA</p>
                  </div>
                </div>
              </div>
              <a href="#experience" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-bold text-sm border-b-2 border-blue-600 pb-1 transition-all hover:translate-x-1 w-fit">
                Xem Chi Tiết Quy Trình Vận Hành <ArrowUpRight size={16} />
              </a>
            </div>

          </div>
        </FadeUp>
      </div>
    </section>
  )
}

// ─── Section 6: Experience ────────────────────────────────────────────────────
function Experience() {
  const thietTinProjects = [
    {
      num: '01',
      title: 'Tự động hóa Tiếp nhận & Chăm sóc Lead 24/7 (Zalo OA / Messenger)',
      flowItems: [
        { label: 'Zalo OA', logo: 'Zalo' },
        { label: 'n8n Middleware API', logo: 'n8n' },
        { label: 'Gemini AI', logo: 'Gemini' },
        { label: 'AppSheet CRM', logo: 'AppSheet' },
      ],
      metric: '< 5s SLA Phản hồi 24/7',
      desc: 'Dùng n8n kết nối API Zalo OA, Messenger và AppSheet CRM. Tích hợp AI Gemini đọc tin nhắn khách hỏi giá/mẫu áo, tự động trích xuất Tên + SĐT + Nhu cầu và phản hồi tức thì.',
    },
    {
      num: '02',
      title: 'Hệ thống Quét & Phân tích Quảng cáo Đối thủ Tự động',
      flowItems: [
        { label: 'FB Ad Library', logo: 'Apify' },
        { label: 'Apify Scraper', logo: 'n8n' },
        { label: 'Gemini Trend Engine', logo: 'Gemini' },
        { label: 'Telegram Brief', logo: 'Telegram' },
      ],
      metric: '100% Auto Report',
      desc: 'Dựng kịch bản n8n tự động cào dữ liệu từ Facebook Ad Library của các xưởng may đối thủ B2B, gửi báo cáo phân tích mẫu áo hot và góc nhìn nội dung về Telegram hằng tuần.',
    },
    {
      num: '03',
      title: 'Nhà máy Sản xuất Nội dung & Ảnh mẫu áo bằng AI',
      flowItems: [
        { label: 'OpenAI Prompt', logo: 'OpenAI' },
        { label: 'Gemini Writer', logo: 'Gemini' },
        { label: 'Stable Diffusion Render', logo: 'Figma' },
        { label: 'WordPress Auto', logo: 'WordPress' },
      ],
      metric: 'Tiết kiệm 70% Thời gian',
      desc: 'Ứng dụng Generative AI tự động gợi ý kịch bản bài viết bán hàng và phối cảnh mẫu áo đồng phục, tự động lập lịch đăng lên Website & Fanpage.',
    },
    {
      num: '04',
      title: 'Tối ưu Từ khóa Tìm kiếm & Hiển thị trên Engine AI (GEO/AEO)',
      flowItems: [
        { label: 'Ahrefs Intent', logo: 'Ahrefs' },
        { label: 'Cloudflare Infra', logo: 'Cloudflare' },
        { label: 'WordPress GEO/AEO', logo: 'WordPress' },
        { label: 'ChatGPT Citation', logo: 'OpenAI' },
      ],
      metric: 'Inbound Lead Flow',
      desc: 'Tái cấu trúc bài viết chuẩn ngữ nghĩa SEO để thương hiệu Thành Tín được xuất hiện khi khách hàng tìm kiếm trên Google và các công cụ hỏi đáp AI (ChatGPT / Perplexity).',
    },
    {
      num: '05',
      title: 'Thiết kế Website Mobile-First & Tối ưu Tỷ lệ Chuyển đổi (CRO)',
      flowItems: [
        { label: 'Figma UX Audit', logo: 'Figma' },
        { label: 'WordPress CRO Landing', logo: 'WordPress' },
        { label: 'Zalo Touchpoints', logo: 'Zalo' },
        { label: 'GA4 Real-time', logo: 'GA4' },
      ],
      metric: 'Maximized Conversion',
      desc: 'Nghiên cứu từ khóa nhu cầu may đồng phục B2B; thiết kế lại giao diện tối ưu cho điện thoại; thêm các nút Nhận báo giá / Zalo nhanh tại đúng điểm chạm người dùng.',
    },
  ]

  return (
    <section id="experience" className="py-24 sm:py-36 bg-slate-50/70 border-y border-slate-200 relative scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeading
          title="Kinh nghiệm & Sơ đồ Luồng Vận hành Hệ thống"
          sub="Trực quan hoá tư duy kiến trúc & quy trình tự động hoá thực tế đã triển khai."
        />

        <div className="space-y-16 sm:space-y-24">
          <FadeUp>
            <div className="space-y-12 sm:space-y-16">
              <div className="pb-6 sm:pb-8 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
                    <span className="text-xs font-semibold text-blue-600 tracking-wider uppercase">
                      LATEST POSITION · 01/2026 – HIỆN TẠI
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-5xl font-extrabold text-slate-900">Đồng phục Thành Tín</h3>
                  <p className="text-base sm:text-lg font-semibold mt-1 text-slate-500">
                    Kiến trúc sư Hệ thống Trưởng & Chuyên viên Marketing Tăng trưởng
                  </p>
                </div>
                <span className="text-xs font-semibold text-slate-400">5 Systems Workflows</span>
              </div>

              <div className="space-y-12 sm:space-y-16">
                {thietTinProjects.map((p) => (
                  <div key={p.num} className="py-6 sm:py-8 border-b border-slate-200 space-y-3 sm:space-y-4 group">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                      <div className="flex items-baseline gap-3 sm:gap-4">
                        <span className="text-xl sm:text-3xl font-extrabold text-slate-300 group-hover:text-blue-600 transition-colors">
                          {p.num}
                        </span>
                        <h4 className="text-lg sm:text-2xl font-bold leading-snug text-slate-900 group-hover:translate-x-1 transition-transform">
                          {p.title}
                        </h4>
                      </div>
                      <span className="text-xs font-semibold text-emerald-600 flex-shrink-0">★ {p.metric}</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-600 pl-0 sm:pl-9">
                      {p.flowItems.map((item, iIdx) => (
                        <span key={item.label} className="inline-flex items-center gap-1.5 hover:text-blue-500 transition-colors cursor-default">
                          <TechLogo name={item.logo} size={15} />
                          <span>{item.label}</span>
                          {iIdx < p.flowItems.length - 1 && (
                            <span className="text-slate-300 font-bold ml-1.5">➔</span>
                          )}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm sm:text-base leading-relaxed text-slate-500 font-normal pl-0 sm:pl-9">
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={100}>
            <div className="space-y-6 sm:space-y-8 pt-4 sm:pt-8">
              <div className="pb-6 border-b border-slate-200">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  <span className="text-xs font-semibold text-slate-400 tracking-wider uppercase">
                    INTERNSHIP · 09/2024 – 01/2025 · TP. ĐÀ NẴNG
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Trung tâm Anh ngữ Mai</h3>
                <p className="text-base font-semibold mt-1 text-slate-500">Thực tập sinh Marketing</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4 text-sm sm:text-base leading-relaxed text-slate-500">
                  <Check size={18} className="text-blue-500 flex-shrink-0 mt-1" />
                  <span>Hỗ trợ lập kế hoạch và triển khai chiến dịch truyền thông số, tối ưu chiến lược nội dung định kỳ trên nền tảng Facebook Fanpage.</span>
                </div>
                <div className="flex items-start gap-4 text-sm sm:text-base leading-relaxed text-slate-500">
                  <Check size={18} className="text-blue-500 flex-shrink-0 mt-1" />
                  <span>Lập kế hoạch, điều phối hậu cần và tổ chức workshop giáo dục cùng các sự kiện tương tác nhằm tăng mức độ tham gia và duy trì học viên.</span>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}

// ─── Contact ──────────────────────────────────────────────────────────────────
function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-36 bg-slate-950 text-white relative overflow-hidden">
      <div className="ambient-glow-purple top-1/4 left-1/3" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <FadeUp delay={0}>
          <span className="text-xs font-bold tracking-wider uppercase text-blue-400 mb-4 block">Bắt đầu hợp tác</span>
        </FadeUp>
        <FadeUp delay={100}>
          <h2 className="text-3xl sm:text-6xl font-extrabold tracking-tight mb-6 sm:mb-8 leading-tight">
            Sẵn sàng xây dựng <br />
            <span className="text-blue-500">hệ thống tăng trưởng?</span>
          </h2>
        </FadeUp>
        <FadeUp delay={200}>
          <p className="text-slate-300 text-sm sm:text-xl max-w-xl mx-auto mb-10 sm:mb-12 leading-relaxed">
            Hãy kết nối nếu doanh nghiệp của bạn đang cần một giải pháp Marketing vận hành tự động, đo lường được và bền vững.
          </p>
        </FadeUp>
        <FadeUp delay={300}>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16 sm:mb-20">
            <a
              href="mailto:mckaym1109@gmail.com"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm sm:text-base px-7 sm:px-8 py-3.5 sm:py-4 rounded-full transition-all shadow-lg shadow-blue-600/30 hover:scale-105"
            >
              <Mail size={18} /> mckaym1109@gmail.com
            </a>
            <a
              href="tel:0394410557"
              className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base px-7 sm:px-8 py-3.5 sm:py-4 rounded-full transition-all shadow-lg shadow-emerald-600/30 hover:scale-105"
            >
              <Phone size={18} /> 039 441 0557
            </a>
          </div>
        </FadeUp>
        <FadeUp delay={400}>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 pt-8 border-t border-slate-800 text-slate-400">
            <a href="https://www.facebook.com/thanh.tung.779296/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2 text-sm font-semibold hover:scale-105">
              <FacebookIcon size={18} /> Facebook
            </a>
            <a href="https://github.com/kemdinh43-lab" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2 text-sm font-semibold hover:scale-105">
              <GithubIcon size={18} /> GitHub
            </a>
            <a href="https://www.linkedin.com/search/results/all/?keywords=purchasing%20manager&origin=AUTO_COMPLETE&position=2" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2 text-sm font-semibold hover:scale-105">
              <LinkedinIcon size={18} /> LinkedIn
            </a>
          </div>
        </FadeUp>
        <div className="mt-16 sm:mt-20 text-xs text-slate-500 font-semibold">
          © 2026 Đinh Thanh Tùng · High-Tech Marketing Systems Architect Portfolio
        </div>
      </div>
    </section>
  )
}

// ─── Back To Top ──────────────────────────────────────────────────────────────
function BackToTop() {
  const show = useScrollTop()
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`back-to-top w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-xl hover:bg-blue-700 transition-all hover:scale-110 ${show ? 'visible' : ''}`}
      aria-label="Back to Top"
    >
      <ChevronUp size={20} />
    </button>
  )
}

// ─── Root ─────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WhyChooseMe />
      <Offerings />
      <SeoArchitecture />
      <N8nCanvasUI />
      <CaseStudy />
      <Experience />
      <Contact />
      <BackToTop />
    </div>
  )
}
