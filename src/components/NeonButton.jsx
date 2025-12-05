import { motion } from "motion/react";

export default function NeonButton({ children, className = "", ...props }) {
    const Component = props.href ? motion.a : motion.button;

    return (
        <Component
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`relative inline-flex group cursor-pointer ${className}`}
            {...props}
        >
            <div className="relative inline-flex items-center justify-center w-full px-6 py-3 text-base font-bold text-white transition-all duration-200 bg-background-dark font-display rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 border border-white/5 overflow-hidden">
                {/* SVG Snake Border */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    <rect
                        x="1" y="1"
                        width="calc(100% - 2px)"
                        height="calc(100% - 2px)"
                        rx="12"
                        pathLength="100" // Normalize path length for easy dasharray calc
                        className="fill-none stroke-primary stroke-[2px] animate-snake-border"
                        strokeDasharray="30 70" // 30% visible, 70% gap
                        strokeLinecap="round"
                    />
                </svg>

                <span className="relative flex items-center gap-2">
                    {children}
                </span>
            </div>
        </Component>
    );
}
