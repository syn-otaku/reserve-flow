import Navbar        from "@/components/layout/Navbar";
import Footer        from "@/components/layout/Footer";
import Hero          from "@/components/sections/Hero";
import RecommendedFor from "@/components/sections/RecommendedFor";
import LogoBanner    from "@/components/sections/LogoBanner";
import Metrics       from "@/components/sections/Metrics";
import Problem       from "@/components/sections/Problem";
import Features      from "@/components/sections/Features";
import AppPreview    from "@/components/sections/AppPreview";
import UseCases      from "@/components/sections/UseCases";
import Testimonials  from "@/components/sections/Testimonials";
import Pricing       from "@/components/sections/Pricing";
import FAQ           from "@/components/sections/FAQ";
import FinalCTA      from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <div className="relative bg-white min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <RecommendedFor />
        <LogoBanner />
        <Metrics />
        <Problem />
        <div id="features"><Features /></div>
        <AppPreview />
        <div id="usecases"><UseCases /></div>
        <Testimonials />
        <div id="pricing"><Pricing /></div>
        <div id="faq"><FAQ /></div>
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
