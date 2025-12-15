import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function MainHeader() {
  return (
     <header className="h-16 border-b bg-background/80 backdrop-blur-sm">
      <div className="mx-auto relative flex h-full max-w-5xl items-center justify-between px-4">
        {/* Menú hamburguesa (mobile) */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="shrink-0 md:hidden"
              aria-label="Abrir menú"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 bg-background/95 backdrop-blur-sm border-r">
            <SheetHeader>
              <SheetTitle>Shótify</SheetTitle>
            </SheetHeader>
            <nav className="mt-6 flex flex-col gap-3 text-sm">
              <Link href="#hero" className="hover:underline">
                Inicio
              </Link>
              <Link href="#best-sellers" className="hover:underline">
                Best sellers
              </Link>
              <Link href="#how-to-buy" className="hover:underline">
                Cómo comprar
              </Link>
            </nav>
          </SheetContent>
        </Sheet>

        {/* Logo centrado como imagen */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <Image
            src="/logo_shotify_oscuro_trans.png"   // asegúrate que está en /public
            alt="Shótify"
            width={120}
            height={40}
            className="h-45 w-auto"
            priority
          />
        </div>

        {/* Placeholder a la derecha (para futuro) */}
        <div className="hidden md:block text-xs text-muted-foreground">
          Tu día en un shot.
        </div>
      </div>
    </header>
  );
}
