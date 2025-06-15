
import { FC, ReactNode } from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

const SectionHeader: FC<SectionHeaderProps> = ({ title, subtitle, children }) => (
  <div className="flex flex-col items-center gap-2 mb-8">
    <h2 className="text-3xl md:text-4xl font-marcellus font-bold text-center underline decoration-teal-DEFAULT decoration-2 underline-offset-[10px] mb-1">
      {title}
    </h2>
    {subtitle && (
      <p className="text-base md:text-lg text-gray-600 font-poppins bg-white/80 px-4 py-2 rounded-lg shadow">{subtitle}</p>
    )}
    {children}
  </div>
);

export default SectionHeader;
