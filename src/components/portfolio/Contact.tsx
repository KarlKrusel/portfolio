import { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Music, Download, ArrowUpRight } from "lucide-react";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { SectionHeader } from "./SectionHeader";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const EMAIL = "krusel.karl@gmail.com";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((i) => {
        if (i.path[0]) fieldErrors[i.path[0] as string] = i.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    const subject = encodeURIComponent(`Portfolio message from ${result.data.name}`);
    const body = encodeURIComponent(
      `${result.data.message}\n\n— ${result.data.name} (${result.data.email})`,
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    toast.success("Opening your email client...");
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionHeader
          eyebrow="05 — Contact"
          index="Say hello"
          title="Get in touch."
          description="Open to internships, entry-level IT roles, and project-based work."
        />

        <div className="grid gap-12 md:grid-cols-12">
          {/* Info */}
          <div className="space-y-10 md:col-span-5">
            <div>
              <p className="eyebrow mb-4 border-b border-border pb-3">— Direct</p>
              <ul className="space-y-3 text-base">
                <li>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="group flex items-baseline justify-between border-b border-border/60 py-2 text-ink"
                  >
                    <span className="flex items-center gap-3">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      {EMAIL}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+12314931156"
                    className="flex items-baseline justify-between border-b border-border/60 py-2 text-ink"
                  >
                    <span className="flex items-center gap-3">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      231 · 493 · 1156
                    </span>
                  </a>
                </li>
                <li className="flex items-baseline justify-between border-b border-border/60 py-2 text-ink">
                  <span className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    Michigan, USA
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <p className="eyebrow mb-4 border-b border-border pb-3">— Elsewhere</p>
              <ul className="space-y-1">
                {[
                  { icon: Download, label: "Resume.pdf", href: `${import.meta.env.BASE_URL}Karl-Krusel-Resume.pdf`, download: true },
                  { icon: Github, label: "GitHub", href: "https://github.com/karlkrusel" },
                  { icon: Linkedin, label: "LinkedIn", href: "#" },
                  {
                    icon: Music,
                    label: "KRL — DJ Site",
                    href: "https://karlkrusel.github.io/KRL-DJ/",
                  },
                ].map((l) => {
                  const Icon = l.icon;
                  return (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        target={l.download ? undefined : "_blank"}
                        rel="noreferrer"
                        download={l.download}
                        className="group flex items-center justify-between border-b border-border/60 py-3 text-ink hover:text-accent"
                      >
                        <span className="flex items-center gap-3">
                          <Icon className="h-4 w-4 text-muted-foreground" />
                          {l.label}
                        </span>
                        <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-8 md:col-span-7 md:border-l md:border-border md:pl-12"
          >
            <p className="eyebrow border-b border-border pb-3">— Or write</p>
            <div className="grid gap-8 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name" className="eyebrow">Name</Label>
                <Input
                  id="name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  maxLength={100}
                  className="border-0 border-b border-border bg-transparent px-0 rounded-none shadow-none focus-visible:ring-0"
                />
                {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="eyebrow">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@email.com"
                  maxLength={255}
                  className="border-0 border-b border-border bg-transparent px-0 rounded-none shadow-none focus-visible:ring-0"
                />
                {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="eyebrow">Message</Label>
              <Textarea
                id="message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="What are you working on?"
                rows={5}
                maxLength={1000}
                className="border-0 border-b border-border bg-transparent px-0 rounded-none shadow-none focus-visible:ring-0 resize-none"
              />
              {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
            </div>
            <button
              type="submit"
              className="group inline-flex items-center gap-3 border-b border-ink pb-1 font-mono text-xs uppercase tracking-[0.2em] text-ink"
            >
              Send Message
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
