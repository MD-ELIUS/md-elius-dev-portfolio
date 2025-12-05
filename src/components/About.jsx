import { motion } from "motion/react";
import aboutImg from "../assets/about.png"

export default function About() {
    return (
        <section className="py-10 md:py-20" id="about">
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="w-full lg:w-1/2"
                >
                    <img
                        src={aboutImg}
                        alt="About Me"
                        className="w-full h-auto max-w-md mx-auto rounded-xl object-contain"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-4 w-full lg:w-1/2"
                >
                    <h1 className="text-white tracking-tight text-4xl font-black leading-tight font-display">About Me</h1>
                    <p className="text-gray-300 text-[17px] font-normal leading-relaxed font-display">
                        I am a tech enthusiast who loves seeing ideas come to life through technology. I am highly motivated and always eager to learn new skills. Although I started with a Food Science & Technology background, I successfully moved into web development, using my problem-solving skills and creativity to build useful and user-friendly web applications. I enjoy working on full-stack projects and collaborating with others to share ideas and learn.
                        <br /> <br />
                        Outside of coding, I enjoy reading books, spending time in nature, and playing cricket. These hobbies help me relax, stay inspired, and think in new ways when solving problems in my projects.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
