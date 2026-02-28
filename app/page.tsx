import Header from "./components/Header";
import Hero from "./components/Hero";
import ArrivalGuideCarousel from "./components/ArrivalGuideSection";
import OfmProceduresSection from "./components/OfmProceduresSection";

export default function Home() {
  return (
    <div className="">
      <Header/>
      <Hero/>
      <ArrivalGuideCarousel/>
      <OfmProceduresSection/>
    </div>
  );
}
