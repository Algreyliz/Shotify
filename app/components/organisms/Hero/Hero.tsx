import Image from "next/image";
import { Button } from "@/components/ui/button";
import HeroImage from "@/public/Hero.jpg";

const WHATSAPP_URL = "https://wa.me/50662439362";

export function Hero() {
  return (
    
    <section className="bg-background">
      
      <div className="w-full pb-10">
       
        <div className="relative w-full h-[70vh]">
          <Image
            src={HeroImage}
            alt="Botella de Shótify"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute left-1/2 -bottom-7 -translate-x-1/2 z-10 w-full max-w-md px-6">
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

        
        <div className="mx-auto w-full max-w-md px-6 pt-11 space-y-5">
         
          <h1 className="text-center text-4xl font-semibold leading-[1.1]">
            Tu día en un shot.
          </h1>

         
          <p className="text-sm leading-relaxed text-muted-foreground">
            Un boost rápido, natural y delicioso para arrancar el día o levantar
            la tarde. Escribinos por WhatsApp y coordinamos la entrega.
          </p>

          
          <p className="text-[11px] text-muted-foreground">
            Shots funcionales · Cold pressed · Hechos en Costa Rica
          </p>

          <p className="text-[11px] text-center text-muted-foreground">
            Respuesta rápida · Entregas locales
          </p>
        </div>
      </div>
    </section>
  );
}

