interface CheckIconProps {
  /** "blue" = filled blue circle with white check (MobileAppFeatures style)
   *  "cyan" = filled cyan circle with white check (EfficientSystem style) */
  variant?: "blue" | "cyan";
  className?: string;
}

/** Reusable check icon — eliminates duplicate inline SVGs across MobileAppFeatures and EfficientSystem. */
export default function CheckIcon({ variant = "blue", className = "" }: CheckIconProps) {
  if (variant === "cyan") {
    return (
      <div className={`w-5 h-5 rounded-full bg-[#00B4FD] flex items-center justify-center shrink-0 mt-[1.5px] shadow-[0_0_10px_rgba(0,180,253,0.15)] ${className}`}>
        <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3.5} d="M5 13l4 4L19 7" />
        </svg>
      </div>
    );
  }

  return (
    <svg className={`w-5 h-5 text-[#0066FF] shrink-0 mt-[1.5px] ${className}`} viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l5-5z" clipRule="evenodd" />
    </svg>
  );
}
