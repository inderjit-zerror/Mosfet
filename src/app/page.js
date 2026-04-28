
"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Home() {
  const heroRef = useRef(null);
  const glowRef = useRef(null);
  const headingRef = useRef(null);
  const subRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);
  const footerRef = useRef(null);
  const cursorRef = useRef(null);

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  /* ── GSAP animations ── */
  useEffect(() => {
    if (typeof window === "undefined") return;
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    if (!gsap) return;

    if (ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

    // Custom cursor
    const cursor = cursorRef.current;
    const onMouseMove = (e) => {
      gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.15, ease: "power2.out" });
    };
    window.addEventListener("mousemove", onMouseMove);

    // Hero entrance
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.from(subRef.current, { y: 30, opacity: 0, duration: 0.8 })
      .from(headingRef.current, { y: 60, opacity: 0, duration: 1, letterSpacing: "0.5em" }, "-=0.4")
      .from(".hero-line", { scaleX: 0, duration: 0.8, transformOrigin: "left" }, "-=0.3")
      .from(".hero-badge", { y: 20, opacity: 0, stagger: 0.15, duration: 0.6 }, "-=0.4");

    // Glow pulse
    gsap.to(glowRef.current, {
      scale: 1.12,
      opacity: 0.85,
      duration: 3,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
    });

    // Services scroll reveal
    if (ScrollTrigger) {
      gsap.from(".service-card", {
        scrollTrigger: { trigger: servicesRef.current, start: "top 80%" },
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".section-title", {
        scrollTrigger: { trigger: servicesRef.current, start: "top 85%" },
        y: 40,
        opacity: 0,
        duration: 0.8,
      });

      gsap.from(".contact-inner", {
        scrollTrigger: { trigger: contactRef.current, start: "top 80%" },
        y: 50,
        opacity: 0,
        duration: 0.9,
      });

      gsap.from(".footer-item", {
        scrollTrigger: { trigger: footerRef.current, start: "top 90%" },
        y: 20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
      });
    }

    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  const services = [
    {
      icon: "⚡",
      title: "Power Electronics Design",
      desc: "End-to-end design of MOSFET-based power circuits—DC-DC converters, inverters, and motor drives—optimised for efficiency and thermal performance.",
    },
    {
      icon: "🔬",
      title: "PCB Prototyping",
      desc: "Rapid prototype and production-ready PCB layouts with DFM best practices, impedance control, and comprehensive Gerber deliverables.",
    },
    {
      icon: "📐",
      title: "Gate Driver Engineering",
      desc: "Custom gate-driver circuits with bootstrap topologies, dead-time control, and fault protection tailored to your switching frequency.",
    },
    {
      icon: "🛡️",
      title: "EMI / EMC Compliance",
      desc: "Conducted & radiated emission analysis, filtering design, and pre-compliance testing to get your product to market faster.",
    },
    {
      icon: "🤖",
      title: "Firmware Integration",
      desc: "Embedded firmware for PWM generation, closed-loop control, and real-time telemetry—bridging hardware and software seamlessly.",
    },
    {
      icon: "📊",
      title: "Simulation & Validation",
      desc: "SPICE-level and multi-physics simulation followed by bench validation ensuring your design performs exactly as modelled.",
    },
  ];

  const socialLinks = [
    { label: "Instagram", icon: "IG", href: "#" },
    { label: "Facebook", icon: "FB", href: "#" },
    { label: "Twitter", icon: "TW", href: "#" },
    { label: "TikTok", icon: "TK", href: "#" },
    { label: "YouTube", icon: "YT", href: "#" },
  ];

  return (
    <>
      {/* ── Custom cursor ── */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-5 h-5 rounded-full border-2  pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
        style={{ position: "fixed" }}
      />

      <main className="bg-[#080808] text-white font-sans overflow-x-hidden">

        {/* ════════════════════════════════════════
            HERO
        ════════════════════════════════════════ */}
        <section
          ref={heroRef}
          className="relative min-h-screen flex flex-col items-center bg-gradient-to-b from-orange-500 to-black justify-center overflow-hidden"
        >
          {/* Glow orb */}
          <div
            ref={glowRef}
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/4 w-[680px] h-[480px] rounded-full"
            style={{
              background:
                "radial-gradient(ellipse at center, #e8700a 0%, #b84a00 40%, transparent 75%)",
              filter: "blur(2px)",
              opacity: 0.75,
            }}
          />

          {/* Grain overlay */}
          <div
            className="absolute inset-0 pointer-events-none z-10 opacity-[0.04]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
              backgroundRepeat: "repeat",
              backgroundSize: "128px",
            }}
          />

          <div className="relative z-20 flex flex-col items-center text-center px-6">
            <p
              ref={subRef}
              className="text-[White] tracking-[0.3em] text-sm mb-6 uppercase font-light"
              style={{ fontFamily: "'Courier New', monospace" }}
            >
              Stay Tuned For Something Amazing
            </p>

            <h1
              ref={headingRef}
              className="text-[clamp(3.5rem,12vw,9rem)] text-white uppercase leading-none tracking-widest"
              style={{
                fontFamily: "'Impact', 'Arial Black', sans-serif",
                
                
              }}
            >
              MOSFET
            </h1>

            {/* Horizontal rule */}
            <div className="hero-line w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent my-8" />

            {/* Badges */}
            <div className="flex flex-wrap justify-center gap-3 mt-2">
              {["Power Electronics", "PCB Design", "EMI/EMC", "Firmware"].map((b) => (
                <span
                  key={b}
                  className="hero-badge px-4 py-1.5 rounded-full border border-orange-500/40 text-orange-300 text-xs tracking-widest uppercase"
                  style={{ backdropFilter: "blur(8px)", background: "rgba(232,112,10,0.08)" }}
                >
                  {b}
                </span>
              ))}
            </div>

            <p className="hero-badge mt-10 max-w-lg text-white text-sm leading-relaxed">
              Engineering the future of power electronics — precision MOSFET design,
              prototyping, and integration services for next-generation hardware.
            </p>
          </div>

          {/* Bottom fade */}
          <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#080808] to-transparent z-20" />
        </section>

        {/* ════════════════════════════════════════
            ABOUT / SERVICES
        ════════════════════════════════════════ */}
        <section ref={servicesRef} className="relative py-28 px-6 md:px-12 max-w-7xl mx-auto">

          {/* Section header */}
          <div className="section-title mb-20 text-center">
            <span className="text-orange-500 text-xs tracking-[0.4em] uppercase">What We Do</span>
            <h2
              className="mt-3 text-5xl md:text-6xl font-black uppercase tracking-tight"
              style={{ fontFamily: "'Impact', sans-serif" }}
            >
              Our Services
            </h2>
            <p className="mt-5 text-white max-w-2xl mx-auto text-sm leading-relaxed">
              Mosfet delivers expert-level power electronics engineering — from initial
              concept and simulation through to verified, production-ready hardware.
              Whether you're building an EV charger, an industrial inverter, or a
              consumer gadget, our team has you covered.
            </p>
          </div>

          {/* Services grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div
                key={i}
                className="service-card group relative rounded-2xl p-7 cursor-default transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.border = "1px solid rgba(232,112,10,0.35)";
                  e.currentTarget.style.background = "rgba(232,112,10,0.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.border = "1px solid rgba(255,255,255,0.06)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                }}
              >
                {/* Subtle corner glow on hover */}
                <div className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: "radial-gradient(circle, rgba(232,112,10,0.15) 0%, transparent 70%)" }} />

                <span className="text-3xl mb-4 block">{s.icon}</span>
                <h3 className="text-lg font-bold mb-2 tracking-tight">{s.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ════════════════════════════════════════
            CONTACT FORM
        ════════════════════════════════════════ */}
        <section ref={contactRef} className="relative py-28 px-6">
          {/* Background glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[600px] h-[300px] rounded-full opacity-10"
              style={{ background: "radial-gradient(ellipse, #e8700a 0%, transparent 70%)", filter: "blur(60px)" }} />
          </div>

          <div className="contact-inner relative z-10 max-w-2xl mx-auto text-center">
            <span className="text-orange-500 text-xs tracking-[0.4em] uppercase">Get In Touch</span>
            <h2
              className="mt-3 text-5xl font-black uppercase tracking-tight mb-4"
              style={{ fontFamily: "'Impact', sans-serif" }}
            >
              Contact Us
            </h2>
            <p className="text-white/40 text-sm mb-12">
              Have a project in mind? Fill out the form and our team will get back to you within 24 hours.
            </p>

            {sent ? (
              <div className="py-16 text-center">
                <p className="text-4xl mb-3">✅</p>
                <p className="text-orange-400 text-lg font-semibold">Message Received!</p>
                <p className="text-white text-sm mt-2">We'll be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                {[
                  { label: "Full Name", name: "name", type: "text", placeholder: "John Doe" },
                  { label: "Email Address", name: "email", type: "email", placeholder: "john@example.com" },
                ].map((f) => (
                  <div key={f.name}>
                    <label className="block text-xs text-white mb-1.5 tracking-widest uppercase">{f.label}</label>
                    <input
                      required
                      type={f.type}
                      name={f.name}
                      value={form[f.name]}
                      onChange={handleChange}
                      placeholder={f.placeholder}
                      className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/50 outline-none focus:border-orange-500/60 transition-colors"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-xs text-white mb-1.5 tracking-widest uppercase">Message</label>
                  <textarea
                    required
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us about your project..."
                    className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/50 outline-none focus:border-orange-500/60 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-bold tracking-widest uppercase text-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                  style={{
                    background: "linear-gradient(135deg, #e8700a 0%, #b84a00 100%)",
                    boxShadow: "0 0 30px rgba(232,112,10,0.3)",
                  }}
                >
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </section>

        {/* ════════════════════════════════════════
            FOOTER
        ════════════════════════════════════════ */}
        <footer
          ref={footerRef}
          className="relative border-t border-white/[0.06] pt-16 pb-8 px-6 md:px-12"
        >
          <div className="max-w-7xl mx-auto">

            {/* Top grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

              {/* Brand */}
              <div className="footer-item">
                <h3
                  className="text-3xl font-black uppercase tracking-widest mb-3"
                  style={{ fontFamily: "'Impact', sans-serif", color: "#e8700a" }}
                >
                  MOSFET
                </h3>
                <p className="text-white text-sm leading-relaxed max-w-xs">
                  Precision power electronics engineering — where high-voltage innovation
                  meets production-grade reliability.
                </p>
              </div>

              {/* Contact info */}
              <div className="footer-item">
                <h4 className="text-xs text-orange-500 tracking-[0.3em] uppercase mb-5">Contact</h4>
                <ul className="space-y-3 text-sm text-white">
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 mt-0.5">📧</span>
                    <span>hello@mosfet.design</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 mt-0.5">📞</span>
                    <span>+91 98765 43210</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 mt-0.5">📍</span>
                    <span>Sector 17, Chandigarh,<br />Punjab, India — 160017</span>
                  </li>
                </ul>
              </div>

              {/* Social */}
              <div className="footer-item">
                <h4 className="text-xs text-orange-500 tracking-[0.3em] uppercase mb-5">Stay In Touch</h4>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-xs font-bold text-white/50 hover:text-orange-400 transition-all duration-200 hover:scale-110"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

            {/* Bottom bar */}
            <div className="footer-item flex flex-col md:flex-row items-center justify-between gap-3 text-[14px] text-white">
              <span>© {new Date().getFullYear()} Mosfet. All rights reserved.</span>
              <span
                className="hover:text-orange-400 transition-colors cursor-default"
                style={{ fontFamily: "'Courier New', monospace" }}
              >
                Developed by{" "}
                <a href="https://www.zerrorstudios.com/" className="text-white underline underline-offset-2">
                  Zerror Studios
                </a>
              </span>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
