// app/components/organisms/Footer/Footer.tsx
export function Footer() {
  return (
    <footer className="border-t py-12">
      <div className="mx-auto max-w-5xl px-4">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="text-lg font-semibold">Shotify</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Shots y bebidas funcionales cold pressed. Ingredientes naturales,
              bienestar consciente.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-muted-foreground">
              LINKS
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a className="hover:underline" href="#">
                  Productos
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Sobre nosotros
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  ¿Cómo comprar?
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-muted-foreground">
              CONTACTO
            </p>
            <div className="mt-4 space-y-2 text-sm">
              <p>
                WhatsApp: <span className="font-semibold">6243 9362</span>
              </p>
              <p>
                Instagram: <span className="font-semibold">@shotify_naturalcr</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t pt-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Shotify. All rights reserved.</p>
          <p>Made with care in Costa Rica.</p>
        </div>
      </div>
    </footer>
  );
}
