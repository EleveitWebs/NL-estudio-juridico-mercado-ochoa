import type { Metadata } from "next";
import Hero from "@/components/Hero";
import FloatingDifferentials from "@/components/FloatingDifferentials";
import PracticeAreas from "@/components/PracticeAreas";
import HowWeWork from "@/components/HowWeWork";
import Team from "@/components/Team";
import ContactForm from "@/components/ContactForm";
import LocationContact from "@/components/LocationContact";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <FloatingDifferentials />
      <Team />
      <PracticeAreas />
      <HowWeWork />
      <LocationContact />
      <ContactForm />
      <FloatingWhatsApp />
    </main>
  );
}
