import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "motion/react";
import { FaJs, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiNextdotjs, SiPostman, SiFigma, SiFirebase, SiDaisyui } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
    const containerRef = useRef(null);
    const [activeTab, setActiveTab] = useState("All");

    useEffect(() => {
        // Only run the initial scroll animation once
        const ctx = gsap.context(() => {
            gsap.from(".skill-section-header", {
                y: 30,
                opacity: 0,
                duration: 0.8,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const skills = [
        // Frontend
        { name: "JavaScript", icon: <FaJs />, level: "90%", color: "#F7DF1E", category: "Frontend" },
        { name: "React", icon: <FaReact />, level: "95%", color: "#61DAFB", category: "Frontend" },
        { name: "Next.js", icon: <SiNextdotjs />, level: "85%", color: "#ffffff", category: "Frontend" },
        { name: "HTML5", icon: <FaHtml5 />, level: "95%", color: "#E34F26", category: "Frontend" },
        { name: "CSS3", icon: <FaCss3Alt />, level: "90%", color: "#1572B6", category: "Frontend" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, level: "95%", color: "#06B6D4", category: "Frontend" },
        { name: "daisyUI", icon: <SiDaisyui />, level: "90%", color: "#5A0EF8", category: "Frontend" },

        // Backend
        { name: "Node.js", icon: <FaNodeJs />, level: "80%", color: "#339933", category: "Backend" },
        { name: "Express.js", icon: <SiExpress />, level: "80%", color: "#ffffff", category: "Backend" },
        { name: "Firebase", icon: <SiFirebase />, level: "85%", color: "#FFCA28", category: "Backend" },

        // Database
        { name: "MongoDB", icon: <SiMongodb />, level: "85%", color: "#47A248", category: "Database" },

        // Tools
        { name: "Git", icon: <FaGitAlt />, level: "85%", color: "#F05032", category: "Tools" },
        { name: "GitHub", icon: <FaGithub />, level: "90%", color: "#ffffff", category: "Tools" },
        { name: "VS Code", icon: <VscVscode />, level: "95%", color: "#007ACC", category: "Tools" },
        { name: "Postman", icon: <SiPostman />, level: "80%", color: "#FF6C37", category: "Tools" },
        { name: "Figma", icon: <SiFigma />, level: "75%", color: "#F24E1E", category: "Tools" },
    ];

    const categories = ["All", "Frontend", "Backend", "Database", "Tools"];

    const filteredSkills = activeTab === "All"
        ? skills
        : skills.filter(skill => skill.category === activeTab);

    return (
        <section className="py-10 md:py-20 text-center" id="skills" ref={containerRef}>
            <div className="skill-section-header">
                <h1 className="text-white tracking-tight text-4xl font-black leading-tight mb-4 font-display">My Skills</h1>
                <p className="text-gray-300 max-w-2xl mx-auto mb-8 font-display">The technologies and tools I use to build seamless digital experiences.</p>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-10">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveTab(category)}
                        className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 font-display ${activeTab === category
                            ? "bg-primary text-background-dark scale-105"
                            : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <motion.div
                layout
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 px-4 md:px-0"
            >
                <AnimatePresence mode="popLayout">
                    {filteredSkills.map((skill) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3 }}
                            key={skill.name}
                            className="glass-card rounded-lg p-6 flex flex-col items-center justify-center gap-4 hover:-translate-y-2 transition-transform group cursor-pointer"
                        >
                            <div className="text-5xl transition-colors duration-300" style={{ color: skill.color }}>
                                {skill.icon}
                            </div>
                            <div className="w-full">
                                <div className="flex justify-between mb-1">
                                    <p className="text-white font-bold font-display text-sm md:text-base">{skill.name}</p>
                                    <span className="text-primary text-xs font-bold">{skill.level}</span>
                                </div>
                                <div className="w-full bg-background-dark/50 rounded-full h-2.5 overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: skill.level }}
                                        transition={{ duration: 1, delay: 0.2 }}
                                        className="bg-primary h-2.5 rounded-full"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </section>
    );
}
