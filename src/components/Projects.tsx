


import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import project images
import projectNetwork from "/industry.png";
import projectCloud from "/cloud.jpg";
import projectAnalytics from "/Cloud_Performance.png";
import projectAutomation from "/cost.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Project Data
const projects = [
  {
    title: "Network Performance Analytics & Database Optimization Platform",
    description:
      "Built scalable analytics pipelines using Apache Spark, SQL, and Python to process high-volume network latency, throughput, and traffic logs, enabling reliable performance monitoring across large telemetry datasets.",
    achievements: [
      "Query performance improved by 40% after redesigning MySQL schemas, indexing strategies, and execution paths with analytical SQL.",
      "Operational visibility increased by publishing optimized datasets to Tableau and Power BI, enabling faster incident detection and root-cause analysis.",
      "Implemented dimensional modeling with star and snowflake schemas for faster BI queries.",
    ],
    technologies: ["Apache Spark", "MySQL", "Python", "SQL", "Tableau", "Power BI", "PySpark"],
    image: "project-network",
  },
  {
    title: "Cloud Data Platform Migration & Real-Time Streaming Architecture",
    description:
      "Migrated enterprise ETL workflows to an AWS-native data platform using Amazon S3, AWS Glue, EMR, Lambda, and Redshift, improving scalability and standardizing cloud-based data processing.",
    achievements: [
      "Enabled sub-minute analytics by implementing event-driven pipelines with AWS Kinesis and Spark Streaming.",
      "Deployment consistency improved through Terraform-based infrastructure provisioning and CI/CD pipelines.",
      "Centralized 50TB+ of monthly data enabling consistent, enterprise-wide analytics and reporting.",
    ],
    technologies: ["AWS S3", "AWS Glue", "Redshift", "Kinesis", "Spark Streaming", "Terraform", "Lambda"],
    image: "project-cloud",
  },
  {
    title: "Enterprise Customer Analytics & BI Enablement",
    description:
      "Unified CRM, marketing, and transaction data by designing analytics-ready dimensional models with SQL, creating a centralized warehouse optimized for analytical queries.",
    achievements: [
      "Customer insights became more actionable after delivering curated datasets to Tableau, Power BI, and Looker.",
      "Analytics turnaround time decreased after automating KPI refresh workflows using SQL and scheduled pipelines.",
      "Improved analytics adoption by 28% through optimized SQL transformations.",
    ],
    technologies: ["SQL Server", "Tableau", "Power BI", "Python", "Pandas", "NumPy"],
    image: "project-analytics",
  },
  {
    title: "Data Automation & Enterprise Reporting Framework",
    description:
      "Reduced manual reporting effort by developing modular ETL and ELT pipelines with Python, SQL, and Apache Airflow, ensuring reliable and repeatable data transformations.",
    achievements: [
      "Reporting consistency improved through standardized data models and reusable analytical layers.",
      "Operational visibility expanded by implementing scheduled data pipelines that delivered daily, weekly, and monthly insights.",
      "Achieved 99% pipeline success rates through dependency management and retry controls.",
    ],
    technologies: ["Apache Airflow", "Python", "SQL", "ETL", "ELT"],
    image: "project-automation",
  },
];

// Image map
const projectImages: { [key: string]: string } = {
  "project-network": projectNetwork,
  "project-cloud": projectCloud,
  "project-analytics": projectAnalytics,
  "project-automation": projectAutomation,
};

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-10 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-center mb-16">
            Featured <span className="text-gradient-gold">Projects</span>
          </h2>

          <div className="max-w-6xl mx-auto">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="pb-12"
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      delay: index * 0.2,
                      type: "tween",
                      ease: "easeInOut",
                      duration: 0.5,
                    }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 40px rgba(255, 215, 0, 0.4)",
                      transition: {
                        type: "tween",
                        ease: "easeInOut",
                        duration: 0.3,
                      },
                    }}
                    className="relative flex flex-col h-full group"
                  >
                    {/* Backlight glow */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent/20 via-primary/10 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl z-0" />

                    {/* Project Card */}
                    <div className="glass relative z-10 rounded-xl overflow-hidden flex flex-col h-full hover-lift">
                      {/* Project Image */}
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={projectImages[project.image]}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                      </div>

                      {/* Project Content */}
                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-xl font-heading font-bold mb-3">
                          {project.title}
                        </h3>

                        <p className="text-muted-foreground text-sm mb-4 flex-grow">
                          {project.description}
                        </p>

                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-accent mb-2">
                            Key Achievements:
                          </h4>
                          <ul className="space-y-1">
                            {project.achievements.map((achievement, i) => (
                              <li
                                key={i}
                                className="text-xs text-muted-foreground flex items-start gap-2"
                              >
                                <span className="text-accent mt-0.5">▸</span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-auto">
                          {project.technologies.slice(0, 4).map((tech, i) => (
                            <span
                              key={i}
                              className="px-2 py-1 bg-accent/10 text-accent rounded text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 4 && (
                            <span className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs">
                              +{project.technologies.length - 4} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
