import { Link } from "react-router-dom";
import {
  Cloud, Shield, Server, Monitor, ArrowRight, Settings,
  RefreshCw, HardDrive, Lock, AlertTriangle, Check, ArrowUpRight
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

import cloudImg from "@/assets/cloud-migration.jpg";
import datacenterImg from "@/assets/data-center.jpg";
import securityImg from "@/assets/cybersecurity.jpg";
import consultingImg from "@/assets/consulting.jpg";
import teamImg from "@/assets/team-meeting.jpg";
import officeImg from "@/assets/office-space.jpg";

const sections = [
  {
    label: "IT Services",
    title: "IT Services — What We Do",
    description: "Complete end-to-end IT management solutions for modern enterprises.",
    services: [
      { icon: Monitor, title: "IT Consulting", desc: "Strategic technology advisory aligned with your business goals, delivering actionable roadmaps for digital transformation and ROI optimization.", image: consultingImg },
      { icon: Server, title: "Managed Services", desc: "Proactive 24/7 monitoring, maintenance, and support for your entire IT infrastructure with guaranteed SLAs and rapid issue resolution.", image: datacenterImg },
      { icon: Settings, title: "Support Services", desc: "Multi-tier technical support with dedicated account managers and guaranteed response times for every severity level.", image: officeImg },
    ],
  },
  {
    label: "Migration",
    title: "Migration — Seamless Transitions",
    description: "We handle complex migrations with zero downtime and complete data integrity.",
    services: [
      { icon: Cloud, title: "Office 365 Migration", desc: "Full-service Microsoft 365 migration including Exchange, SharePoint, and OneDrive with comprehensive user training programs.", image: cloudImg },
      { icon: RefreshCw, title: "Exchange Migration", desc: "Seamless email system transitions preserving mailbox data, calendar entries, contacts, and distribution groups.", image: teamImg },
      { icon: HardDrive, title: "SharePoint Migration", desc: "Move files, sites, and workflows to SharePoint Online with full metadata preservation and permissions mapping.", image: officeImg },
    ],
  },
  {
    label: "Security",
    title: "Security — Stay Protected",
    description: "Enterprise-grade cybersecurity solutions to protect your organization from modern threats.",
    services: [
      { icon: Shield, title: "Managed Security", desc: "24/7 Security Operations Center with real-time threat detection, automated response, and comprehensive forensic analysis.", image: securityImg },
      { icon: Lock, title: "Data Protection", desc: "Advanced encryption, data loss prevention policies, and identity access management to safeguard sensitive information.", image: datacenterImg },
      { icon: AlertTriangle, title: "Threat Assessment", desc: "Regular vulnerability scanning, penetration testing, and security posture assessments for your entire infrastructure.", image: consultingImg },
    ],
  },
];

const pricingTiers = [
  {
    name: "Essentials",
    price: "29",
    description: "Core IT management for small teams",
    features: ["Email & collaboration setup", "Basic monitoring & alerts", "Business hours support (9-5)", "Monthly performance reports", "Up to 25 users"],
    featured: false,
  },
  {
    name: "Professional",
    price: "79",
    description: "Complete management for growing businesses",
    features: ["Everything in Essentials", "24/7 monitoring & support", "Priority incident response", "Security suite included", "Quarterly business reviews", "Up to 250 users"],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored solutions for large organizations",
    features: ["Everything in Professional", "Dedicated account team", "Custom SLA agreements", "On-site support available", "Strategic IT planning", "Unlimited users"],
    featured: false,
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="container mx-auto px-6">
          <FadeIn className="text-center max-w-2xl mx-auto">
            <p className="section-label">What We Offer</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-5">
              Our Services
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              From IT consulting to cybersecurity, we provide comprehensive solutions that cover every aspect of your technology needs.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Service Sections */}
      {sections.map((section, sIdx) => (
        <section key={sIdx} className={`py-16 md:py-24 ${sIdx % 2 === 1 ? "bg-card/30" : ""}`}>
          <div className="container mx-auto px-6">
            <FadeIn className="mb-12">
              <p className="section-label">{section.label}</p>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">{section.title}</h2>
              <p className="text-muted-foreground max-w-xl">{section.description}</p>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-5">
              {section.services.map((s, i) => (
                <FadeIn key={i} delay={i * 0.08}>
                  <div className="card-professional rounded-xl overflow-hidden h-full group">
                    <div className="h-40 overflow-hidden">
                      <img
                        src={s.image}
                        alt={s.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <s.icon className="w-4 h-4 text-primary" />
                        </div>
                        <h3 className="font-display font-semibold text-foreground">{s.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Pricing */}
      <section className="py-20 md:py-28 bg-card/30">
        <div className="container mx-auto px-6">
          <FadeIn className="text-center max-w-2xl mx-auto mb-16">
            <p className="section-label">Pricing</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-muted-foreground">Per user, per month. No hidden fees. Scale as you grow.</p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {pricingTiers.map((tier, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className={`rounded-xl p-6 md:p-8 h-full flex flex-col ${
                  tier.featured
                    ? "bg-card border-2 border-primary/40 shadow-lg shadow-primary/5 relative"
                    : "card-professional"
                }`}>
                  {tier.featured && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold uppercase tracking-wider bg-primary text-primary-foreground px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  )}
                  <h3 className="font-display text-lg font-bold text-foreground">{tier.name}</h3>
                  <div className="my-4">
                    {tier.price === "Custom" ? (
                      <span className="font-display text-3xl font-bold text-foreground">Custom</span>
                    ) : (
                      <>
                        <span className="font-display text-3xl font-bold text-foreground">${tier.price}</span>
                        <span className="text-sm text-muted-foreground"> /user/mo</span>
                      </>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-6">{tier.description}</p>
                  <ul className="space-y-2.5 flex-1 mb-8">
                    {tier.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-foreground">
                        <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`py-3 rounded-lg text-center text-sm font-semibold transition-all duration-300 block ${
                      tier.featured ? "btn-primary" : "btn-outline-pro"
                    }`}
                  >
                    {tier.price === "Custom" ? "Contact Sales" : "Get Started"}
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-5">
              Not sure which plan fits?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Our team will help you find the perfect solution for your organization's needs and budget.
            </p>
            <Link to="/contact" className="btn-primary px-8 py-3.5 rounded-lg text-sm inline-flex items-center gap-2">
              Schedule a Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
