"use client";

import { useState } from "react";
import Preloader   from "@/components/mgc/Preloader";
import Navbar      from "@/components/mgc/Navbar";
import Hero        from "@/components/mgc/Hero";
import Marquee     from "@/components/mgc/Marquee";
import Services    from "@/components/mgc/Services";
import Stats       from "@/components/mgc/Stats";
import About       from "@/components/mgc/About";
import Process     from "@/components/mgc/Process";
import Testimonials from "@/components/mgc/Testimonials";
import CTABanner   from "@/components/mgc/CTABanner";
import Footer      from "@/components/mgc/Footer";

export default function MGCPage() {
  const [ready, setReady] = useState(false);

  return (
    <>
      <Preloader onComplete={() => setReady(true)} />
      <main
        className="overflow-x-hidden"
        style={{
          opacity: ready ? 1 : 0,
          transition: "opacity 0.4s ease",
          pointerEvents: ready ? "auto" : "none",
        }}
      >
        <Navbar />
        <Hero />
        <Marquee />
        <Services />
        <Stats />
        <About />
        <Process />
        <Testimonials />
        <CTABanner />
        <Footer />
      </main>
    </>
  );
}
