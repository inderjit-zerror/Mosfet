"use client";
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedTitle from "@/components/common/AnimatedTitle";
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

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

  const UD = [
    "U",
    "N",
    "D",
    "E",
    "R",
    " ",
    "D",
    "E",
    "V",
    "E",
    "L",
    "O",
    "P",
    "M",
    "E",
    "N",
    "T",
  ];

  const services = [
    {
      title: "Automotive Intelligence Solutions",
      desc: `Advanced dashcams with AI features (ANPR, driver monitoring, hazard detection).
Telematics systems with GPS, 4G/5G connectivity, and real-time vehicle diagnostics.`,
    },
    {
      title: "OEM Integrated Systems",
      desc: "Plug-and-play ambient lighting & sound systems360° / 540° surround vision solutions.",
    },
    {
      title: "SaaS & Cloud Platforms",
      desc: `Fleet Management Systems (tracking, geofencing, analytics).
Emergency response & SOS platforms with real-time alerts`,
    },
    {
      title: "Car Care & Protection Solutions",
      desc: `Ceramic coatings and paint protection systems.
Leather, fabric, and interior protection solutions.
Premium cleaning chemicals and detailing products.
Paint Protection Films (PPF) and advanced window tint solutions.`,
    },
    {
      title: "Custom Engineering & OEM Development",
      desc: `Full-stack hardware + software ecosystem
Custom ODM product development.
Secure cloud-native architecture.`,
    },
  ];

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  useEffect(() => {
    const S = gsap.timeline({
      scrollTrigger: {
        trigger: ".ServicesCONT",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        // markers: true,
      },
    });
    S.to(".CRD1", {
      translateY: 0,
      ease: "none",
    });
    S.to(".CRD2", {
      translateY: 0,
      ease: "none",
    });
    S.to(".CRD3", {
      translateY: 0,
      ease: "none",
    });
    S.to(".CRD4", {
      translateY: 0,
      ease: "none",
    });
    S.to(".CRD5", {
      translateY: 0,
      ease: "none",
    });
  }, []);

  return (
    <>
      {/* Home */}
      <div className="w-full h-svh BlackBG relative overflow-hidden">
        <div className=" absolute top-1/3 -right-[10%] -translate-y-1/2 w-1/2 max-sm:blur-[150px] blur-[280px] rounded-full RedBG h-[50vh]  "></div>

        <div className="w-1/3 max-sm:w-full  h-fit absolute top-[15%] max-sm:top-[20%] -translate-y-1/2 right-0 px-5 sm:px-10">
          <p className="WhiteText text-justify [text-indent:10vw] text-[1vw] leading-[1vw] max-sm:text-[1rem] max-sm:leading-[1rem] ">
            Mosfet Tech Solutions is a technology company focused on automotive
            safety, visibility, and intelligent vehicle systems. We deliver
            custom hardware and software solutions tailored to OEM needs,
            integrating AI, telematics, dash cameras, and cloud platforms to
            power the future of connected mobility.
          </p>
        </div>

        <div className=" w-full h-fit absolute bottom-0 left-0 p-5 sm:px-10">
          <div className="w-full h-fit ">
            <p className="RedText text-[2vw] leading-[2vw]  max-sm:text-[1rem] max-sm:leading-[1rem] tracking-tighter uppercase">
              We’re <br /> revamping our website....
            </p>
          </div>

          <h1 className="WhiteText font-semibold text-[10vw] leading-[9vw]  max-sm:text-[12vw] max-sm:leading-[12vw] tracking-tighter overflow-hidden">
            {/* {UD.map((letter, index) => (
              <span
                className="text-[10vw] leading-[9vw]  max-sm:text-[12vw] max-sm:leading-[12vw] tracking-tighter overflow-hidden"
                key={index}
              >
                {letter}
              </span>
            ))} */}
            WEBSITE UNDER <br /> MAINTENANCE
          </h1>
        </div>
      </div>

      {/* Service */}

      <div className="w-full h-[300vh] max-sm:h-fit relative ServicesCONT">
        <div className="w-full h-svh max-sm:h-fit  BlackBG sm:sticky top-0 left-0 pt-[10vh] flex flex-col p-5 sm:px-10">
          <div className="w-full h-fit flex gap-5 max-sm:flex-col">
            <div className="w-[30vw] h-auto max-sm:h-fit WhiteText  flex flex-col ">
              <p className="text-[1vw] leading-[1vw] max-sm:text-[1rem] max-sm:leading-[1rem] RedText uppercase">
                What We Do....
              </p>
              <p className="font-semibold max-sm:text-[2rem] max-sm:leading-[2rem] text-[2vw] leading-[2.2vw] uppercase">
                OUR SERVICES
              </p>
            </div>

            <div className="text-[1.7vw] w-[70vw] leading-[1.7vw] pt-[2vw] max-sm:text-[1rem] max-sm:leading-[1rem] max-sm:w-full ml-auto text-justify text-white flex  [text-indent:30vw]">
              We provide advanced automotive technology solutions, including
              AI-powered dashcams, telematics systems, OEM-integrated lighting
              and vision systems, and cloud-based SaaS platforms. Our services
              are designed to enhance vehicle safety, connectivity, and
              performance through seamless hardware and software integration.
              With a focus on customization and OEM-grade engineering, we
              deliver scalable, reliable, and future-ready solutions tailored to
              modern mobility needs.
            </div>
          </div>

          <div className="w-full h-[45vh] max-sm:h-fit  mt-auto max-sm:pt-[5vh] max-sm:gap-[2vh] flex max-sm:flex-col overflow-hidden gap-2 ">
            {services.map((item, index) => {
              const bgColors = [
                "bg-red-100",
                "bg-red-200",
                "bg-red-300",
                "bg-red-400",
                "bg-[#E31B21]",
              ];

              const txtColors = [
                "text-[black]",
                "text-[black]",
                "text-[black]",
                "text-[white]",
                "text-[white]",
              ];

              return (
                <div
                  key={index}
                  className={`w-1/5 max-sm:w-full h-auto max-sm:h-fit sm:translate-y-[150%] p-5 flex flex-col gap-5 ${bgColors[index % bgColors.length]} CRD${index + 1}`}
                >
                  <p
                    className={`text-[1.7vw] w-[95%] leading-[1.7vw] max-sm:text-[1.2rem] max-sm:leading-[1.2rem] font-semibold ${txtColors[index % bgColors.length]} uppercase `}
                  >
                    {item.title}
                  </p>

                  <p
                    className={` flex  text-justify mt-auto  text-[1vw] leading-[1vw] max-sm:text-[1rem] max-sm:leading-[1rem] ${txtColors[index % bgColors.length]} `}
                  >
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CONTACT FORM */}

      <section className="relative BlackBG py-28 px-6 sm:px-10">
        <div className="w-full h-fit flex gap-5">
          <div className="w-[30vw] max-sm:w-full h-auto WhiteText  flex flex-col ">
            <p className="text-[1vw] leading-[1vw] max-sm:text-[1rem] max-sm:leading-[1rem] RedText uppercase">
              Get In Touch
            </p>
            <p className="font-semibold text-[2vw] max-sm:text-[2rem] max-sm:leading-[2rem] leading-[2.2vw] uppercase">
              Contact Us
            </p>
          </div>
        </div>

        <div className="contact-inner relative z-10 max-w-2xl mt-10 mx-auto text-center">
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
                    className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/50 outline-none focus:border-red-500 transition-colors"
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
                  placeholder="Tell us about your project..."
                  className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/50 outline-none focus:border-red-500 transition-colors resize-none"
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
              <h4 className="text-xs WhiteText WhiteText tracking-[0.3em] uppercase mb-2 self-start md:self-center">
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
                    className="w-fit px-5 h-10 rounded-lg flex items-center justify-center text-xs font-bold text-white/80 hover:RedText transition-all duration-200 hover:scale-110"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
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
              © {new Date().getFullYear()} Mosfet. All rights reserved.
            </span>
            <span className=" transition-colors RedText cursor-default flex justify-center items-center gap-2">
              Developed by{" "}
              <a
                href="https://www.zerrorstudios.com/"
                target="blank"
                className="text-white underline underline-offset-2"
              >
                <AnimatedTitle text={" Zerror Studios"} />
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
