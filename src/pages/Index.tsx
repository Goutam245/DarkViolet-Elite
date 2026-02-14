import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Shield, Cloud, Server, Monitor, ArrowRight, ChevronRight,
  Zap, Users, Award, Clock, Star, CheckCircle2,
  Database, Lock, Headphones, ArrowUpRight, Globe
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import StatCounter from "@/components/StatCounter";

import heroOffice from "@/assets/hero-office.jpg";
import cloudImg from "@/assets/cloud-migration.jpg";
import datacenterImg from "@/assets/data-center.jpg";
import teamImg from "@/assets/team-meeting.jpg";
import securityImg from "@/assets/cybersecurity.jpg";
import consultingImg from "@/assets/consulting.jpg";

const clients = ["Microsoft", "Dell", "Cisco", "Veeam", "ESET", "Datto", "SonicWall", "Fortinet", "Acronis", "Bitdefender"];

const services = [
  { icon: Monitor, title: "IT Consulting", desc: "Strategic technology advisory aligned with your business objectives and growth plans.", image: consultingImg },
  { icon: Server, title: "Managed Services", desc: "Proactive 24/7 monitoring, maintenance, and support for your entire IT infrastructure.", image: datacenterImg },
  { icon: Cloud, title: "Cloud Migration", desc: "Seamless migration to Microsoft 365 and Azure with zero downtime guaranteed.", image: cloudImg },
  { icon: Shield, title: "Cybersecurity", desc: "Enterprise-grade security with real-time threat detection and incident response.", image: securityImg },
  { icon: Database, title: "Backup & Recovery", desc: "Automated backup solutions with rapid disaster recovery to protect critical data.", image: teamImg },
  { icon: Lock, title: "Compliance", desc: "Meet GDPR, HIPAA, and SOX requirements with comprehensive compliance frameworks.", image: consultingImg },
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO, Meridian Capital",
    quote: "IT Partner transformed our entire infrastructure. We saw a 3x improvement in deployment speed and 50% reduction in downtime. Their team is incredibly responsive.",
    rating: 5,
  },
  {
    name: "Michael Torres",
    role: "VP Engineering, NovaTech",
    quote: "Their migration to Azure was flawless. Zero data loss, minimal disruption, and our team was productive from day one. Highly recommend their services.",
    rating: 5,
  },
  {
    name: "Emily Watson",
    role: "Director of IT, Greenfield Corp",
    quote: "The managed security services gave us complete peace of mind. Threats are detected and resolved before we even know about them. Outstanding support team.",
    rating: 5,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img src={heroOffice} alt="" className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
                <Award className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-medium text-primary">Gold Microsoft Partner Since 2008</span>
              </div>

              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-5 text-foreground">
                Your Modern{" "}
                <span className="gradient-text">Workspace</span>{" "}
                Starts Here
              </h1>

              <p className="text-base md:text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
                Transform your business with enterprise-grade IT solutions. From cloud migration to cybersecurity, we accelerate your digital transformation with zero disruption.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/contact"
                  className="btn-primary px-7 py-3.5 rounded-lg text-sm inline-flex items-center justify-center gap-2"
                >
                  Start Free Consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/services"
                  className="btn-outline-pro px-7 py-3.5 rounded-lg text-sm inline-flex items-center justify-center gap-2"
                >
                  Explore Services
                </Link>
              </div>

              {/* Quick trust */}
              <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  <span>99.9% Uptime SLA</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </motion.div>

            {/* Right image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl shadow-background/80">
                <img src={heroOffice} alt="Modern workspace with team collaboration" className="w-full h-[420px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                {/* Floating stat cards */}
                <div className="absolute bottom-6 left-6 right-6 flex gap-3">
                  <div className="glass rounded-lg px-4 py-3 flex-1">
                    <div className="font-display text-xl font-bold text-foreground">5,620+</div>
                    <div className="text-xs text-muted-foreground">Projects Delivered</div>
                  </div>
                  <div className="glass rounded-lg px-4 py-3 flex-1">
                    <div className="font-display text-xl font-bold text-foreground">18</div>
                    <div className="text-xs text-muted-foreground">Countries</div>
                  </div>
                  <div className="glass rounded-lg px-4 py-3 flex-1">
                    <div className="font-display text-xl font-bold text-foreground">25+</div>
                    <div className="text-xs text-muted-foreground">Years</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar (mobile) */}
      <section className="py-12 border-y border-border lg:hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 gap-6">
            <StatCounter end={25} suffix="+" label="Years Experience" />
            <StatCounter end={5620} suffix="+" label="Projects Delivered" />
            <StatCounter end={1160} suffix="+" label="Active Clients" />
            <StatCounter end={18} label="Countries Served" />
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-14 border-b border-border overflow-hidden">
        <div className="container mx-auto px-6 mb-6">
          <p className="text-center text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
            Trusted by leading organizations worldwide
          </p>
        </div>
        <div className="relative">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...clients, ...clients].map((client, i) => (
              <div key={i} className="mx-10 flex items-center">
                <span className="font-display text-lg font-bold text-muted-foreground/30 hover:text-muted-foreground/60 transition-colors duration-300 select-none">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We're Different */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <FadeIn className="text-center max-w-2xl mx-auto mb-16">
            <p className="section-label">Why IT Partner</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              How Are We Different
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We combine deep Microsoft expertise with a client-first approach. Our team doesn't just implement technology — we understand your business and align IT strategy with your goals.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Award, title: "Microsoft Gold Partner", desc: "Certified expertise across the entire Microsoft stack since 2008." },
              { icon: Globe, title: "Global Reach", desc: "Operations in 18 countries serving over 1,160 active clients." },
              { icon: Headphones, title: "24/7 Support", desc: "Round-the-clock technical support with guaranteed response times." },
              { icon: Zap, title: "Fast Deployment", desc: "3x faster implementation compared to industry averages." },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="card-professional rounded-xl p-6 h-full">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Services with Images */}
      <section className="py-20 md:py-28 bg-card/30">
        <div className="container mx-auto px-6">
          <FadeIn className="text-center max-w-2xl mx-auto mb-16">
            <p className="section-label">Our Services</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              IT Services — What We Do
            </h2>
            <p className="text-muted-foreground">
              Comprehensive IT solutions designed to optimize, secure, and scale your business infrastructure.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <div className="card-professional rounded-xl overflow-hidden h-full group">
                  <div className="h-44 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <service.icon className="w-4.5 h-4.5 text-primary" />
                      </div>
                      <h3 className="font-display font-semibold text-foreground">{service.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
                    <Link to="/services" className="inline-flex items-center gap-1 text-sm font-medium text-primary mt-4 hover:gap-2 transition-all">
                      Learn more <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* End-to-End Solution */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeIn>
              <p className="section-label">The Complete Package</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-5">
                The End-to-End Solution
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                As a Gold Microsoft Partner, we deliver integrated IT solutions covering every aspect of your technology stack. From initial assessment to ongoing support, we're your single point of contact for all things IT.
              </p>
              <div className="space-y-3">
                {[
                  "Microsoft 365 deployment and management",
                  "Azure cloud infrastructure design and optimization",
                  "24/7 security operations center monitoring",
                  "Dedicated account management and strategic planning",
                  "Compliance and regulatory framework management",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/solutions"
                className="btn-primary px-6 py-3 rounded-lg text-sm inline-flex items-center gap-2 mt-8"
              >
                Explore Solutions <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="relative rounded-2xl overflow-hidden border border-border">
                <img src={teamImg} alt="Team collaborating on IT solutions" className="w-full h-[400px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { value: "3x", label: "Faster Deployment" },
                      { value: "50+", label: "Expert Engineers" },
                      { value: "99.9%", label: "Uptime Guarantee" },
                      { value: "24/7", label: "Live Support" },
                    ].map((stat, i) => (
                      <div key={i} className="glass rounded-lg p-3 text-center">
                        <div className="font-display font-bold text-lg text-foreground">{stat.value}</div>
                        <div className="text-xs text-muted-foreground">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 bg-card/30">
        <div className="container mx-auto px-6">
          <FadeIn className="text-center max-w-2xl mx-auto mb-16">
            <p className="section-label">Client Testimonials</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Happy Clients
            </h2>
            <p className="text-muted-foreground">
              Hear from organizations that trust IT Partner to power their digital infrastructure.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="card-professional rounded-xl p-6 md:p-8 h-full flex flex-col">
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-sm text-foreground/90 leading-relaxed flex-1 mb-6">"{t.quote}"</p>
                  <div className="border-t border-border pt-4">
                    <div className="font-display font-semibold text-sm text-foreground">{t.name}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{t.role}</div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Microsoft Partner */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
              <Award className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-medium text-primary">Certified Partner</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              A Gold Microsoft Partner Since 2008
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
              Our deep Microsoft expertise means you get solutions built on industry-leading technology with certified professionals who understand the platform inside and out.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["Cloud Solutions", "Security", "Modern Workplace", "Data & AI", "Business Applications"].map((badge) => (
                <span key={badge} className="px-4 py-2 rounded-lg bg-muted border border-border text-xs font-medium text-muted-foreground">
                  {badge}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 border-t border-border">
        <div className="container mx-auto px-6">
          <FadeIn className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-5">
              Ready to Transform Your IT?
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Join 1,000+ companies that trust IT Partner to power their digital infrastructure. Get a free consultation with our experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/contact"
                className="btn-primary px-8 py-3.5 rounded-lg text-sm inline-flex items-center justify-center gap-2"
              >
                Schedule a Call <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services"
                className="btn-outline-pro px-8 py-3.5 rounded-lg text-sm inline-flex items-center justify-center"
              >
                View All Services
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
