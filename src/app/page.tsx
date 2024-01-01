import MainNavbar from "@/components/Navbar";
import HeroFour from "@/components/sections/HeroFour";
import HeroOne from "@/components/sections/HeroOne";
import HeroThree from "@/components/sections/HeroThree";
import HeroTwo from "@/components/sections/HeroTwo";
import HomeSection from "@/components/sections/HomeSection";
import JourneyBuilder from "@/components/sections/JourneyBuilder";

export default function Home() {
  return (
    <>
      <main>
        <section id="inicio" className="p-4">
          <HomeSection />
        </section>
        <section id="presenca">
          <HeroOne />
        </section>
        <section id="sobre">
          <HeroThree />
        </section>
        <section id="showcase">
          <HeroTwo />
        </section>
        <section id="jornada">
          <JourneyBuilder />
        </section>
        <section id="contato">
          <HeroFour />
        </section>
      </main>
    </>
  );
}
