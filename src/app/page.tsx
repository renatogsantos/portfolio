import MainButton from "@/components/Button";
import MainNavbar from "@/components/Navbar";
import HomeSection from "@/components/sections/HomeSection";
import { PaintBrush } from "@phosphor-icons/react";

export default function Home() {
  return (
    <>
      <MainNavbar />
      <main className="p-4">
        <HomeSection />
      </main>
    </>
  );
}
