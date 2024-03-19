import Hero from "./components/home/Hero";
import Services from "./components/home/Services";
import About from "./components/home/About";
import TrustedCompanies from "./components/home/TrustedCompanies";
import HowItWorks from "./components/home/HowItWorks";
import Counter from "./components/Counter";
import Projects from "./components/home/Projects";
import Testimonials from "./components/home/Testimonials";

export default function Home() {
  return (
    <main className="w-full mx-auto flex flex-col">
      <Hero />
      <section className="py-6 w-full flex flex-col gap-12 px-6 md:px-32">
        <div className="container">
          <TrustedCompanies />
        </div>
        <hr />
      </section>
      <section className="py-6 w-full px-6 md:px-32">
        <div className="container">
          <HowItWorks />
        </div>
      </section>

      <section className="py-6 w-full px-6 md:px-32">
        <div className="container">
          <About />
        </div>
      </section>

      <section className="py-12 w-full px-6 md:px-32">
        <div className="container flex flex-col gap-10 items-start justify-center">
          <h2 className="font-bold text-4xl">
            <span className="mr-2 border-4 border-t-white border-r-white border-l-white border-b-primaryColor">
              By the
            </span>
            numbers
          </h2>
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-6">
            <Counter title="Year" count={10} />
            <Counter title="Employees" count={160} />
            <Counter title="Award" count={20} />
            <Counter title="Completed Projects" count={200} />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 w-full px-6 md:px-32 bg-yellow-50">
        <div className="container">
          <Services />
        </div>
      </section>

      <section className="py-12 md:py-24 w-full px-6 md:px-32">
        <div className="container">
          <Projects />
        </div>
      </section>

      <section className="py-12 md:py-24 w-full px-6 md:px-32 bg-gray-200">
        <div className="container">
          <Testimonials />
        </div>
      </section>
    </main>
  );
}
