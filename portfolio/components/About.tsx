"use client";

import { MapPin, Code2, Heart, Shield, Globe, Trophy } from "lucide-react";
import FadeIn from "./FadeIn";
import Carousel from "./Carousel";

const QUICK_FACTS = [
  { icon: Code2,  label: "Role",       value: "Remote SWE" },
  { icon: MapPin, label: "Location",   value: "Beheira, Egypt" },
  { icon: Code2,  label: "Focus",      value: "AI / Backend" },
  { icon: Heart,  label: "IEEE Lead",  value: "2023–2024" },
  { icon: Shield, label: "Military",   value: "Completed" },
  { icon: Globe,  label: "Passport",   value: "Ready" },
];

const AWARDS = [
  { 
    title: "1st Place — AI Innovations Marathon", 
    sub: "Benha University · 10k EGP", 
    link: "https://drive.google.com/drive/folders/1Ce2XdTLHaSnNDQXwzuyeldnWMRXPkE_V",
    photos: [
      "/photos/Benha%20University%20Innovation%20Marathon%202024/481220897_1179852690166193_3549693147263768593_n.jpg",
      "/photos/Benha%20University%20Innovation%20Marathon%202024/481235951_1179852833499512_5482751438619464716_n.jpg",
      "/photos/Benha%20University%20Innovation%20Marathon%202024/481249161_1179852516832877_3238998913602376019_n.jpg",
      "/photos/Benha%20University%20Innovation%20Marathon%202024/481294474_1179852643499531_666212632487433498_n.jpg",
      "/photos/Benha%20University%20Innovation%20Marathon%202024/481660285_1179852546832874_3027378097994658811_n.jpg",
      "/photos/Benha%20University%20Innovation%20Marathon%202024/482014349_1179852523499543_4352729009518089294_n.jpg",
      "/photos/Benha%20University%20Innovation%20Marathon%202024/screenshot.png"
    ]
  },
  { 
    title: "IEEE Egypt Section Recognition", 
    sub: "IEEEXtreme Section Lead", 
    link: "https://drive.google.com/drive/folders/1RxBoHf_a4jXhp6Khy1q1VUedI7SubA_U?usp=sharing",
    photos: [
      "/photos/Recognition%20as%20IEEEXtreme%20Egypt%20Section%20Lead/Recognition%20as%20IEEEXtreme%20Egypt%20Section%20Lead/1.jpg",
      "/photos/Recognition%20as%20IEEEXtreme%20Egypt%20Section%20Lead/Recognition%20as%20IEEEXtreme%20Egypt%20Section%20Lead/2.jpg",
      "/photos/Recognition%20as%20IEEEXtreme%20Egypt%20Section%20Lead/Recognition%20as%20IEEEXtreme%20Egypt%20Section%20Lead/3.jpg",
      "/photos/Recognition%20as%20IEEEXtreme%20Egypt%20Section%20Lead/Recognition%20as%20IEEEXtreme%20Egypt%20Section%20Lead/4.jpg",
      "/photos/Recognition%20as%20IEEEXtreme%20Egypt%20Section%20Lead/Recognition%20as%20IEEEXtreme%20Egypt%20Section%20Lead/5.jpg",
      "/photos/Recognition%20as%20IEEEXtreme%20Egypt%20Section%20Lead/Recognition%20as%20IEEEXtreme%20Egypt%20Section%20Lead/6.jpg",
      "/photos/Recognition%20as%20IEEEXtreme%20Egypt%20Section%20Lead/Recognition%20as%20IEEEXtreme%20Egypt%20Section%20Lead/7.jpg"
    ]
  },
  { 
    title: "IEEE ESPC 2024 — 4th Place", 
    sub: "ASD Detection · 4th of 27", 
    link: "#",
    photos: [
      "/photos/ESPC/1.webp",
      "/photos/ESPC/2.jpg",
      "/photos/ESPC/3.webp",
      "/photos/ESPC/653682085_18072646319539726_5550343415220154945_n.jpg",
      "/photos/ESPC/656265813_18124663498582559_8893943703404040947_n.webp",
      "/photos/ESPC/661432800_18546957016064013_8229366589335145903_n.webp",
      "/photos/ESPC/669841380_18400168786151335_1623267603938936550_n.webp",
      "/photos/ESPC/670351179_18160857697436735_8513955594080316055_n.jpg",
      "/photos/ESPC/670649105_18402462910150873_6401348613299999215_n.webp",
      "/photos/ESPC/Gemini_Generated_Image_55mizi55mizi55mi.jfif"
    ]
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-[15rem] bg-white flex justify-center w-full">
      <div className="w-[88%] max-w-5xl mx-auto">
        
        <div className="flex items-baseline gap-8 mb-16 md:mb-[8rem] border-b border-border pb-8">
          <span className="editorial-label text-accent">01</span>
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-fg tracking-tight">
            About
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-24">
          
          {/* Main Bio & Snapshot */}
          <div className="lg:col-span-7 flex flex-col gap-16">
            
            <FadeIn>
              <h3 className="font-serif text-3xl md:text-4xl leading-snug text-fg">
                Building software that matters, from AI diagnostics to infrastructure.
              </h3>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <div className="flex flex-col gap-8 text-lg text-fg-2 font-light leading-[1.8]">
              <p>
                I am a Medical Informatics graduate specializing in Computers and Artificial Intelligence from Benha University. I am ambitious and detail-oriented, with practical experience in software development following the SDLC process, from requirements gathering and design to implementation and testing.
              </p>
              <p>
                I have hands-on experience in Python, data analysis, and AI techniques, as well as mobile app development using Flutter and Dart, and web development using React and Vite.
              </p>
              <p>
                I am focused on applying AI solutions and structured software development in Medical Informatics to improve healthcare outcomes and streamline medical workflows.
              </p>
              </div>
            </FadeIn>

            {/* Quick Facts */}
            <FadeIn delay={0.2}>
              <div>
                <h4 className="editorial-label mb-6 border-b border-border pb-2">Snapshot</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-8">
                  {QUICK_FACTS.map(({ label, value }) => (
                    <div key={label}>
                      <div className="text-xs text-fg-3 uppercase tracking-widest mb-1">{label}</div>
                      <div className="font-serif text-lg font-semibold text-fg">{value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

          </div>

          {/* Sidebar Honours */}
          <div className="lg:col-span-5">
            <FadeIn delay={0.3}>
              <div>
                <h4 className="editorial-label mb-6 border-b border-border pb-2 flex items-center gap-2">
                  <Trophy size={14} className="text-accent" /> Honours
                </h4>
              <div className="flex flex-col gap-12">
                {AWARDS.map((award, i) => (
                  <div key={i} className="flex flex-col gap-4">
                    <a 
                      href={award.link} 
                      target={award.link !== "#" ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className={`block group ${award.link !== "#" ? "" : "pointer-events-none"}`}
                    >
                      <div className="font-serif text-xl font-bold text-fg group-hover:text-accent transition-colors leading-snug">
                        {award.title}
                      </div>
                      <div className="text-sm text-fg-3 mt-1">{award.sub}</div>
                    </a>
                    
                    {award.photos && award.photos.length > 0 && (
                      <div className="pt-2">
                        <Carousel photos={award.photos} />
                      </div>
                    )}
                  </div>
                ))}
                </div>
              </div>
            </FadeIn>

          </div>

        </div>

      </div>
    </section>
  );
}
