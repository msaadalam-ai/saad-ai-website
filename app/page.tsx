import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyMe from "@/components/WhyMe";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <WhyMe />
      <Process />
      <Testimonials />
      <CTABanner />
      <Footer />
    </main>
  );
}
