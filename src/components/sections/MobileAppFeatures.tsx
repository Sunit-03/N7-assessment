import Button from "@/components/ui/Button";
import LinkButton from "@/components/ui/LinkButton";
import PhoneDisplay from "@/components/ui/PhoneDisplay";
import FeatureCard from "@/components/ui/FeatureCard";
import CTA from "./CTA";
import { siteCopy } from "@/constants/copy";
import { WATERMARK_STROKE } from "@/constants/theme";

/** Screen images corresponding to each feature index */
const SCREEN_IMAGES = ["/screen1.svg", "/screen2.svg", "/screen3.svg"] as const;

export default function MobileAppFeatures() {
    const { title, description, ctaRequestDemo, ctaLearnMore, features } =
        siteCopy.mobileAppFeatures;

    return (
        <section className="w-full bg-[#E9F4F9] text-black relative py-24 overflow-hidden z-0">

            {/* Background Watermark "N" */}
            <div
                className="absolute left-1/2 -translate-x-[240px] md:-translate-x-[360px] top-[40px] md:top-[60px] text-[300px] md:text-[550px] font-bold -z-10 leading-none select-none pointer-events-none font-sans"
                style={WATERMARK_STROKE}
            >
                N
            </div>

            {/* Background Watermark "7" */}
            <div
                className="absolute left-1/2 translate-x-[80px] md:translate-x-[140px] top-[40px] md:top-[60px] text-[300px] md:text-[550px] font-bold -z-10 leading-none select-none pointer-events-none font-sans"
                style={WATERMARK_STROKE}
            >
                7
            </div>

            {/* Decorative arch SVG */}
            <svg
                className="absolute left-0 top-0 w-[450px] md:w-[700px] h-[950px] md:h-[1350px] pointer-events-none select-none -z-10 hidden sm:block"
                viewBox="0 0 1440 2647"
                preserveAspectRatio="xMinYMin slice"
            >
                <defs>
                    <linearGradient id="paint4_linear_24_4074" x1="-465.784" y1="-894.93" x2="907.438" y2="-488.085" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#00B4FD" />
                        <stop offset="1" stopColor="#003ACE" />
                    </linearGradient>
                </defs>
                <path
                    opacity="0.25"
                    d="M33.1956 956.299C157.377 1019.41 237.949 1146.69 238.029 1289.02H237.969L237.976 1289.53C240.81 1492.1 65.8693 1667.74 -139.259 1662.78H-139.264C-285.886 1661.04 -412.648 1576.24 -473.278 1448.37C-187.523 1510.9 87.3893 1241.61 33.1956 956.299ZM-553.623 689.547C-613.841 922.744 -451.604 1172.11 -216.27 1212.88L-216.228 1212.89H-216.178C-169.085 1221.94 -117.259 1222.97 -69.5662 1215.44C-182.753 1421.48 -492.941 1462.22 -655.307 1289.94L-655.318 1289.93L-655.331 1289.92L-657.436 1287.95C-746.094 1204.38 -776.69 1079.94 -757.045 963.874C-737.3 847.221 -666.814 739.112 -553.623 689.547ZM41.5647 660.585C158.756 639.287 285.41 669.975 371.906 761.948L371.917 761.96L371.929 761.972C459.239 843.341 491.549 963.943 475.56 1077.7C459.614 1191.15 395.641 1297.72 290.372 1351.73C309.803 1222.33 266.597 1088.81 179.924 996.794L177.864 994.622C77.0354 884.802 -86.0167 835.378 -231.416 870.058C-182.687 754.748 -75.2986 681.824 41.5647 660.585ZM-508.657 790.319C-509.425 412.192 -0.871364 275.99 187.751 603.174C-106.877 539.777 -384.639 828.85 -312.147 1119.21C-431.945 1054.45 -508.657 929.598 -508.657 790.319Z"
                    stroke="url(#paint4_linear_24_4074)"
                    strokeWidth="1.5"
                    fill="none"
                />
            </svg>

            <div className="max-w-7xl mx-auto px-8 w-full flex flex-col gap-32 relative z-10">

                {/* Feature 1: Three-column layout (intro text + phone + feature card) */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    <div className="flex-1 max-w-sm w-full">
                        <h2 className="font-sans font-normal text-3xl md:text-[42px] leading-[1.2] tracking-[-0.01em] text-black mb-6 whitespace-pre-line">
                            {title}
                        </h2>
                        <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                            {description}
                        </p>
                        <div className="flex items-center gap-6">
                            <Button variant="primary">{ctaRequestDemo}</Button>
                            <LinkButton href="#">{ctaLearnMore}</LinkButton>
                        </div>
                    </div>
                    <PhoneDisplay src={SCREEN_IMAGES[0]} alt="App Screen 1" />
                    <FeatureCard {...features[0]} />
                </div>

                {/* Feature 2: Two-column layout (text left, phone right) */}
                <div className="flex flex-col lg:flex-row items-center justify-center gap-24">
                    <FeatureCard {...features[1]} />
                    <PhoneDisplay src={SCREEN_IMAGES[1]} alt="App Screen 2" />
                </div>

                {/* Feature 3: Two-column layout (phone left, text right) */}
                <div className="flex flex-col lg:flex-row items-center justify-center gap-24">
                    <div className="order-2 lg:order-1">
                        <PhoneDisplay src={SCREEN_IMAGES[2]} alt="App Screen 3" />
                    </div>
                    <div className="order-1 lg:order-2">
                        <FeatureCard {...features[2]} />
                    </div>
                </div>

                <div className="w-full">
                    <CTA watermarkText="N7" />
                </div>
            </div>
        </section>
    );
}
