import Image from "next/image";
import { Button } from "@/components/ui/button";
import HeroImage from "@/public/Hero.jpg";


const WHATSAPP_URL = "https://wa.me/50662439362";
export function Hero() {
  return (
    <section className="bg-background">
      <div className="w-full pb-10">
        {/* Contenedor general: en mobile normal, en desktop grid 2 cols */}
        <div className="mx-auto w-full px-6 md:max-w-6xl md:grid md:grid-cols-2 md:items-center md:gap-10">
          
          <div className="relative w-full h-[70vh] md:h-[60vh] lg:h-[520px] md:mx-0 md:w-full">
            <Image
              src={HeroImage}
              alt="Botella de Shótify"
              fill
              className="object-cover md:object-contain md:object-center"
              priority
            />

            <div className="absolute left-1/2 -bottom-7 -translate-x-1/2 z-10 w-full max-w-md px-6 md:px-0">
              <Button
                asChild
                className="btn-cta-pulse
                  w-full py-6 text-lg font-semibold rounded-full
                  bg-green-600 text-white
                  shadow-xl shadow-green-700/40
                  flex items-center justify-center gap-2
                  active:scale-95
                  focus-visible:outline-none
                  focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-600"
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                  Pedir ahora por WhatsApp
                </a>
              </Button>
            </div>
          </div>

          <div className="mx-auto w-full max-w-md pt-11 space-y-5 md:pt-0 md:max-w-none">
            <h1 className="text-center md:text-left text-4xl font-semibold leading-[1.1]">
              Tu día en un shot.
            </h1>

            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              Un boost rápido, natural y delicioso para arrancar el día o levantar
              la tarde. Escribinos por WhatsApp y coordinamos la entrega.
            </p>

            <p className="text-[11px] text-muted-foreground md:text-sm">
              Shots funcionales · Cold pressed · Hechos en Costa Rica
            </p>

            <p className="text-[11px] text-center md:text-left text-muted-foreground md:text-sm">
              Respuesta rápida · Entregas locales
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
