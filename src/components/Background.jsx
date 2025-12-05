import { useEffect, useRef } from 'react';

export default function Background() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width, height;

        // Configuration
        const fontSize = 16;
        const symbols = "01{+</>};=?!@#$%&*";
        let columns = 0;
        let drops = []; // Array to store the vertical position (y-coordinate) of each column

        let lastDraw = 0;
        const fps = 20; // Lower FPS to slow down speed (approx 50ms per frame)
        const interval = 1000 / fps;
        let animationFrameId;

        const resize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;

            columns = Math.floor(width / fontSize);
            drops = [];
            for (let i = 0; i < columns; i++) {
                drops[i] = Math.random() * -100; // Start at random positions above the screen
            }
        };

        const draw = (timestamp) => {
            animationFrameId = requestAnimationFrame(draw);

            const elapsed = timestamp - lastDraw;
            if (elapsed < interval) return;

            lastDraw = timestamp - (elapsed % interval);

            // Semi-transparent black to create the trail effect
            // A slightly higher opacity here makes the trails fade faster, keeping the screen cleaner
            ctx.fillStyle = 'rgba(16, 30, 34, 0.12)';
            ctx.fillRect(0, 0, width, height);

            // Text color - drastically reduced opacity for readability
            ctx.fillStyle = 'rgba(37, 192, 244, 0.15)';
            ctx.font = `${fontSize}px "Space Grotesk", monospace`;

            for (let i = 0; i < drops.length; i++) {
                const text = symbols.charAt(Math.floor(Math.random() * symbols.length));

                // Draw symbol
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                // Reset drop to top randomly after it has crossed the screen
                if (drops[i] * fontSize > height && Math.random() > 0.975) {
                    drops[i] = 0;
                }

                // Increment y coordinate
                drops[i]++;
            }
        };

        window.addEventListener('resize', resize);
        resize();
        animationFrameId = requestAnimationFrame(draw);

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-screen h-screen z-0 pointer-events-none bg-background-dark"
        />
    );
}
