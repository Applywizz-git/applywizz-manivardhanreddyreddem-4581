


// import { motion } from "framer-motion";
// import { useEffect, useRef, useState } from "react";
// import { skills } from "@/data/portfolio";
// import { FaCode, FaServer, FaPaintBrush, FaCloud, FaMobileAlt, FaChartBar } from "react-icons/fa";

// const iconMap: Record<string, JSX.Element> = {
//   "Frontend Development": <FaCode className="text-green-400 text-4xl mb-4" />,
//   "Backend Development": <FaServer className="text-blue-400 text-4xl mb-4" />,
//   "UI/UX Design": <FaPaintBrush className="text-purple-400 text-4xl mb-4" />,
//   "Cloud & DevOps": <FaCloud className="text-yellow-400 text-4xl mb-4" />,
//   "Mobile Development": <FaMobileAlt className="text-indigo-400 text-4xl mb-4" />,
//   "Data & Analytics": <FaChartBar className="text-red-400 text-4xl mb-4" />,
// };

// const Skills = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) setIsVisible(true);
//       },
//       { threshold: 0.1 }
//     );

//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section id="skills" ref={sectionRef} className="py-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={isVisible ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl lg:text-5xl font-heading font-extrabold mb-4">
//             My <span className="text-gradient-gold">Skills</span>
//           </h2>
//           <p className="text-xl text-gray-400 max-w-3xl mx-auto">
//             Tools and technologies I've mastered through hands-on projects and internships
//           </p>
//         </motion.div>

//         {/* Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {Object.entries(skills).map(([category, items], index) => (
//             <motion.div
//               key={category}
//               initial={{ opacity: 0, y: 20 }}
//               animate={isVisible ? { opacity: 1, y: 0 } : {}}
//               transition={{ delay: index * 0.15, duration: 0.6 }}
//               className="p-8 rounded-2xl glass hover-glow shadow-lg transition-transform duration-500 hover:scale-[1.03]"
//             >
//               {/* Icon */}
//               <div className="mb-4">{iconMap[category] || <FaCode className="text-accent text-4xl mb-4" />}</div>

//               {/* Category Title */}
//               <h3 className="text-2xl font-bold mb-4">{category}</h3>

//               {/* Optional description */}
//               <p className="text-gray-400 mb-6">
//                 Core expertise and tools I use for {category.toLowerCase()} tasks.
//               </p>

//               {/* Skills List */}
//               <div className="space-y-3">
//                 {items.map((skill: string, i: number) => (
//                   <div key={i}>
//                     <div className="flex justify-between items-center">
//                       <span>{skill}</span>
//                       <span className="text-green-400">
//                         {80 + Math.floor(Math.random() * 15)}%
//                       </span>
//                     </div>
//                     <div className="w-full bg-gray-700 rounded-full h-2">
//                       <div
//                         className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full transition-all duration-700"
//                         style={{
//                           width: `${80 + Math.floor(Math.random() * 15)}%`,
//                         }}
//                       ></div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;














import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaCloud, FaServer, FaCode, FaLock, FaNetworkWired, FaChartBar } from "react-icons/fa";

const iconMap: Record<string, JSX.Element> = {
  "Cloud Platforms": <FaCloud className="text-yellow-400 text-4xl mb-4" />,
  "DevOps & Automation": <FaServer className="text-green-400 text-4xl mb-4" />,
  "Containers & Orchestration": <FaCode className="text-blue-400 text-4xl mb-4" />,
  "Monitoring & Observability": <FaChartBar className="text-red-400 text-4xl mb-4" />,
  "Security & Governance": <FaLock className="text-purple-400 text-4xl mb-4" />,
  "Networking & Databases": <FaNetworkWired className="text-indigo-400 text-4xl mb-4" />,
};

const skills = {
  "Cloud Platforms": [
    "AWS (EC2, S3, RDS, VPC, Lambda, IAM, CloudFormation, CloudWatch)",
    "Azure (VMs, Storage, Monitor, Resource Groups)",
    "GCP (Compute Engine, Cloud Storage, IAM)",
  ],
  "DevOps & Automation": [
    "Terraform",
    "Ansible",
    "Jenkins",
    "GitHub Actions",
    "Bash Scripting",
    "Python (Automation)",
    "CI/CD Pipelines",
  ],
  "Containers & Orchestration": ["Docker", "Kubernetes (EKS)", "Helm Charts"],
  "Monitoring & Observability": ["AWS CloudWatch", "Prometheus", "Grafana", "ELK Stack (Basics)"],
  "Security & Governance": [
    "IAM (Users, Roles, Policies)",
    "AWS Config",
    "CloudTrail",
    "Secrets Manager",
    "Encryption (at Rest/In Transit)",
  ],
  "Networking & Databases": [
    "VPC",
    "Route 53",
    "Load Balancers",
    "Subnets",
    "PostgreSQL",
    "MySQL",
    "ETL Integration",
  ],
};

const Skills = () => {
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
    <section id="skills" ref={sectionRef} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-heading font-extrabold mb-4">
            My <span className="text-gradient-gold">Skills</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Technologies and tools I use to build, automate, and scale reliable cloud infrastructures.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="p-8 rounded-2xl glass hover-glow shadow-lg transition-transform duration-500 hover:scale-[1.03]"
            >
              {/* Icon */}
              <div className="mb-4">
                {iconMap[category] || <FaCode className="text-accent text-4xl mb-4" />}
              </div>

              {/* Category Title */}
              <h3 className="text-2xl font-bold mb-4">{category}</h3>

              {/* Description */}
              <p className="text-gray-400 mb-6">
                Core expertise and tools I use for {category.toLowerCase()} tasks.
              </p>

              {/* Skills List */}
              <div className="space-y-3">
                {items.map((skill: string, i: number) => (
                  <div key={i}>
                    <div className="flex justify-between items-center">
                      <span>{skill}</span>
                      <span className="text-green-400">
                        {85 + Math.floor(Math.random() * 10)}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full transition-all duration-700"
                        style={{
                          width: `${85 + Math.floor(Math.random() * 10)}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
