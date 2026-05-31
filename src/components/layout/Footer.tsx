import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteCopy } from "@/constants/copy";
import { GRADIENTS } from "@/constants/theme";

export default function Footer() {
    return (
        <footer className="w-full bg-[#070B14] text-white pt-24 pb-12 px-8 border-t border-white/5 relative overflow-hidden">

            {/* Main content grid */}
            <div className="max-w-[1440px] mx-auto pl-8 md:pl-[80px] pr-8 md:pr-16 flex flex-col lg:flex-row gap-16 lg:gap-24 mb-24 relative z-10">

                {/* Left Column: Huge Gradient Logo */}
                <div className="w-full lg:w-[440px] h-[232px] flex items-center justify-start shrink-0">
                    <h2 className="text-[240px] font-sans font-bold leading-[0.8] tracking-tighter bg-gradient-to-br from-[#00B4FD] to-[#003ACE] bg-clip-text text-transparent select-none">
                        {siteCopy.footer.logo}
                    </h2>
                </div>

                {/* Right Column: 3-column dynamic sub-grid for addresses and links */}
                <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-12">

                    {siteCopy.footer.addresses.map((address, index) => {
                        const column = siteCopy.footer.columns[index];
                        return (
                            <div key={index} className="flex flex-col gap-12">

                                {/* Address Sub-block */}
                                <div>
                                    <h4 className="font-semibold text-sm mb-4 text-white">{address.city}</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed font-sans">
                                        {address.lines.map((line, idx) => (
                                            <span key={idx} className="block">{line}</span>
                                        ))}
                                    </p>
                                </div>

                                {/* Links Sub-block */}
                                {column && (
                                    <div>
                                        <h4 className="font-semibold text-sm mb-6 text-white">{column.title}</h4>
                                        <ul className="flex flex-col gap-4 text-sm text-gray-400 font-sans">
                                            {column.links.map((link, idx) => (
                                                <li key={idx}>
                                                    <Link href={link.href} className="hover:text-white transition-colors flex items-center justify-between py-0.5">
                                                        {link.name}
                                                        <ArrowRight className="w-3.5 h-3.5 text-[#00B4FD] shrink-0" />
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                            </div>
                        );
                    })}

                </div>
            </div>

            {/* Copyright */}
            <div className="max-w-[1440px] mx-auto pt-8 border-t border-white/5 text-xs text-gray-500 leading-relaxed text-center whitespace-pre-line z-10 relative">
                {siteCopy.footer.copyright}
            </div>

            {/* Symmetrical Bottom Glow Ellipse (Figma Exact Spec) */}
            <div
                className="absolute left-1/2 -translate-x-1/2 pointer-events-none select-none -z-10 rounded-full mix-blend-screen"
                style={{
                    width: "1440px",
                    height: "556.77px",
                    background: GRADIENTS.brand,
                    opacity: 0.05,
                    filter: "blur(120px)",
                    bottom: "-278.38px", // Centered exactly at the dividing bottom edge
                }}
            />

        </footer>
    );
}
