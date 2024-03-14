import HomeSection from "@/components/sections/HomeSection";
import HeroPresence from "@/components/sections/HeroPresence";
import HeroAbout from "@/components/sections/HeroAbout";
import HeroShowcase from "@/components/sections/HeroShowcase";
import JourneyBuilder from "@/components/sections/JourneyBuilder";
import HeroContact from "@/components/sections/HeroContact";
import HeroPrices from "@/components/sections/HeroPrices";

export default function Home() {
  return (
    <>
      <main>
        <section id="inicio" className="p-4">
          <HomeSection />
        </section>
        <section id="presenca">
          <HeroPresence />
        </section>
        <section id="sobre">
          <HeroAbout />
        </section>
        <section id="showcase">
          <HeroShowcase />
        </section>
        <section id="jornada">
          <JourneyBuilder />
        </section>
        <section id="planos" className="">
          <HeroPrices />
        </section>
        <section id="contato">
          <HeroContact />
        </section>
      </main>
    </>
  );
}
