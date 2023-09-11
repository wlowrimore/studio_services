import Image from "next/image";
import HomePage from "./components/home/page";
import HomeOverlay from "./components/home/homeOverlay";
import Packets from "./components/packets/page";
import About from "./components/about/page";
import Services from "./components/services/page";
import Contact from "./components/contact/page";

export default function Home() {
  return (
    <main className="">
      <HomeOverlay />
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
        <Services />
      </section>
      <section>
        <Contact />
      </section>
    </main>
  );
}
