import { siteCopy } from "@/constants/copy";

/** Number of marquee content repetitions for seamless infinite scroll */
const REPEAT_COUNT = 4;

export default function Marquee() {
  return (
    <section className="w-full bg-white py-6 overflow-hidden border-y border-gray-200 relative flex items-center">
      <div className="flex whitespace-nowrap animate-marquee items-center text-black font-semibold text-3xl md:text-4xl tracking-tight">
        {Array.from({ length: REPEAT_COUNT }, (_, i) => (
          <div key={i} className="flex items-center mx-4">
            <span className="text-[#0066FF] mx-4">N7</span>
            <span className="text-gray-300 mx-4">☀️</span>
            <span className="mx-4">{siteCopy.marquee.text}</span>
            <span className="text-gray-300 mx-4">☀️</span>
            <span className="text-[#00B4FD] mx-4">CB7</span>
            <span className="text-gray-300 mx-4">☀️</span>
          </div>
        ))}
      </div>
    </section>
  );
}
