import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Award } from "lucide-react";
import { certifications } from "@/data/portfolio";

const Certifications = () => {
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
    <section id="certifications" ref={sectionRef} className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-center mb-16">
            <span className="text-gradient-gold">Certifications</span>
          </h2>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9, rotateY: 180 }}
                animate={isVisible ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative glass rounded-xl p-6 group cursor-pointer 
                           transition-all duration-500 ease-in-out 
                           hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(255,215,0,0.25)]"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Backlight Glow */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 
                                transition-opacity duration-500 ease-in-out pointer-events-none 
                                bg-gradient-to-r from-yellow-400/20 via-amber-500/10 to-yellow-400/20 blur-xl">
                </div>

                {/* Content */}
                <div className="relative flex flex-col h-full z-10">
                  <div className="flex items-start justify-between mb-4">
                    <Award className="h-8 w-8 text-accent group-hover:animate-pulse" />
                    {/* <span className="text-xs text-muted-foreground px-2 py-1 bg-accent/10 rounded">
                      {cert.credential}
                    </span> */}
                  </div>

                  <h3 className="text-lg font-heading font-bold mb-2 flex-grow">
                    {cert.name}
                  </h3>

                  <p className="text-sm text-accent font-medium">
                    {cert.organization}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;

