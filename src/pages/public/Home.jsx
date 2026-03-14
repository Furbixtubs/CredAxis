import { Link } from "react-router";
import Navbars from "../../components/shared/Navbars";
import HeroSection from "../../components/shared/HeroSection";
import FeaturesSection from "../../components/shared/FeaturesSection";
import StatsSection from "../../components/shared/StatsSection";
import DashboardSection from "../../components/shared/DashboardSection";
import TestimonialSection from "../../components/shared/TestimonialSection";
import CTASection from "../../components/shared/CTASection";
import FAQSection from "../../components/shared/FAQSection";
import Footer from "../../components/shared/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <DashboardSection />
      <TestimonialSection />
      <CTASection />
      <FAQSection />
    </>
  );
}
