import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Briefcase } from "lucide-react";
import { experience } from "@/data/portfolio";

const Experience = () => {
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

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-10 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-center mb-16">
            Professional <span className="text-gradient-gold">Experience</span>
          </h2>

          <div className="max-w-4xl mx-auto relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-primary to-accent md:left-1/2" />

            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 40px rgba(255, 215, 0, 0.4)",
                  transition: { type: "tween", ease: "easeInOut", duration: 0.3 },
                }}
                className={`relative mb-12 md:mb-16 ${
                  index % 2 === 0 ? "md:pr-1/2 md:text-left" : "md:pl-1/2"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 w-5 h-5 bg-accent rounded-full border-4 border-background md:left-1/2 md:-translate-x-1/2 glow-gold" />

                <div className="ml-20 md:ml-0 relative">
                  {/* Backlight glow */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent/20 via-primary/10 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl z-0" />

                  <motion.div
                    className={`glass relative z-10 rounded-xl p-6 hover-lift group ${
                      index % 2 === 0 ? "md:mr-12" : "md:ml-12"
                    }`}
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <Briefcase className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <div className="flex-1">
                        <h3 className="text-xl font-heading font-bold text-foreground mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-accent font-semibold">{exp.company}</p>
                        <p className="text-sm text-muted-foreground">
                          {exp.location} • {exp.period}
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-accent mt-1">▸</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

