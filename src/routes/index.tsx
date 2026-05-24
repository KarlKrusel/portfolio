import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Resume } from "@/components/portfolio/Resume";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { CareerDirection } from "@/components/portfolio/CareerDirection";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Karl Krusel | Information Technology Portfolio" },
      {
        name: "description",
        content:
          "Karl Krusel — 4th-year IT student at Grand Valley State University. Projects in automation, data, cloud, web development, and creative tech.",
      },
      { property: "og:title", content: "Karl Krusel | Information Technology Portfolio" },
      {
        property: "og:description",
        content:
          "IT student building practical tech — automation, cloud, data, and creative media. Open to internships and entry-level roles.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Resume />
        <Projects />
        <Skills />
        <CareerDirection />
        <Contact />
      </main>
      <Footer />
      <Toaster richColors theme="light" position="bottom-right" />
    </div>
  );
}
