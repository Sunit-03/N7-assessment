"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";

/** Navigation links with their anchor targets */
const NAV_LINKS = [
    { label: "SOLUTIONS", href: "#solutions", hasDropdown: true },
    { label: "RESOURCES", href: "#insights", hasDropdown: true },
    { label: "ABOUT US", href: "#about", hasDropdown: false },
] as const;

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleScroll = useCallback(() => {
        setIsScrolled(window.scrollY > 20);
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    return (
        <header
            className={`fixed left-0 right-0 z-50 w-full transition-all duration-500 ease-in-out font-mono ${
                isScrolled
                    ? "top-0 px-0 bg-[#070B14]/60 backdrop-blur-xl shadow-lg"
                    : "top-8 px-4 bg-transparent"
            }`}
        >
            <div
                className={`mx-auto flex items-center justify-between transition-all duration-500 ease-in-out border ${
                    isScrolled
                        ? "max-w-[1440px] px-8 md:px-16 py-4 bg-transparent border-white/0 rounded-none shadow-none"
                        : "max-w-5xl px-6 py-3.5 bg-[#1C1F26]/90 backdrop-blur-md border-white/10 rounded-xl shadow-2xl"
                }`}
            >
                {/* Logo */}
                <Link href="/" className="flex items-center text-xl font-medium tracking-tight text-white">
                    N7
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-10 text-xs tracking-wider text-gray-300">
                    {NAV_LINKS.map(({ label, href, hasDropdown }) => (
                        <Link
                            key={label}
                            href={href}
                            className="flex items-center gap-1.5 hover:text-white transition-colors uppercase"
                        >
                            {label}
                            {hasDropdown && <ChevronDown className="w-3.5 h-3.5 opacity-70" />}
                        </Link>
                    ))}
                </nav>

                {/* CTA + Mobile Toggle */}
                <div className="flex items-center">
                    <Button variant="outline" size="sm" className="hidden md:inline-flex">
                        REQUEST DEMO
                    </Button>

                    <button
                        className="md:hidden flex flex-col items-center justify-center p-2 text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="absolute top-[110%] left-4 right-4 bg-[#1C1F26]/95 backdrop-blur-xl border border-white/10 rounded-xl p-6 flex flex-col gap-6 shadow-2xl md:hidden">
                    {NAV_LINKS.map(({ label, href }) => (
                        <Link
                            key={label}
                            href={href}
                            onClick={closeMobileMenu}
                            className="text-sm font-semibold tracking-wider text-gray-300 hover:text-white uppercase"
                        >
                            {label}
                        </Link>
                    ))}
                    <Button variant="outline" size="sm" className="w-full mt-2" onClick={closeMobileMenu}>
                        REQUEST DEMO
                    </Button>
                </div>
            )}
        </header>
    );
}
