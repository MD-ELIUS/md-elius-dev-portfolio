import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Github } from "lucide-react";
import homeNestImg from "../assets/homenest.png"
import megaMartImg from "../assets/megamart.png"

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        title: "Real Estate Listing Platform",
        description: "A full-stack real estate platform built with React, Node.js, Express, and MongoDB, where users can explore, post, update, and manage property listings with secure Firebase authentication, ratings, reviews, and a responsive, modern interface.",
        tags: ["React", "Tailwind CSS", "Firebase", "Node.js", "Express", "MongoDB"],
        image: homeNestImg,
        LiveLink: "https://home-nest-5d146.web.app/",
        GithubLink: "https://github.com/MD-ELIUS/home-nest-client",
        reverse: false
    },
    
    {
        title: "Modern Furniture Store",
        description: "A responsive furniture e-commerce website where users can browse products, view details, and add their own furniture after login.",
        tags: ["Next.js", "React", "Tailwind CSS", "Firebase", "Express", "MongoDB"],
        image: megaMartImg,
        LiveLink: "https://mega-mart-client-gilt.vercel.app/",
        GithubLink: "https://github.com/MD-ELIUS/mega-mart-client",
        reverse: true
    }

];

export default function Projects() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray(".project-card");
            cards.forEach((card, i) => {
                gsap.from(card, {
                    opacity: 0,
                    y: 100,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 80%",
                    }
                });
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section className="py-10 md:py-20" id="projects" ref={containerRef}>
            <div className="text-center">
                <h1 className="text-white tracking-tight text-4xl font-black leading-tight mb-4 font-display">Featured Projects</h1>
                <p className="text-gray-300 max-w-2xl mx-auto mb-12 font-display">Here are some of the projects I'm proud of.</p>
            </div>

            <div className="grid grid-cols-1 gap-8">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={`project-card glass-card rounded-xl overflow-hidden flex flex-col ${project.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} group`}
                    >
                        <div
                            className="w-full md:w-1/2 h-64 md:h-auto bg-cover bg-center"
                            style={{ backgroundImage: `url("${project.image}")` }}
                        />
                        <div className="p-8 flex flex-col gap-4 w-full md:w-1/2">
                            <h3 className="text-2xl font-bold text-white font-display">{project.title}</h3>
                            <p className="text-gray-300 text-sm leading-relaxed font-display">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-xs font-semibold bg-primary/20 text-primary py-1 px-3 rounded-full font-display">{tag}</span>
                                ))}
                            </div>
                            <div className="mt-auto flex gap-4 pt-4">
                                 <a href={project.LiveLink} >
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex items-center gap-2 min-w-[84px] cursor-pointer justify-center rounded-lg h-10 px-4 bg-primary text-background-dark text-sm font-bold hover:bg-primary/90 transition-colors font-display"
                                >
                                  <ExternalLink size={18} /> Live Demo  
                                </motion.button>
                                </a> 
                                 <a href={project.GithubLink} >
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex items-center gap-2 min-w-[84px] cursor-pointer justify-center rounded-lg h-10 px-4 bg-primary/20 text-primary text-sm font-bold border border-primary/50 hover:bg-primary/30 transition-colors font-display"
                                >
                                    <Github size={18} /> GitHub
                                </motion.button>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
