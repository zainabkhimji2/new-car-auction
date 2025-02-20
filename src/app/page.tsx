import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import FeaturedAuctions from "@/components/FeaturedAuctions";
import Testimonials from "@/components/testimonalsection";
import HowItWorks from "@/components/worksection";
import Statistics from "@/components/statics";
import HotAuctionMakes from "@/components/hotauction";
import VehicleTypes from "@/components/vehicletypes";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero />
      <FeaturedAuctions />
      <HowItWorks/>
      <Testimonials/>
      <Statistics/>
      <HotAuctionMakes/>
      <VehicleTypes/>
      
     
      

      
    </>
  );
}
