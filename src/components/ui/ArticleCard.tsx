import Image from "next/image";
import Button from "@/components/ui/Button";

interface ArticleCardProps {
  category: string;
  title: string;
  author: string;
  date: string;
  /** "featured" renders a wider card with image; "compact" renders a smaller text-only card */
  variant?: "featured" | "compact";
  ctaLabel: string;
}

/** Reusable article card — replaces duplicate article markup in Insights section. */
export default function ArticleCard({
  category,
  title,
  author,
  date,
  variant = "compact",
  ctaLabel,
}: ArticleCardProps) {
  if (variant === "featured") {
    return (
      <div className="w-full bg-[#01141B] border border-white/5 rounded-[18px] overflow-hidden flex flex-col md:flex-row group hover:border-white/10 transition-all cursor-pointer p-4 md:p-6 gap-6">
        <div className="md:w-[295px] h-[267px] bg-[#07193C] rounded-[8px] relative overflow-hidden flex items-center justify-center shrink-0">
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#00B4FD]/20 to-transparent" />
          <Image
            src="/Frame54logo.svg"
            alt="Grid Pattern"
            fill
            className="p-8 object-contain"
          />
        </div>
        <div className="flex-1 py-4 md:py-2 flex flex-col justify-center">
          <span className="text-[#00B4FD] text-[10px] font-bold tracking-widest uppercase mb-4">
            {category}
          </span>
          <h3 className="text-2xl font-semibold mb-6 group-hover:text-[#00B4FD] transition-colors leading-tight">
            {title}
          </h3>
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-8">
            <span>{author}</span>
            <span>{date}</span>
          </div>
          <div className="mt-4">
            <Button variant="outline" size="sm" className="w-full md:w-[286px]">
              {ctaLabel}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#01141B] border border-white/5 rounded-[18px] overflow-hidden flex flex-col group hover:border-white/10 transition-all cursor-pointer p-6 md:p-8 min-h-[318px]">
      <span className="text-[#00B4FD] text-[10px] font-bold tracking-widest uppercase mb-4">
        {category}
      </span>
      <h3 className="text-xl font-semibold mb-6 group-hover:text-[#00B4FD] transition-colors leading-tight line-clamp-3">
        {title}
      </h3>
      <div className="flex items-center gap-4 text-sm text-gray-500 mb-8 mt-auto">
        <span>{author}</span>
        <span>{date}</span>
      </div>
      <div className="mt-4">
        <Button variant="outline" size="sm" className="w-full md:w-[286px] mx-auto block">
          {ctaLabel}
        </Button>
      </div>
    </div>
  );
}
