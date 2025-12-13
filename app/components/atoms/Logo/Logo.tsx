import Image from "next/image";

type LogoProps = {
  size?: number;
  priority?: boolean;
};

export function Logo({ size = 220, priority = false }: LogoProps) {
  return (
    <Image
      src="/logo_shotify-05.png"
      alt="Logo Shótify"
      width={size}
      height={size}
      priority={priority}
    />
  );
}
