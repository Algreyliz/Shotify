import { Hero } from "@/app/components/organisms/Hero/Hero";

export function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      {/* Después vendrán: Best Sellers, Cómo comprar, etc. */}
    </main>

  )
}
