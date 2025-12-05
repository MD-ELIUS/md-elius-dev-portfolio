import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Github, Linkedin, Twitter, Code2, Terminal, Database, Globe, Cpu, Download, Facebook } from "lucide-react";
import profileImg from "../assets/profile.png"

import NeonButton from "./NeonButton";
import { FaWhatsapp } from "react-icons/fa";

export default function Hero() {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const phrases = ["MERN Stack Developer", "Full Stack Developer", "Frontend Developer"];

    useEffect(() => {
        const handleType = () => {
            const i = loopNum % phrases.length;
            const fullText = phrases[i];

            setText(isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 50 : 150);

            if (!isDeleting && text === fullText) {
                setTypingSpeed(2000); // Pause at end
                setIsDeleting(true);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                setTypingSpeed(500); // Pause before start
            }
        };

        const timer = setTimeout(handleType, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum]);

    return (
        <section className="py-10 md:py-20 mt-12 md:mt-5" id="home">
            <div className="@container">
                <div className="flex flex-col-reverse gap-10 @[864px]:flex-row @[864px]:items-center">
                    <div className="flex flex-col gap-6 text-center @[864px]:text-left @[864px]:w-2/3">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col gap-2"
                        >
                            {/* Greeting above the name */}
                            <span className="text-gray-300 text-2xl md:text-3xl font-bold font-display">Assalamualaikum, I am</span>

                            {/* Name */}
                            <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-[-0.033em] font-display">MD. ELIUS</h1>

                            {/* Designation with typewriter effect */}
                            <h2 className="text-primary text-xl md:text-2xl font-bold leading-tight tracking-[-0.033em] font-display min-h-[32px]">
                                {text}<span className="animate-pulse">|</span>
                            </h2>

                            {/* Short Professional Description */}
                            <p className="text-gray-300 text-base md:text-lg font-normal leading-normal mt-2 font-display">
                                I build modern, responsive, and efficient web applications using
                                <span className="text-primary font-medium "> React</span>,
                                <span className="text-primary font-medium"> Node.js</span>,
                                <span className="text-primary font-medium"> Express</span>, and
                                <span className="text-primary font-medium"> MongoDB</span>, delivering clean and scalable solutions for real-world problems.
                            </p>
                        </motion.div>


                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="flex flex-wrap gap-5 justify-center @[864px]:justify-start"
                        >
                            <NeonButton onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
                                View Projects
                            </NeonButton>
                            <NeonButton onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                                Contact Me
                            </NeonButton>

                            <NeonButton href="https://drive.google.com/uc?export=download&id=1G6BOk_zlq-OCyAoq4CZI9rWj3pBCDkVw
" download className="text-primary">
                                <Download size={20} />
                                Resume
                            </NeonButton>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="w-full flex justify-center @[864px]:w-1/3"
                    >
                        <div className="relative w-64 h-64 md:w-80 md:h-80">
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                                className="w-full h-full bg-center bg-no-repeat bg-cover rounded-full border-4 border-primary/30 relative z-10"
                                style={{ backgroundImage: `url(${profileImg})` }}
                            />

                            {/* Floating Icons */}
                            {[
                                { Icon: Code2, className: "-top-18 left-1/2 -translate-x-1/2", delay: 0 },
                                { Icon: Terminal, className: "bottom-35 -right-10 translate-x-1/2", delay: 1 },
                                { Icon: Database, className: "bottom-1/25 -right-5 translate-x-1/2", delay: 2 },
                                { Icon: Globe, className: "bottom-1/25 -left-5 -translate-x-1/2", delay: 1.5 },
                                { Icon: Cpu, className: "bottom-30 -left-10 -translate-y-1/2 -translate-x-1/2", delay: 0.5 },
                            ].map(({ Icon, className, delay }, index) => (
                                <motion.div
                                    key={index}
                                    className={`absolute p-3 rounded-2xl glass-card border border-white/10 ${className}`}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{
                                        opacity: 1,
                                        scale: 1,
                                        y: [0, -10, 0],
                                    }}
                                    transition={{
                                        opacity: { duration: 0.5, delay: 0.5 + delay },
                                        scale: { duration: 0.5, delay: 0.5 + delay },
                                        y: { repeat: Infinity, duration: 3 + delay, ease: "easeInOut" },
                                    }}
                                >
                                    <Icon size={24} className="text-primary" />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Social Links */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mt-16 flex justify-center"
            >
                <div className="gap-4 px-4 flex flex-wrap justify-center">
                    {[

                        { name: 'GitHub', icon: <Github size={24} />, href: "https://github.com/MD-ELIUS" },
                        { name: 'LinkedIn', icon: <Linkedin size={24} />, href: "https://www.linkedin.com/in/mdelius/" },
                        { name: 'WhatsApp', icon: <FaWhatsapp size={24} />, href: "https://wa.me/8801798303106" },
                        { name: 'Facebook', icon: <Facebook size={24} />, href: "http://facebook.com/elius320" }
                    ].map((social) => (
                        <a key={social.name} className="flex flex-col items-center gap-2 py-2.5 text-center w-16 md:w-20 group" href={social.href}>
                            <div className="rounded-full bg-primary/10 p-3.5 border border-transparent group-hover:border-primary/50 group-hover:bg-primary/20 transition-all text-white group-hover:text-primary">
                                {social.icon}
                            </div>
                            <p className="text-white text-sm font-medium leading-normal font-display">{social.name}</p>
                        </a>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
