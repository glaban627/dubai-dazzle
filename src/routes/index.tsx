import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/bwn/Navbar";
import { Hero } from "@/components/bwn/Hero";
import { ProjectMarquee } from "@/components/bwn/ProjectMarquee";
import { About } from "@/components/bwn/About";
import { Services } from "@/components/bwn/Services";
import { PortfolioPreview } from "@/components/bwn/PortfolioPreview";
import { WhyBWN } from "@/components/bwn/WhyBWN";
import { Clients } from "@/components/bwn/Clients";
import { Process } from "@/components/bwn/Process";
import { ContactCTA } from "@/components/bwn/ContactCTA";
import { Footer } from "@/components/bwn/Footer";
import { Loader } from "@/components/bwn/Loader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BWN Decoration Design — Luxury Interior Design & Joinery in Dubai" },
      { name: "description", content: "Your imagination partner for luxury interior design, joinery, furniture, fit-out, flooring and exhibition stands in Dubai, UAE." },
      { property: "og:title", content: "BWN Decoration Design — Your Imagination Partner" },
      { property: "og:description", content: "Luxury interior design, joinery & fit-out solutions crafted in Dubai." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <ProjectMarquee />
        <About />
        <Services />
        <PortfolioPreview />
        <WhyBWN />
        <Clients />
        <Process />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
