import { Hero } from "@/app/components/organisms/Hero/Hero";
import { BestSellers } from "@/app/components/organisms/BesteSellers/BesteSellers"


export function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <BestSellers />
      {/* Después vendrán: Best Sellers, Cómo comprar, etc. */}
    </main>

  )
}
