import Header from "./components/Header";
import Hero from "./components/Hero";
import OfmSection from "./components/OfmSection";
import ArrivalGuideSection from "./components/ArrivalGuideSection";
import OfmProceduresSection from "./components/OfmProceduresSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Hero />
      <OfmSection />
      <ArrivalGuideSection />
      <OfmProceduresSection />
      <Footer />
    </div>
  );
}
