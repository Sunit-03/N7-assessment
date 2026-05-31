import Image from "next/image";
import Button from "@/components/ui/Button";
import LinkButton from "@/components/ui/LinkButton";
import { siteCopy } from "@/constants/copy";

export default function CloudCoreBanking() {
    const { title, description, ctaRequestDemo, ctaLearnMore } = siteCopy.cloudCoreBanking;

    return (
        <section className="w-full overflow-hidden bg-[#070B14] py-24 lg:py-32 relative">
            <div className="max-w-[1440px] mx-auto w-full px-8 md:px-[80px] grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center relative">

                {/* "CB7" Watermark */}
                <div
                    className="absolute left-[5%] xl:left-[8%] top-1/2 -translate-y-1/2 text-[300px] md:text-[500px] font-black -z-10 leading-none select-none pointer-events-none tracking-tighter font-sans"
                    style={{ WebkitTextStroke: "1.5px rgba(0, 180, 253, 0.15)", color: "transparent" }}
                >
                    CB7
                </div>

                {/* Left Content */}
                <div className="lg:col-span-6 flex flex-col items-start z-10 max-w-[600px] w-full">
                    <h2 className="text-3xl md:text-[42px] font-sans font-normal leading-[1.2] tracking-[-0.01em] text-white mb-6 whitespace-pre-line">
                        {title}
                    </h2>
                    <p className="text-gray-400 text-[16px] leading-[1.4] mb-10 max-w-[420px] whitespace-pre-line">
                        {description}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
                        <Button variant="primary" className="w-full sm:w-[210px]">
                            {ctaRequestDemo}
                        </Button>
                        <LinkButton href="#">{ctaLearnMore}</LinkButton>
                    </div>
                </div>

                {/* Right Graphic: AML Dashboard */}
                <div className="lg:col-span-6 relative w-full h-[320px] md:h-[462px] z-10 min-w-[320px]">
                    <div className="lg:absolute lg:top-0 lg:-right-[300px] xl:-right-[420px] w-full lg:w-[792px] h-[320px] lg:h-[462px] max-w-none">
                        <Image
                            src="/Frame 90.svg"
                            alt="AML Dashboard"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}
