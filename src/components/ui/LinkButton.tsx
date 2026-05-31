"use client";

import React from "react";
import Link from "next/link";

interface LinkButtonProps {
  href?: string;
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}

export default function LinkButton({
  href = "#",
  onClick,
  className = "",
  children,
}: LinkButtonProps) {
  const baseClasses =
    "group relative inline-flex items-center justify-end gap-2 font-mono font-normal uppercase tracking-normal text-[14px] leading-[1.3] text-[#00B4FD] hover:text-[#003ACE] transition-colors duration-300 select-none cursor-pointer pb-2";

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      onClick();
    } else if (href === "#") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const content = (
    <>
      <span>{children}</span>
      <svg
        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
      <div className="absolute bottom-0 left-0 h-[1.5px] bg-[#00B4FD] group-hover:bg-[#003ACE] w-8 group-hover:w-full transition-all duration-300 ease-in-out" />
    </>
  );

  if (href.startsWith("#") || href.startsWith("/")) {
    return (
      <Link href={href} className={`${baseClasses} ${className}`} onClick={handleClick}>
        {content}
      </Link>
    );
  }

  return (
    <a href={href} className={`${baseClasses} ${className}`} onClick={handleClick} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  );
}
