
import { FC } from "react";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
}

const CTAButton: FC<CTAButtonProps> = ({
  children,
  onClick,
  href,
  variant = "primary",
  className = "",
}) => {
  const base =
    "inline-block px-6 py-3 rounded-xl2 font-semibold font-poppins shadow-cta transition-all duration-200 hover:scale-105 hover:brightness-105 active:scale-95 focus:ring-2 focus:ring-teal-DEFAULT focus:outline-none";
  const colors =
    variant === "primary"
      ? "bg-teal-DEFAULT text-white"
      : "bg-blush-DEFAULT text-gray-800";
  if (href) {
    return (
      <a href={href} className={cn(base, colors, className)}>
        {children}
      </a>
    );
  }
  return (
    <button onClick={onClick} className={cn(base, colors, className)}>
      {children}
    </button>
  );
};

export default CTAButton;
