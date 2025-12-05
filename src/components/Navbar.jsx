import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Active section logic
            const sections = ['home', 'about', 'skills', 'projects', 'contact'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        setIsOpen(false);
        const element = document.getElementById(id);
        if (element) {
            // Small timeout to allow the mobile menu to start closing before scrolling
            setTimeout(() => {
                element.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    };

    const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background-dark/95 backdrop-blur-md border-b border-primary/20 py-3' : 'bg-background-dark/80 backdrop-blur-md py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20 flex items-center justify-between">
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('home')}>
                    <div className="size-8 text-primary">
                        <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 6H42L36 24L42 42H6L12 24L6 6Z" fill="currentColor"></path>
                        </svg>
                    </div>
                    <h2 className="text-white text-xl font-bold font-display tracking-tight">MD. ELIUS</h2>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <button
                            key={item}
                            onClick={() => scrollToSection(item.toLowerCase())}
                            className={`text-sm font-medium transition-all duration-300 relative cursor-pointer bg-transparent border-none font-display ${activeSection === item.toLowerCase() ? 'text-primary' : 'text-gray-300 hover:text-white'
                                }`}
                        >
                            {item}
                            {activeSection === item.toLowerCase() && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                                />
                            )}
                        </button>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background-dark/95 backdrop-blur-xl border-b border-primary/20 overflow-hidden"
                    >
                        <nav className="flex flex-col items-center py-6 gap-6">
                            {navItems.map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item.toLowerCase())}
                                    className={`text-lg font-medium transition-colors cursor-pointer bg-transparent border-none font-display ${activeSection === item.toLowerCase() ? 'text-primary' : 'text-gray-300'
                                        }`}
                                >
                                    {item}
                                </button>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
