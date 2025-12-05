export default function Footer() {
    return (
        <footer className="relative z-10 py-6 border-t border-primary/20 text-center">
            <p className="text-gray-400 text-sm font-display">
                © {new Date().getFullYear()} MD. Elius. All rights reserved.
            </p>
        </footer>
    );
}
