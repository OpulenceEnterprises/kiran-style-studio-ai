
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";

const Footer = () => {
  const { isDark } = useTheme();
  const year = new Date().getFullYear();

  return (
    <footer className={cn(
      "w-full py-6 px-4 sm:px-6 lg:px-8 border-t",
      isDark ? "border-gray-800 bg-gray-900" : "border-gray-200 bg-gray-50"
    )}>
      <div className={cn(
        "max-w-6xl mx-auto text-center text-sm space-y-2",
        isDark ? "text-gray-400" : "text-gray-500"
      )}>
        <p>&copy; {year} SuiDhaga. All Rights Reserved.</p>
        <p>
          Built by{' '}
          <a
            href="mailto:imgurujeet@gmail.com"
            className="font-medium text-blue-500 hover:underline"
          >
            Gurujeet
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
