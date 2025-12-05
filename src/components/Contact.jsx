import { useRef, useState } from "react";
import { motion } from "motion/react";
import { Github, Linkedin, Twitter, Send, User, Mail, MessageSquare, Facebook } from "lucide-react";
import NeonButton from "./NeonButton";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null); // 'success' | 'error' | null

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        // ⚠️ IMPORTANT: REPLACE THESE WITH YOUR ACTUAL EMAILJS KEYS
        // Sign up at https://www.emailjs.com/
        // Create a service (e.g., Gmail) and a template
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const AUTOREPLY_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;


        // 1. Send Admin Notification
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then(() => {
                // 2. Send Auto-Reply to User
                // Ensure your Auto-Reply template in EmailJS uses the same variable names (user_name etc.)
                // and sends TO the {{user_email}}
                return emailjs.sendForm(SERVICE_ID, AUTOREPLY_TEMPLATE_ID, form.current, PUBLIC_KEY);
            })
            .then(() => {
                console.log("Admin email & Auto-reply sent!");
                setLoading(false);
                setStatus('success');
                e.target.reset(); // Clear form
                setTimeout(() => setStatus(null), 5000);
            })
            .catch((error) => {
                console.log("FAILED...", error);
                setLoading(false);
                setStatus('error');
            });
    };

    return (
        <section className="py-10 md:py-20" id="contact">
            <div className="text-center">
                <h1 className="text-white tracking-tight text-4xl font-black leading-tight mb-4 font-display">Get In Touch</h1>
                <p className="text-gray-300 max-w-2xl mx-auto mb-12 font-display"> I'm open to discussing projects or collaborations. Reach out anytime.</p>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="max-w-2xl mx-auto glass-card rounded-xl p-8"
            >
                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                    <div>
                        <label className="text-sm font-medium text-white mb-2 flex items-center gap-2 font-display" htmlFor="user_name">
                            <User size={16} className="text-primary" /> Name
                        </label>
                        <input
                            className="bg-background-dark/50 border border-primary/20 text-white text-sm rounded-lg focus:ring-primary focus:border-primary focus:ring-1 focus:outline-none block w-full p-2.5 font-display transition-shadow"
                            name="user_name" id="user_name" placeholder="Your Name" required type="text"
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-white mb-2 flex items-center gap-2 font-display" htmlFor="user_email">
                            <Mail size={16} className="text-primary" /> Email
                        </label>
                        <input
                            className="bg-background-dark/50 border border-primary/20 text-white text-sm rounded-lg focus:ring-primary focus:border-primary focus:ring-1 focus:outline-none block w-full p-2.5 font-display transition-shadow"
                            name="user_email" id="user_email" placeholder="you@example.com" required type="email"
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-white mb-2 flex items-center gap-2 font-display" htmlFor="subject">
                            <MessageSquare size={16} className="text-primary" /> Subject
                        </label>
                        <input
                            className="bg-background-dark/50 border border-primary/20 text-white text-sm rounded-lg focus:ring-primary focus:border-primary focus:ring-1 focus:outline-none block w-full p-2.5 font-display transition-shadow"
                            name="subject" id="subject" placeholder="Project Discussion" required type="text"
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-white mb-2 flex items-center gap-2 font-display" htmlFor="message">
                            <MessageSquare size={16} className="text-primary" /> Message
                        </label>
                        <textarea
                            className="bg-background-dark/50 border border-primary/20 text-white text-sm rounded-lg focus:ring-primary focus:border-primary focus:ring-1 focus:outline-none block w-full p-2.5 font-display transition-shadow"
                            name="message" id="message" placeholder="Your message..." rows="4" required
                        ></textarea>
                    </div>

                    <NeonButton className="w-full flex justify-center items-center gap-2" type="submit" disabled={loading}>
                        {loading ? (
                            <span className="truncate">Sending...</span>
                        ) : (
                            <>
                                <Send size={18} />
                                <span className="truncate">Send Message</span>
                            </>
                        )}
                    </NeonButton>

                    {/* Status Messages */}
                    {status === 'success' && (
                        <motion.p
                            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                            className="text-green-400 text-center font-display mt-4 bg-green-900/20 py-2 rounded-lg border border-green-500/20"
                        >
                            Message sent successfully! I'll get back to you soon.
                        </motion.p>
                    )}
                    {status === 'error' && (
                        <motion.p
                            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                            className="text-red-400 text-center font-display mt-4 bg-red-900/20 py-2 rounded-lg border border-red-500/20"
                        >
                            Oops! Failed to send message. Please try again.
                        </motion.p>
                    )}
                </form>
            </motion.div>

            {/* Social Links */}
            <div className="mt-16 flex justify-center">
                <div className="gap-4 px-4 flex flex-wrap justify-center">
                    {[
                        { name: 'GitHub', icon: <Github size={24} />, href: "https://github.com/MD-ELIUS" },
                        { name: 'LinkedIn', icon: <Linkedin size={24} />, href: "https://www.linkedin.com/in/mdelius/" },
                        { name: 'WhatsApp', icon: <FaWhatsapp size={24} />, href: "https://wa.me/8801798303106" },
                        { name: 'Facebook', icon: <Facebook size={24} />, href: "http://facebook.com/elius320" }
                    ].map((social, index) => (
                        <a key={index} className="flex flex-col items-center gap-2 py-2.5 text-center w-16 md:w-20 group" href={social.href}>
                            <div className="rounded-full bg-primary/10 p-3.5 border border-transparent group-hover:border-primary/50 group-hover:bg-primary/20 transition-all text-white group-hover:text-primary">
                                {social.icon}
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
