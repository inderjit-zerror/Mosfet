// "use client";
// import React, { useEffect, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import AnimatedTitle from "@/components/common/AnimatedTitle";
// gsap.registerPlugin(ScrollTrigger);

// const Home = () => {
//   const [form, setForm] = useState({ name: "", email: "", message: "" });
//   const [sent, setSent] = useState(false);

//   const socialLinks = [
//     {
//       label: "Instagram",
//       icon: "IG",
//       href: "https://www.instagram.com/mosfettech/",
//     },
//     {
//       label: "LinkedIn",
//       icon: "FB",
//       href: "https://in.linkedin.com/company/mosfettech",
//     },
//   ];

//   const UD = [
//     "U",
//     "N",
//     "D",
//     "E",
//     "R",
//     " ",
//     "D",
//     "E",
//     "V",
//     "E",
//     "L",
//     "O",
//     "P",
//     "M",
//     "E",
//     "N",
//     "T",
//   ];

//   const services = [
//     {
//       title: "Automotive Intelligence Solutions",
//       desc: `Advanced dashcams with AI features (ANPR, driver monitoring, hazard detection).
// Telematics systems with GPS, 4G/5G connectivity, and real-time vehicle diagnostics.`,
//     },
//     {
//       title: "OEM Integrated Systems",
//       desc: "Plug-and-play ambient lighting & sound systems360° / 540° surround vision solutions.",
//     },
//     {
//       title: "SaaS & Cloud Platforms",
//       desc: `Fleet Management Systems (tracking, geofencing, analytics).
// Emergency response & SOS platforms with real-time alerts`,
//     },
//     {
//       title: "Car Care & Protection Solutions",
//       desc: `Ceramic coatings and paint protection systems.
// Leather, fabric, and interior protection solutions.
// Premium cleaning chemicals and detailing products.
// Paint Protection Films (PPF) and advanced window tint solutions.`,
//     },
//     {
//       title: "Custom Engineering & OEM Development",
//       desc: `Full-stack hardware + software ecosystem
// Custom ODM product development.
// Secure cloud-native architecture.`,
//     },
//   ];

//   const handleChange = (e) =>
//     setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSent(true);
//   };


  

//   return (
//     <>
//       {/* ════════════════════════════════════════
//             HERO
//         ════════════════════════════════════════ */}
//       <section className="relative min-h-screen flex flex-col items-center bg-gradient-to-b from-[red] to-black justify-center overflow-hidden">
//         {/* Glow orb */}
//         {/* <div
//             ref={glowRef}
//             className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/4 w-[680px] h-[480px] rounded-full"
//             style={{
//               background:
//                 "radial-gradient(ellipse at center, #e8700a 0%, #b84a00 40%, transparent 75%)",
//               filter: "blur(2px)",
//               opacity: 0.75,
//             }}
//           /> */}

//         {/* Grain overlay */}
//         <div
//           className="absolute inset-0 pointer-events-none z-10 opacity-[0.04]"
//           style={{
//             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
//             backgroundRepeat: "repeat",
//             backgroundSize: "128px",
//           }}
//         />

//         <div className="relative z-20 flex flex-col items-center text-center px-6">
//           <p
//             className="text-[White] tracking-[0.3em] text-sm mb-6 uppercase font-light"
//             // style={{ fontFamily: "'Courier New', monospace" }}
//           >
//             We’re revamping our website
//           </p>

//           <h1
//             className="text-[clamp(2.5rem,4.5vw,4.5vw)] text-white uppercase text-center leading-none tracking-widest"
//             style={{
//               fontFamily: "'Impact', 'Arial Black', sans-serif",
//             }}
//           >
//             WEBSITE UNDER <br /> MAINTENANCE
//           </h1>

//           {/* Horizontal rule */}
//           <div className="hero-line w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-[red] to-transparent my-8" />

