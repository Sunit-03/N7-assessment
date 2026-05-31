import Image from "next/image";
import Button from "@/components/ui/Button";
import LinkButton from "@/components/ui/LinkButton";
import { siteCopy } from "@/constants/copy";

export default function Solutions() {
  const { title, ctaRequestDemo, items } = siteCopy.solutions;

  return (
    <section id="solutions" className="w-full py-24 bg-[#070B14] border-t border-white/5 relative z-0 overflow-hidden">

      {/* Background glow */}
      <div
        className="absolute pointer-events-none select-none -z-10 bg-[radial-gradient(circle,rgba(0,180,253,0.16)_0%,rgba(0,58,206,0.05)_50%,transparent_100%)] blur-[95px] rounded-full left-1/2 translate-x-[120px] md:translate-x-[240px] lg:translate-x-[320px]"
        style={{ width: "556.77px", height: "556.77px", bottom: "40px" }}
      />

      <div className="max-w-7xl mx-auto px-8 w-full">
        <div className="flex flex-col lg:flex-row gap-16">

          {/* Left column */}
          <div className="lg:w-1/3 flex flex-col items-start sticky top-32 h-fit">
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight mb-8 whitespace-pre-line">
              {title}
            </h2>
            <Button variant="secondary">{ctaRequestDemo}</Button>
          </div>

          {/* Right column — Grid */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
            {items.map((solution, i) => (
              <div key={i} className="flex flex-col items-start group relative p-6 -m-6 rounded-2xl transition-all duration-300 hover:bg-white/[0.015] hover:border hover:border-white/[0.04] border border-transparent z-0">

                {/* Glow effect */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_center,rgba(0,180,253,0.15)_0%,transparent_70%)] blur-xl transition-opacity duration-500 pointer-events-none -z-10 ${
                    solution.title.includes("Loan Origination")
                      ? "opacity-60 group-hover:opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  }`}
                />

                {/* Icon */}
                <div className="w-[56px] h-[56px] flex items-center justify-start mb-6 text-gray-400 group-hover:text-white transition-colors duration-300 relative">
                  {solution.icon ? (
                    <Image
                      src={solution.icon}
                      alt={solution.title}
                      width={56}
                      height={56}
                      className="object-contain opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                    />
                  ) : (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  )}
                </div>

                <div className="flex items-center gap-3 mb-4 w-full">
                  <h3 className="text-xl font-semibold">{solution.title}</h3>
                  {solution.badge && (
                    <span className="ml-auto px-2 py-0.5 text-[10px] font-semibold tracking-wider text-gray-300 bg-white/10 rounded">
                      {solution.badge}
                    </span>
                  )}
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {solution.description}
                </p>

                <LinkButton href="#" className="mt-auto">
                  LEARN MORE
                </LinkButton>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
