



import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Download, ArrowRight, Zap, Award } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import profileImage from "@/assets/image.png";

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = personalInfo.name;

  // ✨ Typewriter effect
  useEffect(() => {
    let i = 0;
    const typeWriter = () => {
      if (i <= fullText.length) {
        setDisplayedText(fullText.slice(0, i));
        i++;
        setTimeout(typeWriter, 80);
      }
    };
    setTimeout(typeWriter, 500);
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const floatingBadges = [
    {
      icon: <Zap className="h-4 w-4" />,
      text: "Data Engineer",
      position: "top-1/3 -left-6",
      delay: 0.4,
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: <Award className="h-4 w-4" />,
      text: "4+ Years Exp",
      position: "bottom-20 -right-8",
      delay: 0.6,
      color: "from-amber-500 to-orange-600",
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 py-10 overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#121212] to-[#1a1a1a]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* ---------- LEFT SIDE ---------- */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl lg:text-6xl font-bold mb-6"
            >
              <span className="text-gray-200 block mb-2">Hi, I'm</span>
              <span className="gradient-text bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                {displayedText}
              </span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-1 h-10 bg-green-400 ml-2"
              />
            </motion.h2>

            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-2xl lg:text-3xl text-gray-300 mb-6"
            >
              Data Engineer&nbsp;|&nbsp;Data Platform Engineer&nbsp;|&nbsp;Analytics Engineering
            </motion.h3>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-lg text-gray-400 mb-8 leading-relaxed max-w-xl"
            >
              I'm a results-driven Data Engineer skilled in designing, building, and operating
              scalable cloud data platforms, batch and streaming data pipelines, and analytics-ready
              data warehouses across AWS, Azure, and GCP. Experienced with Apache Spark, Kafka, Airflow,
              SQL, Python, and cloud-native ETL/ELT frameworks, I focus on delivering reliable,
              production-grade data systems that enable BI and analytics consumption.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                onClick={scrollToProjects}
                size="lg"
                className="bg-gradient-to-r from-green-400 to-blue-500 px-8 py-3 rounded-lg font-semibold text-white hover:opacity-90 transition-all duration-300"
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="border border-gray-600 text-red-500 px-8 py-3 rounded-lg font-semibold hover:border-green-400 transition-all duration-300"
              >
                <a href={personalInfo.resume} download>
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* ---------- RIGHT SIDE (PROFILE IMAGE + GLOWS) ---------- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="order-1 lg:order-2 flex justify-center relative"
          >
            <div className="relative">
              {/* Neon Border and Glow */}
              <div className="relative w-[320px] h-[480px] rounded-[50%_50%_50%_50%/30%_30%_30%_30%] overflow-hidden neon-border animate-pulse-glow">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Floating color blobs */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-green-400 rounded-full animate-float opacity-20"></div>
              <div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-400 rounded-full animate-float opacity-20"
                style={{ animationDelay: "2s" }}
              ></div>

              {/* Floating Badges */}
              {floatingBadges.map((badge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: [0, -10, 0],
                  }}
                  transition={{
                    delay: 1 + badge.delay,
                    duration: 0.8,
                    y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  }}
                  className={`absolute ${badge.position} bg-gradient-to-r ${badge.color} text-white px-3 py-2 rounded-2xl shadow-2xl border-2 border-white/20 backdrop-blur-sm flex items-center gap-2 text-xs font-semibold`}
                >
                  {badge.icon}
                  {badge.text}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