//           {/* Badges */}
//           {/* <div className="flex flex-wrap justify-center gap-3 mt-2">
//               {["Power Electronics", "PCB Design", "EMI/EMC", "Firmware"].map((b) => (
//                 <span
//                   key={b}
//                   className="hero-badge px-4 py-1.5 rounded-full border border-orange-500/40 text-[orange-300] text-xs tracking-widest uppercase"
//                   style={{ backdropFilter: "blur(8px)", background: "rgba(232,112,10,0.08)" }}
//                 >
//                   {b}
//                 </span>
//               ))}
//             </div> */}

//           <p className="hero-badge mt-10 text-[18px] sm:w-[60%] text-white text-sm leading-relaxed">
//             Mosfet Tech Solutions is a technology company focused on automotive
//             safety, visibility, and intelligent vehicle systems. We deliver
//             custom hardware and software solutions tailored to OEM needs,
//             integrating AI, telematics, dash cameras, and cloud platforms to
//             power the future of connected mobility.
//           </p>
//         </div>

//         {/* Bottom fade */}
//         <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#080808] to-transparent z-20" />
//       </section>

//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2">
//         <span className="text-[11px] uppercase tracking-[0.35em] text-white/60">
//           Scroll
//         </span>

//         <div className="scroll-down-icon flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 backdrop-blur-sm">
//           <svg
//             className="h-5 w-5 text-white/80 animate-bounce"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           >
//             <path d="M12 5v14" />
//             <path d="M6 13l6 6 6-6" />
//           </svg>
//         </div>
//       </div>

//       {/* ════════════════════════════════════════
//             ABOUT / SERVICES
//         ════════════════════════════════════════ */}
//       <section
//         id="services"
//         className="relative py-28 px-6 md:px-[10vw] w-full  BlackBG mx-auto"
//       >
//         {/* Section header */}
//         <div className="section-title mb-20 text-center">
//           <span className="text-red-500 text-[1vw] leading-[1vw] max-sm:text-[1rem] max-sm:leading-[1rem] uppercase">
//             Our Services
//           </span>
//           <h2 className="mt-3 text-[2vw]  max-sm:text-[2rem] max-sm:leading-[2rem] font-semibold leading-[2.2vw] WhiteText uppercase tracking-tight">
//             What We Do
//           </h2>
//           <p className="mt-5 text-white  mx-auto sm:w-[60%] text-[18px] leading-relaxed">
//             We provide advanced automotive technology solutions, including
//             AI-powered dashcams, telematics systems, OEM-integrated lighting and
//             vision systems, and cloud-based SaaS platforms. Our services are
//             designed to enhance vehicle safety, connectivity, and performance
//             through seamless hardware and software integration. With a focus on
//             customization and OEM-grade engineering, we deliver scalable,
//             reliable, and future-ready solutions tailored to modern mobility
//             needs.
//           </p>
//         </div>

//         {/* Services grid */}
//         {/* Services Layout */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
//           {/* Featured service */}
//           <div className="lg:col-span-5">
//             <div
//               className="group relative h-full overflow-hidden rounded-[28px] p-8 md:p-10 border border-white/10 bg-white/[0.03] transition-all duration-500 hover:-translate-y-1 hover:border-[red] hover:bg-[red]/10"
//               style={{
//                 boxShadow: "0 0 0 1px rgba(255,255,255,0.02) inset",
//               }}
//             >
//               <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(232,112,10,0.18),transparent_45%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//               <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-orange-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//               <div className="relative z-10 flex h-full flex-col justify-between gap-8">
//                 <div>
//                   <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.25em] text-white/70">
//                     Featured Service
//                   </div>
//                   <div className="mb-6 text-4xl">
//                     {services[0].icon || "⚡"}
//                   </div>
//                   <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-4">
//                     {services[0].title}
//                   </h3>
//                   <p className="text-white/75 text-base leading-7 whitespace-pre-line">
//                     {services[0].desc}
//                   </p>
//                 </div>

