import { Logo } from "@/app/components/atoms/Logo/Logo";

export function UnderConstruction() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="flex justify-center">
          <Logo size={260} priority />
        </div>

        <p className="text-lg font-medium text-primary">
          Sitio en construcción
        </p>

        <a
          href="https://wa.me/50662439362"
          target="_blank"
          rel="noreferrer"
          className="text-sm text-muted-foreground underline underline-offset-4"
        >
          Pedidos abiertos al WhatsApp: 6243-9362
        </a>
      </div>
    </main>
  );
}
