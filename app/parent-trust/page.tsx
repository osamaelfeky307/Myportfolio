"use client";

import { useEffect, useState, useRef } from "react";
import {
  Shield,
  AlertTriangle,
  Users,
  Building2,
  Smartphone,
  FileCheck,
  TrendingUp,
  ArrowRight,
  ChevronDown,
  CheckCircle2,
  Clock,
  DollarSign,
  Heart,
  Lock,
  MessageCircle,
  Phone,
  Send,
  Star,
  Target,
  Zap,
  Eye,
  MapPin,
  Wifi,
  Menu,
  X,
} from "lucide-react";

/* ──────────────────────────────────────────────
   NAVBAR
────────────────────────────────────────────── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`pt-nav ${scrolled ? "pt-nav-scrolled" : ""}`}>
      <div className="pt-nav-inner">
        <a href="#hero" onClick={(e) => { e.preventDefault(); go("hero"); }} className="pt-nav-logo">
          <Shield size={24} />
          <span>TrustBridge</span>
        </a>
        <ul className={`pt-nav-links ${open ? "open" : ""}`}>
          <li><a href="#problem" onClick={(e) => { e.preventDefault(); go("problem"); }}>Problem</a></li>
          <li><a href="#solution" onClick={(e) => { e.preventDefault(); go("solution"); }}>Solution</a></li>
          <li><a href="#hospitality" onClick={(e) => { e.preventDefault(); go("hospitality"); }}>Hospitality</a></li>
          <li><a href="#tech" onClick={(e) => { e.preventDefault(); go("tech"); }}>Tech</a></li>
          <li><a href="#roi" onClick={(e) => { e.preventDefault(); go("roi"); }}>ROI</a></li>
          <li>
            <a
              href="#pilot"
              onClick={(e) => { e.preventDefault(); go("pilot"); }}
              className="pt-nav-cta"
            >
              Start Pilot
            </a>
          </li>
        </ul>
        <button className="pt-nav-burger" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
}

/* ──────────────────────────────────────────────
   HERO SECTION
────────────────────────────────────────────── */
function HeroSection() {
  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="pt-section pt-grid-bg" style={{ minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: "72px" }}>
      {/* Glow effects */}
      <div className="pt-hero-glow" style={{ top: "-200px", left: "-200px", background: "var(--pt-primary)", animation: "pt-pulse-glow 8s ease-in-out infinite" }} />
      <div className="pt-hero-glow" style={{ bottom: "-200px", right: "-200px", background: "var(--pt-cyan)", animation: "pt-pulse-glow 8s ease-in-out infinite 4s" }} />

      <div className="pt-container" style={{ position: "relative", zIndex: 1 }}>
        <div className="pt-animate-fade-up" style={{ textAlign: "center", maxWidth: "900px", margin: "0 auto" }}>
          <div className="pt-badge" style={{ marginBottom: "24px" }}>
            <Shield size={14} />
            Hospitality Development & Management
          </div>

          <h1 className="pt-heading pt-heading-xl" style={{ marginBottom: "24px" }}>
            Parents Say{" "}
            <span className="pt-gradient-text">"Yes"</span>
            <br />
            When Trust is Built In.
          </h1>

          <p className="pt-subtext" style={{ margin: "0 auto 40px", maxWidth: "640px" }}>
            Stop losing youth bookings to parental anxiety. TrustBridge delivers a managed hospitality ecosystem
            that transforms worried parents into confident advocates — so your programs fill up, not fall apart.
          </p>

          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <button onClick={() => go("pilot")} className="pt-btn-primary">
              Request a Pilot <ArrowRight size={18} />
            </button>
            <button onClick={() => go("problem")} className="pt-btn-ghost">
              See the Problem <ChevronDown size={18} />
            </button>
          </div>

          {/* Floating stats strip */}
          <div
            className="pt-animate-fade-up"
            style={{
              marginTop: "80px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "24px",
            }}
          >
            {[
              { num: "40%", label: "Average Drop-off Rate", icon: <AlertTriangle size={18} /> },
              { num: "$120K+", label: "Lost Revenue / Year", icon: <DollarSign size={18} /> },
              { num: "3x", label: "Booking Recovery", icon: <TrendingUp size={18} /> },
            ].map((s, i) => (
              <div
                key={i}
                className="pt-card"
                style={{
                  textAlign: "center",
                  animationDelay: `${0.3 + i * 0.15}s`,
                }}
              >
                <div style={{ color: "var(--pt-primary-light)", marginBottom: "8px", display: "flex", justifyContent: "center" }}>{s.icon}</div>
                <div className="pt-stat-number" style={{ color: i === 2 ? "var(--pt-emerald)" : "var(--pt-coral)", marginBottom: "4px" }}>
                  {s.num}
                </div>
                <div style={{ fontSize: "0.8rem", color: "var(--pt-fg-3)", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 500 }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   PROBLEM SECTION
────────────────────────────────────────────── */
function ProblemSection() {
  return (
    <section id="problem" className="pt-section">
      <div className="pt-container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
          {/* Left: Copy */}
          <div>
            <div className="pt-badge" style={{ marginBottom: "20px", background: "var(--pt-coral-glow)", color: "var(--pt-coral)", borderColor: "rgba(244, 63, 94, 0.2)" }}>
              <AlertTriangle size={14} />
              The Drop-Off Dilemma
            </div>

            <h2 className="pt-heading pt-heading-lg" style={{ marginBottom: "20px" }}>
              Youth Say <span style={{ color: "var(--pt-emerald)" }}>"Yes."</span>
              <br />
              Parents Say <span style={{ color: "var(--pt-coral)" }}>"Absolutely Not."</span>
            </h2>

            <p className="pt-subtext" style={{ marginBottom: "32px" }}>
              Your marketing works. Youths are excited. Applications pour in. But between sign-up and departure,
              <strong style={{ color: "var(--pt-fg)" }}> parental anxiety kills the booking.</strong> Safety concerns,
              unknown accommodations, and lack of communication erode trust — and your revenue.
            </p>

            <ul className="pt-checklist">
              {[
                "Parents can't verify accommodation quality or safety standards",
                "No real-time visibility into their child's whereabouts or activities",
                "Customer service teams buried in reassurance calls from anxious parents",
                "Marketing spend wasted on bookings that never convert to departures",
              ].map((item, i) => (
                <li key={i}>
                  <span className="check-icon" style={{ background: "var(--pt-coral-glow)", color: "var(--pt-coral)" }}>✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Visual funnel */}
          <div style={{ position: "relative" }}>
            <div className="pt-card" style={{ padding: "40px" }}>
              <div style={{ fontSize: "0.75rem", color: "var(--pt-fg-3)", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600, marginBottom: "32px" }}>
                Typical Youth Program Funnel
              </div>

              {[
                { stage: "Awareness & Interest", count: "500 Youths", pct: 100, color: "var(--pt-primary)" },
                { stage: "Application Submitted", count: "320 Youths", pct: 64, color: "var(--pt-primary-light)" },
                { stage: "Parents Approve", count: "180 Youths", pct: 36, color: "var(--pt-amber)" },
                { stage: "Actually Depart", count: "140 Youths", pct: 28, color: "var(--pt-coral)" },
              ].map((step, i) => (
                <div key={i} style={{ marginBottom: "20px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                    <span style={{ fontSize: "0.85rem", color: "var(--pt-fg-2)" }}>{step.stage}</span>
                    <span style={{ fontSize: "0.85rem", fontWeight: 600, color: step.color }}>{step.count}</span>
                  </div>
                  <div style={{ height: "8px", background: "var(--pt-bg-elevated)", borderRadius: "4px", overflow: "hidden" }}>
                    <div
                      style={{
                        width: `${step.pct}%`,
                        height: "100%",
                        background: step.color,
                        borderRadius: "4px",
                        transition: "width 1.5s cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                    />
                  </div>
                </div>
              ))}

              <div className="pt-divider" style={{ margin: "24px 0" }} />

              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <AlertTriangle size={20} style={{ color: "var(--pt-coral)" }} />
                <div>
                  <div style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--pt-coral)" }}>72% Revenue Lost</div>
                  <div style={{ fontSize: "0.8rem", color: "var(--pt-fg-3)" }}>Between interest and departure</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #problem .pt-container > div {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}

/* ──────────────────────────────────────────────
   OPERATIONAL GAP SECTION
────────────────────────────────────────────── */
function GapSection() {
  return (
    <section id="gap" className="pt-section" style={{ background: "var(--pt-bg-card)" }}>
      <div className="pt-container" style={{ textAlign: "center" }}>
        <div className="pt-badge" style={{ marginBottom: "20px", background: "var(--pt-amber-glow)", color: "var(--pt-amber)", borderColor: "rgba(245, 158, 11, 0.2)" }}>
          <Target size={14} />
          The Operational Gap
        </div>

        <h2 className="pt-heading pt-heading-lg" style={{ marginBottom: "16px", maxWidth: "700px", margin: "0 auto 16px" }}>
          You Build Programs.<br />
          <span style={{ color: "var(--pt-fg-3)" }}>Not Hotels.</span>
        </h2>

        <p className="pt-subtext" style={{ margin: "0 auto 60px", maxWidth: "600px" }}>
          Your team excels at creating life-changing volunteer content, mentorship, and youth experiences.
          Hospitality management, tech infrastructure, and parental communication aren't your core competency
          — <strong style={{ color: "var(--pt-fg)" }}>and they shouldn't need to be.</strong>
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 80px 1fr",
            gap: "24px",
            alignItems: "start",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          {/* Your Strengths */}
          <div className="pt-card" style={{ textAlign: "left" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
              <div className="pt-icon-box" style={{ background: "var(--pt-emerald-glow)", color: "var(--pt-emerald)" }}>
                <Heart size={24} />
              </div>
              <div>
                <div style={{ fontWeight: 600, color: "var(--pt-fg)" }}>Your Strengths</div>
                <div style={{ fontSize: "0.8rem", color: "var(--pt-fg-3)" }}>What you should focus on</div>
              </div>
            </div>
            <ul className="pt-checklist">
              {[
                "Program curriculum design",
                "Volunteer recruitment & training",
                "Partnership & sponsor relations",
                "Youth mentorship & growth",
                "Community impact measurement",
              ].map((item, i) => (
                <li key={i}>
                  <span className="check-icon" style={{ background: "var(--pt-emerald-glow)", color: "var(--pt-emerald)" }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Arrow */}
          <div className="pt-flow-connector" style={{ paddingTop: "80px" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
              <div style={{ width: "2px", height: "40px", background: "var(--pt-border)" }} />
              <ArrowRight size={20} className="pt-animate-float" style={{ color: "var(--pt-primary-light)" }} />
              <div style={{ width: "2px", height: "40px", background: "var(--pt-border)" }} />
            </div>
          </div>

          {/* The Gap */}
          <div className="pt-card" style={{ textAlign: "left", borderColor: "var(--pt-coral)", borderStyle: "dashed" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
              <div className="pt-icon-box" style={{ background: "var(--pt-coral-glow)", color: "var(--pt-coral)" }}>
                <AlertTriangle size={24} />
              </div>
              <div>
                <div style={{ fontWeight: 600, color: "var(--pt-fg)" }}>The Gap</div>
                <div style={{ fontSize: "0.8rem", color: "var(--pt-fg-3)" }}>What drains your resources</div>
              </div>
            </div>
            <ul className="pt-checklist">
              {[
                "Hostel/camp facility management",
                "On-ground safety & supervision",
                "Parent communication systems",
                "Travel logistics coordination",
                "Compliance & certification",
              ].map((item, i) => (
                <li key={i}>
                  <span className="check-icon" style={{ background: "var(--pt-coral-glow)", color: "var(--pt-coral)" }}>!</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #gap .pt-container > div:last-child {
            grid-template-columns: 1fr !important;
          }
          #gap .pt-flow-connector {
            padding-top: 0 !important;
            transform: rotate(90deg);
          }
        }
      `}</style>
    </section>
  );
}

/* ──────────────────────────────────────────────
   3-PILLAR SOLUTION SECTION
────────────────────────────────────────────── */
function SolutionSection() {
  const pillars = [
    {
      num: "01",
      icon: <Building2 size={28} />,
      title: "Standardized Hospitality & SOPs",
      desc: "Fully managed, safety-audited accommodations with trained on-ground supervisors and strict operational protocols.",
      color: "var(--pt-primary)",
      glow: "var(--pt-primary-glow)",
      features: ["Vetted facilities", "24/7 supervision", "Safety SOPs"],
    },
    {
      num: "02",
      icon: <Smartphone size={28} />,
      title: "The Tech Communication Backbone",
      desc: "Automated SMS/WhatsApp notifications giving parents real-time updates from arrival to daily activities to safe return.",
      color: "var(--pt-cyan)",
      glow: "var(--pt-cyan-glow)",
      features: ["Live notifications", "GPS check-ins", "Photo updates"],
    },
    {
      num: "03",
      icon: <FileCheck size={28} />,
      title: "The Parent Trust Kit",
      desc: "Pre-departure certification packages, professional itineraries, and supervisor bios that convert worried parents into willing signatories.",
      color: "var(--pt-emerald)",
      glow: "var(--pt-emerald-glow)",
      features: ["Safety certs", "Staff bios", "Digital itineraries"],
    },
  ];

  return (
    <section id="solution" className="pt-section">
      <div className="pt-container">
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div className="pt-badge" style={{ marginBottom: "20px" }}>
            <Zap size={14} />
            Our Solution
          </div>

          <h2 className="pt-heading pt-heading-lg" style={{ marginBottom: "16px" }}>
            The <span className="pt-gradient-text">Turnkey Trust System</span>
          </h2>

          <p className="pt-subtext" style={{ margin: "0 auto" }}>
            A closed-loop ecosystem that manages every touchpoint between your program and
            parental confidence — from physical safety to digital communication.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
          {pillars.map((p, i) => (
            <div key={i} className="pt-card" style={{ position: "relative", overflow: "hidden" }}>
              <div className="pt-pillar-num" style={{ color: p.color }}>{p.num}</div>
              <div className="pt-icon-box" style={{ background: p.glow, color: p.color, marginBottom: "20px" }}>
                {p.icon}
              </div>
              <h3 className="pt-heading pt-heading-md" style={{ marginBottom: "12px" }}>{p.title}</h3>
              <p style={{ fontSize: "0.95rem", color: "var(--pt-fg-2)", lineHeight: 1.7, marginBottom: "20px" }}>
                {p.desc}
              </p>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                {p.features.map((f, fi) => (
                  <span
                    key={fi}
                    style={{
                      fontSize: "0.75rem",
                      padding: "4px 12px",
                      borderRadius: "100px",
                      background: p.glow,
                      color: p.color,
                      fontWeight: 500,
                    }}
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   HOSPITALITY AS A SERVICE
────────────────────────────────────────────── */
function HospitalitySection() {
  const features = [
    {
      icon: <Building2 size={22} />,
      title: "Secure, Standardized Hostels",
      desc: "Every facility meets our 50-point safety audit. Controlled entry, fire safety, clean water, and documented emergency protocols.",
    },
    {
      icon: <Users size={22} />,
      title: "Trained On-Ground Supervisors",
      desc: "Background-checked, first-aid certified supervisors with strict youth safeguarding training. 1:8 supervisor-to-youth ratios.",
    },
    {
      icon: <Lock size={22} />,
      title: "Strict Safety Protocols",
      desc: "Nightly headcounts, curfew enforcement, incident reporting, and 24/7 emergency hotlines for both parents and program leaders.",
    },
    {
      icon: <MapPin size={22} />,
      title: "Vetted Local Logistics",
      desc: "Ground transportation, meal planning, and activity coordination handled by our local operations team — not your program staff.",
    },
    {
      icon: <Eye size={22} />,
      title: "Transparent Oversight",
      desc: "Daily supervisor reports shared with your operations team. Full visibility into operations without the operational burden.",
    },
    {
      icon: <Star size={22} />,
      title: "Quality Assurance",
      desc: "Post-trip satisfaction surveys and continuous improvement loops. We maintain brand standards your parents can trust.",
    },
  ];

  return (
    <section id="hospitality" className="pt-section" style={{ background: "var(--pt-bg-card)" }}>
      <div className="pt-container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "80px", alignItems: "start" }}>
          {/* Left: Sticky header */}
          <div style={{ position: "sticky", top: "120px" }}>
            <div
              className="pt-badge"
              style={{ marginBottom: "20px", background: "var(--pt-primary-glow)", color: "var(--pt-primary-light)", borderColor: "rgba(99, 102, 241, 0.2)" }}
            >
              <Building2 size={14} />
              Pillar One
            </div>

            <h2 className="pt-heading pt-heading-lg" style={{ marginBottom: "16px" }}>
              Hospitality<br />
              <span style={{ color: "var(--pt-primary-light)" }}>as a Service</span>
            </h2>

            <p className="pt-subtext" style={{ marginBottom: "32px" }}>
              We don't list hostels. We <strong style={{ color: "var(--pt-fg)" }}>manage them</strong>. Every facility in our
              network is operated to our standards — giving your organization five-star peace-of-mind at hostel-level pricing.
            </p>

            <div className="pt-quote" style={{ background: "var(--pt-bg-elevated)" }}>
              <p style={{ fontSize: "0.95rem", color: "var(--pt-fg-2)", lineHeight: 1.7, fontStyle: "italic", position: "relative", zIndex: 1 }}>
                "We used to spend 30% of our pre-trip time just calming parents down about accommodations.
                Now we just hand them TrustBridge's certification packet."
              </p>
              <div style={{ marginTop: "16px", fontSize: "0.8rem", color: "var(--pt-fg-3)" }}>
                — Operations Director, Youth Volunteer Program
              </div>
            </div>
          </div>

          {/* Right: Feature grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            {features.map((f, i) => (
              <div
                key={i}
                className="pt-card"
                style={{ padding: "24px" }}
              >
                <div
                  className="pt-icon-box"
                  style={{ background: "var(--pt-primary-glow)", color: "var(--pt-primary-light)", marginBottom: "16px", width: "44px", height: "44px", borderRadius: "12px" }}
                >
                  {f.icon}
                </div>
                <h4 style={{ fontFamily: "var(--pt-font-display)", fontWeight: 600, fontSize: "1rem", color: "var(--pt-fg)", marginBottom: "8px" }}>
                  {f.title}
                </h4>
                <p style={{ fontSize: "0.85rem", color: "var(--pt-fg-3)", lineHeight: 1.6 }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #hospitality .pt-container > div {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          #hospitality .pt-container > div > div:first-child {
            position: static !important;
          }
          #hospitality .pt-container > div > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

/* ──────────────────────────────────────────────
   TECH INTERFACE SECTION
────────────────────────────────────────────── */
function TechSection() {
  const notifications = [
    { time: "09:15 AM", msg: "✅ Ahmed has safely arrived at Camp Horizons. All check-in complete.", type: "arrival" },
    { time: "10:30 AM", msg: "🏕️ Morning activity started: Environmental Conservation Workshop", type: "activity" },
    { time: "12:45 PM", msg: "🍽️ Lunch break. All participants accounted for. Headcount: 24/24", type: "checkin" },
    { time: "03:00 PM", msg: "📸 Photo update: Your child is participating in the Community Mural Project", type: "photo" },
    { time: "09:00 PM", msg: "🌙 Evening curfew. All youths in residence. Facility secured.", type: "curfew" },
  ];

  return (
    <section id="tech" className="pt-section">
      <div className="pt-container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
          {/* Left: Phone mockup */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                width: "320px",
                background: "var(--pt-bg-card)",
                border: "1px solid var(--pt-border)",
                borderRadius: "32px",
                padding: "16px",
                boxShadow: "0 40px 80px -20px rgba(0, 0, 0, 0.6)",
              }}
            >
              {/* Phone header */}
              <div style={{ textAlign: "center", padding: "12px 0 16px" }}>
                <div style={{ width: "60px", height: "4px", background: "var(--pt-border)", borderRadius: "2px", margin: "0 auto 16px" }} />
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                  <Shield size={16} style={{ color: "var(--pt-primary-light)" }} />
                  <span style={{ fontFamily: "var(--pt-font-display)", fontWeight: 600, fontSize: "0.9rem" }}>TrustBridge</span>
                </div>
                <div style={{ fontSize: "0.7rem", color: "var(--pt-fg-3)", marginTop: "4px" }}>Parent Notifications</div>
              </div>

              <div className="pt-divider" />

              {/* Notifications */}
              <div style={{ padding: "12px 4px", display: "flex", flexDirection: "column", gap: "10px" }}>
                {notifications.map((n, i) => (
                  <div
                    key={i}
                    style={{
                      background: "var(--pt-bg-elevated)",
                      borderRadius: "14px",
                      padding: "12px 14px",
                      animation: `pt-fade-up 0.5s ease ${0.2 + i * 0.15}s both`,
                    }}
                  >
                    <div style={{ fontSize: "0.65rem", color: "var(--pt-fg-3)", marginBottom: "4px" }}>{n.time}</div>
                    <div style={{ fontSize: "0.8rem", color: "var(--pt-fg-2)", lineHeight: 1.5 }}>{n.msg}</div>
                  </div>
                ))}
              </div>

              {/* WhatsApp badge */}
              <div style={{ textAlign: "center", padding: "12px 0" }}>
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: "6px",
                  fontSize: "0.7rem", color: "var(--pt-emerald)", background: "var(--pt-emerald-glow)",
                  padding: "6px 14px", borderRadius: "100px",
                }}>
                  <MessageCircle size={12} />
                  via WhatsApp & SMS
                </div>
              </div>
            </div>
          </div>

          {/* Right: Copy */}
          <div>
            <div className="pt-badge" style={{ marginBottom: "20px", background: "var(--pt-cyan-glow)", color: "var(--pt-cyan)", borderColor: "rgba(6, 182, 212, 0.2)" }}>
              <Smartphone size={14} />
              Pillar Two
            </div>

            <h2 className="pt-heading pt-heading-lg" style={{ marginBottom: "16px" }}>
              The Tech Interface
              <br />
              <span style={{ color: "var(--pt-cyan)" }}>That Calms Parents</span>
            </h2>

            <p className="pt-subtext" style={{ marginBottom: "32px" }}>
              Automated, real-time notifications keep parents informed at every stage — without adding a single
              customer service call to your team's workload.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {[
                { icon: <Wifi size={20} />, title: "Zero-Touch Automation", desc: "Supervisors check in via their app. Parents get notified automatically. Your team does nothing." },
                { icon: <Phone size={20} />, title: "Familiar Channels", desc: "Updates go through WhatsApp and SMS — no app downloads, no login friction for parents." },
                { icon: <Clock size={20} />, title: "Reduced CS Overhead", desc: "Organizations report 70% fewer inbound parent calls after implementing TrustBridge notifications." },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <div className="pt-icon-box" style={{ background: "var(--pt-cyan-glow)", color: "var(--pt-cyan)", width: "44px", height: "44px", borderRadius: "12px" }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontFamily: "var(--pt-font-display)", fontWeight: 600, fontSize: "0.95rem", color: "var(--pt-fg)", marginBottom: "4px" }}>
                      {item.title}
                    </div>
                    <div style={{ fontSize: "0.85rem", color: "var(--pt-fg-3)", lineHeight: 1.6 }}>
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #tech .pt-container > div {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}

/* ──────────────────────────────────────────────
   ROI SECTION
────────────────────────────────────────────── */
function ROISection() {
  return (
    <section id="roi" className="pt-section" style={{ background: "var(--pt-bg-card)" }}>
      <div className="pt-container">
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div className="pt-badge" style={{ marginBottom: "20px", background: "var(--pt-emerald-glow)", color: "var(--pt-emerald)", borderColor: "rgba(16, 185, 129, 0.2)" }}>
            <TrendingUp size={14} />
            Financial Impact
          </div>

          <h2 className="pt-heading pt-heading-lg" style={{ marginBottom: "16px" }}>
            More Trust = More <span style={{ color: "var(--pt-emerald)" }}>Revenue</span>
          </h2>

          <p className="pt-subtext" style={{ margin: "0 auto" }}>
            When parents feel confident, they sign the permission form. It's that simple.
            Here's what happens to your numbers when parental trust is no longer the bottleneck.
          </p>
        </div>

        {/* ROI comparison */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px", marginBottom: "64px" }}>
          {[
            {
              label: "Without TrustBridge",
              stats: [
                { key: "Applications", val: "500" },
                { key: "Parent Approval", val: "36%" },
                { key: "Actual Departures", val: "140" },
                { key: "Revenue @ $800/seat", val: "$112,000" },
              ],
              accent: "var(--pt-coral)",
              accentGlow: "var(--pt-coral-glow)",
            },
            {
              label: "With TrustBridge",
              stats: [
                { key: "Applications", val: "500" },
                { key: "Parent Approval", val: "82%" },
                { key: "Actual Departures", val: "380" },
                { key: "Revenue @ $800/seat", val: "$304,000" },
              ],
              accent: "var(--pt-emerald)",
              accentGlow: "var(--pt-emerald-glow)",
            },
            {
              label: "Net Impact",
              stats: [
                { key: "Added Departures", val: "+240" },
                { key: "Revenue Recovered", val: "+$192,000" },
                { key: "CS Calls Reduced", val: "−70%" },
                { key: "ROI on TrustBridge", val: "12x" },
              ],
              accent: "var(--pt-primary-light)",
              accentGlow: "var(--pt-primary-glow)",
            },
          ].map((col, i) => (
            <div key={i} className="pt-card" style={{ position: "relative", overflow: "hidden" }}>
              <div style={{
                fontSize: "0.7rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: col.accent,
                marginBottom: "24px",
              }}>
                {col.label}
              </div>

              {col.stats.map((s, si) => (
                <div key={si} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", borderBottom: si < col.stats.length - 1 ? "1px solid var(--pt-border)" : "none" }}>
                  <span style={{ fontSize: "0.85rem", color: "var(--pt-fg-3)" }}>{s.key}</span>
                  <span style={{
                    fontFamily: "var(--pt-font-display)",
                    fontWeight: 700,
                    fontSize: si === col.stats.length - 1 ? "1.4rem" : "1rem",
                    color: si === col.stats.length - 1 ? col.accent : "var(--pt-fg)",
                  }}>
                    {s.val}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Bar chart visual */}
        <div className="pt-card" style={{ padding: "40px" }}>
          <div style={{ fontSize: "0.75rem", color: "var(--pt-fg-3)", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600, marginBottom: "40px" }}>
            Booking Conversion: Before vs. After TrustBridge
          </div>

          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "center", gap: "40px", height: "220px" }}>
            {[
              { label: "Interest", before: 100, after: 100, bColor: "var(--pt-border-hover)", aColor: "var(--pt-primary)" },
              { label: "Applied", before: 64, after: 64, bColor: "var(--pt-border-hover)", aColor: "var(--pt-primary-light)" },
              { label: "Approved", before: 36, after: 82, bColor: "var(--pt-coral)", aColor: "var(--pt-emerald)" },
              { label: "Departed", before: 28, after: 76, bColor: "var(--pt-coral)", aColor: "var(--pt-emerald)" },
            ].map((bar, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                <div style={{ display: "flex", gap: "6px", alignItems: "flex-end", height: "180px" }}>
                  <div
                    className="pt-bar"
                    data-value={`${bar.before}%`}
                    style={{ width: "32px", height: `${bar.before * 1.8}px`, background: bar.bColor, opacity: 0.5 }}
                  />
                  <div
                    className="pt-bar"
                    data-value={`${bar.after}%`}
                    style={{ width: "32px", height: `${bar.after * 1.8}px`, background: bar.aColor }}
                  />
                </div>
                <div style={{ fontSize: "0.75rem", color: "var(--pt-fg-3)", fontWeight: 500 }}>{bar.label}</div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: "24px", marginTop: "24px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div style={{ width: "12px", height: "12px", borderRadius: "3px", background: "var(--pt-border-hover)", opacity: 0.5 }} />
              <span style={{ fontSize: "0.75rem", color: "var(--pt-fg-3)" }}>Before</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div style={{ width: "12px", height: "12px", borderRadius: "3px", background: "var(--pt-primary)" }} />
              <span style={{ fontSize: "0.75rem", color: "var(--pt-fg-3)" }}>After TrustBridge</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   PILOT CTA SECTION
────────────────────────────────────────────── */
function PilotSection() {
  const steps = [
    {
      step: "01",
      title: "Discovery Call",
      desc: "We learn about your upcoming trip/camp: destination, size, dates, and pain points.",
      icon: <Phone size={22} />,
    },
    {
      step: "02",
      title: "Pilot Deployment",
      desc: "We manage the hospitality and parental communication for one upcoming program — at zero upfront cost.",
      icon: <Zap size={22} />,
    },
    {
      step: "03",
      title: "Measure & Decide",
      desc: "Compare your conversion rates, parent satisfaction, and operational load against previous trips. Results speak.",
      icon: <Target size={22} />,
    },
  ];

  return (
    <section id="pilot" className="pt-section pt-grid-bg" style={{ position: "relative" }}>
      <div className="pt-hero-glow" style={{ bottom: "-200px", left: "50%", transform: "translateX(-50%)", background: "var(--pt-primary)", animation: "pt-pulse-glow 8s ease-in-out infinite" }} />

      <div className="pt-container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div className="pt-badge" style={{ marginBottom: "20px" }}>
            <Send size={14} />
            Get Started
          </div>

          <h2 className="pt-heading pt-heading-lg" style={{ marginBottom: "16px" }}>
            Zero Risk. <span className="pt-gradient-text">Full Proof.</span>
          </h2>

          <p className="pt-subtext" style={{ margin: "0 auto" }}>
            We're so confident in TrustBridge that we'll manage your next trip's hospitality and parental
            communication as a pilot — you only commit if the numbers convince you.
          </p>
        </div>

        {/* Timeline steps */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", marginBottom: "64px" }}>
          {steps.map((s, i) => (
            <div key={i} className="pt-card pt-gradient-border" style={{ textAlign: "center", position: "relative", overflow: "visible" }}>
              <div style={{
                fontFamily: "var(--pt-font-display)",
                fontWeight: 800,
                fontSize: "4rem",
                lineHeight: 1,
                opacity: 0.05,
                position: "absolute",
                top: "10px",
                right: "20px",
              }}>
                {s.step}
              </div>
              <div className="pt-icon-box" style={{ background: "var(--pt-primary-glow)", color: "var(--pt-primary-light)", margin: "0 auto 16px" }}>
                {s.icon}
              </div>
              <h3 style={{ fontFamily: "var(--pt-font-display)", fontWeight: 600, fontSize: "1.1rem", color: "var(--pt-fg)", marginBottom: "8px" }}>
                {s.title}
              </h3>
              <p style={{ fontSize: "0.9rem", color: "var(--pt-fg-3)", lineHeight: 1.6 }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Box */}
        <div
          className="pt-card"
          style={{
            textAlign: "center",
            padding: "56px 40px",
            background: "linear-gradient(135deg, rgba(99, 102, 241, 0.08), rgba(6, 182, 212, 0.06))",
            border: "1px solid rgba(99, 102, 241, 0.15)",
          }}
        >
          <h3 className="pt-heading" style={{ fontSize: "1.8rem", marginBottom: "12px" }}>
            Let's Fill Your Next Program
          </h3>
          <p style={{ fontSize: "1rem", color: "var(--pt-fg-2)", marginBottom: "32px", maxWidth: "500px", margin: "0 auto 32px" }}>
            One conversation. One pilot trip. The data will make the decision for you.
          </p>

          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="mailto:contact@trustbridge.com" className="pt-btn-primary" style={{ fontSize: "1rem", padding: "16px 40px" }}>
              Book a Discovery Call <ArrowRight size={18} />
            </a>
            <a href="mailto:contact@trustbridge.com" className="pt-btn-ghost" style={{ fontSize: "1rem", padding: "16px 40px" }}>
              Download One-Pager
            </a>
          </div>

          <div style={{ marginTop: "24px", display: "flex", justifyContent: "center", gap: "24px", flexWrap: "wrap" }}>
            {["No upfront costs", "Full pilot support", "Measurable outcomes"].map((t, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <CheckCircle2 size={14} style={{ color: "var(--pt-emerald)" }} />
                <span style={{ fontSize: "0.8rem", color: "var(--pt-fg-3)" }}>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   FOOTER
────────────────────────────────────────────── */
function Footer() {
  return (
    <footer style={{ background: "var(--pt-bg)", borderTop: "1px solid var(--pt-border)", padding: "40px 0" }}>
      <div className="pt-container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Shield size={20} style={{ color: "var(--pt-primary-light)" }} />
          <span style={{ fontFamily: "var(--pt-font-display)", fontWeight: 700, fontSize: "1.1rem", color: "var(--pt-fg)" }}>
            TrustBridge
          </span>
        </div>
        <div style={{ fontSize: "0.8rem", color: "var(--pt-fg-3)" }}>
          © 2026 TrustBridge Hospitality. A managed ecosystem for youth program excellence.
        </div>
        <div style={{ display: "flex", gap: "24px" }}>
          {["Privacy", "Terms", "Contact"].map((link, i) => (
            <a key={i} href="#" style={{ fontSize: "0.8rem", color: "var(--pt-fg-3)", textDecoration: "none" }}>
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

/* ──────────────────────────────────────────────
   MAIN PAGE
────────────────────────────────────────────── */
export default function ParentTrustPage() {
  return (
    <main className="pt-noise">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <GapSection />
      <SolutionSection />
      <HospitalitySection />
      <TechSection />
      <ROISection />
      <PilotSection />
      <Footer />
    </main>
  );
}
