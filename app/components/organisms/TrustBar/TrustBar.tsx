import { Truck, Leaf, Smartphone } from "lucide-react";

export function TrustBar() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-5xl px-4">
        <div className="grid gap-8 text-center sm:grid-cols-3">

          {/* Entregas */}
          <div>
            <Truck className="mx-auto mb-3 h-8 w-8 text-muted-foreground" />
            <p className="font-semibold">Entregas locales rápidas</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Envíos por Uber Flash o coordinación directa en el GAM.
            </p>
          </div>

          {/* Calidad */}
          <div>
            <Leaf className="mx-auto mb-3 h-8 w-8 text-muted-foreground" />
            <p className="font-semibold">Ingredientes naturales</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Shots cold pressed, sin aditivos y hechos en Costa Rica.
            </p>
          </div>

          {/* Pagos */}
          <div>
            <Smartphone className="mx-auto mb-3 h-8 w-8 text-muted-foreground" />
            <p className="font-semibold">Pagos simples</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Aceptamos SINPE móvil y efectivo al recibir.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
