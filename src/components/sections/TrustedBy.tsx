import Image from "next/image";
import { siteCopy } from "@/constants/copy";

export default function TrustedBy() {
  const { title, partners } = siteCopy.trustedBy;

  return (
    <section className="w-full pl-[80px] pt-4 pb-16 max-w-[1440px] mx-auto flex flex-col items-start gap-6 text-gray-500">
      <span className="text-sm font-medium whitespace-nowrap text-gray-400">
        {title}
      </span>
      <div className="w-full flex items-center gap-8 md:gap-14 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {partners.map((partner, i) => (
          <div key={i} className="flex items-center gap-2.5">
            <Image
              src={partner.logo}
              alt={partner.name}
              width={24}
              height={24}
              className="h-6 w-auto object-contain"
            />
            <span className="font-roboto text-[13.8px] leading-[1.1] tracking-normal align-middle text-gray-300">
              {partner.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
