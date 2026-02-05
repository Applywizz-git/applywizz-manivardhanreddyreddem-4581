





import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { about, experience, projects, skills } from "@/data/portfolio";
import { Award, Briefcase, Code2, Sparkles } from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // ✨ Stats aligned with Mukesh’s resume
  const stats = [
    {
      icon: Briefcase,
      label: "Years Experience",
      value: "4+",
      color: "from-green-400 to-blue-500",
    },
    {
      icon: Code2,
      label: "Projects Delivered",
      value: projects.length.toString(),
      color: "from-blue-400 to-cyan-500",
    },
    {
      icon: Sparkles,
      label: "Technologies Mastered",
      value: Object.values(skills).flat().length.toString() + "+",
      color: "from-amber-400 to-orange-500",
    },
    {
      icon: Award,
      label: "Certifications",
      value: "7+",
      color: "from-purple-400 to-pink-500",
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-10 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-center mb-12">
            About <span className="text-gradient-gold">Me</span>
          </h2>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* ---------- Left - About Content ---------- */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="glass rounded-2xl p-8 md:p-12 hover-lift h-full">
                <p className="text-lg leading-relaxed text-foreground">
                  {about.summary}
                </p>
              </div>
            </motion.div>

            {/* ---------- Right - Stats Cards ---------- */}
            <div className="grid grid-cols-2 lg:grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 25px rgba(191, 161, 129, 0.6)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={{
                      type: "tween",
                      ease: "easeInOut",
                      duration: 0.3,
                      delay: 0.3 + index * 0.1,
                    }}
                    className="glass rounded-xl p-6 group cursor-pointer relative overflow-hidden"
                  >
                    {/* Backlight glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out blur-2xl" />

                    <div
                      className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${stat.color} mb-4 relative z-10`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-3xl font-heading font-bold text-foreground mb-1 relative z-10">
                      {stat.value}
                    </h3>
                    <p className="text-sm text-muted-foreground relative z-10">
                      {stat.label}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
