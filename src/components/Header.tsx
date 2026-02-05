

import { motion, useScroll, useTransform } from "framer-motion";
import { Moon, Sun, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { personalInfo } from "@/data/portfolio";

const Header = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [0.9, 1]);
  const headerBlur = useTransform(scrollY, [0, 100], [10, 20]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  // const navItems = ["About", "Experience", "Projects", "Skills", "Certification", "Education", "Contact"];
  const navItems = [
    "About",
    "Experience",
    "Projects",
    "Skills",
    "certifications",
    "Education",
    "Contact",
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.toLowerCase());
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // Close mobile menu after navigation
  };

  return (
    <motion.header
      style={{ opacity: headerOpacity }}
      className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-white/70 dark:bg-background/70 border-b border-gray-200 dark:border-gray-800"

    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.a
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-heading font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-accent dark:to-emerald-400 bg-clip-text text-transparent"

          >
            {personalInfo.name}
          </motion.a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(item)}
                className="text-sm font-medium text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-accent transition-colors relative group"

              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
              </motion.button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-muted hover:bg-blue-100 dark:hover:bg-accent hover:text-blue-600 dark:hover:text-accent-foreground transition-all"

            >
              {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </motion.button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[320px]">
                <nav className="flex flex-col gap-4 mt-8">
                  {navItems.map((item) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item)}
                      className="text-left text-lg font-medium text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-accent transition-colors py-3 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-muted"

                    >
                      {item}
                    </button>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
