import Hero from "../../components/home/Hero";
import Services from "../../components/home/Services";
import About from "../../components/home/About";
import HowItWorks from "../../components/home/HowItWorks";
import Projects from "../../components/home/Projects";
import Testimonials from "../../components/home/Testimonials";
import CounterSection from "@/components/home/CounterSection";

export default function Home() {
  return (
    <main className="flex flex-col w-full mx-auto">
      <Hero />
      <section className="w-full px-6 py-6 md:px-32">
        <div className="container">
          <HowItWorks />
        </div>
      </section>

      <section className="w-full px-6 py-6 md:px-32">
        <div className="container">
          <About />
        </div>
      </section>

      <CounterSection />

      <section className="w-full px-6 py-12 md:py-24 md:px-32 bg-yellow-50">
        <div className="container">
          <Services />
        </div>
      </section>

      <section className="w-full px-6 py-12 md:py-24 md:px-32">
        <div className="container">
          <Projects />
        </div>
      </section>

      <section className="w-full px-6 py-12 bg-slate-200 md:py-24 md:px-32">
        <Testimonials />
      </section>
    </main>
  );
}
