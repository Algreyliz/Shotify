import { DollarSign } from "lucide-react";
import { Smartphone } from "lucide-react";


export function HowToBuy() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-4">
        {/* Card grande */}
        <div className="rounded-3xl border bg-white p-8 md:p-12 shadow-sm text-center">
          <h2 className="text-3xl font-semibold tracking-tight">
            ¿Cómo comprar?
          </h2>

          <div className="mx-auto mt-6 max-w-3xl space-y-6 text-lg text-muted-foreground">
            <p>
              Al tratarse de un producto 100% natural y artesanal, nuestra producción se hace 1 vez por semana.
            </p>
            <p>
              Se envía por medio de Uber Flash o bien puedes retirar en La Uruca o Santa Ana.
            </p>
          </div>

          <div className="mt-12">
            <p className="text-sm font-semibold tracking-[0.25em] text-muted-foreground">
              MÉTODOS DE PAGO
            </p>

            <div className="mt-8 grid gap-8 sm:grid-cols-2">
                <div className="rounded-2xl border p-8">
                    <DollarSign className="mx-auto mb-4 h-8 w-8 text-muted-foreground" />
                    <p className="text-lg font-semibold">Aceptamos efectivo</p>
                </div>

            <div className="rounded-2xl border p-8">
            <Smartphone className="mx-auto mb-4 h-8 w-8 text-muted-foreground" />
            <p className="text-lg font-semibold">Transferencias y SINPE</p>
            </div>
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
