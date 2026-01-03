interface PartnerLogoProps {
  name: string;
  bgColor: string;
  logo: React.ReactNode;
}

export default function PartnerLogo({ name, bgColor, logo }: PartnerLogoProps) {
  return (
    <div className={`w-32 h-32 lg:w-40 lg:h-40 ${bgColor} rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform`}>
      <div className="text-white font-bold text-center px-4">
        {logo}
      </div>
    </div>
  );
}