//                 <div className="flex items-center gap-3 text-sm text-orange-300/90">
//                   <span className="h-px w-10 bg-[red]/70 transition-all duration-300 group-hover:w-16" />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Supporting services */}
//           <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
//             {services.slice(1).map((s, i) => (
//               <div
//                 key={i}
//                 className="group relative overflow-hidden rounded-[24px] p-6 border border-white/10 bg-white/[0.03] transition-all duration-500 hover:-translate-y-1 hover:border-[red] hover:bg-[red]/10"
//                 style={{
//                   boxShadow: "0 0 0 1px rgba(255,255,255,0.02) inset",
//                 }}
//               >
//                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(232,112,10,0.14),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//                 <div className="relative z-10 flex h-full flex-col">
//                   <div className="mb-4 flex items-start justify-between gap-4">
//                     <div className="text-3xl transition-transform duration-300 group-hover:scale-110">
//                       {s.icon || "◎"}
//                     </div>
//                     <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white/50">
//                       0{i + 2}
//                     </span>
//                   </div>

//                   <h3 className="text-lg font-semibold tracking-tight text-white mb-2">
//                     {s.title}
//                   </h3>

//                   <p className="text-sm leading-6 text-white/70 whitespace-pre-line flex-1">
//                     {s.desc}
//                   </p>

//                   <div className="mt-5 flex items-center gap-2 text-xs uppercase tracking-[0.25em] RedText">
//                     {/* <span>Learn more</span> */}
//                     <span className="transition-transform duration-300 group-hover:translate-x-1">
//                       -→
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CONTACT FORM */}

//       <section className="relative BlackBG py-28 px-6 sm:px-10">
//         <div className="w-fit h-fit  mx-auto flex gap-5">
//           <div className="w-fit max-sm:w-full h-auto WhiteText  flex flex-col justify-center items-center ">
//             <p className="text-[1vw] leading-[1vw] max-sm:text-[1rem] max-sm:leading-[1rem] RedText uppercase">
//               Get In Touch
//             </p>
//             <p className="font-semibold text-[2vw] max-sm:text-[2rem] max-sm:leading-[2rem] leading-[2.2vw] uppercase">
//               Contact Us
//             </p>
//           </div>
//         </div>

//         <div className="contact-inner relative z-10 max-w-2xl mt-20 mx-auto text-center">
//           {sent ? (
//             <div className="py-16 text-center">
//               <p className="text-4xl mb-3">✅</p>
//               <p className="RedText text-lg font-semibold">Message Received!</p>
//               <p className="WhiteText text-sm mt-2">We'll be in touch soon.</p>
//             </div>
//           ) : (
//             <form onSubmit={handleSubmit} className="space-y-4 text-left">
//               {[
//                 {
//                   label: "Full Name",
//                   name: "name",
//                   type: "text",
//                   placeholder: "John Doe",
//                 },
//                 {
//                   label: "Email Address",
//                   name: "email",
//                   type: "email",
//                   placeholder: "john@example.com",
//                 },
//               ].map((f) => (
//                 <div key={f.name}>
//                   <label className="block text-xs text-white mb-1.5 tracking-widest uppercase">
//                     {f.label}
//                   </label>
//                   <input
//                     required
//                     type={f.type}
//                     name={f.name}
//                     value={form[f.name]}
//                     onChange={handleChange}
//                     placeholder={f.placeholder}
//                     className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/50 outline-none focus:border-red-500 transition-colors"
//                   />
//                 </div>
//               ))}
//               <div>
//                 <label className="block text-xs text-white mb-1.5 tracking-widest uppercase">
//                   Message
//                 </label>
//                 <textarea
//                   required
//                   name="message"
//                   value={form.message}
//                   onChange={handleChange}
//                   rows={5}
//                   placeholder="Tell us about your project..."
//                   className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/50 outline-none focus:border-red-500 transition-colors resize-none"
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="w-full py-4 rounded-xl font-bold tracking-widest uppercase text-sm transition-all RedBG WhiteText duration-300 hover:scale-[1.02] active:scale-[0.98]"
//               >
//                 Send Message →
//               </button>
//             </form>
//           )}
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="relative border-t  BlackBG border-white/[0.06] pt-16 pb-8 px-5 sm:px-10">
//         <div className="w-full mx-auto fkex ">
//           {/* Top grid */}
//           <div className="flex flex-col w-full justify-between gap-12 mb-16 md:flex-row md:flex-wrap md:items-start">
//             {/* Brand */}
//             <div className="footer-item w-fit flex-shrink-0">
//               {/* <h3
//                 className="text-3xl font-black uppercase WhiteText tracking-widest mb-3"
                
