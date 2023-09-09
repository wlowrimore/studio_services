import Image from "next/image";
import HomePage from "./components/home/page";
import TopOverlay from "./components/TopOverlay";
import Packets from "./components/packets/page";
import About from "./components/about/page";
import Services from "./components/services/page";
import ServicesDetails from "./components/ServicesDetails";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <TopOverlay />
      <section id="home">
        <HomePage />
      </section>
      <section id="pricing">
        <Packets />
      </section>
      <section>
        <About />
      </section>
      <section>
        <ServicesDetails />
      </section>
      <section>
        <Services />
      </section>
    </main>
  );
}
