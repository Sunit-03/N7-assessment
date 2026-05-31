import CheckIcon from "./CheckIcon";

interface FeatureCardProps {
  title: string;
  description: string;
  points: string[];
}

/** Reusable feature card with title, description, and a checklist — used in MobileAppFeatures. */
export default function FeatureCard({ title, description, points }: FeatureCardProps) {
  return (
    <div className="max-w-sm w-full">
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      <p className="text-gray-500 text-sm mb-6 leading-relaxed">{description}</p>
      <ul className="flex flex-col gap-3">
        {points.map((point, idx) => (
          <li key={idx} className="flex items-start gap-3 text-sm font-medium text-gray-700">
            <CheckIcon variant="blue" />
            <span className="leading-[1.4]">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
