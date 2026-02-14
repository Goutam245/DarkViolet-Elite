import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cloud, Shield, Server, Database, ArrowRight, CheckCircle2,
  Monitor, FileCheck, Workflow, Globe
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

import cloudImg from "@/assets/cloud-migration.jpg";
import datacenterImg from "@/assets/data-center.jpg";
import securityImg from "@/assets/cybersecurity.jpg";
import teamImg from "@/assets/team-meeting.jpg";

const tabs = [
  {
    id: "m365",
    label: "Microsoft 365",
    icon: Cloud,
    image: cloudImg,
    title: "Microsoft 365 Solutions",
    description: "Deploy and manage the full Microsoft 365 suite — Exchange Online, SharePoint, Teams, and Power Platform. We handle licensing, migration, and ongoing optimization.",
    features: [
      "Exchange Online with advanced threat protection",
      "SharePoint Online & OneDrive deployment",
      "Microsoft Teams collaboration setup",
      "Power Platform automation & workflows",
      "License optimization & cost management",
      "User onboarding & training programs",
    ],
  },
  {
    id: "azure",
    label: "Azure Cloud",
    icon: Server,
    image: datacenterImg,
    title: "Azure Infrastructure",
    description: "Design, deploy, and manage scalable Azure infrastructure tailored to your workloads. From virtual machines to Kubernetes — solutions that grow with your business.",
    features: [
      "Cloud architecture design & planning",
      "VM & container orchestration (AKS)",
      "Hybrid cloud connectivity (VPN/ExpressRoute)",
      "Cost optimization & governance policies",
      "Auto-scaling & load balancing",
      "Disaster recovery & geo-redundancy",
    ],
  },
  {
    id: "security",
    label: "Security Suite",
    icon: Shield,
    image: securityImg,
    title: "Enterprise Security",
    description: "Comprehensive cybersecurity protecting your data, identity, and infrastructure. Our SOC team monitors threats around the clock, every day of the year.",
    features: [
      "Security Operations Center (SOC)",
      "Endpoint detection & response (EDR)",
      "Identity & access management (IAM)",
      "Data loss prevention (DLP)",
      "Compliance (GDPR, HIPAA, SOX, PCI-DSS)",
      "Security awareness training programs",
    ],
  },
  {
    id: "backup",
    label: "Backup & Recovery",
    icon: Database,
    image: teamImg,
    title: "Data Protection",
    description: "Enterprise-grade backup and disaster recovery ensuring business continuity. Automated backups with rapid recovery to minimize any potential downtime.",
    features: [
      "Automated cloud & hybrid backup",
      "Bare-metal and granular recovery",
      "Application-level backup (Exchange, SQL, SAP)",
      "Offsite & geo-redundant storage",
      "RPO/RTO guarantee with SLAs",
      "Regular DR testing & validation reports",
    ],
  },
];

const steps = [
  { icon: FileCheck, label: "Assessment", desc: "We audit your current infrastructure and identify opportunities for improvement." },
  { icon: Workflow, label: "Planning", desc: "Design a tailored solution architecture with clear milestones and timelines." },
  { icon: Globe, label: "Implementation", desc: "Execute the migration or deployment with zero downtime and full data integrity." },
  { icon: Monitor, label: "Optimization", desc: "Continuous monitoring, reporting, and optimization for peak performance." },
];

const Solutions = () => {
  const [activeTab, setActiveTab] = useState("m365");
  const current = tabs.find((t) => t.id === activeTab)!;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="container mx-auto px-6">
          <FadeIn className="text-center max-w-2xl mx-auto">
            <p className="section-label">Solutions</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-5">
              Enterprise Solutions
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              Purpose-built technology solutions for modern enterprises that demand performance, security, and scalability.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Tabbed Solutions */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? "btn-primary"
                    : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="grid lg:grid-cols-2 gap-10 items-start"
            >
              {/* Content */}
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {current.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {current.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {current.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4.5 h-4.5 text-accent mt-0.5 shrink-0" />
                      <span className="text-sm text-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="btn-primary px-6 py-3 rounded-lg text-sm inline-flex items-center gap-2"
                >
                  Get Started <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Image */}
              <div className="rounded-2xl overflow-hidden border border-border">
                <img
                  src={current.image}
                  alt={current.title}
                  className="w-full h-[350px] object-cover"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 md:py-28 bg-card/30">
        <div className="container mx-auto px-6">
          <FadeIn className="text-center max-w-2xl mx-auto mb-16">
            <p className="section-label">Our Process</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              A Proven 4-Step Approach
            </h2>
            <p className="text-muted-foreground">
              Every engagement follows our battle-tested methodology to ensure predictable outcomes and maximum value.
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((step, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="card-professional rounded-xl p-6 text-center h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-xs font-semibold text-primary mb-2">Step {i + 1}</div>
                  <h3 className="font-display font-semibold text-foreground mb-2">{step.label}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
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
              Let's build your ideal solution
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Talk to our solution architects about your specific requirements and get a tailored proposal.
            </p>
            <Link to="/contact" className="btn-primary px-8 py-3.5 rounded-lg text-sm inline-flex items-center gap-2">
              Talk to an Expert <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Solutions;
