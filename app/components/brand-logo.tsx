import Image from "next/image";

type BrandLogoProps = {
  height?: number;
  className?: string;
};

export function BrandLogo({ height = 32, className = "" }: BrandLogoProps) {
  return (
    <Image
      src="/logo.png"
      alt="Spartan"
      width={140}
      height={40}
      priority
      className={`brand-logo${className ? ` ${className}` : ""}`}
      style={{ height, width: "auto", objectFit: "contain", flexShrink: 0 }}
    />
  );
}
