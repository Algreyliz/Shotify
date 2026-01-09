import { Hero } from "@/app/components/organisms/Hero/Hero";
import { BestSellers } from "@/app/components/organisms/BesteSellers/BesteSellers"
import { TrustBar } from "../../organisms/TrustBar/TrustBar";
import { HowToBuy } from "../../organisms/HowToBuy";
import { AboutUs } from "../../organisms/AboutUs";
import { Footer } from "../../organisms/Footer";


export function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <BestSellers />
      <TrustBar/>
      <AboutUs/>
      <HowToBuy/>
      <Footer/>
    </main>

  )
}
