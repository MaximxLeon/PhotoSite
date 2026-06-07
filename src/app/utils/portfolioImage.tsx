import Image from "next/image";

export function PortfolioImage({ src }: { src: string }) {
  return (
    <Image
      src={src}
      alt="Фото портфолио"
      width={500}
      height={500}
      className="w-full h-full object-cover"
    />
  );
}