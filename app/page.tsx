import Hero2 from "./components/Hero2";
import OfmSection from "./components/OfmSection";
import ArrivalGuideCarousel from "./components/ArrivalGuideSection";
import OfmProceduresSection from "./components/OfmProceduresSection";

export default function Home() {
  return (
    <div className="">
      <Hero2/>
      <ArrivalGuideCarousel/>
      <OfmProceduresSection/>
      <OfmSection/>
    </div>
  );
}
