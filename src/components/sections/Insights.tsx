import Button from "@/components/ui/Button";
import LinkButton from "@/components/ui/LinkButton";
import ArticleCard from "@/components/ui/ArticleCard";
import { siteCopy } from "@/constants/copy";

export default function Insights() {
    const { title, ctaInsights, ctaReadMore, ctaReadAllInsights, featuredArticle, articles } =
        siteCopy.insights;

    return (
        <section id="insights" className="py-24 px-8 max-w-7xl mx-auto w-full border-t border-white/5 bg-[#000D12] relative overflow-hidden z-0">

            {/* Symmetrical Left Glow */}
            <div
                className="absolute pointer-events-none select-none -z-10 rounded-full mix-blend-screen"
                style={{
                    left: "336.614px",
                    top: "438.614px",
                    width: "556.77px",
                    height: "556.77px",
                    transform: "translate(-50%, -50%)",
                    background: "linear-gradient(135deg, #00B4FD 0%, #003ACE 100%)",
                    opacity: 0.1,
                    filter: "blur(100px)",
                }}
            />

            <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative z-10">

                {/* Left Content */}
                <div className="lg:w-1/3 flex flex-col items-start sticky top-32 h-fit">
                    <h2 className="font-sans font-normal text-[37px] leading-[1.2] tracking-[-0.01em] text-[#E9F4F9] mb-8 w-full max-w-[463.26px]">
                        {title}
                    </h2>
                    <Button variant="secondary" className="w-[190px]">
                        {ctaInsights}
                    </Button>
                </div>

                {/* Right Content — Articles Grid */}
                <div className="lg:w-2/3 flex flex-col gap-6">

                    {/* Featured Article */}
                    <ArticleCard
                        variant="featured"
                        category={featuredArticle.category}
                        title={featuredArticle.title}
                        author={featuredArticle.author}
                        date={featuredArticle.date}
                        ctaLabel={ctaReadMore}
                    />

                    {/* Smaller Articles */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {articles.map((article, i) => (
                            <ArticleCard
                                key={i}
                                variant="compact"
                                category={article.category}
                                title={article.title}
                                author={article.author}
                                date={article.date}
                                ctaLabel={ctaReadMore}
                            />
                        ))}
                    </div>

                    <div className="flex justify-end mt-4">
                        <LinkButton href="#">{ctaReadAllInsights}</LinkButton>
                    </div>
                </div>

            </div>
        </section>
    );
}
