import Hero from "./components/Hero";
import OfmSection from "./components/OfmSection";
import ArrivalGuideCarousel from "./components/ArrivalGuideSection";
import OfmProceduresSection from "./components/OfmProceduresSection";

export default function Home() {
  return (
    <div className="">
      <Hero/>
      <OfmSection/>
      <ArrivalGuideCarousel/>
      <OfmProceduresSection/>
    </div>
  );
}
