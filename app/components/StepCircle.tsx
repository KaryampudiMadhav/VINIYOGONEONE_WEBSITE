import React from "react";
type StepColor = "purple" | "pink" | "red";

interface StepCardProps {
  color: StepColor;
  step: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const colorStyles: Record<
  StepColor,
  {
    border: string;
    bg: string;
  }
> = {
  purple: {
    border: "border-purple-500",
    bg: "bg-purple-600",
  },
  pink: {
    border: "border-pink-500",
    bg: "bg-pink-600",
  },
  red: {
    border: "border-red-500",
    bg: "bg-red-500",
  },
};

/* ----------------------------------
   4️⃣ Component
---------------------------------- */
const StepCard: React.FC<StepCardProps> = ({
  color,
  step,
  title,
  desc,
  icon,
}) => {
  const styles = colorStyles[color];

  return (
    <div className="relative flex flex-col items-center">
      <div
        className={`w-72 h-72 rounded-full border-2 ${styles.border} flex flex-col items-center justify-center relative`}
      >
        {/* Glow ring */}
        <div
          className={`absolute inset-0 rounded-full border-2 ${styles.border} scale-110 opacity-30`}
        />

        {/* Icon */}
        <div
          className={`w-16 h-16 ${styles.bg} rounded-2xl flex items-center justify-center mb-4`}
        >
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
            {icon}
          </svg>
        </div>

        {/* Step badge */}
        <div className={`px-4 py-1 ${styles.bg} rounded-full mb-3`}>
          <span className="text-white text-sm font-semibold">{step}</span>
        </div>

        {/* Text */}
        <h3 className="text-xl font-bold text-white text-center mb-2">
          {title}
        </h3>
        <p className="text-gray-400 text-center text-sm px-8">{desc}</p>
      </div>
    </div>
  );
};

export default StepCard;
