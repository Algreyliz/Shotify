import { Logo } from "@/app/components/atoms/Logo/Logo";

const WHATSAPP_URL = "https://wa.me/50662439362";

export function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-10">
      <div className="mx-auto w-full max-w-md space-y-12">
        {/* 1) HERO */}
        <section className="text-center space-y-6">
          <div className="flex justify-center">
            <Logo size={220} priority />
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl font-semibold leading-tight">
              Tu día en un shot.
            </h1>

            <p className="text-sm text-muted-foreground leading-relaxed">
              Un boost rápido, natural y delicioso para tu rutina.
            </p>
          </div>

          <div className="space-y-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center rounded-2xl bg-primary px-5 py-3 text-primary-foreground font-medium"
            >
              Pedir por WhatsApp
            </a>

            <p className="text-xs text-muted-foreground">
              Pedidos abiertos • Respuesta rápida
            </p>
          </div>
        </section>

        {/* 2) BENEFICIOS */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">¿Por qué Shótify?</h2>

          <div className="space-y-3">
            <div className="rounded-2xl bg-muted p-4">
              <p className="font-medium">⚡ Energía / enfoque</p>
              <p className="text-sm text-muted-foreground">
                Ideal para arrancar el día o levantar la tarde.
              </p>
            </div>

            <div className="rounded-2xl bg-muted p-4">
              <p className="font-medium">🌿 Ingredientes naturales</p>
              <p className="text-sm text-muted-foreground">
                Sabores frescos con ingredientes que sí reconocés.
              </p>
            </div>

            <div className="rounded-2xl bg-muted p-4">
              <p className="font-medium">⏱️ Rápido y práctico</p>
              <p className="text-sm text-muted-foreground">
                Un shot y seguís con tu día.
              </p>
            </div>
          </div>
        </section>

        {/* 3) CÓMO COMPRAR */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">¿Cómo comprar?</h2>

          <ol className="space-y-3 text-sm">
            <li className="rounded-2xl border border-border p-4">
              <span className="font-medium">1) </span>
              Escribinos por WhatsApp
            </li>
            <li className="rounded-2xl border border-border p-4">
              <span className="font-medium">2) </span>
              Elegís tu pack / sabores
            </li>
            <li className="rounded-2xl border border-border p-4">
              <span className="font-medium">3) </span>
              Coordinamos entrega
            </li>
          </ol>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center rounded-2xl bg-primary px-5 py-3 text-primary-foreground font-medium"
          >
            Pedir por WhatsApp
          </a>
        </section>
      </div>
    </main>
  );
}