//               >
//                 MOSFET
//               </h3> */}
//               <div className="w-[100px] mb-5">
//                 <img
//                   src={`/img/logo.png`}
//                   alt="IMG"
//                   className="w-full object-cover object-center"
//                 />
//               </div>
//               <p className="text-white text-sm leading-relaxed max-w-xs">
//                 Core intelligence for automotive safety, visibility, and
//                 connected vehicle systems — delivering OEM‑grade hardware, AI,
//                 and cloud solutions built for the future of mobility.
//               </p>
//             </div>

//             {/* Contact info */}
//             <div className="footer-item w-fit flex flex-col justify-center items-start md:items-center gap-4 flex-shrink">
//               <h4 className="text-xs WhiteText WhiteText tracking-[0.3em] uppercase mb-2 self-start ">
//                 Contact
//               </h4>
//               <ul className="space-y-3 text-sm text-white">
//                 <a href="https://www.mosfettech.com">
//                   <li className="flex items-start gap-3">
//                     <span className="RedText mt-0.5">🌐</span>
//                     <AnimatedTitle text={"www.mosfettech.com"} />
//                     {/* <span></span> */}
//                   </li>
//                 </a>
//                 <a href="tel:9999878104">
//                   {" "}
//                   <li className="flex items-start gap-3">
//                     <span className="RedText mt-0.5">📞</span>
//                     <AnimatedTitle text={"+91 9999878104"} />
//                     {/* <span></span> */}
//                   </li>
//                 </a>
//                 <a href="tel:9910700028">
//                   {" "}
//                   <li className="flex items-start gap-3">
//                     <span className="RedText mt-0.5">📞</span>
//                     <AnimatedTitle text={"+91 9910700028"} />
//                     {/* <span></span> */}
//                   </li>
//                 </a>
//                 <li className="flex items-start gap-3">
//                   <span className="RedText mt-0.5">📍</span>
//                   <span>
//                     <AnimatedTitle
//                       text={
//                         " B-66, 1st Floor, Naraina Industrial Area, Phase 1,"
//                       }
//                     />
//                     <AnimatedTitle text={" New Delhi, India"} />

//                     <br />
//                   </span>
//                 </li>
//               </ul>
//             </div>

//             {/* Social */}
//             <div className="footer-item w-fit flex-shrink-0">
//               <h4 className="text-xs WhiteText tracking-[0.3em] uppercase mb-5">
//                 Stay In Touch
//               </h4>
//               <div className="flex flex-wrap gap-3">
//                 {socialLinks.map((s) => (
//                   <a
//                     key={s.label}
//                     href={s.href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label={s.label}
//                     className="w-fit px-5 h-10 rounded-lg flex items-center justify-center text-xs font-bold text-white/80 hover:RedText transition-all duration-200 hover:scale-110"
//                     style={{
//                       background: "rgba(255,255,255,0.04)",
//                       border: "1px solid rgba(255,255,255,0.08)",
//                     }}
//                   >
//                     <AnimatedTitle text={s.label} />
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Divider */}
//           <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

