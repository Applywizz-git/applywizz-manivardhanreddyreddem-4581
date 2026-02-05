import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { GraduationCap } from "lucide-react";
import { education } from "@/data/portfolio";

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-center mb-16">
            <span className="text-gradient-gold">Education</span>
          </h2>

          <div className="max-w-4xl mx-auto space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{
                  scale: 1.03,
                  transition: { duration: 0.4, ease: "easeInOut" },
                }}
                className="relative glass rounded-xl p-6 cursor-pointer 
                           transition-all duration-500 ease-in-out"
              >
                {/* Backlight Glow */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 
                                transition-opacity duration-500 ease-in-out pointer-events-none 
                                bg-gradient-to-r from-yellow-400/20 via-amber-500/10 to-yellow-400/20 blur-xl" />

                {/* Content */}
                <div className="relative flex items-start gap-4 z-10">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <GraduationCap className="h-8 w-8 text-accent" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-heading font-bold mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-accent font-semibold mb-1">
                      {edu.university}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {edu.location} • {edu.year}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;

