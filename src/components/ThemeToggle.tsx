
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "p-2 rounded-full transition-all duration-300 shadow-md",
        "hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2",
        isDark 
          ? "bg-gray-800 text-yellow-400 hover:bg-gray-700 focus:ring-yellow-400" 
          : "bg-white text-gray-600 hover:bg-gray-50 focus:ring-gray-400"
      )}
      aria-label="Toggle theme"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default ThemeToggle;
