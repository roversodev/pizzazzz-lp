import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import Indroduction from "@/sections/Indroduction";
import { LogoTicker } from "@/sections/LogoTicker";
import { Pricing } from "@/sections/Pricing";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { Testimonials } from "@/sections/Testimonials";
import { Grid } from "@/sections/Grid";
import { ReactLenis } from 'lenis/react';


export default function Home() {
  return (
    <ReactLenis root>
      <Header />
      <Hero />
      {/* <LogoTicker /> */}
      <Indroduction />
      <ProductShowcase />
      <Grid />
      <Pricing />
      <Testimonials />
      <CallToAction />
      <Footer />
    </ReactLenis>
  );
}
