// app/components/organisms/AboutUs/AboutUs.tsx
import Image from "next/image";

export function AboutUs() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl px-4">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border">
            <Image
              src="/3peques.png"
              alt="Shotify cold pressed shots"
              fill
              className="object-cover"
            />
          </div>

          {/* Texto */}
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">
              Sobre nosotros
            </h2>

            <div className="mt-6 space-y-4 text-lg text-muted-foreground">
              <p>
                Shótify es una marca de shots y bebidas funcionales cold pressed,
                hechos con ingredientes naturales y pensados para desinflamar,
                dar energía y apoyar tu recuperación día a día.
              </p>

              <p>
                Creemos en el bienestar consciente: cuidamos tu cuerpo y también
                el planeta, reutilizando botellas de vidrio y promoviendo hábitos
                más responsables.
              </p>
            </div>

            <div className="mt-6 text-sm font-medium">
              <p>Pedidos al WhatsApp: <span className="font-semibold">6243 9362</span></p>
              <p>Instagram: <span className="font-semibold">@shotify_naturalcr</span></p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
