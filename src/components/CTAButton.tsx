
import { FC } from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/contexts/ThemeContext";

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
  const { isDark } = useTheme();

  const baseStyles = "inline-block px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variantStyles = variant === "primary" 
    ? "btn-primary"
    : "btn-secondary";

  const combinedClassName = cn(baseStyles, variantStyles, className);

  if (href) {
    return (
      <a href={href} className={combinedClassName}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  );
};

export default CTAButton;
