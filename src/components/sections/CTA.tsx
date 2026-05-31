import Button from "@/components/ui/Button";
import { siteCopy } from "@/constants/copy";
import { GRADIENTS } from "@/constants/theme";

interface CTAProps {
    watermarkText?: string;
    variant?: "default" | "footer";
}

export default function CTA({ watermarkText, variant = "default" }: CTAProps) {
    const { title, descriptionCB7, descriptionN7, ctaContactUs, ctaRequestDemo } = siteCopy.cta;
    const description = watermarkText === "CB7" ? descriptionCB7 : descriptionN7;

    if (variant === "footer") {
        return (
            <section className="w-full py-24 px-8 md:px-[80px] bg-transparent relative z-10 border-t border-white/5">
                <div className="max-w-[1440px] mx-auto w-full flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">

                    <div className="flex-1 max-w-[700px]">
                        <h2 className="text-4xl md:text-[53px] font-sans font-normal leading-[1.2] tracking-[-0.01em] text-white mb-6">
                            {title}
                        </h2>
                        <p className="text-gray-400 text-[16px] leading-[1.4] max-w-[500px]">
                            {description}
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-5 shrink-0 w-full sm:w-auto">
                        <Button variant="outline" className="w-full sm:w-[210px]">
                            {ctaContactUs}
                        </Button>
                        <Button variant="primary" className="w-full sm:w-[210px]">
                            {ctaRequestDemo}
                        </Button>
                    </div>

                </div>
            </section>
        );
    }

    return (
        <section className="w-full py-12 px-4 md:px-8 bg-transparent">
            <div
                className="relative py-20 px-8 md:px-16 max-w-[1280px] mx-auto w-full overflow-hidden rounded-[27px] border border-white/[0.05] shadow-[0_24px_48px_rgba(0,0,0,0.4)]"
                style={{ background: GRADIENTS.ctaCard }}
            >

                {/* Watermark SVG */}
                <svg
                    className="absolute pointer-events-none select-none z-0"
                    style={{ width: "1141px", height: "687px", top: "-160.72px", left: "223.56px" }}
                    viewBox="0 0 1141 687"
                >
                    <defs>
                        <linearGradient id="ctaStrokeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="-5.68%" stopColor="#00B4FD" />
                            <stop offset="86.98%" stopColor="#003ACE" />
                        </linearGradient>
                        <linearGradient id="ctaFillGrad" x1="0%" y1="100%" x2="50%" y2="0%">
                            <stop offset="30.8%" stopColor="#02171F" />
                            <stop offset="77.46%" stopColor="transparent" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="ctaMaskGrad" x1="0" y1="1" x2="0.5" y2="0">
                            <stop offset="30.8%" stopColor="#ffffff" stopOpacity="0" />
                            <stop offset="77.46%" stopColor="#ffffff" stopOpacity="0.6" />
                        </linearGradient>
                        <mask id="ctaWatermarkMask">
                            <rect width="1141" height="687" fill="url(#ctaMaskGrad)" />
                        </mask>
                    </defs>
                    <text
                        x="100%"
                        y="570"
                        textAnchor="end"
                        fontFamily="var(--font-archivo), sans-serif"
                        fontWeight="500"
                        fontSize="572.63"
                        fill="url(#ctaFillGrad)"
                        stroke="url(#ctaStrokeGrad)"
                        strokeWidth="1.59"
                        mask="url(#ctaWatermarkMask)"
                    >
                        {watermarkText}
                    </text>
                </svg>

                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 relative z-10 w-full">

                    <div className="flex-1 max-w-[700px]">
                        <h2 className="text-4xl md:text-[53px] font-sans font-normal leading-[1.2] tracking-[-0.01em] text-white mb-6">
                            {title}
                        </h2>
                        <p className="text-gray-400 text-[16px] leading-[1.4] max-w-[500px]">
                            {description}
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-5 shrink-0 w-full sm:w-auto">
                        <Button variant="secondary" className="w-full sm:w-[210px]">
                            {ctaContactUs}
                        </Button>
                        <Button variant="primary" className="w-full sm:w-[210px]">
                            {ctaRequestDemo}
                        </Button>
                    </div>

                </div>
            </div>
        </section>
    );
}
