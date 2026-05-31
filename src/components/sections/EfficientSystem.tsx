import Image from "next/image";
import CheckIcon from "@/components/ui/CheckIcon";
import { siteCopy } from "@/constants/copy";

export default function EfficientSystem() {
    const { title, subtitle, features } = siteCopy.efficientSystem;

    return (
        <section className="w-full overflow-hidden bg-[#070B14] py-24 lg:py-32 relative">
            <div className="max-w-[1440px] mx-auto w-full px-8 md:px-[80px] grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center relative">

                {/* Left Graphic: KYC Dashboard */}
                <div className="lg:col-span-6 relative w-full h-[320px] md:h-[462px] z-10 order-2 lg:order-1 min-w-[320px]">
                    <div className="lg:absolute lg:top-0 lg:-left-[300px] xl:-left-[420px] w-full lg:w-[792px] h-[320px] lg:h-[462px] max-w-none">
                        <Image
                            src="/Frame 98.svg"
                            alt="KYC Dashboard"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

                {/* Right Content */}
                <div className="lg:col-span-6 flex flex-col items-start order-1 lg:order-2 z-10 max-w-[620px] w-full">
                    <h2 className="text-3xl md:text-[42px] font-sans font-normal leading-[1.2] tracking-[-0.01em] text-white mb-8 whitespace-pre-line">
                        {title}
                    </h2>

                    <p className="text-[18px] font-medium text-white/95 tracking-normal mb-6 font-sans">
                        {subtitle}
                    </p>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 w-full">
                        {features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-2.5">
                                <CheckIcon variant="cyan" />
                                <span className="text-white/90 text-[15px] leading-[1.4] font-sans font-normal">
                                    {feature}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </section>
    );
}
