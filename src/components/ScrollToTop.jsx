import {useState, useEffect} from "react";
import {motion} from "framer-motion";
import {ArrowUpIcon} from "@heroicons/react/24/outline/index.js";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 300); // Affiche le bouton après 300px de scroll
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: "smooth"});
    };

    return (
        <motion.button
            className={`fixed bottom-8 right-8 bg-blue-500 text-white p-3 rounded-full shadow-lg transition-all ${
                isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            onClick={scrollToTop}
            initial={{opacity: 0, y: 50}}
            animate={{opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50}}
        >
            <ArrowUpIcon className="w-6 h-6"/>
        </motion.button>
    );
}

export default ScrollToTop;