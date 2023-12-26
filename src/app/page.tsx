import MainNavbar from "@/components/Navbar";
import HeroOne from "@/components/sections/HeroOne";
import HeroThree from "@/components/sections/HeroThree";
import HeroTwo from "@/components/sections/HeroTwo";
import HomeSection from "@/components/sections/HomeSection";

export default function Home() {
  return (
    <>
      <MainNavbar />
      <main>
        <section id="home" className="p-4">
          <HomeSection />
        </section>
        <section id="presence">
          <HeroOne />
        </section>
        <section id="portfolio">
          <HeroTwo />
        </section>
        <section id="aboutus">
          <HeroThree />
        </section>
      </main>
    </>
  );
}