//           {/* Bottom bar */}
//           <div className="footer-item flex flex-col md:flex-row items-center justify-between gap-3 text-[14px] text-white">
//             <span>
//               © {new Date().getFullYear()} Mosfet. All rights reserved.
//             </span>
//             <span className=" transition-colors cursor-default flex justify-center items-center gap-2">
//               Developed by{" "}
//               <a
//                 href="https://www.zerrorstudios.com/"
//                 target="blank"
//                 className="text-white underline underline-offset-2"
//               >
//                 <div className=" border-b border-white ">
//                   <AnimatedTitle text={" Zerror Studios"} />
//                 </div>
//               </a>
//             </span>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// };

// export default Home;
"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedTitle from "@/components/common/AnimatedTitle";
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  // Refs for page-load animation targets
  const heroTaglineRef = useRef(null);
  const heroHeadingRef = useRef(null);
  const heroLineRef = useRef(null);
  const heroBadgeRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  const socialLinks = [
    {
      label: "Instagram",
      icon: "IG",
      href: "https://www.instagram.com/mosfettech/",
    },
    {
      label: "LinkedIn",
      icon: "FB",
      href: "https://in.linkedin.com/company/mosfettech",
    },
  ];

  const services = [
    {
      title: "Automotive Intelligence Solutions",
      desc: `Advanced dashcams with AI features (ANPR, driver monitoring, hazard detection).\nTelematics systems with GPS, 4G/5G connectivity, and real-time vehicle diagnostics.`,
    },
    {
      title: "OEM Integrated Systems",
      desc: "Plug-and-play ambient lighting & sound systems360° / 540° surround vision solutions.",
    },
    {
      title: "SaaS & Cloud Platforms",
      desc: `Fleet Management Systems (tracking, geofencing, analytics).\nEmergency response & SOS platforms with real-time alerts`,
    },
    {
      title: "Car Care & Protection Solutions",
      desc: `Ceramic coatings and paint protection systems.\nLeather, fabric, and interior protection solutions.\nPremium cleaning chemicals and detailing products.\nPaint Protection Films (PPF) and advanced window tint solutions.`,
    },
    {
      title: "Custom Engineering & OEM Development",
      desc: `Full-stack hardware + software ecosystem\nCustom ODM product development.\nSecure cloud-native architecture.`,
    },
  ];

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  // ─── PAGE-LOAD ANIMATION ───────────────────────────────────────────────────
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Master timeline — runs once on mount
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // 1. Tagline slides up + fades in
      tl.fromTo(
        heroTaglineRef.current,
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 }
      )
        // 2. Heading — each word staggers up
        .fromTo(
          heroHeadingRef.current,
          { y: 48, opacity: 0, clipPath: "inset(100% 0 0 0)" },
          {
            y: 0,
            opacity: 1,
            clipPath: "inset(0% 0 0 0)",
            duration: 0.85,
          },
          "-=0.35" // overlap previous
        )
        // 3. Horizontal rule draws from center
        .fromTo(
          heroLineRef.current,
          { scaleX: 0, opacity: 0 },
          { scaleX: 1, opacity: 1, duration: 0.7, transformOrigin: "center" },
          "-=0.4"
        )
        // 4. Description paragraph
        .fromTo(
          heroBadgeRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.65 },
          "-=0.3"
        )
        // 5. Scroll indicator
        .fromTo(
          scrollIndicatorRef.current,
          { y: 16, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5 },
          "-=0.2"
        );

      // ─── SCROLL-TRIGGERED ANIMATIONS ─────────────────────────────────────

      // Section titles
      gsap.utils.toArray(".section-title").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              once: true,
            },
          }
        );
      });

      // Service cards — stagger on scroll
      gsap.utils.toArray(".service-card").forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            delay: i * 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              once: true,
            },
          }
        );
      });

      // Contact section
      gsap.fromTo(
        ".contact-inner",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-inner",
            start: "top 85%",
            once: true,
          },
        }
      );

      // // Footer items
      // gsap.utils.toArray(".footer-item").forEach((el, i) => {
      //   gsap.fromTo(
      //     el,
      //     { y: 30, opacity: 0 },
      //     {
      //       y: 0,
      //       opacity: 1,
      //       duration: 0.6,
      //       delay: i * 0.1,
      //       ease: "power3.out",
      //       scrollTrigger: {
      //         trigger: el,
      //         start: "top 92%",
      //         once: true,
      //       },
      //     }
      //   );
      // });
    });

    return () => ctx.revert(); // cleanup on unmount
  }, []);

  return (
    <>
      {/* ════════════════════════════════════════
            HERO
        ════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col items-center max-sm:items-start max-sm:pt-[19vh]   bg-gradient-to-b from-[red] to-black justify-center overflow-hidden">
        {/* Grain overlay */}
        <div
          className="absolute inset-0 pointer-events-none z-10 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "128px",
          }}
        />

        <div className="relative z-20  flex flex-col  max-sm:mb-auto items-center text-center px-6">
          {/* ← ref attached for load animation */}
          <p
            ref={heroTaglineRef}
            className="text-[White] tracking-[0.3em] text-sm mb-6 uppercase font-light"
            style={{ opacity: 0 }} // hidden before GSAP runs
          >
            We're revamping our website
          </p>

          <h1
            ref={heroHeadingRef}
            className="text-[clamp(2.5rem,4.5vw,4.5vw)] text-white uppercase text-center leading-none tracking-widest"
            style={{
              fontFamily: "'Impact', 'Arial Black', sans-serif",
              opacity: 0,
            }}
          >
            WEBSITE UNDER <br /> MAINTENANCE
          </h1>

          {/* Horizontal rule */}
          <div
            ref={heroLineRef}
            className="w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-[red] to-transparent my-8"
            style={{ opacity: 0 }}
          />

          <p
            ref={heroBadgeRef}
            className="hero-badge mt-10 max-sm:mt-2 text-[18px] max-sm:text-[14px] sm:w-[60%] text-white text-sm leading-relaxed"
            style={{ opacity: 0 }}
          >
            Mosfet Tech Solutions is a technology company focused on automotive
            safety, visibility, and intelligent vehicle systems. We deliver
            custom hardware and software solutions tailored to OEM needs,
            integrating AI, telematics, dash cameras, and cloud platforms to
            power the future of connected mobility.
          </p>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 inset-x-0 h-32  bg-gradient-to-t from-[#080808] to-transparent z-20" />
      </section>

      {/* Scroll indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-8 left-1/2  -translate-x-1/2 z-30 flex flex-col items-center gap-2"
        style={{ opacity: 0 }}
      >
        <span className="text-[11px] uppercase tracking-[0.35em] text-white">
          Scroll
        </span>
        <div className="scroll-down-icon flex h-12 w-12 items-center justify-center rounded-full border border-white bg-white/5 backdrop-blur-sm">
          <svg
            className="h-5 w-5 text-white animate-bounce"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14" />
            <path d="M6 13l6 6 6-6" />
          </svg>
        </div>
      </div>

      {/* ════════════════════════════════════════
            ABOUT / SERVICES
        ════════════════════════════════════════ */}
      <section
        id="services"
        className="relative py-28 max-sm:pt-5 px-6 md:px-[10vw] w-full BlackBG mx-auto"
      >
        {/* Section header */}
        <div className="section-title mb-20 text-center">
          {/* <span className="text-red-500 text-[1vw] leading-[1vw] max-sm:text-[1rem] max-sm:leading-[1rem] uppercase">
            Our Services
          </span> */}
          <h2 className="mt-3 text-[2vw] max-sm:text-[2rem] max-sm:leading-[2rem] font-semibold leading-[2.2vw] WhiteText uppercase tracking-tight">
            What We Do
          </h2>
          <p className="mt-5 text-white mx-auto max-sm:text-[14px] text-center sm:w-[60%] text-[18px] leading-relaxed">
            Our solutions enhance vehicle safety, connectivity, and performance
            through scalable, reliable, and customized hardware-software
            integration.
          </p>
        </div>

        {/* Services Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Featured service */}
          <div className="lg:col-span-5 service-card">
            <div
              className="group relative h-full overflow-hidden rounded-[28px] p-8 md:p-10 border border-[red]/70 bg-white/[0.03] transition-all duration-500 hover:-translate-y-1 hover:border-[red] hover:bg-[red]/10"
              style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.02) inset" }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(232,112,10,0.18),transparent_45%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-orange-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex h-full flex-col justify-between gap-8">
                
                <div>
                   
                 
                  <span className="rounded-full border w-fit flex ml-auto border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white/50">
                     01
                    </span>
                  
                 
                  <h3 className="text-2xl md:text-3xl mt-5 max-sm:text-[20px] font-semibold tracking-tight text-white mb-4">
                    {services[0].title}
                  </h3>
                  <p className="text-white/75 max-sm:text-[14px] text-base leading-7 whitespace-pre-line">
                    {services[0].desc}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Supporting services */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.slice(1).map((s, i) => (
              <div
                key={i}
                className="service-card group relative overflow-hidden rounded-[24px] p-6 border border-[red]/70 bg-white/[0.03] transition-all duration-500 hover:-translate-y-1 hover:border-[red] hover:bg-[red]/10"
                style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.02) inset" }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(232,112,10,0.14),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 flex h-full flex-col">
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <div className="text-3xl transition-transform duration-300 group-hover:scale-110">
                      {s.icon || "◎"}
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white/50">
                      0{i + 2}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold max-sm:text-[20px] tracking-tight text-white mb-2">
                    {s.title}
                  </h3>
                  <p className="text-sm leading-6 max-sm:text-[14px] text-white/70 whitespace-pre-line flex-1">
                    {s.desc}
                  </p>
                  <div className="mt-5 flex items-center gap-2 text-xs uppercase tracking-[0.25em] RedText"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="relative BlackBG py-28 max-sm:pt-5  px-6 sm:px-10">
        <div className="w-fit h-fit mx-auto flex gap-5">
          <div className="w-fit max-sm:w-full h-auto WhiteText flex flex-col justify-center items-center">
            {/* <p className="text-[1vw] leading-[1vw] max-sm:text-[1rem] max-sm:leading-[1rem] RedText uppercase">
             
            </p> */}
            <p className="font-semibold text-[2vw] max-sm:text-[2rem] max-sm:leading-[2rem] leading-[2.2vw] uppercase">
              Get In Touch
            </p>
          </div>
        </div>

        <div className="contact-inner relative z-10 max-w-2xl mt-20 mx-auto text-center">
          {sent ? (
            <div className="py-16 text-center">
              <p className="text-4xl mb-3">✅</p>
              <p className="RedText text-lg font-semibold">Message Received!</p>
              <p className="WhiteText text-sm mt-2">We'll be in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              {[
                {
                  label: "Full Name",
                  name: "name",
                  type: "text",
                  placeholder: "John Doe",
                },
                {
                  label: "Email Address",
                  name: "email",
                  type: "email",
                  placeholder: "john@example.com",
                },
              ].map((f) => (
                <div key={f.name}>
                  <label className="block text-xs text-white mb-1.5 tracking-widest uppercase">
                    {f.label}
                  </label>
                  <input
                    required
                    type={f.type}
                    name={f.name}
                    value={form[f.name]}
                    onChange={handleChange}
                    placeholder={f.placeholder}
                    className="w-full bg-white/[0.04] border border-white/70 rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/50 outline-none focus:border-red-500 transition-colors"
                  />
                </div>
              ))}
              <div>
                <label className="block text-xs text-white mb-1.5 tracking-widest uppercase">
                  Message
                </label>
                <textarea
                  required
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell us about your requirements..."
                  className="w-full bg-white/[0.04] border border-white/70 rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/50 outline-none focus:border-red-500 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 rounded-xl font-bold tracking-widest uppercase text-sm transition-all RedBG WhiteText duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                Send Message →
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t  BlackBG border-white/[0.06] pt-16 pb-8 px-5 sm:px-10">
        <div className="w-full mx-auto fkex ">
          {/* Top grid */}
          <div className="flex flex-col w-full justify-between gap-12 mb-16 md:flex-row md:flex-wrap md:items-start">
            {/* Brand */}
            <div className="footer-item w-fit flex-shrink-0">
              {/* <h3
                className="text-3xl font-black uppercase WhiteText tracking-widest mb-3"
                
              >
                MOSFET
              </h3> */}
              <div className="w-[100px] mb-5">
                <img
                  src={`/img/logo.png`}
                  alt="IMG"
                  className="w-full object-cover object-center"
                />
              </div>
              <p className="text-white text-sm leading-relaxed max-w-xs">
                Core intelligence for automotive safety, visibility, and
                connected vehicle systems — delivering OEM‑grade hardware, AI,
                and cloud solutions built for the future of mobility.
              </p>
            </div>

            {/* Contact info */}
            <div className="footer-item w-fit flex flex-col justify-center items-start md:items-center gap-4 flex-shrink">
              <h4 className="text-xs WhiteText WhiteText tracking-[0.3em] uppercase mb-2 self-start ">
                Contact
              </h4>
              <ul className="space-y-3 text-sm text-white">
                <a href="https://www.mosfettech.com">
                  <li className="flex items-start gap-3">
                    <span className="RedText mt-0.5">🌐</span>
                    <AnimatedTitle text={"www.mosfettech.com"} />
                    {/* <span></span> */}
                  </li>
                </a>
                <a href="tel:9999878104">
                  {" "}
                  <li className="flex items-start gap-3">
                    <span className="RedText mt-0.5">📞</span>
                    <AnimatedTitle text={"+91 9999878104"} />
                    {/* <span></span> */}
                  </li>
                </a>
                <a href="tel:9910700028">
                  {" "}
                  <li className="flex items-start gap-3">
                    <span className="RedText mt-0.5">📞</span>
                    <AnimatedTitle text={"+91 9910700028"} />
                    {/* <span></span> */}
                  </li>
                </a>
                <li className="flex items-start gap-3">
                  <span className="RedText mt-0.5">📍</span>
                  <span>
                    <AnimatedTitle
                      text={
                        " B-66, 1st Floor, Naraina Industrial Area, Phase 1,"
                      }
                    />
                    <AnimatedTitle text={" New Delhi, India"} />

                    <br />
                  </span>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div className="footer-item w-fit flex-shrink-0">
              <h4 className="text-xs WhiteText tracking-[0.3em] uppercase mb-5">
                Stay In Touch
              </h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-fit px-5 h-10 rounded-lg flex items-center border border-white justify-center text-xs font-bold text-white hover:RedText transition-all duration-200 hover:scale-110"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      
                    }}
                  >
                    <AnimatedTitle text={s.label} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

          {/* Bottom bar */}
          <div className="footer-item flex flex-col md:flex-row items-center justify-between gap-3 text-[14px] text-white">
            <span>
              © {new Date().getFullYear()} Mosfet Technologies. All rights reserved.
            </span>
            <span className=" transition-colors cursor-default flex justify-center items-center gap-2">
              Developed by{" "}
              <a
                href="https://www.zerrorstudios.com/"
                target="blank"
                className="text-white underline underline-offset-2"
              >
                <div className=" border-b border-white ">
                  <AnimatedTitle text={" Zerror Studios"} />
                </div>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;