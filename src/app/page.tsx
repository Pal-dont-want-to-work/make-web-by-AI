// import HeroSection from "@/app/components/hero_section"
import HeroSection from "./components/hero_section";
import FeatureSection from "./components/feature_section";
import PricingSection from "./components/pricing_section";
// import Header from "./components/header";
import FeatureComparison from "./components/compare";

export default function Home() {
  return (
    <main>
      {/* <Header /> */}
      <HeroSection />
      <FeatureSection />
      <PricingSection />
      <FeatureComparison />
      {/* 其他页面内容 */}
    </main>
  )
}
