import Image from "next/image";
import HomePage from "./components/home/page";
import TopOverlay from "./components/TopOverlay";
import MidOverlay from "./components/MidOverlay";
import About from "./components/about/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <TopOverlay />
      <section id="home">
        <HomePage />
      </section>
      <MidOverlay />
      <section id="about">
        <About />
      </section>
    </main>
  );
}
