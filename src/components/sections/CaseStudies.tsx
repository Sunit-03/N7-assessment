"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import LinkButton from "@/components/ui/LinkButton";
import Button from "@/components/ui/Button";
import { siteCopy } from "@/constants/copy";

const { slides } = siteCopy.caseStudies;

export default function CaseStudies() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };

    /** Calculate the relative offset of a slide from the current index, wrapping around. */
    const getSlideOffset = (slideIndex: number): number => {
        let offset = slideIndex - currentIndex;
        if (offset > 1) offset -= slides.length;
        if (offset < -2) offset += slides.length;
        return offset;
    };

    return (
        <section id="about" className="min-h-screen flex flex-col justify-center py-24 px-8 max-w-7xl mx-auto w-full bg-[#070B14] overflow-hidden">

            <h2 className="font-sans font-normal text-[53px] leading-[1.2] tracking-[-0.01em] text-center text-white mb-16">
                {siteCopy.caseStudies.title}
            </h2>

            {/* Carousel */}
            <div className="w-full max-w-5xl mx-auto relative h-[450px] lg:h-[500px]">
                {slides.map((slide, i) => {
                    const offset = getSlideOffset(i);
                    const isVisible = Math.abs(offset) <= 1;

                    return (
                        <div
                            key={i}
                            className={`absolute inset-0 w-full h-full bg-[#0A101D] border border-white/10 rounded-3xl overflow-hidden flex flex-col md:flex-row transition-all duration-700 ease-in-out shadow-2xl ${
                                isVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                            }`}
                            style={{
                                zIndex: 30 - Math.abs(offset),
                                transform: `translateX(${offset * 12}%) scale(${1 - Math.abs(offset) * 0.05})`,
                                filter: `brightness(${1 - Math.abs(offset) * 0.3})`,
                            }}
                        >
                            {/* Left: Grid Pattern Image */}
                            <div className="md:w-1/2 p-6 flex flex-col justify-center">
                                <div className="absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#00B4FD]/10 to-transparent" />
                                <div className="relative w-full h-full min-h-[250px] flex items-center justify-center">
                                    <Image src="/Frame54logo.svg" alt="Grid Pattern" fill className="object-contain" />
                                </div>
                            </div>

                            {/* Right: Slide content */}
                            <div className="md:w-1/2 p-12 lg:p-16 flex flex-col justify-center bg-[#0A101D]">
                                <span className="text-[#00B4FD] text-xs font-mono tracking-[0.2em] uppercase mb-4">
                                    {slide.category}
                                </span>
                                <h3 className="text-3xl lg:text-4xl font-semibold mb-8 leading-tight text-white font-sans">
                                    {slide.title}
                                </h3>

                                <div className="flex items-center gap-4 mb-12">
                                    <div className="relative w-10 h-10 flex items-center justify-center">
                                        <Image src={slide.clientLogo} alt={slide.clientName} fill className="object-contain" />
                                    </div>
                                    <span className="text-lg font-semibold text-gray-300">{slide.clientName}</span>
                                </div>

                                <div className="mt-auto">
                                    <Button href="#" variant="outline" className="w-full">
                                        {siteCopy.caseStudies.ctaReadMore}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Carousel Controls */}
            <div className="w-full max-w-5xl mx-auto relative flex items-center justify-center mt-16 px-4">
                <div className="flex items-center gap-4">
                    <button
                        onClick={prevSlide}
                        className="w-12 h-12 rounded-full border border-[#00B4FD]/30 flex items-center justify-center text-[#00B4FD] hover:bg-[#00B4FD] hover:text-[#0A101D] transition-colors cursor-pointer select-none"
                    >
                        <ArrowLeft className="w-5 h-5" />
                    </button>
                    <div className="flex items-center gap-2 px-2">
                        {slides.map((_, index) => (
                            <div
                                key={index}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                    index === currentIndex ? "bg-[#00B4FD] w-6" : "bg-[#00B4FD]/30"
                                }`}
                            />
                        ))}
                    </div>
                    <button
                        onClick={nextSlide}
                        className="w-12 h-12 rounded-full border border-[#00B4FD]/30 flex items-center justify-center text-[#00B4FD] hover:bg-[#00B4FD] hover:text-[#0A101D] transition-colors cursor-pointer select-none"
                    >
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </div>

                <div className="absolute right-4">
                    <LinkButton href="#">{siteCopy.caseStudies.ctaViewAll}</LinkButton>
                </div>
            </div>

        </section>
    );
}
