import MainNavbar from "@/components/Navbar";
import HeroOne from "@/components/sections/HeroOne";
import HomeSection from "@/components/sections/HomeSection";

export default function Home() {
  return (
    <>
      <MainNavbar />
      <main>
        <section className="p-4">
          <HomeSection />
        </section>
        <section>
          <HeroOne />
        </section>
      </main>
    </>
  );
}
