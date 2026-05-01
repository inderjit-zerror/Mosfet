import Home from "@/components/pages/Home";
import WebPageSchema from "@/components/seo/WebPageSchema";
import { Const } from "@/components/utils/Constants";
import React from "react";

const page = () => {
  return (
    <>
      <WebPageSchema
        name="Mosfet Tech Solutions | Automotive AI & Telematics Systems"
        description="Mosfet Tech Solutions delivers advanced automotive safety, AI-powered dashcams, telematics, and OEM-integrated vehicle systems for next-gen connected mobility."
        url={`${Const.ClientLink}/`}
      />
      <Home />
    </>
  );
};

export default page;

export const metadata = {
  title: "Mosfet Tech Solutions | Automotive AI, Telematics & Safety Systems",

  description:
    "Mosfet Tech Solutions specializes in automotive safety, AI-powered dash cameras, telematics, and intelligent vehicle systems. We build custom OEM-grade hardware and cloud platforms for connected mobility.",

  keywords: [
    "Mosfet Tech Solutions",
    "automotive technology company",
    "AI dashcam solutions",
    "vehicle telematics systems",
    "OEM automotive solutions",
    "connected mobility platform",
    "intelligent vehicle systems",
    "automotive safety technology",
    "fleet management solutions",
    "cloud-based automotive software",
    "smart vehicle integration",
    "AI in automotive industry"
  ],

  robots: "index, follow",

  metadataBase: new URL(Const.ClientLink),

  openGraph: {
    title: "Mosfet Tech Solutions | Smart Automotive Technology",
    description:
      "Advanced automotive solutions including AI dashcams, telematics, and OEM-integrated systems for safer and smarter mobility.",
    url: `${Const.ClientLink}/`,
    siteName: "Mosfet Tech Solutions",
    type: "website",
    images: [
      {
        url: `${Const.ClientLink}/og.png`,
        width: 1200,
        height: 630,
        alt: "Mosfet Tech Automotive Technology Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Mosfet Tech Solutions | AI Automotive Systems",
    description:
      "AI-powered automotive safety, telematics, and connected vehicle solutions for modern mobility.",
    images: [`${Const.ClientLink}/og.png`],
  },

  alternates: {
    canonical: `${Const.ClientLink}/`,
  },

  other: {
    image_src: `${Const.ClientLink}/og.png`,
  },
};