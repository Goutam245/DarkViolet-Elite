import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Users, Headphones, MessageSquare, Clock, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import officeImg from "@/assets/office-space.jpg";

const contactCards = [
  { icon: Users, label: "Sales", email: "sales@o365hq.com", phone: "+1 (646) 555-0120", desc: "Discuss solutions for your business needs." },
  { icon: Headphones, label: "Support", email: "support@o365hq.com", phone: "+1 (646) 555-0121", desc: "Get help with existing services." },
  { icon: MessageSquare, label: "Partnerships", email: "partners@o365hq.com", phone: "+1 (646) 555-0122", desc: "Explore partnership opportunities." },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClasses = "w-full px-4 py-3 rounded-lg bg-muted/50 border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="container mx-auto px-6">
          <FadeIn className="text-center max-w-2xl mx-auto">
            <p className="section-label">Get In Touch</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-5">
              We're Happy To Help
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              Get in touch with our team and discover how we can transform your IT infrastructure. We typically respond within 2 business hours.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20 md:pb-28">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {/* Form */}
            <div className="lg:col-span-3">
              <FadeIn>
                <div className="card-professional rounded-2xl p-6 md:p-8">
                  {submitted ? (
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-center py-16"
                    >
                      <div className="w-14 h-14 rounded-2xl bg-accent/10 mx-auto mb-5 flex items-center justify-center">
                        <Send className="w-6 h-6 text-accent" />
                      </div>
                      <h3 className="font-display text-xl font-bold text-foreground mb-2">Message Sent Successfully</h3>
                      <p className="text-sm text-muted-foreground max-w-sm mx-auto">
                        Thank you for reaching out. Our team will review your message and get back to you within 2 business hours.
                      </p>
                      <button
                        onClick={() => { setSubmitted(false); setForm({ name: "", email: "", company: "", phone: "", service: "", message: "" }); }}
                        className="btn-outline-pro px-6 py-2.5 rounded-lg text-sm mt-6"
                      >
                        Send Another Message
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <h2 className="font-display text-lg font-semibold text-foreground mb-1">Send Us a Message</h2>
                      <p className="text-sm text-muted-foreground mb-4">Fill out the form below and we'll get back to you shortly.</p>
                      
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs font-medium text-foreground block mb-1.5">Full Name *</label>
                          <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClasses} placeholder="John Smith" />
                        </div>
                        <div>
                          <label className="text-xs font-medium text-foreground block mb-1.5">Email Address *</label>
                          <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClasses} placeholder="john@company.com" />
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs font-medium text-foreground block mb-1.5">Company</label>
                          <input type="text" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className={inputClasses} placeholder="Your Company" />
                        </div>
                        <div>
                          <label className="text-xs font-medium text-foreground block mb-1.5">Phone Number</label>
                          <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputClasses} placeholder="+1 (555) 000-0000" />
                        </div>
                      </div>
                      <div>
                        <label className="text-xs font-medium text-foreground block mb-1.5">Service of Interest</label>
                        <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className={inputClasses}>
                          <option value="">Select a service</option>
                          <option value="consulting">IT Consulting</option>
                          <option value="managed">Managed Services</option>
                          <option value="migration">Cloud Migration</option>
                          <option value="security">Cybersecurity</option>
                          <option value="backup">Backup & Recovery</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-xs font-medium text-foreground block mb-1.5">Message *</label>
                        <textarea required rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={`${inputClasses} resize-none`} placeholder="Tell us about your project and requirements..." />
                      </div>
                      <button type="submit" className="btn-primary w-full py-3.5 rounded-lg text-sm inline-flex items-center justify-center gap-2">
                        Send Message <Send className="w-4 h-4" />
                      </button>
                    </form>
                  )}
                </div>
              </FadeIn>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-4">
              {contactCards.map((card, i) => (
                <FadeIn key={i} delay={i * 0.08}>
                  <div className="card-professional rounded-xl p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <card.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-sm text-foreground">{card.label}</h3>
                        <p className="text-xs text-muted-foreground">{card.desc}</p>
                      </div>
                    </div>
                    <div className="space-y-1.5 pl-12">
                      <a href={`mailto:${card.email}`} className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors">
                        <Mail className="w-3.5 h-3.5 text-muted-foreground" /> {card.email}
                      </a>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Phone className="w-3.5 h-3.5" /> {card.phone}
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}

              <FadeIn delay={0.24}>
                <div className="card-professional rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-sm text-foreground">Office Location</h3>
                      <p className="text-xs text-muted-foreground">New York, NY, United States</p>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.32}>
                <div className="card-professional rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-sm text-foreground">Business Hours</h3>
                      <p className="text-xs text-muted-foreground">Mon–Fri: 9:00 AM – 6:00 PM EST</p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground pl-12">
                    Emergency support available 24/7 for Professional and Enterprise plan clients.
                  </p>
                </div>
              </FadeIn>

              {/* Office image */}
              <FadeIn delay={0.4}>
                <div className="rounded-xl overflow-hidden border border-border">
                  <img src={officeImg} alt="IT Partner office" className="w-full h-40 object-cover" />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
