import Image from "next/image";

interface PhoneDisplayProps {
  src: string;
  alt: string;
}

/** Reusable phone mockup wrapper — consistent 280×580 sizing across all feature displays. */
export default function PhoneDisplay({ src, alt }: PhoneDisplayProps) {
  return (
    <div className="flex-1 flex justify-center relative z-10 shrink-0">
      <div className="w-[280px] h-[580px] relative">
        <Image src={src} alt={alt} fill className="object-contain" />
      </div>
    </div>
  );
}
