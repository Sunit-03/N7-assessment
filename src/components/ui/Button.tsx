"use client";

import React from "react";
import Link from "next/link";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  children,
}: ButtonProps) {
  // Base classes: h-[48px] on desktop, rounded-[10px], select-none, exact Chivo Mono typography
  const baseClasses = "group relative inline-flex items-center justify-center font-mono font-normal uppercase tracking-normal select-none cursor-pointer overflow-hidden transition-all duration-300 rounded-[10px] text-[15px] leading-[1.3]";

  // Size classes (defining exact heights for pixel perfection)
  const sizeClasses = {
    sm: "h-[38px] px-6",
    md: "h-[48px] px-8",
    lg: "h-[56px] px-10",
  };

  const activeSize = sizeClasses[size];

  // Helper to render the background layer for smooth transitions
  const renderBackground = () => {
    if (variant === "primary") {
      // Primary: starts with blue gradient, on hover fades to solid #E9F4F9
      return (
        <>
          {/* Default state background (gradient) */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#00B4FD] to-[#003ACE] transition-opacity duration-300 group-hover:opacity-0" />
          {/* Hover state background (solid #E9F4F9) */}
          <div className="absolute inset-0 bg-[#E9F4F9] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </>
      );
    } else {
      // Secondary & Outline: starts transparent with border, on hover fills with solid #E9F4F9
      return (
        <>
          {/* Hover state background (solid #E9F4F9) */}
          <div className="absolute inset-0 bg-[#E9F4F9] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </>
      );
    }
  };

  // Helper to render the content with double-stacked spans for smooth text color/gradient transitions
  const renderContent = () => {
    if (variant === "primary") {
      return (
        <span className="relative z-10 flex items-center justify-center w-full h-full">
          {/* Default: White text */}
          <span className="transition-opacity duration-300 group-hover:opacity-0 text-white">
            {children}
          </span>
          {/* Hover: Gradient text */}
          <span className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#00B4FD] to-[#003ACE] bg-clip-text text-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {children}
          </span>
        </span>
      );
    } else {
      return (
        <span className="relative z-10 flex items-center justify-center w-full h-full">
          {/* Default: #E9F4F9 text */}
          <span className="transition-opacity duration-300 group-hover:opacity-0 text-[#E9F4F9]">
            {children}
          </span>
          {/* Hover: Gradient text */}
          <span className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#00B4FD] to-[#003ACE] bg-clip-text text-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {children}
          </span>
        </span>
      );
    }
  };

  // Border and Shadow styles based on variants
  const variantBorderClasses = {
    primary: "border border-transparent shadow-[0_0_20px_rgba(0,180,253,0.15)] hover:shadow-[0_0_25px_rgba(233,244,249,0.2)]",
    secondary: "border border-[#E9F4F9] hover:border-[#E9F4F9]",
    outline: "border border-[#E9F4F9]/20 hover:border-[#E9F4F9]",
  };

  const combinedClasses = `${baseClasses} ${activeSize} ${variantBorderClasses[variant]} ${className}`;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    if (onClick) {
      onClick();
    } else if (!href || href === "#") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (href) {
    return (
      <Link href={href} className={combinedClasses} onClick={handleClick}>
        {renderBackground()}
        {renderContent()}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} onClick={handleClick}>
      {renderBackground()}
      {renderContent()}
    </button>
  );
}
