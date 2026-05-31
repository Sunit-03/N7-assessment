import Image from "next/image";
import Button from "@/components/ui/Button";
import { siteCopy } from "@/constants/copy";

export default function Hero() {
    const { title, description, ctaRequestDemo, ctaContactUs } = siteCopy.hero;

    return (
        <section className="relative pt-[211.96px] pb-0 pl-8 md:pl-[80px] pr-8 md:pr-16 max-w-[1440px] mx-auto w-full flex flex-col lg:flex-row items-start gap-12 lg:gap-8">

            {/* Text Content */}
            <div className="flex flex-col items-start text-left z-10 max-w-[607.83px] w-full min-h-[319px] gap-[52px]">
                <div className="flex flex-col items-start w-full gap-[16px] min-h-[218px]">
                    <h1 className="text-4xl md:text-[67px] font-medium leading-[1.2] tracking-[-0.01em] text-white whitespace-pre-line">
                        {title}
                    </h1>
                    <p className="text-gray-400 text-[16px] font-normal leading-[1.3] tracking-normal max-w-[420px]">
                        {description}
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
                    <Button variant="primary" className="w-full sm:w-[210px]">
                        {ctaRequestDemo}
                    </Button>
                    <Button variant="secondary" className="w-full sm:w-[210px]">
                        {ctaContactUs}
                    </Button>
                </div>
            </div>

            {/* Image Graphic */}
            <div className="flex-1 relative w-full lg:w-[600px] flex justify-center lg:justify-end items-center z-10 group">
                {/* Glow behind the image */}
                <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-[#0066FF] rounded-full blur-[100px] opacity-40 group-hover:opacity-60 transition-opacity duration-1000 -z-10 pointer-events-none" />

                <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-[520px]">
                    <Image
                        src="/hero-dashboard.svg"
                        alt="Dashboard"
                        fill
                        className="object-contain object-top transition-opacity duration-900 ease-in-out group-hover:opacity-0"
                        priority
                    />
                    <Image
                        src="/hero-dashboard-hover.png"
                        alt="Dashboard Hover"
                        fill
                        className="object-contain object-top absolute inset-0 opacity-0 transition-opacity duration-1000 ease-in-out group-hover:opacity-100"
                        priority
                        quality={100}
                        unoptimized
                    />
                </div>
            </div>

            {/* Background Glow */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-[#0066FF]/10 rounded-full blur-[120px] -z-20 pointer-events-none" />
        </section>
    );
}
