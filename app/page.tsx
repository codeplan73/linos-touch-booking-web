import Image from "next/image";
import Hero from "./components/home/Hero";
import Services from "./components/home/Services";
import About from "./components/home/About";
import OnScrollAnimation from "./components/ScrollAnimation";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <section>
        <Services />
      </section>

      {/* <OnScrollAnimation /> */}

      <section>
        <About />
      </section>
    </main>
  );
}
