import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  Hero,
  TrustedBy,
  Solutions,
  CloudCoreBanking,
  EfficientSystem,
  CTA,
  Marquee,
  MobileAppFeatures,
  Insights,
  CaseStudies,
} from "@/components/sections";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070B14] text-white overflow-x-hidden font-sans">
      <Header />
      <Hero />
      <TrustedBy />
      <Solutions />
      <CloudCoreBanking />
      <EfficientSystem />
      <CTA watermarkText="CB7" />
      <Marquee />
      <MobileAppFeatures />
      <Insights />
      <CaseStudies />
      <div className="pb-24">
        <CTA watermarkText="CB7" variant="footer" />
      </div>
      <Footer />
    </main>
  );
}
