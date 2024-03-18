import Hero from "./components/home/Hero";
import Services from "./components/home/Services";
import About from "./components/home/About";
import TrustedCompanies from "./components/home/TrustedCompanies";
import HowItWorks from "./components/home/HowItWorks";

export default function Home() {
  return (
    <main className="w-full mx-auto flex flex-col">
      <Hero />
      <section className="py-10 w-full flex flex-col gap-12 px-6 md:px-32">
        <TrustedCompanies />
        <hr />
      </section>
      <section className="py-10 w-full px-6 md:px-32">
        <HowItWorks />
      </section>
      <section>
        <Services />
      </section>
      <section>
        <About />
      </section>
    </main>
  );
}
