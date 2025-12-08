import Image from "next/image";

export default function Home() {
  return (
    <main
      className="min-h-screen bg-white flex items-center justify-center px-6"
      style={{
        fontFamily:
          '"Helvetica Neue", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
        ,fontWeight: 400
      }}
    >
      <div className="max-w-md w-full text-center space-y-6">
        <div className="flex justify-center">
          <Image
            src="/logo shotify-05.png"
            alt="Logo Shótify"
            width={220}
            height={220}
            priority
          />
        </div>

        {/* Título */}
        <p className="text-lg font-medium text-[#574cff]">
          Sitio en construcción
        </p>

        {/* Texto descriptivo */}
        <p className="text-sm text-gray-700 leading-relaxed">
          Pedidos abiertos al whatsapp: 62439362
        </p>
      </div>
    </main>
  );
}
